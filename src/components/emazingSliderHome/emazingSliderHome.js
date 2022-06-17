import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const EmazingSliderHome = () => {
  return (
    <section className="container bg-red-600 rounded-lg py-4 px-0.5">
      <div className="scrollbar-hidden w-full h-[245px] overflow-x-scroll overflow-y-hidden flex flex-nowrap items-center justify-start gap-x-1">

        <Link to="#" className="h-full min-w-[175px] flex flex-col justify-center items-center">
          <img className="object-cover h-[40%]" src="/image/amazingSlider/amazing-typo.svg" />
          <img className="object-cover h-[40%]" src="/image/amazingSlider/General.png" />
          <span className="mt-2 flex items-center justify-center text-white">
            مشاهده همه
            <FiChevronLeft className="!text-xl" />
          </span>
        </Link>


        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>
        <Link to="#" className="block h-full min-w-[175px] bg-white">
          <div className="w-full h-[150px] flex items-center justify-center">
            <img className="h-full object-cover" src="/image/amazingSlider/imgProduct/1.jpg" />
          </div>
          <article className="h-full px-2">
            <div className="w-full flex items-center justify-between">
              <span className="bg-red-600 text-white rounded-full px-1">50٪</span>
              <span className="font-sans text-md font-bold flex items-center justify-center">
                1,450,000
                <span className="text-[13px] text-gray-600">تومان</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-end pl-8 mt-1">
              <span className="font-sans text-md line-through text-gray-400">2,500,000</span>
            </div>
          </article>
        </Link>

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

