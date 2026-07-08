import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const InfiniteRacer: Project = {
  slug: 'infinite-racer',
  date: makeDate(11, 4, 2025),
  name: 'Infinite Racer [DEMO]',
  shortDescription:
    'A proof of concept of an procedurally generated road with different features.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
} as const;
