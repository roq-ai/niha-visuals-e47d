const mapping: Record<string, string> = {
  businesses: 'business',
  designs: 'design',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
