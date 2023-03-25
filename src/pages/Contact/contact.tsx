import WebFooter from '../../components/WebFooter';
import WebHeader from '../../components/WebHeader';
import contactLogo from "../../assets/contact_logo.png"
import { EnvelopesimpleIcon } from './EnvelopesimpleIcon';
import { InstagramlogoIcon } from './InstagramlogoIcon';
import { PhoneIcon } from './phoneIcon';

const Contact = (): JSX.Element => {
  return (
    <div className="contact_page">
      <WebHeader></WebHeader>
      <div className='container mx-auto contact_content flex flex-col md:flex-row items-center justify-around text-fff'>
        <div className='flex-1 pl-[50px] md:pl-[100px] order-3 md:order-1 self-start md:self-center pb-[140px] md:pb-0'>
          <div>
            <h4 className='text-xl md:text-[40px] text-[#19EFFD] font-bold'>Contact Infomation</h4>
            <div className='mt-5 text-xl md:mt-[100px] md:text-2xl text-fff'>
              <div className='flex gap-x-3 items-center mb-5 mb:mb-12'>
                <span className='w-6 h-6 md:w-10 md:h-10'>
                  <PhoneIcon style={{
                    width:'100%',
                    height:'100%',
                  }}></PhoneIcon>
                </span>
                <span>+852 5409 1997</span>
              </div>
              <div className='flex gap-x-3 items-center mb-5 mb:mb-12'>
                <span className='w-6 h-6 md:w-10 md:h-10'>
                  <EnvelopesimpleIcon></EnvelopesimpleIcon>
                </span>
                <span>info@vertexinnotech.com</span>
              </div>
              <div className='flex gap-x-3 items-center'>
                <span className='w-6 h-6 md:w-10 md:h-10'>
                  <InstagramlogoIcon></InstagramlogoIcon>
                </span>
                <span>vertexinnotech</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 py-[170px] md:py-0 items-center justify-center logo_box order-2'>
          <img src={contactLogo} width={'50%'} />
        </div>
      </div>
      <WebFooter></WebFooter>
    </div>
  );
};

export default Contact;