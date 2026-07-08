import { makeDate, type Project } from '../../context';

import masonryImage from './quarkup-banner.png';

export const Quarkup: Project = {
  slug: 'quarkup',
  date: makeDate(2, 6, 2026),
  name: 'Quarkup',
  shortDescription:
    'A simple markdown extension that compiles markdown into tailwind styled html.',
  masonryImage: {
    image: masonryImage,
    width: 768,
    height: 256,
  },
} as const;
