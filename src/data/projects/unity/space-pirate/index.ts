import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const SpacePirate: Project = {
  slug: 'space-pirate',
  date: makeDate(12, 4, 2023),
  name: 'Space Pirate',
  shortDescription: 'Short Game Jam clicker game.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/space-pirate',
} as const;
