import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useRef } from 'react';

const Header = () => {

  const navigatNavbar = useRef()
  const nav = useRef()
  const cluseNavbar = useRef()

  const trakerHoverHandler = (e) => {
    let locationTarget = e.target.getBoundingClientRect();
    navigatNavbar.current.style.left = (locationTarget.left - 40) + "px"
    navigatNavbar.current.style.width = locationTarget.width + "px"
  }
  const outTrakerHandler = () => {
    navigatNavbar.current.style.width = '0';
  }

  const openNavHandler = () => {
    nav.current.classList.replace("right-full", "right-0")
    cluseNavbar.current.classList.replace("hidden", "block")
  }
  const cluseNavHandler = () => {
    nav.current.classList.replace("right-0", "right-full")
    cluseNavbar.current.classList.replace("block", "hidden")
  }

  return (
    <>
      <header className="sticky top-0 w-fyll pt-4 md:pb-4 px-2 bg-white z-40">
        <div className="container font-sans text-xl w-full flex flex-wrap md:flex-nowrap items-center justify-center">
          <button className="md:hidden w-1/3 flex justify-start">
            <BiMenu onClick={openNavHandler} className="text-2xl" />
          </button>
          <Link to={'/'} className="md:ml-6 md:w-auto w-1/3">
            <img className="max-w-[100px]" src={"/image/logo/logo.svg"} alt="logo" />
          </Link>
          <button className="md:hidden w-1/3 flex justify-end">
            <FiInfo className="text-2xl" />
          </button>
          <span className="w-full h-0.5 bg-gray-200 block my-2 md:hidden"></span>
          <div className="relative md:right-0 md:top-0 md:w-full w-2/3 h-full flex items-center justify-start">
            <BiSearch className="absolute right-3 text-gray-400 text-2xl" />
            <input type={"text"} className="bg-gray-100 pl-4 text-gray-600 pr-12 py-3 w-full max-w-[600px] rounded-lg outline-none text-sm" placeholder="جسنوجو" />
          </div>
          <div className="flex items-center md:justify-center justify-between md:w-auto w-1/3">
            <Link to={'/login'} className="hidden after:content-['|'] after:h-full after:w-2 after:top-0.5 after:absolute after:-left-7 after:text-gray-300 after: relative md:flex items-center justify-center py-2 px-6 border rounded-lg border-gray-400">
              <BiLogIn className="text-2xl" />
              <span className="text-sm whitespace-nowrap">ورود | ثبت نام</span>
            </Link>
            <Link to={"/login"} className="flex mr-6 md:hidden justify-center items-center">
              <BiLogIn className="text-2xl" />
              <span className="text-sm font-sans text-slate-800">ورود</span>
            </Link>
            <Link to={"cart"} className="md:mr-10">
              <FiShoppingCart className="text-2xl" />
            </Link>
          </div>
          <span className="w-full h-0.5 bg-gray-200 block mt-2 md:hidden"></span>
        </div>
      </header>
      <nav ref={nav} className="md:relative md:top-auto md:right-0 md:w-full w-3/4 bg-white right-full top-0 fixed h-screen md:h-12 z-50 flex justify-between items-center container">
        <ul className="w-full max-h-screen md:h-auto flex flex-col-reverse md:flex-row items-start md:items-center px-4 md:px-0 justify-end md:justify-start text-sm font-sans text-gray-700">
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="pt-5 md:pt-0 w-full h-full overflow-y-auto md:w-auto md:hover:text-red-500 border-t md:border-0 group cursor-pointer whitespace-nowrap md:h-14 font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex flex-col md:flex-row items-start md:items-center">
            <BiMenu className="text-xl ml-1 select-none hidden md:block" />
            دسته بندی کالا ها
            <ul className="text-slate-800 md:shadow md:rounded-br-lg md:border-l border-slate-800 mt-2 md:mt-0 w-full flex flex-col font-normal md:absolute md:right-0 md:top-full md:w-auto z-30 md:hidden md:group-hover:flex md:bg-white">
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">کالای دیجیتال</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">ابزار و تجهیزات صنعتی</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">مد و پوشاک</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">کودک و نوزاد</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">کالاهای سوپرمارکتی</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">زیبایی و سلامت</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">خانه و اشپزخانه</li>
              <li className="w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">لوازم و التحریر</li>
            </ul>
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
            <BiBasket className="text-xl ml-1" />
            سوپرمارکت
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
            <FiZap className="text-xl ml-1" />
            پرفروش ترین
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            تخفیف ها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:after:absolute after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:hidden after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            شگفت انگیزها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
            سوالی دارید؟
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
            فروشنده شوید!
          </li>
          <li className="w-full py-4 flex items-center justify-between border-b md:hidden">
            <div className="w-full flex items-center justify-center">
              <div className="max-w-[95px] w-full">
                <img className="w-full object-cover" src="/image/logo/digikala-logo.png" />
              </div>
            </div>
          </li>
        </ul>
        <ul className="lg:block hidden h-full text-sm font-sans text-gray-700">
          <li className="whitespace-nowrap cursor-pointer h-full flex items-center px-2 ">
            <BiMapAlt className="text-xl" />
            مطفا شهر خود را انتخاب کنید
          </li>
        </ul>
        <span ref={navigatNavbar} className="hidden duration-200 transition-all md:block h-[3px] rounded-full bg-red-600 absolute bottom-0"></span>
      </nav>
      <span onClick={cluseNavHandler} ref={cluseNavbar} className="md:hidden cursor-pointer hidden fixed z-50 top-0 left-0 w-1/4 h-screen bg-[rgba(0,0,0,0.8)]"></span>
    </>
  );
}

export default Header;