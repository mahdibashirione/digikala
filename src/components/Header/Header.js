import { Link } from "react-router-dom";
import { useEffect, useRef, useState, Fragment } from 'react';
import { BiBasket, BiMenu, BiSearch, BiLogIn, BiCaretDown } from "react-icons/bi";
import { FiUser, FiLogOut, FiNavigation, FiZap, FiX, FiShoppingCart, FiAlertOctagon, FiDivideCircle, FiTag } from "react-icons/fi";
import { useCart } from "../../context/Cart/CartProvider"
import { useAuth, useAuthAction } from "../../context/Auth/AuthProvider";
import { Menu, Transition } from '@headlessui/react'
import HeaderMobile from "./HeaderMobile";

const Header = () => {

  const cartState = useCart()
  const cluseNavbar = useRef()
  const panelCity = useRef()
  const nav = useRef()
  const auth = useAuth()
  const setAuth = useAuthAction()

  const [allCity, setAllCity] = useState([
    { id: 1, name: "کرج" },
    { id: 2, name: "تهران" },
    { id: 3, name: "بوشهر" },
    { id: 4, name: "بندرعباس" },
    { id: 5, name: "بانه" },
    { id: 6, name: "مریوان" },
    { id: 7, name: "سنندج" },
    { id: 8, name: "کرمانشاه" },
    { id: 9, name: "ایلام" },
    { id: 10, name: "سقز" },
    { id: 11, name: "شهر کورد" },
    { id: 12, name: "اصفهان" },
    { id: 13, name: "دلیجان" },
    { id: 14, name: "ابادان" },
  ])

  const [myCity, setMycity] = useState(null)

  useEffect(() => {
    myCity && localStorage.setItem("MyCity", JSON.stringify(myCity))
  }, [myCity])

  useEffect(() => {
    const cityLocalStorage = JSON.parse(localStorage.getItem("MyCity"))
    cityLocalStorage && setMycity(cityLocalStorage)
  }, [])

  const openNavHandler = () => {
    nav.current.classList.replace("-right-[600px]", "right-0")
    cluseNavbar.current.classList.replace("-left-[500px]", "left-0")
  }

  const cluseNavHandler = () => {
    nav.current.classList.replace("right-0", "-right-[600px]")
    cluseNavbar.current.classList.replace("left-0", "-left-[500px]")
  }

  const handleSelectCity = (e) => {
    setMycity(e.target.innerText)
    panelCity.current.classList.replace("top-0", "top-full")
  }

  const handleLogoutAcount = () => {
    localStorage.clear("AuthState")
    setAuth(null)
  }

  let isMobile = window.innerWidth < 768;


  return (
    <>
      {isMobile ? <HeaderMobile panelCity={panelCity} myCity={myCity} /> : <header className="sticky top-0 w-fyll pt-4 md:pb-4 px-2 bg-white z-40">
        <div className="gap-y-4 container pb-2 md:pb-0 font-sans text-xl w-full flex flex-wrap md:flex-nowrap items-center justify-center">
          <button className="md:hidden w-1/3 flex justify-start">
            <BiMenu onClick={openNavHandler} className="text-2xl" />
          </button>
          <Link to={'/'} className="md:ml-6 md:w-auto w-1/3 flex items-center justify-center">
            <img className="max-w-[100px]" src={"/image/logo/logo.svg"} alt="logo" />
          </Link>
          <button className="md:hidden w-1/3 flex justify-end">
            <FiAlertOctagon className="text-2xl" />
          </button>
          <div className="relative md:right-0 md:top-0 md:w-full w-2/3 h-full flex items-center justify-start">
            <BiSearch className="absolute right-3 text-[#A1A3A8] text-2xl" />
            <input type={"text"} className="bg-[#F0F0F1] pl-4 text-gray-600 pr-12 py-3 w-full max-w-[300px] rounded-lg outline-none text-sm" placeholder="جسنوجو" />
          </div>
          <div className="px-2 h-[44px] flex items-center justify-end md:w-auto w-1/3">
            {auth ? <Menu as="div" className="ml-5 relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center justify-center w-full rounded-lg bg-black bg-opacity-20 p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <FiUser className="h-5 w-5 text-white hover:text-violet-100" />
                  <BiCaretDown />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-44 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="p-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={`/user/${auth.token}`}
                          className={`${active ? 'bg-blue-400 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                        >
                          {active ? <UserPageActiveIcon aria-hidden="true" /> : <UserPageIcon aria-hidden="true" />}
                          حساب کاربری
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="p-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button onClick={handleLogoutAcount}
                          className={`${active ? 'bg-red-400 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                        >
                          {active ? <OutActiveIcon aria-hidden="true" /> : <OutIcon aria-hidden="true" />}
                          خروج از حساب
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu> :
              <>
                <div className="md:ml-10 group cursor-pointer hidden after:content-['|'] after:h-full after:w-2 after:top-0.5 after:absolute after:-left-7 after:text-gray-300 after: relative md:flex items-center justify-center py-2 px-6 border rounded-lg border-gray-400">
                  <BiLogIn className="text-2xl" />
                  <span className="text-sm whitespace-nowrap">ورود | ثبت نام</span>
                  <div className="group-hover:flex hidden flex-col w-full border absolute top-full right-0 bg-white text-sm rounded-lg shadow">
                    <Link to={"/user/login"} className="p-2 hover:text-red-500" >ورود</Link>
                    <Link to={"/user/register"} className="border-t p-2 hover:text-red-500">ثبت نام</Link>
                  </div>
                </div>
                <div className="ml-5 group cursor-pointer relative flex mr-6 md:hidden justify-center items-center">
                  <BiLogIn className="text-2xl" />
                  <span className="text-sm font-sans text-slate-800">ورود</span>
                  <div className="group-hover:flex hidden flex-col w-28 border absolute top-full left-0 bg-white text-sm rounded-lg shadow">
                    <Link to={"/user/login"} className="p-3 hover:text-red-500" >ورود</Link>
                    <Link to={"/user/register"} className="border-t p-3 hover:text-red-500">ثبت نام</Link>
                  </div>
                </div>
              </>
            }
            <Link to={"cart"} className="relative w-[25px] h-[25px] min-w-[25px] min-h-[25px]">
              <FiShoppingCart className="text-2xl" />
              {cartState.cart.length >= 1 && <span className="absolute bottom-2 left-3 bg-red-500 rounded-full w-6 h-6 text-white text-sm flex justify-center items-center">{cartState.cart.length}</span>}
            </Link>
          </div>
        </div>
      </header>}
      <nav className="w-full border-b shadow">
        <div ref={nav} className="duration-300 transition-all md:relative md:top-auto md:right-0 md:w-full w-3/4 bg-white -right-[600px] top-0 fixed h-screen md:h-14 md:z-30 z-50 flex justify-between items-center container">
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
            <li onClick={() => panelCity.current.classList.replace("top-full", "top-0")} className="whitespace-nowrap cursor-pointer h-full flex items-center px-2 ">
              <FiNavigation className="text-xl" />
              <span className="text-[0.9rem] mx-2">{!myCity ? "لطفا شهر خود را انتخاب کنید" : myCity}</span>
            </li>
          </ul>
        </div>
      </nav>
      <span onClick={cluseNavHandler} ref={cluseNavbar} className="duration-400 transition-all md:hidden cursor-pointer fixed z-50 top-0 -left-[500px] w-1/4 h-screen bg-[rgba(0,0,0,0.8)]"></span>

      {/*Panel Select City*/}
      <div ref={panelCity} className="duration-300 absolute top-full right-0 z-40 w-screen h-screen bg-gray-900/60 ">
        <div className="w-full overflow-hidden h-full bg-white p-4">
          <div className="select-none w-full border-b pb-4 font-bold flex justify-between items-center">
            <span>انتخاب شهر</span>
            <FiX onClick={() => panelCity.current.classList.replace("top-0", "top-full")} className="text-xl cursor-pointer" />
          </div>
          <ul className="w-full px-2 pb-8 h-full overflow-y-scroll flex flex-col items-start justify-start">
            {allCity.map(c => <li key={c.id} onClick={handleSelectCity} className="odd:bg-gray-100 cursor-pointer block w-full py-4 border-b hover:bg-blue-500 hover:text-white px-2">{c.name}</li>)}
          </ul>
        </div >
      </div >
    </>
  );

  function UserPageIcon() {
    return (
      <FiUser className="text-xl text-blue-500 mx-2" />
    )
  }

  function UserPageActiveIcon() {
    return (
      <FiUser className="text-xl text-white mx-2" />
    )
  }

  function OutIcon() {
    return (
      <FiLogOut className="text-xl text-red-500 mx-2" />
    )
  }

  function OutActiveIcon() {
    return (
      <FiLogOut className="text-xl text-white mx-2" />
    )
  }

}

export default Header;