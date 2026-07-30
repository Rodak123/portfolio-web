import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ROUTE_PATHS } from '../../config';
import { TitleAndLink } from '../components/TitleAndLink';

interface PortfolioSectionProps {
  title: string;
  children?: React.ReactNode;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <Typography size='2xl' className='mt-2'>
        <span className='font-bold text-[18px]'>##</span> {title}
      </Typography>
      {children}
    </>
  );
};

interface PortfolioCardProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={cm(
        'bg-transparent-tint hover:bg-bg-100 p-2 rounded border overflow-y-auto',
        className,
      )}
    >
      <Typography size='3xl'>
        <span className='font-bold'>#</span> {title}
      </Typography>
      {children}
    </div>
  );
};

export const PortfolioPage: React.FC = () => {
  const left = (
    <div className={cm('w-full h-full flex flex-col')}>
      <TitleAndLink
        title={'Radek Titěra'}
        linkName='Home'
        linkUrl={ROUTE_PATHS.HOME()}
      />
      <div className='h-8' />
      <div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto pointer-events-auto'>
        <PortfolioCard title='Skills'>
          <p>These are some of my IT skills</p>
          <PortfolioSection title='Languages'>
            <p>
              <span className='text-[#512bd4]'></span> C#
            </p>
            <p>
              <span className='text-[#3178c6]'></span> TypeScript &&{' '}
              <span className='text-[#f7df1e]'></span> JavaScript
            </p>
            <p>
              <span className='text-[#777bb4]'></span> PHP
            </p>
            <p>
              <span className='text-[#ed8b00]'></span> Java
            </p>
            <p>
              <span className='text-[#3776ab]'></span> Python
            </p>
            <p>
              <span className='text-[#003b57]'></span> SQL
            </p>
          </PortfolioSection>
          <PortfolioSection title='Frameworks & Libraries'>
            <p>
              <span className='text-[#61dafb]'></span> React
            </p>
            <p>
              <span className='text-[#512bd4]'></span> .NET
            </p>
            <p>
              <span className='text-[#ed225d]'></span> p5.js &&{' '}
              <span className='text-[#0251c8]'>󰘔</span> Processing
            </p>
            <p>
              <span className='text-gray-400'></span> Express
            </p>
            <p>
              <span className='text-[#06b6d4]'>󱏿</span> tailwindcss
            </p>
          </PortfolioSection>
          <PortfolioSection title='Software'>
            <p>
              <span className='text-white'></span> Unity
            </p>
            <p>
              <span className='text-[#f05032]'></span> Git &&{' '}
              <span className='text-white'></span> GitHub
            </p>
            <p>
              <span className='text-[#fcc624]'></span> Linux
            </p>
            <p>
              <span className='text-[#e87d0d]'></span> Blender
            </p>
            <p>
              <span className='text-[#0696d7]'></span> Autodesk MAYA
            </p>
            <p>
              <span className='text-[#7d929e]'>󰄺</span> Aseprite
            </p>
            <p>
              <span className='text-[#5c6042]'></span> Gimp
            </p>
            <p>
              <span className='text-[#21759b]'>󰖴</span> Wordpress
            </p>
          </PortfolioSection>
        </PortfolioCard>

        <PortfolioCard title='Education'>
          <PortfolioSection title='SPŠ na Proseku'>
            <p>
              <span className='text-blue-400'></span> 2022 - 2026 (4 years)
            </p>
            <p>
              <span className='text-amber-600'></span> Studying Application and
              game development (18-20-M/01)
            </p>
            <p>
              <span className='text-emerald-500'></span> Graduated with School
              Leaving Exam and a year-long project.
            </p>
          </PortfolioSection>

          <PortfolioSection title='VŠE'>
            <p>
              <span className='text-blue-400'></span> 2026 - now
            </p>
            <p>
              <span className='text-amber-600'></span> Studying Applied
              informatics
            </p>
            <p>
              <span className='text-rose-500'>󰸐</span> I'm currently applying.
            </p>
          </PortfolioSection>
        </PortfolioCard>

        <PortfolioCard title='Certificates'>
          <PortfolioSection title='Epic Games Game Design Professional Certificate'>
            <p>
              I learned game design theory, the importance of testing and
              balancing through iterative development, as well as an in-depth
              introduction to Unreal Engine in level design, blueprint scripting
              and audio development.
            </p>
            <a
              href='https://www.coursera.org/account/accomplishments/specialization/946DAGSZLQHL'
              target='_blank'
              className='text-primary-600'
            >
              Show certificate.
            </a>
          </PortfolioSection>

          <PortfolioSection title='B1 Preliminary (PET) - Grade A (B2 Level)'>
            <p>
              I got this certificate from completing multiple tests targeting
              reading, writing, listening and speaking.
            </p>
            <a
              href='https://www.linkedin.com/in/radek-titera/overlay/Certifications/201920407/treasury/?profileId=ACoAAD36-hEBhGpVVabVVTOm4dkanhGRekwpq0s'
              target='_blank'
              className='text-primary-600'
            >
              Show certificate.
            </a>
          </PortfolioSection>
        </PortfolioCard>

        <PortfolioCard title='Languages'>
          <PortfolioSection title='English'>
            <p>
              <span className='text-cyan-500'></span> B2
            </p>
          </PortfolioSection>
          <PortfolioSection title='Czech'>
            <p>
              <span className='text-cyan-500'></span> Native speaker (C2)
            </p>
          </PortfolioSection>
          <PortfolioSection title='German'>
            <p>
              <span className='text-cyan-500'></span> A1
            </p>
          </PortfolioSection>
        </PortfolioCard>
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} />
    </DefaultLayout>
  );
};
