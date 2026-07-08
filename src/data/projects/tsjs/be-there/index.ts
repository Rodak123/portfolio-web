import { makeDate, type Project } from '../../context';

import masonryImage from './screenshot.png';

export const BeThere: Project = {
  slug: 'be-there',
  date: makeDate(8, 2, 2026),
  name: 'Be There',
  shortDescription: 'An account-less event/invite managing website.',
  masonryImage: {
    image: masonryImage,
    width: 399,
    height: 357,
  },
} as const;
