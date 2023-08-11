import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { tvValidationSchema } from 'validationSchema/tvs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.tv
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getTvById();
    case 'PUT':
      return updateTvById();
    case 'DELETE':
      return deleteTvById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTvById() {
    const data = await prisma.tv.findFirst(convertQueryToPrismaUtil(req.query, 'tv'));
    return res.status(200).json(data);
  }

  async function updateTvById() {
    await tvValidationSchema.validate(req.body);
    const data = await prisma.tv.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteTvById() {
    const data = await prisma.tv.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
