import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { FiNavigation } from "react-icons/fi";
import { BiBasket } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiAlertOctagon } from "react-icons/fi";
import { FiDivideCircle } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import { useRef, useState } from 'react';
import { useCart } from "../../context/Cart/CartProvider"

const Header = () => {

  const cartState = useCart()
  const cluseNavbar = useRef()
  const panelCity = useRef()
  const nav = useRef()

  const [allCity, setAllCity] = useState([
    { name: "کرج" },
    { name: "تهران" },
    { name: "بوشهر" },
    { name: "بندرعباس" },
    { name: "بانه" },
    { name: "مریوان" },
    { name: "سنندج" },
    { name: "کرمانشاه" },
    { name: "ایلام" },
    { name: "سقز" },
    { name: "شهر کورد" },
    { name: "اصفهان" },
    { name: "دلیجان" },
    { name: "ابادان" },
  ])
  const [myCity, setMycity] = useState(null)

  const openNavHandler = () => {
    nav.current.classList.replace("right-full", "right-0")
    cluseNavbar.current.classList.replace("hidden", "block")
  }
  const cluseNavHandler = () => {
    nav.current.classList.replace("right-0", "right-full")
    cluseNavbar.current.classList.replace("block", "hidden")
  }

  const handleSelectCity = (e) => {
    setMycity(e.target.innerText)
    panelCity.current.classList.replace("flex", "hidden")
  }

  return (
    <>
      <header className="sticky md:border-b border-b-2 top-0 w-fyll pt-4 md:pb-4 px-2 bg-white z-40">
        <div className="gap-y-3 container pb-2 font-sans text-xl w-full flex flex-wrap md:flex-nowrap items-center justify-center">
          <button className="md:hidden w-1/3 flex justify-start">
            <BiMenu onClick={openNavHandler} className="text-2xl" />
          </button>
          <Link to={'/'} className="md:ml-6 md:w-auto w-1/3">
            <img className="max-w-[100px]" src={"/image/logo/logo.svg"} alt="logo" />
          </Link>
          <button className="md:hidden w-1/3 flex justify-end">
            <FiAlertOctagon className="text-2xl" />
          </button>
          <div className="relative md:right-0 md:top-0 md:w-full w-2/3 h-full flex items-center justify-start">
            <BiSearch className="absolute right-3 text-gray-400 text-2xl" />
            <input type={"text"} className="bg-gray-100 pl-4 text-gray-600 pr-12 py-3 w-full max-w-[600px] rounded-lg outline-none text-sm" placeholder="جسنوجو" />
          </div>
          <div className="flex items-center md:justify-center justify-between md:w-auto w-1/3">
            <div className="group cursor-pointer hidden after:content-['|'] after:h-full after:w-2 after:top-0.5 after:absolute after:-left-7 after:text-gray-300 after: relative md:flex items-center justify-center py-2 px-6 border rounded-lg border-gray-400">
              <BiLogIn className="text-2xl" />
              <span className="text-sm whitespace-nowrap">ورود | ثبت نام</span>
              <div className="group-hover:flex hidden flex-col w-full border absolute top-full right-0 bg-white text-sm rounded-lg shadow">
                <Link to={"/user/login"} className="p-2 hover:text-red-500" >ورود</Link>
                <Link to={"/user/register"} className="border-t p-2 hover:text-red-500">ثبت نام</Link>
              </div>
            </div>
            <div className="group cursor-pointer relative flex mr-6 md:hidden justify-center items-center">
              <BiLogIn className="text-2xl" />
              <span className="text-sm font-sans text-slate-800">ورود</span>
              <div className="group-hover:flex hidden flex-col w-28 border absolute top-full left-0 bg-white text-sm rounded-lg shadow">
                <Link to={"/user/login"} className="p-3 hover:text-red-500" >ورود</Link>
                <Link to={"/user/register"} className="border-t p-3 hover:text-red-500">ثبت نام</Link>
              </div>
            </div>
            <Link to={"cart"} className="md:mr-10 relative">
              <FiShoppingCart className="text-2xl" />
              {cartState.cart.length >= 1 && <span className="absolute bottom-2 left-3 bg-red-500 rounded-full w-6 h-6 text-white text-sm flex justify-center items-center">{cartState.cart.length}</span>}
            </Link>
          </div>
        </div>
      </header>
      <div className="w-full border-b shadow">
        <nav ref={nav} className="md:relative md:top-auto md:right-0 md:w-full w-3/4 bg-white right-full top-0 fixed h-screen md:h-14 md:z-30 z-50 flex justify-between items-center container">
          <ul className="flex w-full md:text-[12px] lg:text-[12.5px] h-screen md:h-auto flex-col-reverse md:flex-row items-start md:items-center px-4 md:px-0 justify-end md:justify-start text-sm font-sans text-gray-700">
            <li className="md:menu gap-x-2 flex hover:text-red-500  md:hidden pt-5 md:pt-0 w-full overflow-y-auto md:w-auto md:hover:text-red-500 border-t md:border-0 cursor-pointer whitespace-nowrap md:h-14 font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 md:flex-row items-start md:items-center">
              <BiMenu className="text-xl select-none" />
              <Link to="/categories">
                دسته بندی کالا ها
              </Link>
            </li>
            <li className="md:menu gap-x-2 hidden md:flex pt-5 md:pt-0 w-full h-full overflow-y-auto md:w-auto md:hover:text-red-500 border-t md:border-0 cursor-pointer whitespace-nowrap md:h-14 font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex-col md:flex-row items-start md:items-center">
              <BiMenu className="text-xl ml-1 select-none hidden md:block" />
              <Link to="/categories">
                دسته بندی کالا ها
              </Link>
              <ul className="menu-hover hidden text-slate-800 md:shadow md:rounded-br-lg md:border-l border-slate-800 mt-2 md:mt-0 w-full flex-col font-normal md:absolute md:right-0 md:top-full md:w-auto z-30 md:bg-white">
                <li className="z-10 md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  کالای دیجیتال
                  <ul className="hidden md:flex xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">1</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  ابزار و تجهیزات صنعتی
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">2</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  مد و پوشاک
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">3</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  کودک و نوزاد
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">4</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  کالاهای سوپرمارکتی
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">5</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  زیبایی و سلامت
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">6</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  خانه و اشپزخانه
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">7</ul>
                </li>
                <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                  لوازم و التحریر
                  <ul className="menu-hover hidden z-20  xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border bg-white shadow">8</ul>
                </li>
              </ul>
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
              <BiBasket className="text-lg text-gray-400" />
              سوپرمارکت
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
              <FiZap className="text-lg text-gray-400" />
              پرفروش ترین
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
              <FiTag className="text-lg text-gray-400 ml-1" />
              تخفیف ها
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:after:absolute after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:hidden after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 flex items-center">
              <FiDivideCircle className="text-lg text-gray-400" />
              شگفت انگیزها
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
              سوالی دارید؟
            </li>
            <li className="w-full min-h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center">
              فروشنده شوید!
            </li>
            <li className="lg:mr-4 w-full hover:text-red-500 md:w-auto min-h-[3rem] flex justify-start items-center">
              <span className="hidden ml-4 lg:block w-0.5 h-8 bg-gray-300 rounded"></span>
              <Link to="/dashboard" className="block md:h-full">
                پنل مدیریت
              </Link>
            </li>
            <li className="w-full py-4 flex items-center justify-between border-b md:hidden">
              <div className="w-full flex items-center justify-center">
                <div className="max-w-[95px] w-full">
                  <img className="w-full object-cover" src="/image/logo/digikala-logo.png" />
                </div>
              </div>
            </li>
          </ul>
          <ul className="lg:block hidden h-full text-[12px] font-sans text-gray-700">
            <li onClick={() => panelCity.current.classList.replace("hidden", "flex")} className="whitespace-nowrap cursor-pointer h-full flex items-center px-2 ">
              <FiNavigation className="text-xl ml-2" />
              {!myCity ? "لطفا شهر خود را انتخاب کنید" : myCity}
            </li>
          </ul>
        </nav>
      </div>
      <span onClick={cluseNavHandler} ref={cluseNavbar} className="md:hidden cursor-pointer hidden fixed z-50 top-0 left-0 w-1/4 h-screen bg-[rgba(0,0,0,0.8)]"></span>
      {/*Panel Select City*/}
      <div ref={panelCity} className="fixed top-0 right-0 z-40 w-screen h-screen hidden items-center justify-center bg-gray-900/60 ">
        <div className="w-[400px] overflow-hidden h-[calc(100vh-25%)] bg-white p-4 rounded-lg">
          <div className="select-none w-full border-b pb-4 font-bold flex justify-between items-center">
            <span>انتخاب شهر</span>
            <FiX onClick={() => panelCity.current.classList.replace("flex", "hidden")} className="text-xl cursor-pointer" />
          </div>
          <div className="w-full px-2 pb-8 h-full overflow-y-scroll flex flex-col items-start justify-start">
            {allCity.map(c => <span onClick={handleSelectCity} className="cursor-pointer block w-full py-4 border-b">{c.name}</span>)}
          </div >
        </div >
      </div >
    </>
  );
}

export default Header;