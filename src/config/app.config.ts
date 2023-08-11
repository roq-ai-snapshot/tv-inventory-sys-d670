interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Inventory Manager', 'Sales Associate', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'TV inventory system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
