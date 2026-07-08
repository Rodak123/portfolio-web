import { createBrowserRouter } from 'react-router';

import { MainPage } from './ui/pages/MainPage';
import { ErrorPage } from './ui/pages/ErrorPage';
import { PortfolioPage } from './ui/pages/PortfolioPage';
import { ROUTE_PATHS } from './config';
import { ProjectsPage } from './ui/pages/ProjectsPage';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME(),
    ErrorBoundary: ErrorPage,
    element: <MainPage />,
  },
  {
    path: ROUTE_PATHS.PORTFOLIO(),
    ErrorBoundary: ErrorPage,
    element: <PortfolioPage />,
  },
  {
    path: ROUTE_PATHS.PROJECTS(),
    ErrorBoundary: ErrorPage,
    element: <ProjectsPage />,
  },
  // {
  //   path: ROUTE_PATHS.PROJECT(),
  //   ErrorBoundary: ErrorPage,
  //   element: <ProjectPage />,
  // },
]);
