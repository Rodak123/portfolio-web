import { makeDate, type Project } from '../../context';

import masonryImage from './poster.png';

export const DeepIgnition: Project = {
  slug: 'deep-ignition',
  date: makeDate(23, 2, 2026),
  name: 'Deep Ignition',
  shortDescription:
    'An automatization factory building game and my year-long high school final project.',
  masonryImage: {
    image: masonryImage,
    width: 224,
    height: 317,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/deep-ignition',
} as const;
