import CartItem from "../components/CartItem/CartItem";

const CartPage = () => {
  return (
    <section className="w-full h-[calc(100vh-124px)] bg-[#f4f4f4]">
      <div className="container flex flex-col items-start justify-center lg:flex-row pb-24">
        <article className="w-full lg:w-[70%] p-4 flex flex-col gap-y-3">
          <CartItem />
          <CartItem />
        </article>
        <article className="w-full lg:w-[30%] p-4 lg:h-full lg:sticky top-24">
          <div className="w-full p-3 pb-8 lg:pb-3 bg-white shadow rounded-lg select-none flex flex-col gap-y-4">
            <div className="flex items-center justify-between w-full">
              <span>مجموع قیمت :</span>
              <span className="text-orange-500">0 تومان</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="whitespace-nowrap">کد تخفیف</span>
              <div className="flex items-center">
                <input className="p-1 border outline-none max-w-[130px] rounded-r-lg" type={"text"} placeholder="c125fg" />
                <button className="bg-blue-500 text-white p-1 rounded-l-lg">تایید</button>
              </div>
            </div>
            <button className="w-full py-3 mt-12 lg:block hidden text-white bg-orange-500 rounded-lg">ادامه فرآینده خرید</button>
          </div>
        </article>
        <div className="w-full lg:hidden flex justify-center items-center px-4 fixed bottom-4">
          <button className="w-full max-w-[400px] py-3 text-white bg-orange-500 rounded-lg">ادامه فرآینده خرید</button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;