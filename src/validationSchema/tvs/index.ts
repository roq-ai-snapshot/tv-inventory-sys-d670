import * as yup from 'yup';

export const tvValidationSchema = yup.object().shape({
  model: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
