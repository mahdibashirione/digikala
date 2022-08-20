import { Link } from "react-router-dom";
import { useEffect, useRef, useState, Fragment } from 'react';
import { BiBasket, BiMenu, BiSearch, BiLogIn, BiCaretDown } from "react-icons/bi";
import { FiUser, FiLogOut, FiMapPin, FiZap, FiChevronLeft, FiX, FiShoppingCart, FiDivideCircle, FiTag } from "react-icons/fi";
import { useCart } from "../../context/Cart/CartProvider"
import { useAuth, useAuthAction } from "../../context/Auth/AuthProvider";
import { Menu, Transition } from '@headlessui/react'
import HeaderMobile from "./HeaderMobile";

const Header = () => {

  const [category, setCategory] = useState([
    {
      menu: "کالای دیجیتال",
      addres: "",
      backMenu: [
        { title: "لوازم جانبی گوشی موبایل", addres: "" },
        { title: "لوازم جانبی گوشی موبایل", addres: "" },
        { title: "لوازم جانبی گوشی موبایل", addres: "" },
        { title: "لوازم جانبی گوشی موبایل", addres: "" },
      ]
    },
    {
      menu: "ابزار و تجهیزات صنعتی",
      addres: "",
      backMenu: [
        { title: "خودروهاس ایرانی و خارجی", addres: "" },
        { title: "خودروهاس ایرانی و خارجی", addres: "" },
        { title: "خودروهاس ایرانی و خارجی", addres: "" },
        { title: "خودروهاس ایرانی و خارجی", addres: "" },
      ]
    },
    {
      menu: "مد و پوشاک",
      addres: "",
      backMenu: [
        { title: "مردانه", addres: "" },
        { title: "مردانه", addres: "" },
        { title: "مردانه", addres: "" },
        { title: "مردانه", addres: "" },
      ]
    },
    {
      menu: "کودک و نوزاد",
      addres: "",
      backMenu: [
        { title: "کالا های اساسی و خوار و بار", addres: "" },
        { title: "کالا های اساسی و خوار و بار", addres: "" },
        { title: "کالا های اساسی و خوار و بار", addres: "" },
        { title: "کالا های اساسی و خوار و بار", addres: "" },
      ]
    },
    {
      menu: "کالا های سوپرمارکتی",
      addres: "",
      backMenu: [
        { title: "اسباب بازی", addres: "" },
        { title: "اسباب بازی", addres: "" },
        { title: "اسباب بازی", addres: "" },
        { title: "اسباب بازی", addres: "" },
      ]
    },
    {
      menu: "زیبایی و سلامت",
      addres: "",
      backMenu: [
        { title: "ظروف سنتی", addres: "" },
        { title: "ظروف سنتی", addres: "" },
        { title: "ظروف سنتی", addres: "" },
        { title: "ظروف سنتی", addres: "" },
      ]
    },
    {
      menu: "خانه و آشپزخانه",
      addres: "",
      backMenu: [
        { title: "لوازم بهداشتی", addres: "" },
        { title: "لوازم بهداشتی", addres: "" },
        { title: "لوازم بهداشتی", addres: "" },
        { title: "لوازم بهداشتی", addres: "" },
      ]
    },
    {
      menu: "لوازم و تحریر",
      addres: "",
      backMenu: [
        { title: "صوتی و تصویری", addres: "" },
        { title: "صوتی و تصویری", addres: "" },
        { title: "صوتی و تصویری", addres: "" },
        { title: "صوتی و تصویری", addres: "" },
      ]
    },
  ])
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
    cluseNavbar.current.classList.replace("left-full", "left-0")
    cluseNavbar.current.classList.replace("bg-opacity-0", "bg-opacity-80")
  }

  const cluseNavHandler = () => {
    nav.current.classList.replace("right-0", "-right-[600px]")
    cluseNavbar.current.classList.replace("left-0", "left-full")
  }

  const handleSelectCity = (e) => {
    setMycity(e.target.innerText)
    panelCity.current.classList.replace("bottom-0", "bottom-full")
  }

  const handleLogoutAcount = () => {
    localStorage.clear("AuthState")
    setAuth(null)
  }

  let isMobile = window.innerWidth < 768;


  return (
    <>
      <HeaderMobile openNavbar={openNavHandler} logOutAccount={handleLogoutAcount} panelCity={panelCity} myCity={myCity} />
      <header className="w-full bg-white sticky top-0 right-0 z-40 hidden md:block">
        <div className="container flex justify-between items-center gap-x-4 py-2">
          <Link to="/" className="block w-full max-w-[120px]">
            <img alt="digikala-logo" src="/image/logo/logo.svg" className="w-full object-cover" />
          </Link>
          <div className="rounded-lg bg-[#F0F0F1] p-3 flex items-center gap-x-2 w-full max-w-[600px]">
            <BiSearch className="text-[#A1A3A8] text-2xl" />
            <input type={"text"} className="bg-[#F0F0F1] text-[#A1A3A8] text-sm outline-none" placeholder="جستوجو" />
          </div>
          <div className="w-full flex items-center justify-end">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="border rounded-lg inline-flex w-full justify-center items-center px-4 py-2 text-sm font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {auth ?
                    <>
                      <FiUser className="h-6 w-6 text-gray-600" />
                      <BiCaretDown className="text-gray-600" />
                    </> :
                    <>
                      <BiLogIn className="text-2xl text-gray-600" />
                      ورود | ثبت‌نام
                    </>
                  }
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
                <Menu.Items className="z-40 absolute left-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {auth ?
                      <>
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
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogoutAcount}
                              className={`${active ? 'bg-red-400 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                            >
                              {active ? <OutActiveIcon aria-hidden="true" /> : <OutIcon aria-hidden="true" />}
                              خروج از حساب
                            </button>
                          )}
                        </Menu.Item>
                      </>
                      :
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/user/login"}
                              className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                            >
                              ورود
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={"/user/register"}
                              className={`${active ? 'bg-red-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                            >
                              ثبت نام
                            </Link>
                          )}
                        </Menu.Item>
                      </>
                    }
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <span className="block h-7 w-[1.5px] bg-gray-300 mr-3 ml-5"></span>
            <Link to={"/cart"} className="relative">
              <FiShoppingCart className="text-2xl text-gray-700" />
              {cartState.cart.length >= 1 && <span className="absolute bottom-2 left-3 bg-red-500 rounded-full w-6 h-6 text-white text-sm flex justify-center items-center">{cartState.cart.length}</span>}
            </Link>
          </div>
        </div>
      </header>
      {/*menu*/}
      <nav className="w-full border-b shadow">
        <div ref={nav} className="duration-300 transition-all md:relative md:top-auto md:right-0 md:w-full w-3/4 bg-white -right-[600px] top-0 fixed h-screen md:h-[46px] md:z-30 z-50 flex justify-between items-center container">
          <ul className="flex w-full md:text-[14px] h-screen md:h-full flex-col-reverse md:flex-row items-start md:items-center px-4 md:px-0 justify-end md:justify-start text-sm font-sans text-gray-700">
            <li className="md:menu gap-x-2 flex hover:text-red-500  md:hidden pt-5 md:pt-0 w-full overflow-y-auto md:w-auto md:hover:text-red-500 border-t md:border-0 cursor-pointer whitespace-nowrap md:h-14 font-bold text-slate-800 after:content-[''] after:w-[1px] after:rounded-full after:bg-gray-300 after:h-[25px] after:absolute after:left-0 after:top-[50%] after:-translate-y-[50%] pl-4 md:flex-row items-start md:items-center">
              <BiMenu className="text-xl select-none" />
              <Link to="/categories">
                دسته بندی کالا ها
              </Link>
            </li>
            <li className="md:menu gap-x-1 hidden md:flex pt-5 pl-3 md:pt-0 w-full h-full overflow-y-auto md:w-auto md:hover:text-red-500 border-t md:border-0 cursor-pointer whitespace-nowrap font-bold text-slate-800 flex-col md:flex-row items-start md:items-center">
              <BiMenu className="text-xl select-none hidden md:block" />
              <Link to="/categories" className="h-full flex items-center justify-center">
                دسته بندی کالا ها
              </Link>
              <span className="lg:block w-[1px] h-4 bg-gray-400 mr-3 hidden"></span>
              <ul className="menu-hover hidden text-slate-800 md:rounded-br-lg md:border-l border-gray-400 mt-2 md:mt-0 w-full flex-col font-normal md:absolute md:right-0 md:top-full md:w-auto z-30 md:bg-white">
                {category.map(item => {
                  return (
                    <li className="md:menu w-full py-4 md:hover:bg-gray-200 hover:text-red-500 pr-2 md:px-5">
                      {item.menu}
                      <ul className="gap-x-4 gap-y-3 text-slate-900 menu-hover hidden flex-wrap items-start justify-start z-20 xl:w-[1100px] lg:w-[855px]  md:w-[585px] h-[416px] p-4 absolute right-full top-0 border border-gray-400 bg-white">
                        <Link to={item.addres} className="w-full text-gray-600 hover:text-red-500 flex items-center">
                          همه ی محصولات {item.menu}
                          <FiChevronLeft />
                        </Link>
                        {item.backMenu.map(itemBackMeun => {
                          return (
                            <Link to={itemBackMeun.addres} className="font-bold hover:text-red-500 flex items-center">
                              <span className="lg:block w-[2px] h-4 bg-red-500 ml-2 hidden"></span>
                              {itemBackMeun.title}
                              <FiChevronLeft className="text-lg" />
                            </Link>
                          )
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500 ">
              <BiBasket className="text-lg text-gray-400" />
              سوپرمارکت
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500 ">
              <FiZap className="text-lg text-gray-400" />
              پرفروش ترین
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500 ">
              <FiTag className="text-lg text-gray-400 ml-1" />
              تخفیف ها
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500  relative after:absolute after:content-[''] md:after:w-[1px] after:rounded-full after:bg-gray-400 after:h-5 after:left-0 after:top-[50%] after:-translate-y-[50%]">
              <FiDivideCircle className="text-lg text-gray-400" />
              شگفت انگیزها
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500 ">
              سوالی دارید؟
            </li>
            <li className="w-full h-[3rem] md:w-auto hover:text-red-500 cursor-pointer whitespace-nowrap md:h-full md:px-2 flex items-center text-gray-500 ">
              فروشنده شوید!
            </li>
            <li className="w-full py-4 flex items-center justify-between border-b md:hidden">
              <div className="w-full flex items-center justify-start">
                <div className="max-w-[95px] w-full">
                  <img className="w-full object-cover" src="/image/logo/digikala-logo.png" />
                </div>
              </div>
            </li>
          </ul>
          <ul className="lg:block hidden h-full font-sans text-gray-600 text-[13px]">
            <li onClick={() => panelCity.current.classList.replace("bottom-full", "bottom-0")} className="whitespace-nowrap cursor-pointer h-full flex items-center">
              <FiMapPin className="text-lg  text-orange-500 md:text-gray-600" />
              <span className="mx-2">{!myCity ? "لطفا شهر خود را انتخاب کنید" : myCity}</span>
            </li>
          </ul>
        </div>
      </nav>
      {/*bakdrop*/}
      <span onClick={cluseNavHandler} ref={cluseNavbar} className="duration-300 transition-all md:hidden cursor-pointer fixed z-50 top-0 left-full w-1/4 h-screen bg-zinc-900 bg-opacity-0"></span>
      {/*Panel Select City*/}
      <div ref={panelCity} className="duration-300 fixed bottom-full right-0 z-40 w-screen h-screen bg-gray-900/60 flex justify-center ">
        <div className="w-full overflow-hidden h-full md:max-w-[500px] bg-white p-4">
          <div className="select-none w-full border-b pb-4 font-bold flex justify-between items-center">
            <span>انتخاب شهر</span>
            <FiX onClick={() => panelCity.current.classList.replace("bottom-0", "bottom-full")} className="text-xl cursor-pointer" />
          </div>
          <ul className="w-full px-2 pb-8 h-full overflow-y-scroll flex flex-col items-start justify-start">
            {allCity.map(c => <li key={c.id} onClick={handleSelectCity} className="odd:bg-gray-100 cursor-pointer flex justify-between items-center w-full py-3 hover:text-red-500 px-2 rounded">
              {c.name}
              <FiChevronLeft className="text-lg" />
            </li>
            )}
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