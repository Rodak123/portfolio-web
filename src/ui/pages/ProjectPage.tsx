import { useParams } from 'react-router';
import { ROUTE_PATHS } from '../../config';
import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { DefaultLayout } from './layouts/DefaultLayout';
import { z } from 'zod';
import { PROJECT_MAP } from '../../data/projects';
import { TitleAndLink } from '../components/TitleAndLink';

const ProjectPageParamsSchema = z.object({
  projectSlug: z.string(),
});

export const ProjectPage: React.FC = () => {
  const params = ProjectPageParamsSchema.parse(useParams());
  const project = PROJECT_MAP[params.projectSlug];

  const left = (
    <div className={cm('w-full h-full flex flex-col')}>
      <TitleAndLink
        title={project.name}
        linkName='Projects'
        linkUrl={ROUTE_PATHS.PROJECTS()}
      />
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} />
    </DefaultLayout>
  );
};
