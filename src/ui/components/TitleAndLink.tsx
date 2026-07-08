import { ArrowLeftIcon } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { cm } from '../../libs/utils/cm';
import { Typography } from './Typography';
import { useResponsive } from '../../libs/hooks/useResponsive';

interface TitleAndLinkProps {
  title: string;
  linkName: string;
  linkUrl: string;
}

export const TitleAndLink: React.FC<TitleAndLinkProps> = ({
  title,
  linkName,
  linkUrl,
}) => {
  const { isMobile } = useResponsive();

  return (
    <>
      <Typography
        variant='h1'
        size={isMobile ? '6xl' : '7xl'}
        className={cm(
          'tracking-widest text-start pointer-events-auto mb-2',
          !isMobile && 'whitespace-nowrap',
        )}
      >
        {title}
      </Typography>
      <Link
        to={linkUrl}
        className='flex flex-row items-center gap-1 pointer-events-auto w-fit'
      >
        <ArrowLeftIcon size={24} />
        <Typography size='2xl'>{linkName}</Typography>
      </Link>
    </>
  );
};
