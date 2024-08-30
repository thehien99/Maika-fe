import React from 'react'
import icons from '../untils/icon'
const MenuItem = () => {
  const { RiHome5Fill, BsCollection, MdPattern, MdOutlineTextSnippet, TbClipboardSmile, MdOutlineAutoAwesomeMosaic, TbPencilStar, CiSettings, CiCircleQuestion } = icons
  const menuSideBar = [
    { id: 1, title: 'Tổng quan', icon: <RiHome5Fill /> },
    { id: 2, title: 'Bộ sưu tập', icon: <BsCollection /> },
    { id: 3, title: 'Workflow', icon: <TbClipboardSmile /> },
    { id: 4, title: 'Mẫu tạo nội dung', icon: <MdPattern /> },
    { id: 5, title: 'Văn bản', icon: <MdOutlineTextSnippet /> },
    { id: 6, title: 'Nội dung AI đã tạo', icon: <MdOutlineAutoAwesomeMosaic /> },
  ]

  const setting = [
    { id: 1, title: 'Hỗ trợ góp ý', icon: <CiCircleQuestion /> },
    { id: 2, title: 'Cài đặt', icon: <CiSettings /> }
  ]
  return (
    <div className='flex flex-col gap-[11px]'>
      <div>
        <span className='text-slate-600 uppercase font-bold'>Không gian làm việc</span>
        <ul className='!p-0'>
          {menuSideBar?.map((item) => {
            return (
              <a key={item?.id} href="" className='no-underline  hover:no-underline text-black'>
                <li className={`p-2 ${item?.id === 1 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white '}  rounded-lg mt-1`}>
                  <span className='flex justify-start items-center gap-3'>
                    <div className='text-xl'>
                      {item?.icon}
                    </div>
                    {item?.title}
                  </span>
                </li>
              </a>
            )
          })}
        </ul>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <span className='uppercase font-medium text-slate-500'>maikalab</span>
            <span className='p-1 text-white font-normal bg-purple-600 rounded-lg'>Thử Nghiệm</span>
          </div>
          <div className='w-full'>
            <a href="" className='text-black w-full flex items-center gap-4 no-underline hover:no-underline'>
              <div className='flex items-center gap-3 hover:text-white hover:bg-blue-600 p-2 w-full rounded-lg'>
                <span className='text-xl'><TbPencilStar /></span>
                <span>Công cụ AI
                </span>
                <span className='px-1 rounded-lg text-orange-100 bg-orange-600 opacity-50'>Mới</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='h-1 w-full border-2 bg-black'></div>
      <div className='flex flex-col gap-2 '>
        {setting?.map((item) => {
          return (
            <a href='' key={item?.id} className='flex items-center  no-underline hover:no-underline text-black'>
              <div className='flex items-center gap-3 hover:text-white  hover:bg-blue-600 w-full p-2 rounded-lg'>
                <span className='text-2xl '>
                  {item?.icon}
                </span>

                {item?.title}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default MenuItem