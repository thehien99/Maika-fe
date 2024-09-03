import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './carousel.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const Carousel = ({ userReview }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {userReview?.map((item) => {
          return (
            <SwiperSlide>
              <div key={item?.id} className='w-fullh-full flex justify-center items-center flex-col gap-2'>
                <div className='flex flex-col justify-center items-center'>
                  <img src={item?.imgUser} alt="hinh" className='!w-[80px]' />
                  <span>{item?.name}</span>
                  <span className='font-bold text-[15px]'>{item?.location}</span>
                  <i className='text-[10px] font-bold'>{item?.title}</i>
                </div>
                <div className=''>
                  <span className='text-[10px]'>{item?.direct}</span>
                </div>

              </div>
            </SwiperSlide>
          )
        })}

      </Swiper >
    </>
  );
}
