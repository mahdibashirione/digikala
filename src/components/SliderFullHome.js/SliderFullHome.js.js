import React, { useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { http } from "../../services/httpService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GET_Data } from "../../utils/requestHttp";

const SliderFullHome = () => {
  const [dataSlider, setDataSlider] = useState(null)

  useEffect(() => {
    GET_Data("/sliderHome", setDataSlider)
  }, [])

  const isNavigation = window.innerWidth > 600;

  return (
    <section className="select-none relative w-full xl:h-[400px] lg:h-[350px] md:h-[280px] h-[160px] max-w-[1550px] mx-auto">

      <div className="scrollbar-hidden snap-x span-start touch-pan-x w-full h-full overflow-x-scroll flex justify-start items-center flex-nowrap">
        {!dataSlider ? <span className="w-full h-full bg-slate-400 animate-pulse flex items-center justify-center">loading...</span> :
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={isNavigation}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            {dataSlider && dataSlider.map(data => {
              return (
                <SwiperSlide key={data.id} className="w-full">
                  <a href={data.url} className="min-w-full h-full overflow-hidden block mx-auto">
                    <img className="object-cover h-full" src={data.img} alt={dataSlider[0].id} />
                  </a>
                </SwiperSlide>
              )
            })}
          </Swiper>
        }
      </div>

    </section>
  );
}

export default SliderFullHome;