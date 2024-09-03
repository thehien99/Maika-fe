import React, { useState, useEffect } from 'react';
import '../untils/styleBanner.scss'


const texts = ["Dịch thuật đa ngôn ngữ",
  "Viết nội dung chuẩn SEO",
  "Viết các bài quảng cáo",
  "Viết các bài đăng xã hội cuốn hút"
]
  ;
const FadeInLoopText = () => {
  const [index, setIndex] = useState(0);
  const style = {

  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2100); // Thay đổi nội dung mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-loop">
      {texts[index]}
    </div>
  );
};

export default FadeInLoopText;
