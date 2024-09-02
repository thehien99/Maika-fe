import React from 'react'
import icons from "../../../untils/icon"
import categoriesImg from '../../../assets/images/categories-sub.jpg'

const MainProductCatagories = () => {

  const categories = [
    { idx: '1', name: 'AI Viết lách' },
    { idx: '2', name: 'Công cụ SEO' },
    { idx: '3', name: 'Tiện ích mở rộng' },
    { idx: '4', name: 'Ứng dụng di động' }
  ]

  const categoriesSub = [
    { direct: 'Bài viết chuẩn SEO' },
    { direct: 'Bài quảng cáo Facebook' },
    { direct: 'Lập kế hoạch nội dung đa kênh' },
    { direct: 'Viết bài đăng Facebook, LinkedIn, Instagram' },
    { direct: 'Công thức viết quảng cáo phổ biến (AIDA, PAS, 3S…)' }
  ]

  const categoriesSubDown = [
    { direct: 'Các bước viết bài SEO' },
    { direct: 'Các bước viết bài báo, Blog' },
    { direct: 'Các bước lập kế hoạch nội dung' },
    { direct: 'Các bước viết kịch bản TikTok, YouTube' },
  ]

  const { TiTick } = icons
  return (
    <div className='flex flex-col gap-9'>
      <div className='w-full'>
        <ul className='flex justify-center items-center gap-6 font-bold'>
          {categories?.map((item) => {
            return (
              <li
                key={item.idx}
                className={`sm:text-center p-3 rounded-full text-black bg-[#fff] border-2 cursor-pointer ${item.idx === "1" && 'bg-black text-white'} hover:bg-[#ccc] hover:text-white `}
              >
                {item?.name}
              </li>
            )
          })}
        </ul>
      </div>

      <div className='categories-sub w-full' >
        <div className='w-full h-full bg-[#000C8C] rounded-3xl container !px-[55px] py-[70px]'>
          <div className='row md:flex-row sm:flex-col md:gap-0 sm:gap-[50px] categories-sub-up h-[75%]'>
            <div className='col-6 col-md-6 col-sm-12 flex flex-col gap-[19px]'>
              <div className='text-white flex justify-cente flex-col gap-4'>
                <h3 className='font-bold'>Viết nội dung tiếp thị đa kênh theo mẫu</h3>
                <span>
                  Tiết kiệm hàng giờ viết lách, thăng hoa sáng tạo, tận hưởng cuộc sống với 50+ mẫu tạo nội dung chuẩn cấu trúc, cá nhân hóa theo từng sản phẩm và thương hiệu:
                </span>
              </div>
              <div>
                <ul className='text-white !p-0 '>
                  {categoriesSub?.map((item) => {
                    return (
                      <li className='xl:text-lg mt-2 font-normal flex justify-start items-center gap-3 md:text-[15px] md:items-start md:justify-start'>
                        <TiTick className='text-[24px]' />
                        {item?.direct}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='cursor-pointer xl:flex xl:flex-row xl:justify-start md:flex md:flex-col md:justify-center md:gap-4 '>
                <span className='p-3 bg-[#fff] rounded-2xl me-4 font-bold md:w-full xl:w-max'>Tìm hiểu thêm</span>
                <span className='p-3 border-2 rounded-2xl text-white font-bold hover:border-[#000]'>Khám phá ngay</span>
              </div>
            </div>
            <div className='col-6 col-md-6 col-sm-12 ps-[30px]'>
              <div className='w-full'>
                <img src={categoriesImg} alt="" className='rounded-3xl ' width='90%' />
              </div>
            </div>
          </div>

          <div className='bg-[#ccc] opacity-35'>
            <hr className='my-[5rem]' />
          </div>

          <div className='row md:flex-row sm:flex-col md:gap-0 sm:gap-[50px] categories-sub-down'>
            <div className='col-6 col-md-6 col-sm-12 flex flex-col ps-[30px]'>
              <div className=''>
                <img src={categoriesImg} alt="" className='rounded-3xl' width='90%' />
              </div>
            </div>
            <div className='col-6 col-md-6 col-sm-12 flex flex-col gap-8'>
              <div className='text-white flex justify-cente flex-col gap-4'>
                <h3 className='font-bold'>Workflow</h3>
                <span>
                  Người mới vào nghề content hoặc không chuyên viết sẽ dễ dàng biết và thành thạo các bước sáng tạo nội dung cho từng nền tảng khác nhau từ bước lên ý tưởng, lập dàn ý đến triển khai bài viết, kịch bản hoặc kế hoạch chi tiết:                </span>
              </div>
              <div>
                <ul className='text-white !p-0 '>
                  {categoriesSubDown?.map((item) => {
                    return (
                      <li className='text-lg mt-2 font-normal flex justify-start items-center gap-3 md:text-[15px]'>
                        <TiTick className='text-[24px]' />
                        {item?.direct}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className='cursor-pointer xl:flex xl:flex-row xl:justify-start md:flex md:flex-col md:justify-center md:gap-4 '>
                <span className='p-3 bg-[#fff] rounded-2xl me-4 font-bold md:w-full xl:w-max'>Tìm hiểu thêm</span>
                <span className='p-3 border-2 rounded-2xl text-white font-bold hover:border-[#000]'>Khám phá ngay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainProductCatagories