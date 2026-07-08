import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const SlimeHoops: Project = {
  slug: 'slime-hoops',
  date: makeDate(16, 8, 2023),
  name: 'Slime Hoops',
  shortDescription: 'Game Jam Hi-Score game, where you try to score hoops.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/slime-hoops',
} as const;
