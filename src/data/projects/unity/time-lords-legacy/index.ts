import { makeDate, type Project } from '../../context';

import masonryImage from './cover.png';

export const TimeLordsLegacy: Project = {
  slug: 'time-lords-legacy',
  date: makeDate(9, 11, 2025),
  name: 'Time Lords Legacy',
  shortDescription: 'A quick clicker incremental game full of clock ticks.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 250,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/time-lords-legacy',
} as const;
