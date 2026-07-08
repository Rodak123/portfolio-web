import { makeDate, type Project } from '../../context';

import masonryImage from './screenshot.png';

export const TankTrouble: Project = {
  slug: 'tank-trouble',
  date: makeDate(29, 3, 2026),
  name: 'Tank Trouble',
  shortDescription:
    'A 2D local multiplayer procedurally generated tank trouble like game with tank damage.',
  masonryImage: {
    image: masonryImage,
    width: 347,
    height: 194,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/tank-trouble',
} as const;
