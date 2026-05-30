import { useResponsive } from '../../libs/hooks/useResponsive';
import { useTheme } from '../../libs/hooks/useTheme';
import { cm } from '../../libs/utils/cm';
import { ShapeGrid } from './ShapeGrid';

interface HeroProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ left, right }) => {
  const { theme } = useTheme();
  const { isMobile, isDesktop } = useResponsive();

  return (
    <div className='h-screen relative overflow-y-clip'>
      <ShapeGrid
        shape='hexagon'
        squareSize={32}
        speed={0}
        borderColor={theme === 'dark' ? '#304224' : '#c9ddbb'}
        hoverFillColor={
          isMobile ? '#00000000' : theme === 'dark' ? '#486336' : '#adcc99'
        }
        gradientColor={theme === 'dark' ? '#486336' : '#adcc99'}
        hoverTrailAmount={16}
      />
      {left && (
        <div
          className={cm(
            'absolute flex flex-col',
            !isMobile && 'left-12 top-1/4',
            isMobile && 'px-4 top-12',
          )}
        >
          {left}
        </div>
      )}
      {isDesktop && right && (
        <div className='absolute top-[5%] right-32'>{right}</div>
      )}
    </div>
  );
};
