import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const Termitaire: Project = {
  slug: 'termitaire',
  date: makeDate(26, 4, 2024),
  name: 'Termitaire',
  shortDescription:
    'Text-based klondike solitaire that runs in the terminal and is controller entirely using a keyboard.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/termitaire',
} as const;
