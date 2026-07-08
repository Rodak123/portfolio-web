import { makeDate, type Project } from '../../context';

import masonryImage from './thumbnail.png';

export const BannerAnimation: Project = {
  slug: 'banner-animation',
  date: makeDate(25, 7, 2023),
  name: 'Banner Animation',
  shortDescription: 'Motion Canvas animation for my YT channel.',
  masonryImage: {
    image: masonryImage,
    width: 1920,
    height: 1080,
  },
  offsiteRedirect: 'https://github.com/Rodak123/BannerAnimation',
} as const;
