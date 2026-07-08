import { makeDate, type Project } from '../../context';

import masonryImage from './previews.png';

export const SnapColor: Project = {
  slug: 'snap-color',
  date: makeDate(29, 3, 2026),
  name: 'Snap Color',
  shortDescription:
    'An android coloring game that uses your images as colorings.',
  masonryImage: {
    image: masonryImage,
    width: 1984,
    height: 1024,
  },
} as const;
