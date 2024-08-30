import React, { useState } from 'react'
import bloggerNgoc from '../../../assets/blog/Blogger_Ngoc_Den_Roi.png'
import bloggerMIC from "../../../assets/blog/MIC_Academy.png"
import bloggerMissKV from "../../../assets/blog/Miss_Khanh_Van.png"
import Slider from 'react-slick';

const MainStory = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const contentSlider = [
    { idx: 1, imgBlog: bloggerNgoc, name: 'Ngọc đến rồi', location: 'Blogger', title: '“Sử dụng Maika AI giúp giảm giờ làm, giảm áp lực, tăng hiệu quả cho chủ doanh nghiệp lẫn nhân viên. Đặc biệt với những người làm sáng tạo, Maika AI là một trợ lý giúp khơi nguồn ý tưởng cho những bài content chất lượng và không rập khuôn.”' },
    { idx: 2, imgBlog: bloggerMIC, name: 'Nguyễn Văn Hậu', location: 'Giám đốc MIC Academy', title: "“Maika AI đúng là tool AI thuần Việt, sinh ra cho những người Việt đang làm Online Marketing nói chung và cho những người làm công việc viết lách, blogger, freelancer... nói riêng. Quá hiểu nhu cầu của người dùng cần gì ở một tool AI.”" },
    { idx: 3, imgBlog: bloggerMissKV, name: 'Mrs. Khánh Vân', location: 'Host Vân Podcast', title: '“Trong thời đại 4.0, ứng dụng AI để hỗ trợ, đề xuất các giải pháp marketing sáng tạo và tiết kiệm thời gian đang là xu thế. Maika AI giúp những người làm marketing lẫn sinh viên tổng hợp thông tin nhanh chóng và đưa ra nhiều giải pháp nội dung hiệu quả.”' }
  ]
  return (
    <div className=" container flex justify-center items-center p-24 flex-col">
      <div className='main-story-title'>
        <h1 className='font-bold'>Câu chuyện khách hàng truyền cảm hứng</h1>
        <h6 className='text-center p-4'>Trải nghiệm thực tế của những người thành công đến từ mọi lĩnh vực.</h6>
      </div>
      <div className="slider-container container main-story-blog bg-pink-200 !p-14 rounded-xl">
        <Slider {...settings}>
          {contentSlider?.map((item) => {
            return (
              <div key={item?.idx} className='flex flex-col justify-center items-center gap-4'>
                <h3 className='text-center'>
                  {item?.title}
                </h3>
                <div className='flex justify-center items-center gap-3 mt-14 '>
                  <div className='border-2 border-black rounded-full'>
                    <img src={item?.imgBlog} alt="hinh" className='border-2 rounded-full w-[53px] ' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <span className='font-bold'>{item?.name}</span>
                    <span>{item?.location}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default MainStory