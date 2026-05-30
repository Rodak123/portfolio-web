import { createBrowserRouter } from 'react-router';

import { MainPage } from './ui/pages/MainPage';
import { ErrorPage } from './ui/pages/ErrorPage';
import { PortfolioPage } from './ui/pages/PortfolioPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    ErrorBoundary: ErrorPage,
    element: <MainPage />,
  },
  {
    path: ROUTES.PORTFOLIO,
    ErrorBoundary: ErrorPage,
    element: <PortfolioPage />,
  },
]);
