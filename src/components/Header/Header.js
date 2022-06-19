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

  const trakerHoverHandler = (e) => {
    let locationTarget = e.target.getBoundingClientRect();
    navigatNavbar.current.style.left = (locationTarget.left - 40) + "px"
    navigatNavbar.current.style.width = locationTarget.width + "px"
  }
  const outTrakerHandler = () => {
    navigatNavbar.current.style.width = '0';
  }

  const openNavHandler = () => {
    nav.current.classList.replace("left-full", "left-0")
  }
  const cluseNavHandler = () => {
    nav.current.classList.replace("left-0", "left-full")
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
      <nav ref={nav} className="md:relative md:top-auto md:left-0 w-full bg-white left-full top-0 fixed h-screen md:h-12 z-50 flex justify-between items-center container">
        <ul className="h-full w-full flex flex-col md:flex-row items-start md:items-center px-4 md:px-0 overflow-scroll justify-start text-sm font-sans text-gray-700">
          <li className="md:hidden w-full py-4 flex items-center justify-between border-b">
            <FiX onClick={cluseNavHandler} className="text-2xl cursor-pointer" />
            <img src="/image/logo/logo.svg" />
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="group cursor-pointer whitespace-nowrap  md:h-full h-14  font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex items-center">
            <BiMenu className="text-xl ml-1 select-none hidden md:block relative" />
            دسته بندی کالا ها
            <ul className="bg-white font-normal absolute hidden rounded-br-lg overflow-hidden w-36 border border-t-0 top-full right-0 group-hover:flex flex-col items-start">
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">کالای دیجیتال</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">ابزار و تجهیزات صنعتی</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">مد و پوشاک</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">کودک و نوزاد</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">کالاهای سوپرمارکتی</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">زیبایی و سلامت</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">خانه و اشپزخانه</li>
              <li className="w-full py-4 hover:bg-gray-200 hover:text-red-500 pr-2">لوازم و التحریر</li>
            </ul>
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14 md:px-2 flex items-center">
            <BiBasket className="text-xl ml-1" />
            سوپرمارکت
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14 md:px-2 flex items-center">
            <FiZap className="text-xl ml-1" />
            پرفروش ترین
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14 md:px-2 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            تخفیف ها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14    relative after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            شگفت انگیزها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14 md:px-2 flex items-center">
            سوالی دارید؟
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer whitespace-nowrap  md:h-full h-14 md:px-2 flex items-center">
            فروشنده شوید!
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
    </>
  );
}

export default Header;