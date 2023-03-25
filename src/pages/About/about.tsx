import WebFooter from "../../components/WebFooter"
import WebHeader from "../../components/WebHeader"
import { Fade, Slide, AttentionSeeker, Reveal } from "react-awesome-reveal"
import { CSSProperties, ReactNode } from "react";
import { bottomLeftSlide, bottomrRightSlide } from "../../config";
import { aboutBannerContent, Block4Content } from "./data";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Block = ({ title, text, style }: { title: string, text: ReactNode, style?: CSSProperties }) => {
  return (
    <div className="py-[50px] px-5 rounded-3xl text-fff bg-black bg-opacity-75"
      style={style}
    >
      <div className="text-[26px] font-bold mb-5">{title}</div>
      <div className="text-2xl ">{text}</div>
    </div>
  );
};


const About = () => {
  console.log('about')
  return (
    <div className="about_page">
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className="banner_box mx-auto container overflow-hidden">
          <div className=" flex h-full items-center">
            <Slide direction="left" duration={800}>
              <div className="text-fff pl-20 md:max-w-[480px]">
                <h2 className="text-2xl font-bold text-shadow-3xl">{aboutBannerContent.title}</h2>
                <h4 className="text-3xl font-bold text-shadow-3xl mt-5">{aboutBannerContent.subTitle}</h4>
                <div className="mt-5 text-[20px] leading-6 text-shadow-xl">{aboutBannerContent.text}</div>
              </div>
            </Slide>
          </div>
        </div>
        <div className='mx-auto container galaxy overflow-hidden'>
          <div className="md:py-[250px] md:px-[100px] md:flex md:justify-between md:items-center">
            <div>
              <Slide direction="left" cascade={false} duration={600}>
                <div>
                  <div className="text-fff text-4xl md:w-[480px] font-bold">Looking For High Standard Tailor-made Online Business?</div>
                  <div className="mt-5 text-2xl text-fff">We Are Expertised In</div>
                  <div className="mt-5 text-2xl text-fff font-bold">Customized Software Development</div>
                </div>
              </Slide>
            </div>
            <div>
              <Slide direction="right" duration={600}>
                <div className="grid grid-cols-2 gap-5">
                  <Block style={{
                    maxWidth: 400
                  }} title="UI/UX Design" text="Professional designs to optimize user experience" />
                  <Block style={{
                    maxWidth: 400
                  }} title="Development" text="applications and internal use systems" />
                  <Block style={{
                    maxWidth: 400
                  }} title="Test and Maintainence" text="System testing, repair and maintainence after sales " />
                  <Block style={{
                    maxWidth: 400
                  }} title="Graphic Designs" text="In-house graphic designers for digital use" />
                </div>
              </Slide>

            </div>
          </div>
          <div className="md:py-[250px] md:px-[100px]">
            <div className="grid grid-cols-2 gap-x-12">
              <div>
                <Reveal keyframes={bottomLeftSlide} style={{ height: '100%' }}>
                  <Block title="" text="" style={{
                    maxWidth: '100%',
                    height: '100%',
                  }}></Block>
                </Reveal>
              </div>
              <div>
                <Reveal keyframes={bottomrRightSlide}>
                  <Block title="Provide Your Target Customer a Best Online Experience"
                    text={
                      <>
                        <div className="text-[18px]">We believe that a company's website and applications are a reflection of its quality and professionalism. We understand the importance of creating a positive impression on customers and clients and strive to deliver the best possible online experience. We specialize in designing and developing high-quality websites and apps that are tailored to the specific needs of each business. </div>
                        <div className="text-[18px] mt-5">Whether it's a simple brochure website or a complex web application, our team is dedicated to creating the perfect digital solution for your business. Together, we can enhance your online presence and bring the best online experience for your customers.</div>
                      </>
                    }
                    style={{
                      maxWidth: '100%',
                      height: '100%',
                    }}></Block>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="md:py-[250px] md:px-[100px]">
            <div className="flex items-center gap-x-12">
              <AnimationOnScroll animateIn="animate__fadeInTopLeft" className="flex-1">
                <Block title={Block4Content.title} text={Block4Content.text} />
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInTopRight" className="flex-1"
              >
                <Block title={''} text={<>
                  <div className="w-full bg-black bg-opacity-0" style={{
                    aspectRatio: '1.47',
                  }}></div>
                </>} style={{
                }}/>
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