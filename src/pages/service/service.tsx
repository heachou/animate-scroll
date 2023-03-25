import WebFooter from "../../components/WebFooter"
import WebHeader from "../../components/WebHeader"
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { oneStop, serviceBannerContent, serviceGrids } from "./data"
import vincentPng from "../../assets/vincent.png"



const Box = ({ children, style }: { children: ReactNode, style?: CSSProperties }) => {
  return (
    <div style={{
      border: "5px solid #00FFFF",
      borderRadius: 25,
      ...style
    }}
    >
      {children}
    </div>
  );
};


const Service = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="service_page">
      <div className="service_content mx-auto container overflow-hidden">
        <WebHeader className="bg-black bg-opacity-60"></WebHeader>
        <div className=''>
          <div className="md:py-[250px] md:px-[100px] md:flex md:justify-between md:items-center">
            <div className="flex gap-x-12 items-center">
              <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce className="flex-1"
              >
                <Box
                  style={{
                    padding: '50px 20px',
                    background: 'rgba(0, 0, 0, 0.75)'
                  }}
                >
                  <div className="text-2xl text-white">{serviceBannerContent.title}</div>
                  <div className="text-4xl mt-5 font-bold text-white">{serviceBannerContent.subTitle}</div>
                  <div className="text-[18px] leading-6 mt-5 text-white">{serviceBannerContent.text}</div>
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__slideInRight" animateOnce className="flex-1"
              >
                <div style={{ borderRadius: 30 }} className="overflow-hidden">
                  <img src={vincentPng} alt="service_banner" className="w-full" />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="md:py-[250px] md:px-[200px]">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
              <h3 className="text-white md:text-[64px] text-center mb-12">Our Services</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
              <div className="md:grid md:grid-cols-3 gap-x-28  gap-y-12">
                {
                  serviceGrids.map((item, index) => {
                    return <div className="flex flex-col justify-center py-28 text-fff px-5 border border-[#19EFFD] bg-black bg-opacity-60 border-[5px] hover:bg-fff hover:border-fff hover:text-black hover:bg-fff hover:bg-opacity-100 rounded-[25px] transition-colors" key={index}>
                      <div className="font-bold text-4xl mb-5">{item.title}</div>
                      <div className="text-2xl">{item.text}</div>
                    </div>
                  })
                }
              </div>
            </AnimationOnScroll>
          </div>
          <div className="md:py-[250px] md:px-[200px]">
            <div className="flex gap-x-12 items-center">
              <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce className="w-[58%]"
              >
                <Box
                  style={{
                    padding: '50px 20px',
                    background: 'rgba(0, 0, 0, 0.75)'
                  }}
                >
                  <div className="design">
                    {
                      Array.from({ length: 8 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 8 === index ? 1 : 0,
                          backgroundPosition: `0 -${index * 166 + 185}px`,
                        }} key={index} className="w-full h-full absolute left-0 top-0"></span>
                      })
                    }
                  </div>
                  <div className="develop">
                  {
                      Array.from({ length: 8 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 8 === index ? 1 : 0,
                          backgroundPosition: `0 -${index * 166 + 185}px`,
                        }} key={index} className="w-full h-full absolute left-0 top-0"></span>
                      })
                    }
                  </div>
                  <div className="deploy">
                  {
                      Array.from({ length: 8 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 8 === index ? 1 : 0,
                          backgroundPosition: `0 -${index * 166 + 185}px`,
                        }} key={index} className="w-full h-full absolute left-0 top-0"></span>
                      })
                    }
                  </div>
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__slideInRight" animateOnce className="flex-1"
              >
                <Box
                  style={{
                    padding: '50px 20px',
                    background: 'rgba(0, 0, 0, 0.75)'
                  }}
                >
                  <div className="text-4xl text-white font-bold">{oneStop.title}</div>
                  <div className="text-[18px] leading-6 mt-5 text-white">{oneStop.text}</div>
                </Box>
              </AnimationOnScroll>

            </div>
          </div>
        </div>
        <WebFooter className="bg-black bg-opacity-60"
        />
      </div>
    </div>
  )
}

export default Service