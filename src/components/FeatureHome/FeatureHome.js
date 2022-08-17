import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import { GET_Data } from "../../utils/requestHttp"
import { FiX, FiArrowLeft } from "react-icons/fi"

const FeatureHome = () => {

  const [dataFeature, setDataFeature] = useState(null)
  const morePage = useRef()
  const backdrop = useRef()

  useEffect(() => {
    //GET_Data("/FeatureHome", setDataFeature)
    setDataFeature(data.featureHome)
  }, [])

  const LoadingFeature = () => {
    return (
      <>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
        <div className="animate-pulse flex gap-y-4 flex-col justify-between items-center">
          <div className="rounded-lg flex items-center justify-center bg-slate-300 h-[52px] w-[52px]"></div>
          <div className="h-2 w-[80px] bg-slate-300 rounded"></div>
        </div>
      </>
    )
  }

  const handleMorePage = (dispatch) => {
    if (dispatch === "open") {
      morePage.current.classList.replace("top-full", "top-0")
    } else {
      morePage.current.classList.replace("top-0", "top-full")
    }
  }

  return (
    <section className="font-sans text-sm py-10 w-full container  grid grid-cols-4 lg:grid-cols-8  gap-y-6">
      {!dataFeature ? <LoadingFeature /> :
        dataFeature.map(data => {
          return (
            <Link key={data.id} to={data.url} className="flex items-center justify-center flex-col">
              <img className="w-full max-w-[50px]" src={data.icon} alt={data.alt} />
              <span className="whitespace-nowrap text-[12px]">{data.title}</span>
            </Link>
          )
        })}
      <button onClick={() => handleMorePage("open")} className="flex items-center justify-center flex-col">
        <div className="rounded-full flex items-center justify-center gap-x-1 w-[52px] h-[52px] bg-gray-200">
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
        <span>بیشتر</span>
      </button>
      {/*More Page*/}
      <article ref={morePage} className="duration-300 z-50 w-screen h-screen fixed top-full right-0 bg-zinc-900/70 flex justify-center">
        <div className="bg-white w-full h-full md:max-w-[500px] flex flex-col justify-start px-4">
          <div className="w-full flex justify-between items-center py-4 border-b">
            <span className="font-bold">خدمات دیجی کالا</span>
            <FiX onClick={() => handleMorePage("cluse")} className="cursor-pointer text-2xl text-gray-500" />
          </div>
          <div className="w-full h-full scrollbar-hidden">
            {dataFeature && dataFeature.map(data => {
              return (
                <Link key={data.id} to={data.url} className="flex items-start justify-between gap-x-3 w-full py-2 border-b">
                  <img className="w-full max-w-[50px]" src={data.icon} alt={data.alt} />
                  <div className="h-full flex flex-col justify-between items-start w-full gap-y-1">
                    <span className="whitespace-nowrap text-base">{data.title}</span>
                    <span className="whitespace-nowrap text-[12px] text-gray-500">{data.title}</span>
                  </div>
                  <FiArrowLeft className="text-3xl text-gray-500" />
                </Link>
              )
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export default FeatureHome;