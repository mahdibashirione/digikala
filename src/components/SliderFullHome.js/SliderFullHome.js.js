import React, { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { http } from "../../services/httpService";

const SliderFullHome = () => {
  const [dataSlider, setDataSlider] = useState(null)
  const photoSlider = useRef()
  const navigatorSlider = useRef()
  let controler = 0;

  const nextSlideHandler = () => {
    const allImage = [...photoSlider.current.children];
    const allNavigator = [...navigatorSlider.current.children];

    if (controler == allImage.length - 1) {
      controler = 0
    } else {
      controler++;
    }
    allImage.forEach(image => {
      image.classList.replace("block", "hidden")
      allImage[controler].classList.replace("hidden", "block")
    });

    allNavigator.forEach(navigat => {
      navigat.classList.replace("w-4", "w-2")
      navigat.classList.replace("bg-white", "bg-gray-500")
    })

    allNavigator[controler].classList.replace("w-2", "w-4")
    allNavigator[controler].classList.replace("bg-gray-500", "bg-white")

  }

  const prevSlideHandler = () => {
    const allImage = [...photoSlider.current.children];
    const allNavigator = [...navigatorSlider.current.children];

    if (controler == 0) {
      controler = allImage.length - 1;
    } else {
      controler--;
    }

    allImage.forEach(image => {
      image.classList.replace("block", "hidden")
      allImage[controler].classList.replace("hidden", "block")
    });

    allNavigator.forEach(navigat => {
      navigat.classList.replace("w-4", "w-2")
      navigat.classList.replace("bg-white", "bg-gray-500")
    })

    allNavigator[controler].classList.replace("w-2", "w-4")
    allNavigator[controler].classList.replace("bg-gray-500", "bg-white")
  }

  useEffect(() => {

    http.get("/sliderHome")
      .then(res => setDataSlider(res.data))
      .catch(e => console.log("Error :" + e))
  }, [])

  return (
    <section className="select-none relative w-full xl:h-[400px] lg:h-[350px] md:h-[280px] h-[160px] max-w-[1550px] mx-auto">

      <div ref={photoSlider} className="snap-x span-start touch-pan-x w-full h-full overflow-x-scroll flex justify-start items-center flex-nowrap">
        {dataSlider ?
          <a key={dataSlider[0].id} href={dataSlider[0].url} className="min-w-full h-full overflow-hidden block mx-auto">
            <img className="object-cover h-full" src={dataSlider[0].src} alt={dataSlider[0].id} />
          </a>
          : <span className="w-full h-full bg-slate-400 animate-pulse flex items-center justify-center text-lg">Loading...</span>}
      </div>

      <div className="hidden gap-x-2 absolute right-10 bottom-10 hover:flex duration-300 z-20 ">
        <span onClick={prevSlideHandler} className="border border-slate-500 flex items-center justify-center bg-white shadow w-11 h-11 rounded-full cursor-pointer"><BiChevronRight className="text-2xl" /></span>
        <span onClick={nextSlideHandler} className="border border-slate-500 flex items-center justify-center bg-white shadow w-11 h-11 rounded-full cursor-pointer"><BiChevronLeft className="text-2xl" /></span>
      </div>

      <div ref={navigatorSlider} className="hidden absolute right-10 bottom-5 gap-x-2 duration-300 z-20 ">
        {dataSlider && dataSlider.map(data => {
          return (
            <span key={data.id} className="duration-300 transition-all block w-2 h-2 rounded-full bg-gray-500"></span>
          )
        })}
      </div>

    </section>
  );
}

export default SliderFullHome;