import Product from "../../Item/product";
import { formatVietnameseToString } from "../../untils/formatVietnameseToString";
import icons from "../../untils/icon";
import "../header/header.scss"
import { useEffect, useState } from "react"


export const Header = () => {
  const [hover, setHover] = useState(null)
  const [scrollHeader, setScrollHeader] = useState(false)
  const [width, setWidth] = useState(null)
  const [show, setShow] = useState(false)
  const { IoMenu } = icons

  const listProductLeft = [
    { idx: "2", name: "Sản phẩm" },
    { idx: "3", name: "Tài nguyên" },
  ]

  const listProductRight = [
    { idx: "5", name: "Tiếng Việt", option: "Tiếng Anh" },
    { idx: "6", name: "Đăng ký" },
    { idx: "7", name: "Đăng nhập" }
  ]
  const block = window.innerWidth

  useEffect(() => {
    setWidth(block)
  }, [block])


  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShowMenu = () => {
    setShow(!show)
  }

  return (
    <div className="w-full h-full bg-[#000c8c] relative">
      <div className="header-nav" onClick={handleShowMenu}>
        <IoMenu />
      </div>
      <div className={` header container md:fixed ${scrollHeader ? 'header-scroll' : ""} ${show ? 'main-header' : 'sm:hidden'} md:top-0 z-10 !sm:w-full  md:right-[3%] xl:right-[6%] p-4 md:flex md:justify-around md:items-center`}>
        <div className="flex items-center gap-6 relative">
          <div className="sm:hidden md:block xs:hidden">
            {scrollHeader ? <h4 className="text-white">MAIKA</h4> : <h4>MAIKA</h4>}
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex justify-center items-center xs:p-0">
              <li className="nav-item has-submenu">
                {listProductLeft?.map((item) => {
                  return (
                    <a onMouseEnter={() => setHover(item?.idx)} href='' className="ms-3 text-white text text-center no-underline	hover:no-underline" key={item?.idx} >{item?.name}</a>
                  )
                })}
                <div className="submenu">
                  <div>
                    <a href="#web-dev " className="submenu-link no-underline hover:no-underline text-black w-full">
                      <Product hover={hover} />
                    </a>
                  </div>
                </div>
              </li>
              <a href="/login" className="ms-3 text-white text text-center no-underline hover:no-underline sm:hidden md:block">Bảng giá</a>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li className="has-menu-login">
              {listProductRight?.map((item) => {
                return (
                  <a className="ms-3 text-white no-underline hover:no-underline" href={'login'} key={item?.idx}>{item?.name}</a>
                )
              })}
            </li>
          </ul>
        </div>
      </div>

    </div >
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


