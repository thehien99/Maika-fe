import React from 'react'
import min1 from "../../../assets/imgAI/1-min.jpg"
import min2 from "../../../assets/imgAI/2-min.jpg"
import min3 from "../../../assets/imgAI/3-min.jpg"
import min4 from "../../../assets/imgAI/4-min.jpg"
import min5 from "../../../assets/imgAI/5-min.jpg"
import min6 from "../../../assets/imgAI/6-min.jpg"
import min7 from "../../../assets/imgAI/7-min.jpg"
import min8 from "../../../assets/imgAI/8-min.jpg"
import min9 from "../../../assets/imgAI/9-min.jpg"
import min10 from "../../../assets/imgAI/10-min.jpg"
import min11 from "../../../assets/imgAI/11-min.jpg"
import min12 from "../../../assets/imgAI/12-min.jpg"
import min13 from "../../../assets/imgAI/13-min.jpg"
import min14 from "../../../assets/imgAI/14-min.jpg"
import min15 from "../../../assets/imgAI/15-min.jpg"
import min16 from "../../../assets/imgAI/16-min.jpg"
import min17 from "../../../assets/imgAI/17-min.jpg"
import min18 from "../../../assets/imgAI/18-min.jpg"
import min19 from "../../../assets/imgAI/19-min.jpg"
import min20 from "../../../assets/imgAI/20-min.jpg"
import min21 from "../../../assets/imgAI/21-min.jpg"
import min22 from "../../../assets/imgAI/22-min.jpg"
import min23 from "../../../assets/imgAI/23-min.jpg"
import min24 from "../../../assets/imgAI/24-min.jpg"
import min25 from "../../../assets/imgAI/25-min.jpg"
import min26 from "../../../assets/imgAI/26-min.jpg"


import Grid from '../../../Item/Grid'
const MainAI = () => {
  const imgMin1 = [min1, min2, min3, min4]
  const imgMin2 = [min4, min5, min6, min7, min8, min9]
  const imgMin3 = [min12, min10, min11]
  const imgMin4 = [min14, min15, min16]
  const imgMin5 = [min19, min20, min21]
  const imgMin6 = [min24, min25, min26, min13]
  const imgMin7 = [min17, min18, min22, min23]

  return (
    <div className='w-full h-full bg-black'>
      <div className='text-center text-white p-28'>
        <h1>Đừng để bất cứ điều gì làm trở ngại bạn</h1>
      </div>
      <div className='flex text-white'>
        <div style={{ display: 'grid', placeItems: 'center' }} className=''>
          <div className='columns flex gap-2'>
            <div class="column" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin1} width="150px" height="250px" />
            </div>
            <div class="column mt-5" style={{ transition: 'all .4s ease-out', willChange: 'transform' }} >
              <Grid imgMin={imgMin2} width='200px' height='100px' />
            </div>
            <div class="column mt-24" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin3} width='250px' height='300px' />
            </div>
            <div class="column mt-22" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin4} width='250px' height='300px' />
            </div>
            <div class="column mt-36" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin5} width='250px' height='300px' />
            </div>
            <div class="column mt-22" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin6} width='250px' height='300px' />
            </div>
            <div class="column mt-28" style={{ transition: 'all .4s ease-out', willChange: 'transform' }}>
              <Grid imgMin={imgMin7} width='250px' height='300px' />
            </div>
          </div >
        </div>
      </div>
      <div className='text-white flex flex-col justify-center items-center p-14 gap-3'>
        <div className='w-[50%] text-center'>
          <h1 className='font-bold'>Bay vào vũ trụ sáng tạo vô tận cùng Maika AI</h1>
        </div>
        <div className='w-[60%] text-center'>
          <h5 className='font-normal'>Đánh thức tiềm năng và xóa bỏ mọi giới hạn sáng tạo trong bạn bằng công cụ tạo hình ảnh. Biến ý tưởng trong mơ thành tác phẩm vượt xa tưởng tượng.</h5>
        </div>
        <div className='bg-teal-300 text-black p-2 font-medium rounded-3xl'>
          Sắp ra mắt 
        </div>
      </div>
    </div >
  )
}

export default MainAI