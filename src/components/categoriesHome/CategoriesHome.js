import { Link } from "react-router-dom";
import { useState } from "react";

const CategoriesHome = () => {

  const [dataCategories, setDataCategories] = useState([
    { cover: "/image/categoriesHome/1.png", alt: "کالای دیجیتال", title: "کالای دیجیتال", url: "#" },
    { cover: "/image/categoriesHome/2.png", alt: "خودرو,ابزار و تجهیزات صنعتی", title: "خودرو,ابزار و تجهیزات صنعتی", url: "#" },
    { cover: "/image/categoriesHome/3.png", alt: "مد و پوشاک", title: "مد و پوشاک", url: "#" },
    { cover: "/image/categoriesHome/4.png", alt: "اسباب بازی,کودک و نوزاد", title: "اسباب بازی,کودک و نوزاد", url: "#" },
    { cover: "/image/categoriesHome/5.png", alt: "کالاهای سوپرمارکتی", title: "کالاهای سوپرمارکتی", url: "#" },
    { cover: "/image/categoriesHome/6.png", alt: "زیبایی و سلامت", title: "زیبایی و سلامت", url: "#" },
    { cover: "/image/categoriesHome/7.png", alt: "خانه و اشپزخانه", title: "خانه و اشپزخانه", url: "#" },
    { cover: "/image/categoriesHome/8.png", alt: "کتاب,لوازم تحریر و هنر", title: "کتاب,لوازم تحریر و هنر", url: "#" },
    { cover: "/image/categoriesHome/9.png", alt: "ورزش و سفر", title: "ورزش و سفر", url: "#" },
    { cover: "/image/categoriesHome/10.png", alt: "محصولات بومی و محلی", title: "محصولات بومی و محلی", url: "#" },
  ])

  return (
    <section className="container flex flex-col justify-center items-center">
      <h2 className="font-sans lg:text-3xl select-none my-4 text-lg font-bold">دسته بندی های دیجیکالا</h2>
      <div className="w-full py-4 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-4">
        {dataCategories.map(data => {
          return (
            <Link to={data.url} className="block w-full max-w-[254px]">
              <article className="flex flex-col items-center justify-center w-full p-2">
                <div className="md:w-[170px] md:h-[170px] w-[90px] h-[90px]">
                  <img className="h-full object-cover" src={data.cover} alt={data.alt}></img>
                </div>
                <span className="font-sans text-sm text-slate-800 text-center">{data.title}</span>
              </article>
            </Link>
          )
        })}
      </div>
    </section >
  );
}

export default CategoriesHome;