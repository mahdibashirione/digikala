import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_Data } from "../../utils/requestHttp"

const FeatureHome = () => {

  const [dataFeature, setDataFeature] = useState(null)

  useEffect(() => {
    GET_Data("/FeatureHome", setDataFeature)
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
      <button className="flex items-center justify-center flex-col">
        <div className="rounded-full flex items-center justify-center gap-x-1 w-[52px] h-[52px] bg-gray-200">
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
        <span>بیشتر</span>
      </button>
    </section>
  );
}

export default FeatureHome;