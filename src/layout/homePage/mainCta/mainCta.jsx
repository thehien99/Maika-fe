import React from 'react'
import Logo from '../../../assets/images/Chrome-Logo.png'
const MainCta = () => {
  return (
    <div className='w-full h-full bg-[#000EA9]'>
      <div className='container p-24 flex flex-col justify-center items-center gap-16'>
        <div className='text-[#fff] w-[80%] flex flex-col justify-center items-center gap-6 text-center'>
          <h1 className='font-bold'>Trải nghiệm ngay sức mạnh của trợ lý AI Marketing và kiểm nghiệm ngay hiệu quả!</h1>
          <h5 className='font-semibold'>Dùng thử miễn phí. Không yêu cầu thẻ tín dụng.</h5>
        </div>
        <div className='text-white gap-5 flex justify-center items-center'>
          <div className='text-center'>
            <div className='p-3 bg-blue-500 rounded-2xl font-bold'>
              Đăng ký miễn phí
            </div>
            <span className='mt-2'>Ứng dụng Web</span>
          </div>
          <div className='text-center'>
            <div className='p-3 bg-[#ffffff] text-black flex justify-center items-center rounded-2xl font-bold'>
              <img src={Logo} alt="" className='w-[50px]' />
              Thêm vào chorme
            </div>
            <span className='mt-2'>Tiện ích mở rộng</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCta