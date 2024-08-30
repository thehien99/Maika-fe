import React from 'react'
import icons from '../untils/icon'
import MenuItem from './menuItem'
const Sidebar = () => {
  const { FaHome, FaPencilAlt } = icons
  return (
    <div className='w-full h-full'>
      <div className='p-4 flex flex-col gap-5'>
        <div className='flex flex-col justify-center items-center gap-8 w-full'>
          <div className='flex justify-center items-center gap-2'>
            <a href="/" className='flex justify-center items-center gap-3'>
              <img src="https://app.maika.ai/new-olli-logo.svg" alt="/" />
              <img src="https://app.maika.ai/new-olli-text-logo.svg" alt="/" />
            </a>
          </div>
          <div className='w-full'>
            <button className='flex justify-start items-center gap-3 p-2 border-2 rounded-xl border-black w-full font-bold hover:bg-slate-300'>
              <FaHome className='text-[40px] text-white p-2 bg-blue-500 rounded-lg' />
              My team
            </button>
          </div>
        </div>
        <div className='w-full h-full'>
          <MenuItem />
        </div>
      </div>
    </div>
  )
}

export default Sidebar