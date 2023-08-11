import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TvInterface {
  id?: string;
  model: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface TvGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  status?: string;
  organization_id?: string;
}
