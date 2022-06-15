import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiBasket } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useRef } from 'react';

const Header = () => {

  const navigatNavbar = useRef()

  const trakerHoverHandler = (e) => {
    let locationTarget = e.target.getBoundingClientRect();
    navigatNavbar.current.style.left = (locationTarget.left - 40) + "px"
    navigatNavbar.current.style.width = locationTarget.width + "px"
  }
  const outTrakerHandler = () => {
    navigatNavbar.current.style.width = '0';
  }

  return (
    <header className="w-fyll pt-4 bg-white border-b">
      <div className="container font-sans text-xl w-full flex items-center justify-center">
        <Link to={'/'} className="ml-6">
          <img className="max-w-[100px]" src={"/image/logo/logo.svg"} alt="logo" />
        </Link>
        <div className="relative w-full h-full flex items-center justify-start">
          <BiSearch className="absolute right-3 text-gray-400 text-2xl" />
          <input type={"text"} className="bg-gray-100 pl-4 text-gray-600 pr-12 py-3 w-full max-w-[600px] rounded-lg outline-none text-sm" placeholder="جسنوجو" />
        </div>
        <div className="flex items-center justify-center">
          <Link to={'/'} className="after:content-['|'] after:h-full after:w-2 after:top-0.5 after:absolute after:-left-7 after:text-gray-300 after: relative flex items-center justify-center py-2 px-6 border rounded-lg border-gray-400">
            <BiLogIn className="text-2xl" />
            <span className="text-sm whitespace-nowrap">ورود | ثبت نام</span>
          </Link>
          <Link to={'/'} className="mr-10">
            <FiShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
      <nav className="relative w-full flex justify-between items-center container">
        <ul className="h-14 flex items-center justify-center text-sm font-sans text-gray-700">
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] relative h-full pl-4 flex items-center">
            <BiMenu className="text-xl ml-1 select-none" />
            دسته بندی کالا ها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden  h-full px-2 flex items-center">
            <BiBasket className="text-xl ml-1" />
            سوپرمارکت
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden  h-full px-2 flex items-center">
            <FiZap className="text-xl ml-1" />
            پرفروش ترین
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden  h-full px-2 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            تخفیف ها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden relative after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] h-full pl-4 flex items-center">
            <BiMapAlt className="text-xl ml-1" />
            شگفت انگیزها
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden  h-full px-2 flex items-center">
            سوالی دارید؟
          </li>
          <li onMouseOut={outTrakerHandler} onMouseOver={trakerHoverHandler} className="cursor-pointer overflow-hidden  h-full px-2 flex items-center">
            فروشنده شوید!
          </li>
        </ul>
        <ul className="h-16 text-sm font-sans text-gray-700">
          <li className="cursor-pointer overflow-hidden h-full flex items-center px-2 ">
            <BiMapAlt className="text-xl" />
            مطفا شهر خود را انتخاب کنید
          </li>
        </ul>
        <span ref={navigatNavbar} className="duration-200 transition-all block h-[3px] rounded-full bg-red-600 absolute bottom-0"></span>
      </nav>
    </header>
  );
}

export default Header;