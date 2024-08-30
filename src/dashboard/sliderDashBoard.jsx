import React from 'react'
import Slider from "react-slick";
import SEO from "../assets/sliderDashBoard/icon-01.png"
import writeSeo from "../assets/sliderDashBoard/icon-04.png"
import extension from "../assets/sliderDashBoard/icon-03.png"

const SliderDashBoard = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const contentDashBoard = [
    { id: 1, title: 'công cụ sale "all in one" tích hợp AHFREFS', titleSub: 'thử ngay', img: SEO, flag: true },
    { id: 2, title: 'WORKFLOW - “CẦM TAY CHỈ VIỆC” VIẾT SEO', titleSub: 'trải nghiệm ngay', img: writeSeo },
    { id: 3, title: 'LÀM HAY, HỌC GIỎI CÀI MAIKA EXTENSION', titleSub: 'thêm vào chrome', img: extension }
  ]

  return (
    <div className='slider-dashboard mt-5 rounded-3xl'>
      <Slider {...settings}>
        {
          contentDashBoard?.map((item) => {
            return (
              <div className={`border-2 rounded-3xl !flex justify-center items-center ${item?.flag ? 'bg-slate-100' : 'bg-orange-500'}  w-full`} key={item?.id}>
                <div className='title w-[50%]'>
                  <h2 className={`text-wrap uppercase font-bold ${item?.flag ? 'text-orange-400' : "text-white"}`}>{item?.title}</h2>
                  <button className={`border-2 p-2 uppercase font-bold mt-3 rounded-full ${item?.flag ? 'bg-orange-600 text-white' : 'bg-[#ffffff] text-orange-600'}`}>{item?.titleSub}</button>
                </div>
                <div className='img-Slider'>
                  <img src={item?.img} alt="" className='w-[100%]' />
                </div>
              </div>
            )
          })
        }
      </Slider >
    </div >
  )
}

export default SliderDashBoard