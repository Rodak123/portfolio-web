import { useResponsive } from '../../libs/hooks/useResponsive';
import { cm } from '../../libs/utils/cm';
import { Hero } from '../components/Hero';
import { TextType } from '../components/TextType';
import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CardSwap, Card } from './../components/CardSwap';
import { Contacts } from '../components/Contacts';
import type { Contact } from '../../libs/types/contact';

export const MainPage: React.FC = () => {
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
    <div className={cm(isMobile ? 'w-full' : 'w-min')}>
      <Typography
        variant='h1'
        size={isMobile ? '6xl' : '7xl'}
        className={cm(
          'tracking-widest text-start',
          !isMobile && 'whitespace-nowrap',
        )}
      >
        Radek Titěra
      </Typography>
      <TextType
        text={subtitles}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter='▎'
        className='text-2xl'
      />
      <div className='h-16' />
      <Contacts contacts={contacts} />
    </div>
  );

  const right = (
    <div style={{ height: '600px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );

  return (
    <DefaultLayout>
      <Hero left={left} right={right} />
    </DefaultLayout>
  );
};
