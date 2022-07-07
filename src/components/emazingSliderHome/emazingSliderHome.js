
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi"
import { useEffect, useState } from "react";
import AmazingSliderItem from "../amazingSliderItem/AmazingSliderItem";
import { http } from "../../services/httpService";


const EmazingSliderHome = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    http.get("/amazingProduct")
      .then(res => setData(res.data.slice(0, 15)))
  }, [])


  const LoadingCard = () => {
    return (
      <div class="bg-white shadow rounded-md p-2 max-w-[175px] w-full h-full">
        <div class="animate-pulse flex flex-col justify-between items-center">
          <div class="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
          <div class="w-full space-y-5 py-3 flex px-4 flex-col items-start">
            <div class="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
            <div class="h-2 w-full bg-slate-300 rounded col-span-1"></div>
            <div class="h-2 w-full bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="container bg-red-500 rounded-lg py-4 px-0.5">
      <div className="scrollbar-hidden w-full h-[245px] overflow-x-scroll overflow-y-hidden flex flex-nowrap items-center justify-start gap-x-1">

        <Link to="#" className="h-full min-w-[175px] flex flex-col justify-center items-center">
          <img className="object-cover h-[40%]" src="/image/amazingSlider/amazing-typo.svg" />
          <img className="object-cover h-[40%]" src="/image/amazingSlider/General.png" />
          <span className="mt-2 flex items-center justify-center text-white">
            مشاهده همه
            <FiChevronLeft className="!text-xl" />
          </span>
        </Link>
        {!data ? <LoadingCard /> :
          data.map(product => {
            return (
              <AmazingSliderItem key={product.id} product={product} />
            )
          })
        }

        {/*<AmazingSliderItem product={data[0]} onClick={() => cartDispatch({ type: "Add_To_Cart", payload: "mahdi" })} />*/}

        <Link to="#" className="ml-4 rounded-l-lg min-w-[175px] h-full flex flex-col bg-white items-center justify-center">
          <span className="flex items-center justify-center w-[52px] h-[52px] border-2 border-blue-600 rounded-full">
            <FiChevronLeft className="text-2xl text-blue-700" />
          </span>
          <span className="font-sans text-lg mt-2">مشاهده  همه</span>
        </Link>
      </div>

    </section >
  );
}

export default EmazingSliderHome;

