import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const Modelab: Project = {
  slug: 'modelab',
  date: makeDate(9, 11, 2025),
  name: 'Modelab',
  shortDescription: 'Website for sharing various assets, like 3D models.',
  masonryImage: {
    image: masonryImage,
    width: 1024,
    height: 512,
  },
} as const;
