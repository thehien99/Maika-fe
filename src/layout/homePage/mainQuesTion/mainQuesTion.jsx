import React, { useState } from 'react'
import icon from "../../../untils/icon"
import "./question.scss"
const MainQuesTion = () => {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(null)
  const { FaPlus } = icon
  const moreQuestion = [
    { id: 1, title: 'Maika AI là gì?', direct: 'Maika AI là trợ lý toàn năng cho công việc và học tập.' },
    { id: 2, title: 'Maika AI có trên nền tảng nào?', direct: 'Bạn có thể truy cập vào Maika AI qua ứng dụng web hoặc thêm tiện ích mở rộng vào trình duyệt.' },
    { id: 3, title: 'Maika AI giúp được gì cho tôi?', direct: 'Maika AI giúp bạn sáng tạo nội dung, nghiên cứu từ khóa SEO, tạo ảnh AI, tạo giọng đọc AI, đọc thông minh, xem nhanh Youtube, ghi chú,... Bằng cách sử dụng sức mạnh của trí tuệ nhân tạo để tự động hóa các tác vụ, Maika AI giải thoát bạn khỏi những công việc lặp đi lặp lại mất thời gian và tập trung năng lượng để sáng tạo.' },
    { id: 4, title: 'Maika AI hỗ trợ được ngôn ngữ nào?', direct: 'Hiện tại, Maika hỗ trợ tiếng Việt, tiếng Anh, tiếng Hàn và sẽ sớm hỗ trợ thêm các ngôn ngữ khác trong tương lai.' },
    { id: 5, title: 'Điểm nổi bật của Maika AI so với những công cụ hiện có trên thị trường là gì?', direct: 'Maika AI sở hữu hệ sinh thái gồm nhiều công cụ AI đơn giản nhưng mạnh mẽ. Hệ sinh thái của Maika AI đáp ứng hầu hết nhu cầu sáng tạo nội dung lẫn làm việc và học tập của người dùng. Điều này giúp bạn tiết kiệm thời gian và nâng cao năng suất mà không cần phải sử dụng nhiều công cụ AI.' },
  ]

  const handleShow = (id) => {
    setShow(!show)
    setId(id)
  }


  return (
    <div className='w-full h-full bg-[#c8e2e86b]'>
      <div className='container p-24'>
        <div className='row'>
          <div className="col-5">
            <div className='flex flex-col justify-center gap-2'>
              <h1 className='font-bold'>Câu hỏi thường gặp</h1>
              <div className='flex flex-col justify-center'>
                <span>
                  Bạn còn câu hỏi khác?
                </span>
                <span> Tìm kiếm câu trả lời trong Trung tâm hỗ trợ.</span>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className='flex flex-col justify-center gap-2 ' >
              {moreQuestion?.map((item) => {
                return (
                  <div key={item?.id} className='border-1 rounded-3xl p-3 bg-[#ffffff]  cursor-pointer' onClick={() => handleShow(item?.id)} style={{ boxShadow: '0px 4px 10px -1px rgba(0, 0, 0, .08), 0px 0px 4px -1px rgba(0, 0, 0, .04)' }}>
                    <div className='flex justify-between items-center  '>
                      <div >
                        <h5 className=' hover:text-blue-600'>{item?.title}</h5>
                        {
                          show &&
                          <span className={`${id === item?.id ? "block" : 'hidden'} slide-in`}>{item?.direct}</span>
                        }
                      </div>
                      <div className='cursor-pointer'>
                        <FaPlus />
                      </div>
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

export default MainQuesTion