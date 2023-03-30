import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import WebFooter from '../../components/WebFooter';
import WebHeader from '../../components/WebHeader';
import { Slide, SlideshowRef } from 'react-slideshow-image';
import contactLogo from "/contact_logo.png"
import { slide1Data, slide2Data } from './data';
import { isMobile } from '../../utils/help';
import Loading from '../../components/Loading';

const MobileAnimation = lazy(() => import('./components/mobileIndex'))
const BackgroundAnimation = lazy(() => import('./components'))

export const HomePage = (): JSX.Element => {
  const [showIndex, setShowIndex] = useState(0)
  const [iconAnimationEnd, setIconAnimationEnd] = useState(false)
  const slideRef = useRef<SlideshowRef>(null)
  const [height, setHeight] = useState<string | number>('auto')

  useEffect(() => {
    const height1 = document.getElementById('box1')?.clientHeight
    const height2 = document.getElementById('box2')?.clientHeight
    const _height = Math.max(height1 || 0, height2 || 0)
    setHeight(_height ? _height + 20 : 'auto')
  }, [showIndex])

  return (
    <div className="home_page select-none"
      style={{
        minWidth: isMobile ? '100vw' : '1200px',
      }}
    >
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className='mx-auto container overflow-hidden'>
          {
            !isMobile
              ? <Suspense fallback={<Loading />}>
                <BackgroundAnimation iconAnimationEnd={iconAnimationEnd} setIconAnimationEnd={setIconAnimationEnd}>
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
                      <div className='flex h-full items-center px-[100px] height-transtion' onClick={() => {
                        if (!iconAnimationEnd) {
                          return
                        }
                        slideRef.current?.goTo(0)
                      }}>
                        <div className='text-fff'>
                          <h2 className='font-bold text-4xl'>{slide2Data.title}</h2>
                          <p className='mt-3 text-[28px] leading-8'>{slide2Data.text}</p>
                          <p className='mt-2 text-[28px] leading-8'>{slide2Data.text2}</p>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </BackgroundAnimation>
              </Suspense>
              : <div className='flex justify-center items-center'
                style={{
                  minHeight: '100vh',
                }}
              >
                <Suspense fallback={<Loading />}>
                  <MobileAnimation iconAnimationEnd={iconAnimationEnd} setIconAnimationEnd={setIconAnimationEnd}>
                    <div className='h-full flex items-center flex-col'>
                      <img src={contactLogo} alt="" width={"50%"} className='mt-20' />
                      <div className='px-[30px] w-full mt-5 text-white select-none'>
                        <div className={`bg-black bg-opacity-80 rounded-[15px] p-[10px]`}
                          onClick={() => {
                            if (!iconAnimationEnd) {
                              return
                            }
                            setShowIndex((prev) => prev ? 0 : 1)
                          }}
                          style={{
                            height: height,
                            transition: 'height 0.2s'
                          }}
                        >
                          {
                            showIndex === 0
                              ? <div id='box1'>
                                {slide1Data.text}
                              </div>
                              : <div id="box2">
                                <h2 className='font-bold text-base text-center'>Our Vision</h2>
                                <div>
                                  {slide2Data.text}
                                </div>
                                <div className='mt-[10px]'>
                                  {slide2Data.text2}
                                </div>
                              </div>
                          }
                        </div>
                      </div>
                    </div>
                  </MobileAnimation>
                </Suspense>
              </div>
          }
        </div>
      </div>
      <WebFooter></WebFooter>
    </div>
  );
};