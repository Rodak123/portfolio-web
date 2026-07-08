import { makeDate, type Project } from '../../context';

import masonryImage from './logo.png';

export const WordleArena: Project = {
  slug: 'wordle-arena',
  date: makeDate(13, 6, 2026),
  name: 'Wordle Arena',
  shortDescription:
    'Simple framework for creating bots that try to solve Wordle each day.',
  masonryImage: {
    image: masonryImage,
    width: 512,
    height: 512,
  },
  offsiteRedirect: 'https://github.com/Rodak123/wordle-arena',
} as const;
