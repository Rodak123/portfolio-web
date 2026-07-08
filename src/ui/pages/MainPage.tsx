import { useResponsive } from '../../libs/hooks/useResponsive';
import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { TextType } from '../components/TextType';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Contacts } from '../components/Contacts';
import type { Contact } from '../../libs/types/contact';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';
import { ROUTE_PATHS } from '../../config';
import { shuffleArray } from '../../libs/utils/shuffleArray';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const contacts: Contact[] = [
    {
      name: 'rodakdev.itch.io',
      icon: 'itchio',
      url: 'https://rodakdev.itch.io/',
    },
    {
      name: 'Rodak123',
      icon: 'github',
      url: 'https://github.com/Rodak123',
    },
    {
      name: '_rodak',
      icon: 'discord',
      url: 'https://discord.com/users/_rodak',
    },
    {
      name: 'radek-titera',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/radek-titera/',
    },
    {
      name: 'Rodak',
      icon: 'steam',
      url: 'https://steamcommunity.com/profiles/76561199135986344',
    },
    {
      name: 'radek@titera.dev',
      icon: 'email',
      url: 'mailto:radek@titera.dev',
    },
  ];

  const subtitles = [
    'Indie game developer;',
    'Full-stack web developer;',
    'Anything IT learner;',
  ];

  const left = (
    <div
      className={cm(
        isMobile ? 'w-full' : 'w-min',
        'flex flex-col justify-between h-full',
      )}
    >
      <div>
        <Typography
          variant='h1'
          size={isMobile ? '6xl' : '7xl'}
          className={cm(
            'tracking-widest text-start pointer-events-auto',
            !isMobile && 'whitespace-nowrap',
          )}
        >
          Radek Titěra
        </Typography>
        <TextType
          text={shuffleArray(subtitles)}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter='▎'
          className='text-2xl'
        />
      </div>
      <div className='pointer-events-auto p-2 rounded bg-transparent-tint hover:bg-bg-100 border'>
        <p>
          Hello! I'm an passionate programmer with a burning desire to make
          games. I also love anything related to software engineering in
          general.
        </p>
        <p>
          I'm most familiar with C# and TypeScript and trying to learn C++.
          Usually, I'm using Unity, React and Node for projects.
        </p>
      </div>
      <div className='flex w-full flex-col gap-4'>
        <Button
          variant='outline'
          size='lg'
          className='grow pointer-events-auto'
          onClick={() => navigate(ROUTE_PATHS.PORTFOLIO())}
        >
          Portfolio
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='grow pointer-events-auto'
          onClick={() => navigate(ROUTE_PATHS.PROJECTS())}
        >
          Projects
        </Button>
        <a href='https://articles.titera.dev'>
          <div className='flex flex-col justify-between items-center border gap-2 p-4 pointer-events-auto whitespace-nowrap rounded-(--radius-border) font-medium ring-offset-bg-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-transparent-tint hover:bg-bg-400 focus:bg-bg-400 text-text-950'>
            <Typography className='break-keep text-center'>Articles</Typography>
          </div>
        </a>
      </div>
      <Contacts contacts={contacts} />
    </div>
  );

  const right = (
    <div style={{ height: '700px', position: 'relative' }}>
      {/* <CardSwap
        width={640}
        height={480}
        cardDistance={80}
        verticalDistance={90}
        delay={5000}
        pauseOnHover={true}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap> */}
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} right={right} />
      <div className='absolute right-2 bottom-2 hidden md:block'>
        <a href='https://github.com/Rodak123/portfolio-web' target='_blank'>
          <Typography>SOURCE</Typography>
        </a>
      </div>
    </DefaultLayout>
  );
};
