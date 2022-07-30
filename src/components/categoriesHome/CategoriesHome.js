import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET_Data } from "../../utils/requestHttp";

const CategoriesHome = () => {

  const [dataCategories, setDataCategories] = useState(null)

  useEffect(() => {
    GET_Data("/categoriesHome")
  }, [])

  const LoadingCategories = () => {
    return (
      <>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-full flex items-center justify-center bg-slate-300 w-16 h-16 md:w-28 md:h-28"></div>
          <div className="h-2 w-12 md:w-16 bg-slate-300 rounded"></div>
        </div>
      </>
    )
  }

  return (
    <section className="container flex flex-col justify-center items-center">
      <h2 className="font-sans lg:text-3xl select-none my-4 text-lg font-bold">دسته بندی های دیجیکالا</h2>
      <div className="w-full p-4 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-y-4">
        {dataCategories ? dataCategories.map(data => {
          return (
            <Link key={data.id} to={data.url
            } className="block w-full max-w-[254px]" >
              <article className="flex flex-col items-center justify-center w-full p-2">
                <div className="md:w-[170px] md:h-[170px] w-[90px] h-[90px]">
                  <img loading="lazy" className="h-full object-cover" src={data.cover} alt={data.alt}></img>
                </div>
                <span className="font-sans text-sm text-slate-800 text-center">{data.title}</span>
              </article>
            </Link>
          )
        }) : <LoadingCategories />}
      </div>
    </section >
  );
}

export default CategoriesHome;