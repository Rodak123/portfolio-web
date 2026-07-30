import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const TimeLord: Project = {
  slug: 'time-lord',
  date: makeDate(9, 11, 2025),
  name: 'Time Lord Incremental',
  shortDescription: 'An incremental game.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/time-lord-incremental',
} as const;
