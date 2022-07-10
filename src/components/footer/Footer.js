import { useState } from "react";
import { FiChevronUp } from "react-icons/fi"


const Footer = () => {

  const [data, setData] = useState([
    { img: "/image/express-delivery.svg", title: "امکان تحویل اکسپرس", url: "#", alt: "#" },
    { img: "/image/cash-on-delivery.svg", title: "امکان پرداخت در محل", url: "#", alt: "#" },
    { img: "/image/support.svg", title: "7روزه هفته ,24 ساعته", url: "#", alt: "#" },
    { img: "/image/days-return.svg", title: "هفت روز ضمانت اصالت کالا", url: "#", alt: "#" },
    { img: "/image/original-products.svg", title: "ضمانت اصالت کالا", url: "#", alt: "#" },
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
              <a href={data.url} className="flex flex-col items-center justify-center w-full py-3">
                <div className="w-[65px]">
                  <img className="w-full object-cover" src={data.img} alt={data.alt} />
                </div>
                <span>{data.title}</span>
              </a>
            )
          })}
        </div>


      </article>
    </section>
  );
}

export default Footer;