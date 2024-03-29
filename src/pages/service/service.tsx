import WebFooter from "../../components/WebFooter"
import WebHeader from "../../components/WebHeader"
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { oneStop, serviceBannerContent, serviceGrids,developTextArr,designTextArr,deployTextArr } from "./data"
import vincentPng from "/vincent.png"

const Box = ({ children, style, className }: { children: ReactNode, style?: CSSProperties, className?: string }) => {
  return (
    <div
      className={className}
      style={{
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
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="service_page">
      <div className="service_content mx-auto container overflow-hidden">
        <WebHeader className="bg-black bg-opacity-70"></WebHeader>
        <div className='pt-[90px] mb-20 md:pt-0'>
          <div className="pb-[270px] md:pb-0 md:py-[250px] md:px-[100px] md:flex md:justify-between md:items-center">
            <div className="px-5 md:px-0 flex md:gap-x-12 items-center">
              <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce className="flex-1"
              >
                <Box
                  style={{
                    padding: '50px 15px',
                    background: 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  <div className="text-2xl text-white">{serviceBannerContent.title}</div>
                  <div style={{ borderRadius: 30 }} className="overflow-hidden  block mt-5 md:hidden">
                    <img src={vincentPng} alt="service_banner" className="w-full" />
                  </div>
                  <div className="text-2xl md:text-4xl mt-5 font-bold text-white">{serviceBannerContent.subTitle}</div>
                  <div className="text-[18px] leading-6 mt-5 text-white">{serviceBannerContent.text}</div>
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__slideInRight" animateOnce className="w-0 md:flex-1"
              >
                <div style={{ borderRadius: 30 }} className="overflow-hidden">
                  <img src={vincentPng} alt="service_banner" className="w-full hidden md:block" />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="md:py-[250px] xl:px-[150px] 2xl:px-[200px]">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
              <h3 className="text-white text-[36px] font-bold md:font-normal  md:text-[64px] text-center mb-5 md:mb-12">Our Services</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
              <div className="px-3 md:px-0 grid grid-cols-2 xl:grid-cols-3 gap-x-[10px] xl:gap-x-10 2xl:gap-x-28 gap-y-5 md:gap-y-12">
                {
                  serviceGrids.map((item, index) => {
                    return <div className="flex flex-col justify-center py-5 md:py-28 text-fff px-5 border border-[#19EFFD] bg-black bg-opacity-50 border-[5px] hover:bg-fff hover:border-fff hover:text-black hover:bg-fff hover:bg-opacity-100 rounded-[25px] transition-colors" key={index}>
                      <div className="font-bold text-xl md:text-4xl mb-5">{item.title}</div>
                      <div className="text-xl md:text-2xl">{item.text}</div>
                    </div>
                  })
                }
              </div>
            </AnimationOnScroll>
          </div>
          <div className="pt-[100px] md:pt-0 md:py-[250px] md:px-[200px]">
            <div className="flex flex-col md:flex-row md:gap-x-12 md:items-center">
              <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce
                className="px-5 md:px-0 md:w-[58%]"
              >
                <Box
                  className={"px-3 md:px-5 py-8 md:py-12 bg-black bg-opacity-50"}
                >
                  <div className="design"
                  >
                    {
                      Array.from({ length: 9 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 9 === index ? 1 : 0,
                        }} key={index} className="w-full h-full absolute left-0 top-0 block text-fff font-semibold text-[48px] md:text-[96px]">
                          {designTextArr[index]}
                        </span>
                      })
                    }
                  </div>
                  <div className="develop ml-0 2xl:ml-[16%] mt-10 md:mt-0">
                    {
                      Array.from({ length: 9 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 9 === index ? 1 : 0,
                        }} key={index} className="w-full h-full absolute left-0 top-0 block text-fff font-semibold text-[48px] md:text-[96px]">
                          {developTextArr[index]}
                        </span>
                      })
                    }
                  </div>
                  <div className="deploy ml-0 lg:ml-[5%] 2xl:ml-[33%] mt-10 md:mt-0">
                    {
                      Array.from({ length: 9 }).map((_, index) => {
                        return <span style={{
                          opacity: count % 9 === index ? 1 : 0,
                        }} key={index} className="w-full h-full absolute left-0 top-0 block text-fff font-semibold text-[48px] md:text-[96px]">
                          {deployTextArr[index]}
                        </span>
                      })
                    }
                  </div>
                </Box>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__slideInRight" animateOnce className="px-5 mt-5 md:mt-0 md:px-0 flex-1"
              >
                <Box
                  style={{
                    padding: '50px 20px',
                    background: 'rgba(0, 0, 0, 0.7)',
                  }}
                >
                  <div className="text-4xl text-white font-bold">{oneStop.title}</div>
                  <div className="text-[18px] leading-6 mt-5 text-white">{oneStop.text}</div>
                </Box>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <WebFooter className="bg-black bg-opacity-70"
        />
      </div>
    </div>
  )
}

export default Service