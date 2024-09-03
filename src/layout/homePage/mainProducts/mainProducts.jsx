import React from 'react'
import MainProductCatagories from './mainProductCatagories'

const MainProducts = () => {
  return (
    <div className='main-product container p-24 flex flex-col justify-center items-center gap-12'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='text-[43px] text-center font-bold w-[60%] xs:text-[30px] xs:w-full'>Xử lý mọi công việc Marketing chỉ với một công cụ AI duy nhất</div>
        <div className='w-[89%] font-normal text-[24px] text-center opacity-80 xs:text-[20px]'>Bạn muốn tiết kiệm chi phí và tăng hiệu quả Marketing? Với sức mạnh của trí tuệ nhân tạo, Maika AI giúp bạn vừa làm chữ, vừa làm hình và lên kế hoạch nội dung nhanh chóng.</div>
      </div>
      <div className='main-product-categories w-full '>
        <MainProductCatagories />
      </div>
    </div>
  )
}

export default MainProducts