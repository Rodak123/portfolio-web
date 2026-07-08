import { makeDate, type Project } from '../../context';

import masonryImage from './logo.png';

export const P5WebpackKit: Project = {
  slug: 'p5-webpack-kit',
  date: makeDate(28, 12, 2024),
  name: 'p5 Webpack Kit',
  shortDescription:
    'Library for easily using p5.js with webpack in an OOP way with useful utilities.',
  masonryImage: {
    image: masonryImage,
    width: 427,
    height: 92,
  },
} as const;
