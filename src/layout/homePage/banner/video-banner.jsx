import React, { useEffect, useRef, useState } from 'react'
const VideoBanners = () => {

  const [scale, setScale] = useState(1);
  const videoRef = useRef(null)

  const autoPlay = () => {
    videoRef && videoRef.current && videoRef.current.play()
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Tính toán tỷ lệ thu nhỏ/tăng kích thước dựa trên vị trí cuộn
      const newScale = Math.max(1 - scrollPosition / 2000); // Tùy chỉnh hệ số theo nhu cầu
      autoPlay()
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    // Xóa event listener khi component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div className={` w-[90%] h-auto bg-[#ccc] rounded-3xl`} style={{ backgroundColor: "rgba(247, 243, 255, .1)", border: "1px solid rgba(255, 255, 255, .3)", transform: `scale(${scale})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}>
      <div className={`rounded-3xl `}>
        <div className='p-[0.75rem]'>
          <span className='text-white font-bold'>Xem video</span>
          <span className='ms-2 p-[7px] font-bold rounded-2xl bg-white'>Ứng dụng web</span>
        </div>
        <div className='p-[0.5rem]'>
          <video muted controls loop ref={videoRef}>
            <source src='https://media.maika.ai/video/Maika%20VN%20Cut.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoBanners