import React from 'react'

const Footer = () => {
  const contentFooter = [
    { id: 1, title: 'Sản phẩm', sub: 'AI Viết lách', sub1: 'Tiện ích mở rộng' },
    { id: 2, title: 'Trường hợp sử dụng', sub: 'Tiếp thị và quảng cáo', sub1: "Kinh doanh online", sub2: "Sáng tạo nội dung", sub3: "SEO & Website" },
    { id: 3, title: 'Tài nguyên', sub: 'Blog', sub1: "Trung tâm hỗ trợ" },
    {
      id: 4, title: 'Công ty', sub: "Về chúng tôi", sub1: "Bảng giá", sub2: "Báo chí", sub3: "Việc làm", sub4: "Liên hệ"
    }
  ]
  return (
    <div className='w-full h-full bg-[#000C8C]'>
      <div className='container p-10'>
        <div className=' flex sm:flex-col md:flex-row  md:gap-28 sm:gap-10'>
          <div>
            <h1 className='text-white'>MAIKA</h1>
          </div>
          <div className='md:grid md:grid-cols-4 sm:flex sm:gap-12 sm:justify-center md:gap-20'>
            {contentFooter?.map((item) => {
              return (
                <div>
                  <ul className='text-white sm:p-0 '>
                    <li className='font-bold mb-6'>{item?.title}</li>
                    <li>{item?.sub}</li>
                    <li className='md:mt-2 sm:mt-4'>{item?.sub1}</li>
                    <li className='md:mt-2 sm:mt-4'>{item?.sub2}</li>
                    <li className='md:mt-2 sm:mt-4'>{item?.sub3}</li>
                    <li className='md:mt-2 sm:mt-4'>{item?.sub4}</li>
                  </ul>
                </div>
              )
            })}


          </div>
        </div>
        <hr className='text-slate-100' />
        <div className='text-white flex justify-around items-center'>
          <div className='flex gap-5'>
            <span>© 2024 Maika AI. All rights reserved.</span>
            <span>Tiếng Việt</span>
          </div>
          <div className='flex gap-5'>
            <span>Chính sách bảo mật</span>
            <span>Điều khoản bảo mật</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer