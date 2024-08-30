import React from 'react'

const HeaderDashBoard = () => {
  const header = [
    { id: 1, title: 'Tạo mới' },
    { id: 2, title: 'Nâng cấp' },
  ]
  return (
    <div className='main-header-dashboard'>
      <div className='p-2'>
        <div className='flex justify-between items-center'>
          <div>
            <h3>Xin chào, Hiển</h3>
            <span className='text-slate-600'>Thứ 5, 22 tháng 8, 2024</span>
          </div>
          <div className='flex justify-center items-center gap-3'>
            {header?.map((item) => {
              return (
                <a className={`text-black no-underline hover:no-underline border-2 border-black rounded-xl ${item?.id === 2 && 'text-white bg-blue-600'}`} key={item?.id} href="">
                  <div className='p-2 hover:bg-blue-300 rounded-xl'>
                    {item?.title}
                  </div>
                </a>
              )
            })}
            <span className='p-2 font-bold bg-pink-200 rounded-xl cursor-pointer'>
              200 credit
              <span className='hidden'>số credit còn lại</span>
            </span>
            <img src="" alt="hinh" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDashBoard