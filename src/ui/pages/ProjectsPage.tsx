import { ROUTE_PATHS } from '../../config';
import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Masonry, type Item } from '../components/Masonry';
import { ORDERED_PROJECTS } from '../../data/projects';
import { TitleAndLink } from '../components/TitleAndLink';

export const ProjectsPage: React.FC = () => {
  const items: Item[] = ORDERED_PROJECTS.map((project, index) => {
    return {
      id: `${project.slug}-${index}`,
      width: project.masonryImage.width,
      height: project.masonryImage.height,
      img: project.masonryImage.image,
      url: ROUTE_PATHS.PROJECT(project.slug),
    };
  });

  const left = (
    <div className={cm('w-full h-full flex flex-col')}>
      <TitleAndLink
        title={'My Projects'}
        linkName='Home'
        linkUrl={ROUTE_PATHS.HOME()}
      />
      <Masonry items={items} stagger={0.1} />
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} />
    </DefaultLayout>
  );
};
