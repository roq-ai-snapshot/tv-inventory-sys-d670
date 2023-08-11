const mapping: Record<string, string> = {
  organizations: 'organization',
  tvs: 'tv',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
