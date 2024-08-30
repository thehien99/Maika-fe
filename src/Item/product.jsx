import icons from "../untils/icon"
const Product = ({ hover }) => {
  const { SlSupport, FaPencilAlt, FaChrome, CiYoutube, TbSeo, AiOutlineShoppingCart, RiAdvertisementLine, TbLogs } = icons

  console.log(hover);


  return (
    <div>
      {hover == 2 && <div className="container bg-[#fff] p-4 rounded-md ">
        <div className="row">
          <div className="col-6">
            <h5 className="text-[#ccc]">Tính năng</h5>
            <div className="product-sub flex flex-col justify-center gap-8 mt-6 ">
              <div>
                <div className="flex">
                  <div className="flex justify-center items-center p-3 w-[50px] h-[50px] bg-blue-500 rounded-lg ">
                    <FaPencilAlt className="text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="gap-4 ms-4 font-bold">AI viết lách</span>
                    <i className="text-[#ccc] ms-4">Mẫu tạo nội dung và lên ý tưởng cho bạn chỉ trong vài giây</i>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="flex justify-center items-center  p-3 w-[50px] h-[50px] bg-blue-500 rounded-lg ">
                    <FaChrome className="text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="gap-4 ms-4 font-bold">Tiện ích mở rộng</span>
                    <i className=" ms-4 text-[#ccc]">Làm việc và học tập mượt mà với công nghệ AI</i>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-6 bg-[#DDDDDD] rounded-lg">
            <div className="p-2">
              <h5 className="text-[#808080]">Lĩnh vực sử dụng</h5>
              <div>
                <ul>
                  <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                    <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                      <RiAdvertisementLine />
                    </i>
                    <div className="flex flex-col justify-center">
                      <span className="font-bold">
                        Tiếp thị quảng cáo
                      </span>
                      <i className="mt-2 text-[#999999]">Tìm ý tưởng lên kế hoạch cho nội dung chiến lược marketing</i>
                    </div>
                  </li>
                  <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                    <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                      <AiOutlineShoppingCart /></i>
                    <div className="flex flex-col justify-center">
                      <span className="font-bold">
                        Kinh doanh online
                      </span>
                      <i className="mt-2 text-[#999999]">Nâng cao trải nghiệm mua hàng trực tuyến cho khách hàng</i>
                    </div>                  </li>
                  <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                    <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                      <CiYoutube /></i>
                    <div className="flex flex-col justify-center">
                      <span className="font-bold">
                        Sáng tạo nội dung
                      </span>
                      <i className="mt-2 text-[#999999]">Rút ngắn quy trình sáng tạo nội dung và tăng hiệu suất làm việc</i>
                    </div>
                  </li>
                  <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                    <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                      <TbSeo /></i>
                    <div className="flex flex-col justify-center">
                      <span className="font-bold">
                        SEO & Website
                      </span>
                      <i className="mt-2 text-[#999999]">Tăng doanh thu và độ nhận diện thương hiệu bằng các từ khóa lọt top tìm kiếm</i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {hover == 3 && <div>
        <div className=" bg-[#fff] p-4 rounded-lg">
          <h5 className="text-black">Hỗ trợ</h5>
          <div>
            <ul className="!p-0">
              <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                  <TbLogs /></i>
                <div className="flex flex-col justify-center">
                  <span className="font-bold">
                    Blog
                  </span>
                  <i className="mt-2 text-[#999999]">Cập nhật tin tức AI và chuyên môn marketing</i>
                </div>
              </li>
              <li className="!text-black !justify-start gap-3 flex !items-start  mt-4">
                <i className="text-4xl text-[#3399FF] p-2 rounded-xl bg-[#fff]">
                  <SlSupport /></i>
                <div className="flex flex-col justify-center">
                  <span className="font-bold">
                    Trung tâm hỗ trợ
                  </span>
                  <i className="mt-2 text-[#999999]">Nguồn tài nguyên có sẵn mang đến sự hỗ trợ toàn diện dành cho bạn</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      }

    </div >
  )
}

export default Product