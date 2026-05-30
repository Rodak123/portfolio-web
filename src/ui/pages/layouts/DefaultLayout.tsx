import { useTheme } from '../../../libs/hooks/useTheme';
import { ShapeGrid } from '../../components/ShapeGrid';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 -z-50">
        <ShapeGrid
          shape='hexagon'
          squareSize={32}
          speed={0.2}
          direction='diagonal'
          borderColor={theme === 'dark' ? '#304224' : '#c9ddbb'}
          hoverFillColor={theme === 'dark' ? '#486336' : '#adcc99'}
        />
      </div>
      {children}
    </>
  );
};