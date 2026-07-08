import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const ChronoLabEscape: Project = {
  slug: 'chrono-lab-escape',
  date: makeDate(2, 7, 2023),
  name: 'ChronoLab: Escape',
  shortDescription: 'Game Jam 2D puzzle escape game with time travel.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/chronolabescape',
} as const;
