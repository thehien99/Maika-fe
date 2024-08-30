import Product from "../../Item/product";
import { formatVietnameseToString } from "../../untils/formatVietnameseToString";
import "../header/header.scss"
import { useState } from "react"


export const Header = () => {
  const [hover, setHover] = useState(null)

  const listProductLeft = [
    { idx: "2", name: "Sản phẩm" },
    { idx: "3", name: "Tài nguyên" },
  ]

  const listProductRight = [
    { idx: "5", name: "Tiếng Việt", option: "Tiếng Anh" },
    { idx: "6", name: "Đăng ký" },
    { idx: "7", name: "Đăng nhập" }
  ]
  console.log(formatVietnameseToString("Đăng nhập"));

  return (
    <div className="w-full h-full bg-[#000c8c] relative">
      <div className="container fixed top-0 z-10 right-[7%] p-4 flex justify-around items-center">
        <div className="flex items-center gap-6">
          <div>
            <h4>MAIKA</h4>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex justify-center items-center">
              <li className="nav-item has-submenu">
                {listProductLeft?.map((item) => {
                  return (
                    <a onMouseEnter={() => setHover(item?.idx)} href={`login`} className="ms-3 text-white text text-center no-underline	" key={item?.idx} >{item?.name}</a>
                  )
                })}
                <div className="submenu">
                  <div>
                    <a href="#web-dev " className="submenu-link no-underline	">
                      <Product hover={hover} />
                    </a>
                  </div>
                </div>
              </li>
              <a href="" className="ms-3 text-white text text-center no-underline	">Bảng giá</a>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              {listProductRight?.map((item) => {
                return (
                  <a className="ms-3 text-white no-underline	" href={'login'} key={item?.idx}>{item?.name}</a>
                )
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )


  // return (
  //   <div className="navbar container relative">
  //     <div className="nav-menu fixed z-50 top-0">
  //       <div className="nav-item">
  //         <h4 className="uppercase text-white text-center">Maika</h4>
  //       </div>
  //       <li className="nav-item has-submenu">
  //         {
  //           listProductLeft?.map((item) => {
  //             return (
  //               <a href="#services" className="nav-link">
  //                 {item?.name}
  //               </a>
  //             )
  //           })
  //         }
  //         <div className="submenu">
  //           <div>
  //             <a href="#web-dev" className="submenu-link">
  //               <Product />
  //             </a>
  //           </div>
  //         </div>
  //       </li>
  //     </div>
  //     <ul>
  //       <li>
  //         {listProductRight?.map((item) => {
  //           return (
  //             <a href="">{item?.name}</a>
  //           )
  //         })}
  //       </li>
  //     </ul>
  //   </div>
  // );
};


