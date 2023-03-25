import WebFooter from "../../components/WebFooter"
import WebHeader from "../../components/WebHeader"
import { CSSProperties, ReactNode } from "react";
import { aboutBannerContent, Block4Content, gridData, lookingContent, provideData } from "./data";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Block = ({ title, text, style }: { title: string, text: ReactNode, style?: CSSProperties }) => {
  return (
    <div className="py-[50px] px-5 rounded-3xl text-fff bg-black bg-opacity-75"
      style={style}
    >
      <div className="text-xl md:text-[26px] md:leading-8 font-bold mb-5">{title}</div>
      <div className="text-xl md:text-2xl ">{text}</div>
    </div>
  );
};


const About = () => {
  return (
    <div className="about_page">
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className="hidden md:block banner_box mx-auto container overflow-hidden">
          <div className=" flex h-full items-center">
            <AnimationOnScroll animateIn="animate__slideInLeft" duration={0.7} offset={300}>
              <div className="text-fff pl-20 md:max-w-[480px]">
                <h2 className="text-2xl font-bold text-shadow-3xl">{aboutBannerContent.title}</h2>
                <h4 className="text-3xl font-bold text-shadow-3xl mt-5">{aboutBannerContent.subTitle}</h4>
                <div className="mt-5 text-[20px] leading-6 text-shadow-xl">{aboutBannerContent.text}</div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className='mx-auto container galaxy overflow-hidden'>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="h-screen flex justify-center flex-col px-5 md:hidden text-fff">
              <h2 className="text-2xl font-bold text-shadow-3xl">{aboutBannerContent.title}</h2>
              <h4 className="text-4xl font-bold text-shadow-3xl mt-5">{aboutBannerContent.subTitle}</h4>
              <div className="mt-5 text-[24px] leading-6 text-shadow-xl">{aboutBannerContent.text}</div>
            </div>
          </AnimationOnScroll>
          <div className="px-5 md:py-[250px] md:px-[100px] md:flex md:justify-between md:items-center">
            <div>
              <AnimationOnScroll animateIn="animate__slideInLeft">
                <div>
                  <div className="text-fff text-4xl md:w-[480px] font-bold">{lookingContent.title}</div>
                  <div className="mt-5 text-2xl text-fff">{lookingContent.text}</div>
                  <div className="mt-5 text-2xl text-fff font-bold">{lookingContent.text2}</div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="mt-12 md:mt-0">
              <AnimationOnScroll animateIn="animate__slideInRight">
                <div className="grid grid-cols-2 gap-5">
                  {
                    gridData.map((item, index) => {
                      return <Block key={index} style={{
                        maxWidth: 400
                      }} title={item.title} text={item.text} />
                    })
                  }
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="pt-[50px] md:py-[250px] md:px-[100px]">
            <div className="px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-12">
              <div className="">
                <AnimationOnScroll animateIn="animate__fadeInBottomLeft">
                  <Block title="" text="" style={{
                    maxWidth: '100%',
                    aspectRatio: 1.8,
                  }}></Block>
                </AnimationOnScroll>
              </div>
              <div>
                <AnimationOnScroll animateIn="animate__fadeInBottomRight">
                  <Block title={provideData.title}
                    text={
                      <>
                        <div className="text-[18px]">{provideData.text1}</div>
                        <div className="text-[18px] mt-5">{provideData.text2}</div>
                      </>
                    }
                    style={{
                      maxWidth: '100%',
                      height: '100%',
                    }}></Block>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
          <div className="pt-[100px] pb-5 px-5 md:py-[250px] md:px-[100px]">
            <div className="flex flex-col flex-col-reverse md:flex-row items-center md:gap-x-12">
              <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex-1 mt-5 md:mt-0">
                <Block title={Block4Content.title} text={Block4Content.text} />
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInTopRight" className="flex-1 w-full"
              >
                <Block title={''} text={<>
                  <div className="w-full bg-black bg-opacity-0" style={{
                     maxWidth: '100%',
                    aspectRatio: 1.47,
                  }}></div>
                </>} style={{
                  width: '100%',
                }} />
              </AnimationOnScroll>
            </div>
          </div>
          <WebFooter className="bg-black bg-opacity-60"
          />
        </div>
      </div>
    </div>
  )
}

export default About