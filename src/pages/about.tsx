import WebFooter from "../components/WebFooter"
import WebHeader from "../components/WebHeader"
import { Slide } from "react-awesome-reveal"

const About = () => {
  return (
    <div className="about_page">
      <WebHeader></WebHeader>
      <div className='bg-black'>
        <div className="banner_box mx-auto container overflow-hidden">
          <div className=" flex h-full items-center">
            <Slide reverse={false} direction="left">
              <div className="text-fff pl-20 md:max-w-[480px]">
                <h2 className="text-2xl font-bold text-shadow-3xl">VERTEX OF THE NEW ERA</h2>
                <h4 className="text-3xl font-bold text-shadow-3xl mt-5">Need to develop your business on the internet?</h4>
                <div className="mt-5 text-[20px] leading-6 text-shadow-3xl">We strive to provide innovative and efficient
                  technology solutions to help businesses
                  thrive. Digitize your business and stand out
                  from the competitors.</div>
              </div>
            </Slide>
          </div>
        </div>
        <div className='mx-auto container pt-[1000px]'>
          阿伯
        </div>
      </div>
      <WebFooter></WebFooter>
    </div>
  )
}

export default About