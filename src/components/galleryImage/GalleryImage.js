import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { useEffect, useState, useRef } from "react"
import { FiX } from "react-icons/fi";

const GalleryImage = ({ image }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState();
  const galleryWithe = useRef()

  const handleOpenGalleryWithe = () => {
    galleryWithe.current.classList.replace("hidden", "flex")
  }

  const handleCluseGalleryWithe = () => {
    galleryWithe.current.classList.replace("flex", "hidden")
  }

  return (
    <div className="flex flex-col justify-start items-center lg:ml-6">
      <Swiper
        style={{
          "--swiper-navigation-color": "#cecece",
          "--swiper-pagination-color": "#cecece",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Navigation, Thumbs]}
        className="mySwiper2 w-full h-[300px] md:w-64 md:h-full md:border border-gray-400 rounded-lg select-none"
      >
        {image.map(src => {
          return (
            <SwiperSlide onClick={handleOpenGalleryWithe} className="cursor-pointer w-full h-full flex items-center justify-center">
              <img className="md:w-full h-full object-cover" src={src} alt="image product" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        //onSwiper={setThumbsSwiper}
        className="mySwiper w-64 py-3 h-28 select-none hidden md:flex"
      >
        {image.map(src => {
          return (
            <SwiperSlide onClick={handleOpenGalleryWithe} className="cursor-pointer h-full flex items-center justify-center border rounded-lg">
              <img className="h-full object-cover" src={src} alt="image product" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div ref={galleryWithe} className="z-40 fixed flex-col top-0 right-0 w-full h-screen hidden items-center justify-between bg-zinc-900/90">
        <div className="w-full p-4 flex justify-end">
          <FiX onClick={handleCluseGalleryWithe} className="text-white text-4xl cursor-pointer" />
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#cecece",
            "--swiper-pagination-color": "#cecece",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 w-80 h-80 lg:w-[500px] lg:h-[500px] bg-white select-none rounded-md"
        >
          {image.map(src => {
            return (
              <SwiperSlide className="w-full h-full flex items-center justify-center">
                <img className="h-full object-cover" src={src} alt="image product" />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          //onSwiper={setThumbsSwiper}
          className="mySwiper w-full py-3 h-28 select-none opacity-50"
        >
          {image.map(src => {
            return (
              <SwiperSlide className="cursor-pointer bg-white h-full flex items-center justify-center rounded-lg">
                <img className="h-full object-cover" src={src} alt="image product" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default GalleryImage;