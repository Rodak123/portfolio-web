import { makeDate, type Project } from '../../context';

import masonryImage from './snippet.png';

export const ExRouter: Project = {
  slug: 'exrouter',
  date: makeDate(30, 3, 2026),
  name: 'ExRouter',
  shortDescription: 'A plug-and-play raw PHP router inspired by express.js.',
  masonryImage: {
    image: masonryImage,
    width: 519,
    height: 153,
  },
  offsiteRedirect: 'https://github.com/Rodak123/ExRouter',
} as const;
