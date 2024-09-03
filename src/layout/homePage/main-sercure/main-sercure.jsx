import React from 'react'
import imgSercure from "../../../assets/mainSercure/seamless-and-secure-for-business-1.682743be.png"
import icons from "../../../untils/icon"
const MainSercure = () => {
  const { IoIosLock, MdOutlineSecurity, SiTicktick, RiMoneyDollarCircleFill } = icons
  const ContentSercure = [
    {
      id: 1,
      icon: <IoIosLock />,
      title: 'Bảo vệ dữ liệu',
      direct: "Luôn đặt an toàn dữ liệu của doanh nghiệp lên hàng đầu. Chúng tôi không bao giờ lưu trữ, chia sẻ hoặc sử dụng thông tin của bạn trong các mô hình của chúng tôi."
    },
    {
      id: 2,
      icon: <MdOutlineSecurity />,
      title: 'Bảo mật',
      direct: "Các mô hình ngôn ngữ lớn (LLMs) của chúng tôi đảm bảo an toàn, với việc mã hóa dữ liệu khi lưu trữ và trên đường truyền để bảo vệ dữ liệu khỏi việc truy cập trái phép."
    },
    {
      id: 3,
      icon: <SiTicktick />,
      title: 'Tuân thủ',
      direct: "Tuân thủ các tiêu chuẩn và quy định ngành công nghiệp khác nhau, như ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018 và SOC."
    },
    {
      id: 4,
      icon: <RiMoneyDollarCircleFill />,
      title: 'Tối ưu chi phí',
      direct: "Đảm bảo cung cấp giải pháp chất lượng và hiệu quả để tiết kiệm chi phí cho doanh nghiệp của bạn."
    },
  ]
  return (
    <div className='bg-[#f7f3ff] w-full h-full'>
      <div className='container flex flex-col justify-center gap-4 p-4'>
        <div className='flex flex-col justify-center items-center sm:text-center gap-4 xs:text-center'>
          <h1 className='font-bold'>Bảo mật và tối ưu cho doanh nghiệp</h1>
          <h5>Giảp pháp toàn diện và an toàn để tối ưu hóa chi phí và nâng cao lợi thế cạnh tranh.</h5>
        </div>
        <div className='row'>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={imgSercure} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className='grid grid-cols-2 xs:grid-cols-1 gap-3 '>
              {ContentSercure?.map((item) => {
                return (
                  <div key={item?.id} className='border-2 p-8 rounded-3xl flex flex-col justify-center gap-2 bg-[#ffffff] ' style={{ boxShadow: '0px 4px 10px -1px rgba(0, 0, 0, .08), 0px 0px 4px -1px rgba(0, 0, 0, .04)' }}>
                    <div className='flex flex-col justify-center gap-2'>
                      <span className='text-3xl'>{item?.icon}</span>
                      <h6 className='font-bold'>{item?.title}</h6>
                    </div>
                    <div>
                      <span className='font-normal'>{item?.direct}</span>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSercure