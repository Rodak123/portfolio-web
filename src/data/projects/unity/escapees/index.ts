import { makeDate, type Project } from '../../context';

import masonryImage from './cover_gif.gif';

export const Escapees: Project = {
  slug: 'escapees',
  date: makeDate(17, 8, 2026),
  name: 'Escapees',
  shortDescription: 'Help Escapees in this is Lemmings inspired puzzle game.',
  masonryImage: {
    image: masonryImage,
    width: 315,
    height: 315,
  },
  offsiteRedirect: 'https://rodakdev.itch.io/escapees',
} as const;
