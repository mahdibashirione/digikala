const ProductDetail = () => {
  return (
    <section className="w-full">
      <div className="container flex w-full">
        <article className="lg:w-[75%] w-full p-4 pb-[100px]">
          <section className="w-full flex flex-col items-center lg:items-start justify-center lg:flex-row">
            {/* Image Product */}
            <div className="w-full lg:w-[39%] flex flex-col items-center justify-center gap-y-3">
              <div className="max-w-[220px] lg:max-w-[80%] w-full border-2 rounded-lg border-slate-700 p-4 lg:p-8">
                <img className="w-full object-cover" src="/image/Single Product/Gallery - 4.png" alt="#" />
              </div>
              <div className="w-full flex items-center justify-center gap-x-4">
                <div className="w-20 h-20 overflow-hidden border-2 border-slate-700 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src="/image/Single Product\Gallery - 2.png" alt="#" />
                </div>
                <div className="w-20 h-20 overflow-hidden border-2 border-slate-700 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src="/image/Single Product\Gallery - 3.png" alt="#" />
                </div>
                <div className="w-20 h-20 overflow-hidden border-2 border-slate-700 rounded-lg flex items-center justify-center bg-white">
                  <img className="h-full object-cover" src="/image/Single Product\Gallery - 4.png" alt="#" />
                </div>
              </div>
            </div>
            {/* Detail Product */}
            <div className="select-none w-full lg:w-[60%] flex flex-col justify-center items-center">
              <div className="lg:border-b lg:pb-6 lg:w-full flex flex-col items-center lg:items-start justify-center gap-y-2 mt-8">
                <h2 className="text-slate-800 font-sans text-lg font-bold">گوشی ایفون 13 128 گیگابایت</h2>
                <p className="text-slate-600 font-sans">Apple Iphone 13 128G</p>
              </div>
              <div className="lg:w-full flex items-center justify-between lg:justify-start lg:gap-x-4 w-2/3 my-6">
                <span>انتخاب رنگ :</span>
                <div className="flex items-center justify-center">
                  <span className="bg-blue-500 w-6 h-6 rounded-full cursor-pointer -ml-1"></span>
                  <span className="bg-red-500 w-6 h-6 rounded-full cursor-pointer -ml-1"></span>
                  <span className="bg-green-500 w-6 h-6 rounded-full cursor-pointer -ml-1"></span>
                  <span className="bg-yellow-500 w-6 h-6 rounded-full cursor-pointer"></span>
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
          </section>
          <section className="w-full flex justify-start flex-wrap gap-5 mt-16">
            <h3 className="w-full font-bold text-xl text-slate-800">نقد و بررسی این محصول</h3>
            <p className="text-slate-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <h3 className="w-full font-bold text-xl text-slate-800">طراحی</h3>
            <p className="text-slate-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <div className="w-full flex justify-center">
              <div className="max-w-[450px] w-full">
                <img src="/image/Single Product/Middle.png" alt="iphone13" />
              </div>
            </div>
            <h3 className="w-full font-bold text-xl text-slate-800">دوربین</h3>
            <p className="text-slate-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <h3 className="w-full font-bold text-xl text-slate-800">باتری</h3>
            <p className="text-slate-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </section>
        </article>
        {/* Box Price */}
        <article className="font-sans w-[25%] h-full hidden lg:flex justify-center items-start sticky top-24 pl-2 pr-4">
          <div className="p-4 bg-[#f4f4f4] w-full rounded-lg flex justify-start flex-wrap gap-y-4">
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
            <div className="w-full flex justify-end text-orange-600 select-none mt-16">
              <p className="font-bold text-xl">2,555,000</p>
              <span className="mr-1">تومان</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg">افزودن به سبد خرید</button>
          </div>
        </article>
      </div>
      <article className="font-sans lg:hidden flex items-center justify-between w-full fixed bottom-0 right-0 bg-[#f4f4f4] p-4">
        <button className="bg-orange-500 py-3 text-white rounded-lg w-full max-w-[200px]">خرید</button>
        <div className="flex items-center justify-center">
          <span className="text-orange-600 font-bold text-lg mr-4">25,550,000</span>
          <span className="text-orange-600 mr-1">تومان</span>
        </div>
      </article>
    </section>
  );
}

export default ProductDetail;