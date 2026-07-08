import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const BeachCleanup: Project = {
  slug: 'beach-cleanup',
  date: makeDate(26, 11, 2021),
  name: 'Beach Cleanup',
  shortDescription:
    'Game Jam game about collecting trash from a beach #TeamSeas.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/beach-cleanup',
} as const;
