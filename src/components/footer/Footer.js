import { useState } from "react";
import { FiChevronUp } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
import { Link } from "react-router-dom";


const Footer = () => {

  const [data, setData] = useState([
    { id: 1, img: "/image/express-delivery.svg", title: "امکان تحویل اکسپرس", url: "#", alt: "#" },
    { id: 2, img: "/image/cash-on-delivery.svg", title: "امکان پرداخت در محل", url: "#", alt: "#" },
    { id: 3, img: "/image/support.svg", title: "7روزه هفته ,24 ساعته", url: "#", alt: "#" },
    { id: 4, img: "/image/days-return.svg", title: "هفت روز ضمانت اصالت کالا", url: "#", alt: "#" },
    { id: 5, img: "/image/original-products.svg", title: "ضمانت اصالت کالا", url: "#", alt: "#" },
  ])


  return (
    <section className="w-full lg:bg-white bg-[#fafafa] border-t-2">
      <article className="w-full p-4 container flex flex-col justify-start items-center">

        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            <div className="w-[125px]">
              <img className="w-full object-cover" src="/image/digi.svg" alt="logoDigikala" />
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="py-2 px-3 border rounded-md text-gray-600 border-gray-500 flex items-center justify-center gap-x-2">
              بازگشت به بالا
              <FiChevronUp className="text-xl" />
            </button>
          </div>
          <div className="w-full mt-5 text-center text-gray-600 text-sm flex items-center justify-start gap-x-4">
            <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
            <span>|</span>
            <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
          </div>
        </div>

        <div className="mt-6 hidden lg:flex w-full text-sm text-gray-600 items-center justify-between">
          {data.map(data => {
            return (
              <a key={data.id} href={data.url} className="flex flex-col items-center justify-center w-full py-3">
                <div className="w-[65px]">
                  <img className="w-full object-cover" src={data.img} alt={data.alt} />
                </div>
                <span>{data.title}</span>
              </a>
            )
          })}
        </div>

        <div className="w-full bg-[#3C4B6D] py-3 md:px-3 select-none flex flex-col items-center rounded-lg mt-4 md:flex-row">
          <div className="w-full md:max-w-[170px] flex items-center justify-center md:justify-start gap-x-3">
            <img className="w-6 h-6" src="/image/footerLogo.png" alt="footerLogo" />
            <span className="text-lg text-white">دانلود اپیکیشن</span>
          </div>
          <div className="w-full max-w-[300px] md:max-w-full gap-4 mt-6 md:mt-0 flex items-center justify-start md:justify-end flex-wrap md:flex-nowrap">
            <Link to="#" className="block w-[140px] md:w-auto  ">
              <img className="w-full object-cover" src="/image/google-play.svg" alt="#" />
            </Link>
            <Link to="#" className="block w-[140px] md:w-auto  ">
              <img className="w-full object-cover" src="/image/coffe-bazzar.svg" alt="#" />
            </Link>
            <Link to="#" className="block w-[140px] md:w-auto  ">
              <img className="w-full object-cover" src="/image/sib-app.svg" alt="#" />
            </Link>
            <Link to="#" className="block w-[140px] md:w-auto  ">
              <img className="w-full object-cover" src="/image/myket.svg" alt="#" />
            </Link>
            <Link to={"#"} className="md:bg-white w-full md:p-1.5 md:rounded md:w-auto mt-4 md:mt-0 flex items-center justify-center">
              <span className="text-blue-400 md:text-slate-800">بیشتر</span>
              <FiChevronLeft className="text-lg mt-1 text-blue-400 md:text-slate-800" />
            </Link>
          </div>
        </div>

        <div className="w-full gap-8 flex flex-col lg:flex-row justify-start items-start mt-4 py-4 border-y-2">
          <div className="w-full md:w-1-2 flex flex-col justify-start items-start gap-y-5">
            <span>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</span>
            <p className="text-sm text-gray-500 text-justify">
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <Link to={"#"} className="text-blue-500 flex items-center justify-center">
              مشاهده بیشتر
              <FiChevronLeft className="text-lg mt-1" />
            </Link>
          </div>
          <div className="w-full md:w-1-2 flex justify-center lg:justify-end gap-x-4 gap-y-5">
            <Link to={"#"} className="w-full h-[100px] max-w-[80px] p-1 border-2 rounded-lg">
              <img className="h-full object-cover" src="/image/enamad.png" alt="#" />
            </Link>
            <Link to={"#"} className="w-full h-[100px] max-w-[80px] p-1 border-2 rounded-lg">
              <img className="w-full object-cover" src="/image/kasbokar.png" alt="#" />
            </Link>
            <Link to={"#"} className="w-full h-[100px] max-w-[80px] p-1 border-2 rounded-lg">
              <img className="h-full object-cover" src="/image/rezi.png" alt="#" />
            </Link>
          </div>
        </div>

        <div className="w-full py-8 flex items-center justify-center text-gray-500 text-[12px]">
          <p className="text-center">برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
        </div>

      </article>
    </section>
  );
}

export default Footer;