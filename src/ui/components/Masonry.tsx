import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'; // Swapped useNavigate for Link
import { Typography } from './Typography';
import { cm } from '../../libs/utils/cm';

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number,
): number => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState<number>(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener('change', handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener('change', handler),
      );
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

export interface Item {
  id: string;
  name: string;
  img: string;
  url: string;
  width: number;
  height: number;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
  col: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  blurToFocus?: boolean;
}

export const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  blurToFocus = true,
}) => {
  const columns = useMedia(
    [
      '(min-width:1500px)',
      '(min-width:1000px)',
      '(min-width:600px)',
      '(min-width:400px)',
    ],
    [5, 4, 3, 2],
    1,
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[
        Math.floor(Math.random() * dirs.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);

      const height = (child.height / child.width) * columnWidth;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height, col };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto',
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const totalHeight =
    grid.length > 0 ? Math.max(...grid.map((i) => i.y + i.h)) : 0;

  return (
    <div
      ref={containerRef}
      className='relative w-full h-full overflow-y-auto overflow-x-hidden pe-4'
    >
      {grid.map((item) => {
        const xOrigin =
          item.col === 0 ? '0%' : item.col === columns - 1 ? '100%' : '50%';
        const yOrigin = item.y === 0 ? '0%' : '50%';
        const isExternal = item.url.startsWith('http');

        const content = (
          <div
            className='relative w-full h-full scale-100 group-hover:scale-[1.04] group-focus-within:scale-[1.04] bg-cover bg-no-repeat bg-center bg-bg-50 rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] group-hover:shadow-[0px_20px_60px_-10px_rgba(0,0,0,0.4)] group-focus-within:shadow-[0px_20px_60px_-10px_rgba(0,0,0,0.4)] uppercase text-[10px] leading-[10px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
            style={{
              backgroundImage: `url(${item.img})`,
              transformOrigin: `${xOrigin} ${yOrigin}`,
            }}
          >
            <div
              className={cm(
                'absolute left-0 right-0 bottom-0 h-8 bg-bg-50/80 flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100',
              )}
            >
              <Typography>{item.name}</Typography>
            </div>
          </div>
        );

        const linkClassNames =
          'block w-full h-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-[10px]';

        return (
          <div
            key={item.id}
            data-key={item.id}
            className='absolute box-content pointer-events-auto overflow-visible group z-0 hover:z-20 focus-within:z-20'
            style={{ willChange: 'transform, width, height, opacity' }}
          >
            {isExternal ? (
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                title={item.name}
                aria-label={`Open ${item.name} in a new tab`}
                className={linkClassNames}
              >
                {content}
              </a>
            ) : (
              <Link
                to={item.url}
                title={item.name}
                aria-label={`Navigate to ${item.name}`}
                className={linkClassNames}
              >
                {content}
              </Link>
            )}
          </div>
        );
      })}

      <div
        style={{ height: totalHeight + 32, width: 1, pointerEvents: 'none' }}
      />
    </div>
  );
};
