import { useAuth } from "../../context/Auth/AuthProvider";
import { useCart } from "../../context/Cart/CartProvider";
import { Link } from 'react-router-dom'
import { BiMenu, BiSearch, BiCaretDown, BiLogIn } from "react-icons/bi"
import { FiAlertOctagon, FiLogOut, FiUser, FiShoppingCart, FiChevronDown, FiMapPin } from "react-icons/fi"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const HeaderMobile = ({ panelCity, myCity }) => {

  const cartState = useCart()
  const auth = useAuth()

  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function DuplicateActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

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

  return (
    <header className="w-full bg-white">
      <div className="w-full px-4">
        <div className="w-full flex justify-between items-center py-3 border-b">
          <BiMenu className="text-2xl" />
          <img alt="digikala-logo" src="/image/logo/logo.svg" className="w-24" />
          <FiAlertOctagon className="text-2xl" />
        </div>
        <div className="w-full flex justify-between items-center py-2 border-b">
          <div className="rounded-lg bg-[#F0F0F1] p-2 flex items-center gap-x-2 w-[65%]">
            <BiSearch className="text-[#A1A3A8] text-2xl" />
            <input type={"text"} className="bg-[#F0F0F1] text-[#A1A3A8] text-sm outline-none" placeholder="جستوجو" />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {auth ?
                  <>
                    <FiUser className="h-5 w-5 text-white hover:text-violet-100" />
                    <BiCaretDown />
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
                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                          >
                            {active ? (
                              <EditActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <EditInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            ورود
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={"/user/register"}
                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-3 text-sm`}
                          >
                            {active ? (
                              <DuplicateActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <DuplicateInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
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
        <div onClick={() => panelCity.current.classList.replace("top-full", "top-0")} className="flex justify-between items-center cursor-pointer w-full py-3 text-sm">
          <div className="flex items-center gap-x-2 text-gray-700">
            <FiMapPin className="text-lg text-orange-500" />
            {myCity ? `ارسال به ${myCity}` : "لطفا شهر خود را انتخاب کنید!!!"}
          </div>
          <FiChevronDown className="text-xl text-gray-600" />
        </div>
      </div>
    </header >
  );
}


export default HeaderMobile;