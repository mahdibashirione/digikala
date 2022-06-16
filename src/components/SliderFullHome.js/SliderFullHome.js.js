import React, { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"

const SliderFullHome = () => {
  const [dataSlider, setDataSlider] = useState([
    { src: "/image/slideerHome/1.jpg", url: "#", alt: "عکس 1", id: "1", },
    { src: "/image/slideerHome/2.jpg", url: "#", alt: "عکس 2", id: "2", },
    { src: "/image/slideerHome/3.jpg", url: "#", alt: "عکس 3", id: "3", },
    { src: "/image/slideerHome/4.jpg", url: "#", alt: "عکس 4", id: "4", },
    { src: "/image/slideerHome/5.jpg", url: "#", alt: "عکس 5", id: "5", },
    { src: "/image/slideerHome/6.jpg", url: "#", alt: "عکس 6", id: "6", },
  ])
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
    const allImage = [...photoSlider.current.children];
    const allNavigator = [...navigatorSlider.current.children];
    allImage[0].classList.replace("hidden", "block")
    allNavigator[0].classList.replace("w-2", "w-4")
    allNavigator[0].classList.replace("bg-gray-500", "bg-white")
  }, [])

  return (
    <section className="relative w-full xl:h-[400px] lg:h-[350px] md:h-[280px] h-[160px] max-w-[1550px] mx-auto">

      <div ref={photoSlider} className="w-full h-full peer">
        {dataSlider.map(data => {
          return (
            <a key={data.id} href={data.url} className="w-full h-full overflow-hidden hidden mx-auto">
              <img className="object-cover h-full" src={data.src} alt={data.id} />
            </a>
          )
        })}
      </div>

      <div className="gap-x-2 absolute right-10 bottom-10 hidden md:peer-hover:flex hover:flex duration-300 z-20 ">
        <span onClick={prevSlideHandler} className="border border-slate-500 flex items-center justify-center bg-white shadow w-11 h-11 rounded-full cursor-pointer"><BiChevronRight className="text-2xl" /></span>
        <span onClick={nextSlideHandler} className="border border-slate-500 flex items-center justify-center bg-white shadow w-11 h-11 rounded-full cursor-pointer"><BiChevronLeft className="text-2xl" /></span>
      </div>

      <div ref={navigatorSlider} className="absolute right-10 bottom-5 flex gap-x-2 duration-300 z-20 ">
        {dataSlider.map(data => {
          return (
            <span className="duration-300 transition-all block w-2 h-2 rounded-full bg-gray-500"></span>
          )
        })}
      </div>

    </section>
  );
}

export default SliderFullHome;