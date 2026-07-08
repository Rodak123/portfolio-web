import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const JustHexagons: Project = {
  slug: 'just-hexagons',
  date: makeDate(9, 11, 2025),
  name: 'Just Hexagons',
  shortDescription:
    'A bundle full of useful scripts for working with hexagons in every way.',
  masonryImage: {
    image: masonryImage,
    width: 956,
    height: 637,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/just-hexagons',
} as const;
