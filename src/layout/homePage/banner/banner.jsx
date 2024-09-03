import React from 'react'
import FadeInLoopText from '../../../untils/animationBanner';
import Logo from '../../../assets/images/Chrome-Logo.png'
import VideoBanners from './video-banner';

const Banner = () => {
  console.log(window.innerWidth);

  return (
    <div className='bg-[#000C8C] top-0 gap-10 relative flex justify-center items-center w-full'>
      {/* <video autoPlay={true} muted width="100%">
      </video> */}
      <div className='flex flex-col gap-6 mt-28 justify-center items-center h-full'>
        <div className='text-white flex flex-col justify-center items-center gap-6 text-4xl font-bold p-[50px]'>
          <div className='p-6'>
            <h1 className='text-6xl font-bold text-center text-white'>Trợ lý AI Marketing đa kênh</h1>
          </div>
          <div className='text-center mt-3 w-full'>
            <FadeInLoopText />
          </div>
          <div className='flex justify-between items-center w-full text-xl font-bold xl:mt-5 md:mt-5 xs:flex-col xs:gap-5'>
            <div className='bg-blue-500 me-7 p-3 rounded-xl xs:w-full xs:me-0 xs:text-center'>
              <span>
                Đăng ký MIỄN PHÍ
              </span>
            </div>
            <div className='bg-white p-3 rounded-xl flex justify-center items-center xs:w-full'>
              <img src={Logo} alt="" className='w-[50px] h-[28px]' />
              <span className='text-black'>
                Thêm vào Chorme
              </span>
            </div>
          </div>
        </div>
        <VideoBanners />
      </div>
    </div >
  )
}
export default Banner

