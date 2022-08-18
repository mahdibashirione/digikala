import { useAuth } from "../../context/Auth/AuthProvider";
import { useCart } from "../../context/Cart/CartProvider";
import { Link } from 'react-router-dom'
import { BiMenu, BiSearch, BiCaretDown, BiLogIn } from "react-icons/bi"
import { FiAlertOctagon, FiChevronLeft, FiArrowRight, FiAward, FiLogOut, FiUser, FiShoppingCart, FiChevronDown, FiMapPin } from "react-icons/fi"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useRef } from 'react'

const HeaderMobile = ({ panelCity, myCity, logOutAccount, openNavbar }) => {

  const cartState = useCart()
  const auth = useAuth()
  const pageSearch = useRef()
  const inputSearch = useRef()

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

  function LogOutAccountIcon() {
    return (
      <FiLogOut className="text-xl text-red-500 mx-2" />
    )
  }

  function LogOutAccountActiveIcon() {
    return (
      <FiLogOut className="text-xl text-white mx-2" />
    )
  }

  const openSearch = () => {
    pageSearch.current.classList.replace("top-full", "top-0")
    inputSearch.current.focus()
  }

  return (
    <header className="w-full bg-white md:hidden">
      <div className="w-full px-4">
        <div className="w-full flex justify-between items-center py-3 border-b">
          <BiMenu onClick={openNavbar} className="text-2xl cursor-pointer" />
          <img alt="digikala-logo" src="/image/logo/logo.svg" className="w-24" />
          <FiAlertOctagon className="text-2xl cursor-pointer" />
        </div>
        <div className="w-full flex justify-between items-center py-2 border-b">
          <div onClick={openSearch} className="rounded-lg bg-[#F0F0F1] p-2 flex items-center gap-x-2 w-[65%]">
            <BiSearch className="text-[#A1A3A8] text-2xl" />
            <input onFocus={openSearch} type={"text"} className="bg-[#F0F0F1] text-[#A1A3A8] text-sm outline-none" placeholder="جستوجو" />
          </div>
          <Menu as="div" className="relative inline-block text-LoglefAccountt">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center px-4 py-2 text-sm font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {auth ?
                  <>
                    <FiUser className="h-6 w-6 text-gray-600" />
                    <BiCaretDown className="text-gray-600" />
                  </> :
                  <>
                    <BiLogIn className="text-2xl text-gray-600" />
                    ورود
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
                            onClick={logOutAccount}
                            className={`${active ? 'bg-red-400 text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                          >
                            {active ? <LogOutAccountActiveIcon aria-hidden="true" /> : <LogOutAccountIcon aria-hidden="true" />}
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
          <Link to={"/cart"} className="relative">
            <FiShoppingCart className="text-2xl text-gray-700" />
            {cartState.cart.length >= 1 && <span className="absolute bottom-2 left-3 bg-red-500 rounded-full w-6 h-6 text-white text-sm flex justify-center items-center">{cartState.cart.length}</span>}
          </Link>
        </div>
        <div onClick={() => panelCity.current.classList.replace("bottom-full", "bottom-0")} className="flex justify-between items-center cursor-pointer w-full py-3 text-sm">
          <div className="flex items-center gap-x-2 text-gray-700">
            <FiMapPin className="text-lg text-orange-500" />
            {myCity ? `ارسال به ${myCity}` : "لطفا شهر خود را انتخاب کنید!!!"}
          </div>
          <FiChevronDown className="text-xl text-gray-600" />
        </div>
      </div>
      <div ref={pageSearch} className="duration-300 w-screen h-screen bg-white fixed top-full right-0 z-50 flex flex-col justify-start px-4">
        <div className="w-full border-b border-blue-500 py-4 flex items-center justify-start gap-x-4">
          <FiArrowRight onClick={() => pageSearch.current.classList.replace("top-0", "top-full")} className="text-2xl cursor-pointer" />
          <input ref={inputSearch} type={"search"} className="outline-none text-sm w-full" placeholder="جستوجو" />
        </div>
        <div className="w-full flex justify-start items-center gap-x-2 mt-8 select-none">
          <FiAward className="text-2xl cursor-pointer" />
          <span>جستوجوهاس پرطرفدار</span>
        </div>
        <div className="w-full flex items-center flex-nowrap overflow-x-scroll scrollbar-hidden py-5 gap-x-2">
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            ربات هوشمند
            <FiChevronLeft className="text-slate-900" />
          </span>
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            صابون کاغذی
            <FiChevronLeft className="text-slate-900" />
          </span>
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            ربات
            <FiChevronLeft className="text-slate-900" />
          </span>
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            فرش 6 متری
            <FiChevronLeft className="text-slate-900" />
          </span>
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            جاکفشی
            <FiChevronLeft className="text-slate-900" />
          </span>
          <span className="whitespace-nowrap text-gray-600 flex items-center p-2 border rounded-full gap-x-2 select-none cursor-pointer">
            مبل چستر
            <FiChevronLeft className="text-slate-900" />
          </span>
        </div>
      </div>
    </header >
  );
}


export default HeaderMobile;