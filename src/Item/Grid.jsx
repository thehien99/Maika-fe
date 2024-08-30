import React from 'react'

const Grid = ({ imgMin, width, height }) => {
  console.log(width, height)
  return (
    <div>
      {imgMin?.map((item) => {
        return (
          <div key={item} className='mt-2 w-full h-full'>
            <img src={item} alt="" className={`!w-[${width}] !h-[${height}] rounded-xl`} />
          </div>
        )
      })}
    </div>
  )
}

export default Grid