import { makeDate, type Project } from '../../context';

import masonryImage from './screenshot.png';

export const Canvas: Project = {
  slug: 'canvas',
  date: makeDate(13, 6, 2026),
  name: 'Canvas',
  shortDescription: 'A r/place inspired website.',
  masonryImage: {
    image: masonryImage,
    width: 408,
    height: 399,
  },
} as const;
