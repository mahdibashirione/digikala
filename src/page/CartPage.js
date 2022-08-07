import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { useCart } from "../context/Cart/CartProvider";
import Footer from "../components/footer/Footer"
import { useEffect } from "react";
const CartPage = () => {

  const cartState = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const NotProductInCart = () => {
    return (
      <div className="select-none w-full shadow bg-white rounded-lg border flex flex-col items-center justify-between gap-y-6 px-4 py-8">
        <div className="w-40"><img className="w-fll object-cover" src="/image/Cart/empty-cart.svg" alt="سبد خرید" /></div>
        <span className="font-bold text-lg">سبد خرید شما خالی است!</span>
        <span className="text-sm">میتوانید برای مشاهده محصولات دیگر به صفحات زیر بروید</span>
        <div className="flex items-center justify-center gap-x-6">
          <Link to={"/amazingproducts"} className="font-bold text-lg text-blue-500">تخفیف ها و پیشنهاد ها</Link>
          <span className="h-8 w-0.5 bg-gray-500"></span>
          <Link to={"/categories"} className="font-bold text-lg text-blue-500">محصولات پرفروش روز</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="w-full">
        <div className="container flex flex-col items-start justify-center lg:flex-row pb-14">
          <article className="w-full lg:w-[70%] p-4 flex flex-col gap-y-3">
            {cartState.cart.length ? cartState.cart.map(item => {
              return (
                <CartItem key={item.id} product={item} />
              )
            }) : <NotProductInCart />}
          </article>
          <article className="w-full lg:w-[30%] p-4 lg:h-full lg:sticky top-24">
            <div className="w-full p-3 pb-8 lg:pb-3 bg-white border shadow rounded-lg select-none flex flex-col gap-y-4">
              <div className="flex items-center justify-between w-full">
                <span>مجموع قیمت :</span>
                <span className="text-red-500">{cartState.total} تومان</span>
              </div>
              {/*<div className="flex justify-between items-center w-full">
              <span className="whitespace-nowrap">کد تخفیف</span>
              <div className="flex items-center">
                <input className="p-1 border outline-none max-w-[130px] rounded-r-lg" type={"text"} placeholder="c125fg" />
                <button className="bg-blue-500 text-white p-1 rounded-l-lg">تایید</button>
              </div>
            </div>*/}
              <button className="w-full py-3 md:mt-12 mt-6 block text-white bg-red-500 rounded-lg">ادامه فرآینده خرید</button>
            </div>
          </article>
        </div>
      </section>
      {/*<Footer />*/}
    </>
  );
}

export default CartPage;