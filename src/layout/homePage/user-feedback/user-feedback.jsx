import React from 'react'
import review1 from "../../../assets/imgUserFeedBack/testimonial-1.jpg"
import review2 from "../../../assets/imgUserFeedBack/testimonial-2.jpg"
import review3 from "../../../assets/imgUserFeedBack/testimonial-3.jpg"
import review4 from "../../../assets/imgUserFeedBack/testimonial-4.jpg"
import review5 from "../../../assets/imgUserFeedBack/testimonial-5.jpg"
import review6 from "../../../assets/imgUserFeedBack/testimonial-6.jpg"
import review7 from "../../../assets/imgUserFeedBack/testimonial-7.jpg"
import review8 from "../../../assets/imgUserFeedBack/testimonial-8.jpg"


const UserFeedback = () => {

  const userReview = [
    {
      id: 1, imgUser: review1, name: 'Quốc Hiệp', location: 'SEO Freelancer', title: "Maika AI - “vũ khí bí mật” của Freelancer",
      direct:
        'Mỗi khi viết bài SEO, nỗi sợ bí ý tưởng lại hiện lên trong đầu mình. Nhờ có Maika AI, mình đã bớt căng thẳng và tự tin hơn trong việc trình bày. Maika giúp mình tìm ý tưởng, lập dàn ý và viết bài hoàn chỉnh từ A đến Z. Từ công suất 2 bài/ngày của lúc trước, mình đã nâng lên 5 bài/ngày mà vẫn đảm bảo thời gian để vui chơi giải trí'
    },
    {
      id: 2, imgUser: review2, name: 'Nguyễn Vy', location: 'Marketing Leader', title: "Giảm áp lực, tăng hiệu suất công việc của nhân viên",
      direct:
        'Đặc thù ngành E-commerce phải làm việc liên tục với cường độ cao mỗi khi có đợt campain. Mình khá bất ngờ vì Maika AI hỗ trợ khá tốt phần lên kế hoạch nội dung, lên ý tưởng, viết kịch bản TikTok... Nhờ đó, các thành viên hoàn thành công việc đúng deadline, sáng tạo hơn và đặc biệt là giảm áp lực, work-life balance.'
    },
    {
      id: 3, imgUser: review3, name: 'Nam Phương', location: 'Chủ shop Second Love', title: "Tiết kiệm thời gian, kiếm được nhiều tiền hơn",
      direct:
        'Là 1 chủ shop phải tự làm hết mọi thứ, tôi kiệt sức với những công việc không tên mỗi ngày. Từ khi dùng Maika AI để viết mô tả sản phẩm, viết content bán hàng, phản hồi đánh giá,... tôi tiết kiệm được rất nhiều thời gian và kiếm được nhiều tiền hơn.'
    },
    {
      id: 4, imgUser: review4, name: 'Duy Dương', location: 'Sinh viên', title: "Học tập nhanh và hiệu quả hơn",
      direct:
        'Maika AI giúp tớ tiết kiệm rất nhiều thời gian và công sức trong việc nghiên cứu tài liệu phục vụ cho học tập và làm báo cáo, bài luận. Tớ có thể nắm được nội dung của video Youtube hàng giờ đồng hồ chỉ trong vài phút. Tớ cũng biết được nội dung chính của hàng chục trang tài liệu chỉ trong thời gian ngắn. Đó là nhờ tính năng tóm tắt Youtube và tóm tắt bài viết của Maika AI.'
    },
    {
      id: 5, imgUser: review5, name: 'Nguyễn Ngọc Hiền', location: 'Content Marketing', title: "Maika AI - Cộng sự đắc lực, nâng cao năng suất",
      direct:
        "Mình khá bất ngờ vì nội dung Maika AI tạo ra tương đối hoàn chỉnh, thậm chí còn chèn sẵn cả icon cho những dạng content trên mạng xã hội. Mình không cần mất nhiều thời gian để chỉnh sửa nhiều. Đây đúng là cộng sự đắc lực giúp mình nâng cao năng suất làm việc mà vẫn còn thời gian trống để sống thật chất"
    },
    {
      id: 6, imgUser: review6, name: 'Trần Thị Kim Thi', location: 'Content Creator', title: "Tìm ý tưởng mới chỉ trong vài phút",
      direct:
        "Chỉ cần nhập những thông tin cần thiết là Maika AI nhanh chóng đưa ra những ý tưởng rất đa dạng. Tôi có thể sử dụng ngay những ý tưởng này hoặc “chắp bút” thêm để sáng tạo bay xa. Maika AI thật sự là một cộng sự gỡ “bí” hiệu quả. Không còn loay hoay tìm kiếm idea và cũng không còn stress với việc sáng tạo"
    },
    {
      id: 7, imgUser: review7, name: 'Nguyễn Hiếu Ngân', location: 'Content Marketing', title: "Quân sư content marketing đáng tin cậy",
      direct:
        "Viết content cho mạng xã hội mỗi ngày khiến tôi đôi lúc bị ám ảnh và kiệt sức với câu hỏi: “Phải viết cái gì mới mẻ đây?”. Maika AI xuất hiện như một quân sư content marketing đáng tin cậy luôn đồng hành cùng tôi trong mọi task. Maika AI giúp tôi tự tin hoàn thành các deadline thật nhẹ nhàng"
    },
    {
      id: 8, imgUser: review8, name: 'Như Lê', location: 'Content Leader', title: "Công cụ SEO thời đại mới",
      direct:
        "Maika AI vừa nghiên cứu được từ khóa vừa viết được content chuẩn SEO. Team của tôi đã tiết kiệm được rất nhiều thời gian viết bài. Maika AI là công cụ rất nên sử dụng nếu muốn đẩy nhanh năng suất và chất lượng SEO"
    },

  ]
  return (
    <div className='w-full h-full bg-[#f3f7ff]'>
      <div className='p-16 container'>
        <div>
          <h1 className='text-center font-bold'>Maika đã giúp gì cho người dùng?</h1>
        </div>

        <div className='grid grid-cols-4 justify-center items-center gap-4 p-10'>
          {userReview?.map((item) => {
            return (
              <div key={item?.id} className='border-2 p-6 rounded-3xl bg-[#ffffff] ' style={{ boxShadow: '0px 4px 10px -1px rgba(0, 0, 0, .08), 0px 0px 4px -1px rgba(0, 0, 0, .04)' }}>
                <div className='flex flex-col justify-center gap-4'>
                  <div className='user-name flex gap-3'>
                    <img src={item?.imgUser} alt="" className='w-[50px] rounded-full' />
                    <div className='flex flex-col justify-center'>
                      <span className='font-bold'>{item?.name}</span>
                      <span className='text-zinc-400'>{item?.location}</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start items-center gap-3'>
                    <h6>{item?.title}</h6>
                    <span className='user-review-sub text-zinc-600'>
                      {item?.direct}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserFeedback