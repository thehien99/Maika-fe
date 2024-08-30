import React from 'react'

const Button = ({ fieldBtn, icon }) => {
  return (
    <div>
      <button className={` flex justify-center items-center ${fieldBtn === 'Đăng nhập' ?
        "p-2 bg-sky-700 w-full mt-3 font-bold rounded-2xl text-center text-white hover:bg-cyan-500"
        : "p-2 flex justify-center gap-3 items-center bg-[#ffffff] text-black w-full mt-3 font-bold rounded-2xl text-center hover:bg-cyan-500"

        }`}>
        <div className={`flex justify-center items-center ${fieldBtn === 'Đăng nhập với Facebook' ? ' text-blue-500 text-2xl' : 'text-red-600 text-2xl'}`}>
          {icon}
        </div>
        {fieldBtn}
      </button >
    </div >
  )
}

export default Button