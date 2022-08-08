import { Link, useLocation } from "react-router-dom";
import { useCart, useCartActions } from "../context/Cart/CartProvider";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Toaster, toast } from "react-hot-toast";

const ProductDetail = (props) => {

  const { state } = useLocation()
  const cartDispatch = useCartActions()
  const { cart } = useCart()
  const [colorProduct, setColorProduct] = useState(null)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function checkInCart(cart, product) {
    return cart.find(c => c.id === product.id)
  }

  const addToCartHandler = () => {
    if (colorProduct) {
      cartDispatch({ type: "Add_To_Cart", payload: { ...state.state, color: colorProduct } })
      toast.success('به سبد خرید افزوده شد');
    } else {
      toast.error('لطفا رنگ محصول را انتخاب کنید');
    }
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const [categories, setCategories] = useState({
    معرفی: [
      {
        id: 1,
        title: "درباره محصول",
        text: state.state.description,
      },
    ],
    مشخصات: [
      {
        id: 1,
        title: "coming soon...",
        text: 'به زودی',
      },
    ],
    بررسی: [
      {
        id: 1,
        title: "coming soon...",
        text: 'به زودی',
      }
    ],
  })

  return (
    <section className="w-full pb-20">
      <Toaster
        position="top-center"
        reverseOrder={false}
        className="z-30"
      />
      <div className="container flex w-full">
        <article className="lg:w-[75%] w-full p-4 pb-[100px]">
          <article className="w-full flex flex-col items-center lg:items-start justify-center lg:flex-row">
            {/* Image Product */}
            <div className="w-full lg:pl-6 lg:w-[39%] h-full flex flex-col items-center justify-center gap-y-3">
              <div className="flex justify-center items-center  w-[250px] h-[250px] overflow-hidden border-2 rounded-lg border-zinc-900 p-4 lg:p-8">
                <img className="h-full object-cover" src={state.state.image} alt="#" />
              </div>
              <div className="w-full flex items-center justify-center gap-x-4">
                <div className="w-24 h-24 overflow-hidden border-2 border-slate-300 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src={state.state.image} alt="#" />
                </div>
                <div className="w-24 h-24 overflow-hidden border-2 border-slate-300 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src={state.state.image} alt="#" />
                </div>
                <div className="w-24 h-24 overflow-hidden border-2 border-slate-300 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src={state.state.image} alt="#" />
                </div>
              </div>
            </div>
            {/* Detail Product */}
            <div className="select-none w-full lg:w-[60%] flex flex-col justify-center items-center">
              <div className="lg:border-b lg:pb-6 lg:w-full flex flex-col items-center lg:items-start justify-center gap-y-2">
                <h2 className="text-slate-800 font-sans text-lg font-bold mt-8 lg:mt-0">{state.state.name}</h2>
              </div>
              <div className="lg:w-full flex items-center justify-between lg:justify-start lg:gap-x-4 w-2/3 my-6">
                <span>انتخاب رنگ :</span>
                <div className="flex items-center justify-center gap-x-1">
                  {state.state.color.map(color => <span data-color={color} onClick={e => setColorProduct(e.target.innerText)} className={`${"bg-" + color + "-500"} ${colorProduct === color && "ring-4 mx-2"} ${"ring-" + color + "-800"} duration-300 ring-zinc-500 ring-offset-2 w-6 h-6 rounded-full cursor-pointer overflow-hidden ${"text-" + color + "-500"}`}>{color}</span>)}
                </div>
              </div>
              <div className="w-full lg:justify-start flex items-center justify-center flex-wrap gap-3">
                <div className="lg:hidden flex items-center gap-x-2">
                  <img className="w-5" src="/image/shop.svg" alt="shop" />
                  <span className="font-sans font-bold">فروشنده :</span>
                  <span className=" font-sans text-sm">دیجی تایز</span>
                </div>
                <div className="lg:hidden flex items-center gap-x-2">
                  <img className="w-5" src="/image/shield.svg" alt="shop" />
                  <span className="font-sans font-bold">گارانتی :</span>
                  <span className=" font-sans text-sm">18 ماه زرین خدمت</span>
                </div>
                <div className="lg:hidden flex items-center gap-x-2">
                  <img className="w-5" src="/image/truck-time.svg" alt="shop" />
                  <span className="font-sans font-bold">ارسال توسط :</span>
                  <span className="font-sans text-sm">انبار تهران</span>
                </div>
                <div className="mt-5 rounded-lg gap-y-4 lg:bg-white lg:p-0 bg-[#f4f4f4] p-4 w-full flex flex-col justify-start items-start font-sans text-slate-800">
                  <span className="font-bold">ویژگی های کالا :</span>
                  <div className="w-full flex flex-col items-start gap-y-1">
                    <span>حافظه داخلی :</span>
                    <p className="font-bold">128 گیگابایت</p>
                  </div>
                  <div className="w-full flex flex-col items-start gap-y-1">
                    <span>اندازه صفحه نمایش :</span>
                    <p className="font-bold">6.1 اینچ</p>
                  </div>
                  <div className="w-full flex flex-col items-start gap-y-1">
                    <span>شبکه های ارتباطی :</span>
                    <p className="font-bold">2G 3G 4G 5G</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/*Discrpshen*/}
          <article className="w-full py-4 bg-[#f4f4f4] rounded-lg mt-3">
            <div className="w-full lg:px-4 sm:px-0">
              <Tab.Group >
                <Tab.List className="flex w-[60%] mx-auto  space-x-1 rounded-full bg-gray-900/20 p-1">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'w-full font-bold rounded-full py-2.5 text-[13px] leading-5 text-blue-700',
                          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                          selected
                            ? 'bg-white shadow'
                            : 'text-blue-100 hover:bg-white/[0.16] hover:text-white'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        'rounded-xl p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3"
                          >
                            <h3 className="text-lg font-bold leading-5">
                              {post.title}
                            </h3>

                            <ul className="mt-2 font-normal text-justify text-gray-500">
                              <li>{post.text}</li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                'absolute inset-0 rounded-md',
                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </article>
        </article>
        {/* Box Price */}
        <article className="font-sans w-[25%] mt-4 h-full hidden lg:flex justify-center items-start sticky top-24 pl-2 pr-4">
          <div className="p-4 bg-[#f4f4f4] w-full rounded-lg flex justify-start flex-wrap gap-y-4">
            <div className="w-full select-none pb-4 border-b border-zinc-500 flex flex-col gap-y-4">
              <div className="hidden lg:flex items-center gap-x-2">
                <img className="w-5" src="/image/shop.svg" alt="shop" />
                <span className="font-sans font-bold">فروشنده :</span>
                <span className=" font-sans text-sm">دیجی تایز</span>
              </div>
              <div className="hidden lg:flex items-center gap-x-2">
                <img className="w-5" src="/image/shield.svg" alt="shop" />
                <span className="font-sans font-bold">گارانتی :</span>
                <span className=" font-sans text-sm">18 ماه زرین خدمت</span>
              </div>
              <div className="hidden lg:flex items-center gap-x-2">
                <img className="w-5" src="/image/truck-time.svg" alt="shop" />
                <span className="font-sans font-bold">ارسال توسط :</span>
                <span className="font-sans text-sm">انبار تهران</span>
              </div>
            </div>
            <div className="w-full flex justify-between flex-wrap text-red-600 select-none mt-10">
              {state.state.discount > 0 && <div className="text-white mb-2 w-full flex justify-between items-center">
                <span className="bg-red-500 rounded-full py-1 px-2">{state.state.discount}%</span>
                <span className="text-gray-500 line-through">{state.state.price}</span>
              </div>}
              <p className="font-bold text-xl">{state.state.discount > 0 ? state.state.offPrice : state.state.price}</p>
              <span className="mr-1">تومان</span>
            </div>
            {checkInCart(cart, state.state) ? <Link to={"/cart"} className="flex items-center justify-center w-full bg-red-500 text-white py-3 rounded-lg"> رفتن به سبد خرید </Link>
              : <button onClick={addToCartHandler} className="w-full bg-red-500 text-white py-3 rounded-lg">افزودن به سبد خرید</button>
            }
          </div>
        </article>
      </div>
      <article className="bg-white border-t-2 font-sans lg:hidden flex gap-y-3 flex-wrap items-center justify-between w-full fixed bottom-0 right-0 px-4 py-2">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-red-600 font-bold text-lg mr-4">{state.state.offPrice || state.state.price}</span>
            <span className="text-red-600 mr-1">تومان</span>
          </div>
          {state.state.discount > 0 && <div className="select-none text-white gap-x-3 w-full flex justify-end items-center">
            <span className="bg-red-500 rounded-full py-1 px-2 text-sm">{state.state.discount}%</span>
            <span className="text-gray-500 line-through">{state.state.price}</span>
          </div>}
        </div>
        {checkInCart(cart, state.state) ? <Link to={"/cart"} className="flex items-center justify-center w-full bg-red-500 text-white py-3 rounded-lg"> رفتن به سبد خرید </Link>
          : <button onClick={addToCartHandler} className="w-full bg-red-500 text-white py-3 rounded-lg">افزودن به سبد خرید</button>
        }
      </article>
    </section>
  );
}

export default ProductDetail;