import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';

export const MainPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-screen">
        <Typography variant='h1' size='7xl' className='text-center tracking-widest'>Radek Titěra</Typography>
      </div >
    </DefaultLayout>
  );
};