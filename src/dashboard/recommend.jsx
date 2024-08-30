import React from 'react'
import icons from "../untils/icon"
const Recommend = ({ recommend, titleSub }) => {
  const { MdChevronRight } = icons
  return (
    <div className='recommendtaion flex flex-col gap-2'>
      <span className='font-medium mt-2 ms-2'>{titleSub}</span>
      <ul className='list-none p-0 !mb-0'>
        {recommend?.map((item) => {
          return (
            <li key={item?.id} className='mt-2'>
              <a href='' className='flex justify-between items-center no-underline hover:rounded-3xl hover:bg-slate-100 p-2 hover:no-underline text-black'>
                <div className='flex justify-start items-center gap-3 w-full '>
                  <img src={item?.img} alt="" className='w-[10%]  bg-[#ffffff] rounded-full' />
                  <span className='font-medium'>{item?.title}</span>
                </div>
                <MdChevronRight className='text-2xl' />
              </a>
            </li>
          )
        })}
      </ul>
      <div className='text-center border-1 p-1 bg-slate-200 rounded-2xl font-normal text-slate-500'>
        <button>Xem tất cả</button>
      </div>
    </div>
  )
}

export default Recommend