import React from 'react'
import Input from '../tagShared/input'
import Button from '../tagShared/button'
import icon from '../untils/icon'
import Chrome from '../assets/images/Chrome-Logo.png'
const Auth = () => {

  const { FaFacebook, FaGoogle } = icon

  return (
    <div className='relative w-[100vw] h-[150vh] bg-rose-50 overflow-x-hidden'>
      <form className=' absolute md:w-[28%]  top-[0] left-[50%] translate-x-[-50%] translate-y-[20%] xs:translate-y-[5%] flex flex-col justify-center items-center gap-3'>
        <div className='flex flex-col justify-center items-center md:gap-3 sm:gap-7 xs:gap-5'>
          <div className='flex justify-center items-center'>
            <a href="/" className='flex justify-center items-center gap-2 '>
              <img src="https://app.maika.ai/new-olli-logo.svg" alt="" />
              <img src="https://app.maika.ai/new-olli-text-logo.svg" alt="" />
            </a>
          </div>
          <div className='text-center'>
            <h2>Chào mừng bạn trở lại</h2>
            <span>Bạn chưa có tài khoản?
              <a href="" className='ms-2 no-underline'>Đăng ký miễn phí</a>
            </span>
          </div>
        </div>
        <div className='w-full h-full'>
          <Input field='Email' />
          <Input field='Mật Khẩu' fieldSub="Quên mật khẩu" />
          <a href='/' className='no-underline text-black flex justify-center items-center'>Đăng nhập với số điện thoại</a>
          <Button fieldBtn="Đăng nhập" />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[30%] h-[1px] bg-black' />
          <span className='px-2'>Hoặc</span>
          <div className='w-[30%] h-[1px] bg-black' />
        </div>
        <div className='font-bold w-full h-full text-center '>
          <Button fieldBtn='Đăng nhập với Google' icon={<FaGoogle />} />
          <Button fieldBtn='Đăng nhập với Facebook' icon={<FaFacebook />} />
        </div>
        <div className='xs:text-center'>
          <span>Bạn xác nhận rằng bạn đã đọc và đồng ý với chúng tôi</span>
          <div className='flex md:justify-evenly sm:flex-col md:items-center sm:gap-1 xs:flex-col xs:text-center'>
            <a href="" className='no-underline'>Chính sách bảo mật</a>
            và
            <a href="" className='no-underline'>Điều khoản dịch vụ</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Auth