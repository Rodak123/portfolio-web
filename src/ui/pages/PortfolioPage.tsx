import { Link } from 'react-router';
import { useResponsive } from '../../libs/hooks/useResponsive';
import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ROUTES } from '../../routes';
import { ArrowLeftIcon } from '@phosphor-icons/react';

export const PortfolioPage: React.FC = () => {
  const { isMobile } = useResponsive();

  const left = (
    <div className={cm('w-full flex flex-col  h-full')}>
      <Typography
        variant='h1'
        size={isMobile ? '6xl' : '7xl'}
        className={cm(
          'tracking-widest text-start pointer-events-auto',
          !isMobile && 'whitespace-nowrap',
        )}
      >
        Radek Titěra
      </Typography>
      <Link
        to={ROUTES.HOME}
        className='flex flex-row items-center gap-1 pointer-events-auto'
      >
        <ArrowLeftIcon size={24} />
        <Typography size='2xl'>Back</Typography>
      </Link>
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} />
    </DefaultLayout>
  );
};
