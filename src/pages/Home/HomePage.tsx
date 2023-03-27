import { FC, useRef, useState } from 'react';
import { BackgroundAnimation } from '../../components/BackgroundAnimation';
import WebFooter from '../../components/WebFooter';
import WebHeader from '../../components/WebHeader';
import { Slide, SlideshowRef } from 'react-slideshow-image';
import contactLogo from "/contact_logo.png"
import { slide1Data } from './data';
import { isMobile } from '../../utils/help';


export const HomePage: FC = (): JSX.Element => {
  const [iconAnimationEnd, setIconAnimationEnd] = useState(false)
  const slideRef = useRef<SlideshowRef>(null)
  return (
    <div className="home_page"
      style={{
        minWidth: isMobile ? '100vw' : '1200px',
      }}
    >
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className='mx-auto container overflow-hidden'>
          {
            !isMobile
              ? <BackgroundAnimation iconAnimationEnd={iconAnimationEnd} setIconAnimationEnd={setIconAnimationEnd}>
                <div className="bg-black bg-opacity-40 text-fff h-full slide_container" style={{
                  fontFamily: 'Inter'
                }}>
                  <Slide transitionDuration={400} indicators={false} ref={slideRef} cssClass="h-full" prevArrow={<></>} nextArrow={<></>} autoplay={false} canSwipe={false}>
                    <div className='flex h-full items-center px-4' onClick={() => {
                      if (!iconAnimationEnd) {
                        return
                      }
                      slideRef.current?.goTo(1)
                    }}>
                      <img src={contactLogo} alt="" width={"23%"} />
                      <div className='text-fff ml-3'>
                        <h2 className='font-bold text-4xl'>{slide1Data.title}</h2>
                        <p className='mt-3 text-[28px] leading-8'>{slide1Data.text}</p>
                      </div>
                    </div>
                    <div className='flex h-full items-center px-[100px]' onClick={() => {
                      if (!iconAnimationEnd) {
                        return
                      }
                      slideRef.current?.goTo(0)
                    }}>
                      <div className='text-fff'>
                        <h2 className='font-bold text-4xl'>{slide1Data.title}</h2>
                        <p className='mt-3 text-[28px] leading-8'>{slide1Data.text}</p>
                      </div>
                    </div>
                  </Slide>
                </div>
              </BackgroundAnimation>
              : <div className='h-screen flex justify-center items-center'>
                1213
              </div>
          }
        </div>
      </div>
      <WebFooter></WebFooter>
    </div>
  );
};