import { FC } from 'react';
import { BackgroundAnimation } from '../components/BackgroundAnimation';
import WebFooter from '../components/WebFooter';
import WebHeader from '../components/WebHeader';

export const HomePage: FC = (): JSX.Element => {

  return (
    <div className="home_page">
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className='mx-auto container'>
          <BackgroundAnimation />
        </div>
      </div>
      <WebFooter></WebFooter>
    </div>
  );
};