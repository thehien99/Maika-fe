import React from 'react'
import Sidebar from './sidebar'
import HeaderDashBoard from './headerDashBoard'
import SliderDashBoard from './sliderDashBoard'
import Recommend from './recommend'
import imgRecommend from "../assets/recommend/thumb_64x64_1be647eb-4d83-4ed7-a555-415fe30e6ab0.png"
import icons from '../untils/icon'
const Dashboard = () => {

  const { FaFacebookMessenger } = icons

  const recommend = [
    { id: 1, title: 'Viết lại văn bản', img: imgRecommend },
    { id: 2, title: 'Hỏi MAIKA', img: 'https://app.maika.ai/new-olli-logo.svg' },
    { id: 3, title: 'Quảng cáo Facebook', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_1e05525d-fbf7-4633-920f-aaa6942deb59.png' }
  ]

  const seoAndWeb = [
    { id: 1, title: 'Viết bài SEO', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_0f9ea5cb-fd04-4858-8f31-5f47e2ddf4ed.png' },
    { id: 2, title: 'Mô tả sản phẩm', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_c1d5b5c2-a570-48d4-8bf2-4e3901a1c82f.png' },
    { id: 3, title: 'Lập dàn ý bài SEO', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_b784692c-c0a1-43fd-a99a-dd483704f50b.png' }
  ]

  const socialNetwork = [
    { id: 1, title: 'Bài đăng Facebook', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_1e05525d-fbf7-4633-920f-aaa6942deb59.png' },
    { id: 2, title: 'Kịch bản Tiktok', img: 'https://cdn-ocs.iviet.com/cover/2023/August/thumb_64x64_cf192f30-d6d8-4f6e-8562-5af2aa5da9e8.png' },
    { id: 3, title: 'Kế hoạch nội dung mạng xã hội', img: "https://cdn-ocs.iviet.com/cover/2023/October/thumb_64x64_776f1dac-cc0e-45a7-b142-a3f72fc03515.png" }
  ]

  return (
    <div className='w-full h-full'>
      <div className='flex'>
        <div className='w-[20%] border-2'>
          <Sidebar />
        </div>
        <div className='w-[80%] p-[1.5rem] relative'>
          <HeaderDashBoard />
          <SliderDashBoard />
          <div className='main-recommendtaion container w-full mt-5'>
            <div className='row gap-3'>
              <div className=" !w-[32%] border-2 rounded-xl py-2">
                <Recommend recommend={recommend} titleSub='Đề xuất' />
              </div>
              <div className="border-2 rounded-xl py-2 !w-[32%]">
                <Recommend recommend={seoAndWeb} titleSub='SEO & Website' />
              </div>
              <div className="border-2 rounded-xl py-2 !w-[32%]">
                <Recommend recommend={socialNetwork} titleSub='Mạng xã hội' />
              </div>
            </div>
          </div>
          <div className='fixed bottom-5 right-4'>
            <button>
              <FaFacebookMessenger className='text-[60px] text-blue-600' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard