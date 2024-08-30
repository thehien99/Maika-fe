import React, { useState } from 'react'
import taCreators from '../../../assets/main-ta/taCreators-1.237705a8.png'
import taBiz from '../../../assets/main-ta/taBiz-1.9b165a3f.png'
import taMarketer from '../../../assets/main-ta/ta-marketer-1.5ed7fb64.png'
import { RiTeamFill } from 'react-icons/ri'
import icons from '../../../untils/icon'
const MainTa = () => {

  const [show, setShow] = useState(1)

  const { IoIosArrowDown } = icons
  const contents = [
    {
      idx: 1,
      tilte: 'Nhà sáng tạo nội dung',
      direct: 'Đặt tiêu đề cuốn hút, tìm ý tưởng dễ dàng, tạo bài viết hấp dẫn trong tích tắc giúp công việc của bạn nhanh và hiệu quả hơn.',
      img: taCreators,
      icon: <IoIosArrowDown />,
      bgColor: 'bg-orange-500',
      bgDiv: 'bg-orange-100'
    },
    {
      idx: 2,
      tilte: 'Người kinh doanh online',
      direct: 'Tăng doanh số bán hàng thông qua những bài viết mô tả sản phẩm, phản hồi đánh giá,... làm bật lên tính năng, lợi ích và giá trị độc đáo của sản phẩm.',
      img: taBiz,
      icon: <IoIosArrowDown />,
      bgColor: 'bg-emerald-600',
      bgDiv: 'bg-sky-100'
    },
    {
      idx: 3,
      tilte: 'Nhà tiếp thị & quảng cáo',
      direct: 'Tạo email marketing, lên kế hoạch nội dung trên đa nền tảng,... để chăm sóc khách hàng thân thiết, thu hút khách hàng mục tiêu, tăng nhận diện thương hiệu và nâng cao tỷ lệ chuyển đổi cho doanh nghiệp.',
      img: taMarketer,
      icon: <IoIosArrowDown />,
      bgColor: 'bg-cyan-500',
      bgDiv: 'bg-emerald-100'
    }
  ]

 
  return (
    <div className={`w-full h-full`}>
      <div className='container'>
        <div className='row'>
          {contents?.map((item) => {
            return (
              <div className={`col-6 w-full flex justify-center items-center ${show === item?.idx ? 'block' : 'hidden'}`} key={item.idx}>
                <img src={item.img} alt="" className={`rounded w-[490px] h-[500px] object-cover ${show === item?.idx && `${item.bgColor}`}`} />
              </div>
            )
          })
          }

          <div className='col-6 cursor-pointer'>
            <div className='flex flex-col justify-center items-start gap-20'>
              <h1 className='pt-10'>Đón đầu xu hướng và tận dụng sức mạnh AI trong công việc và học tập</h1>
              <div className='w-full h-full'>
                {contents?.map((item) => {
                  return (
                    <div className='mt-4 flex flex-col justify-center w-full h-full' key={item.idx} onClick={() => setShow(item?.idx)}>
                      <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                          <h4 className='me-3'>0{item.idx}.</h4>
                          <h4> {item.tilte}</h4>
                        </div>
                        <div className='text-black'>
                          {item?.icon}
                        </div>

                      </div>
                      <span className={`font-normal mt-3 text-lg ${show === item?.idx ? 'block' : 'hidden'}`}>{item.direct}</span>
                      <hr />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default MainTa


