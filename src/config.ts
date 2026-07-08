export const ROUTE_PATHS = {
  HOME: () => '/' as const,
  PORTFOLIO: () => '/portfolio' as const,
  PROJECTS: () => '/projects' as const,
  PROJECT: (slug?: string) =>
    slug ? `/project/${slug}` : '/project/:projectSlug',
} as const;
