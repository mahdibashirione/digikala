import { Link } from "react-router-dom"
import { BiPodcast } from "react-icons/bi"
import { BiCycling } from "react-icons/bi"
import { BiDonateHeart } from "react-icons/bi"

const DigiClubHome = () => {
  return (
    <section className="my-6 w-full">
      <div className="container flex flex-col lg:flex-row items-center p-4 bg-gradient-to-r from-[#35A6C8] to-[#007295] rounded-lg">
        <div className="w-full py-2">
          <Link className="block w-28" to={"#"}>
            <div className="w-full">
              <img className="w-full object-cover" src="/image/digiclub/digiclub.svg" alt="دیجی کلاب" />
            </div>
          </Link>
        </div>
        <div className="max-w-[390px] w-full lg:max-w-[825px] max-h-32 lg:h-14 gap-x-0.5 flex items-center justify-center mt-4 lg:mt-0">
          <span className="block w-1/3 h-full bg-white p-1 rounded-r-lg">
            <Link className="overflow-hidden w-full h-full flex lg:flex-row flex-col justify-between items-center" to={"#"}>
              <div className="lg:flex-row lg:gap-x-1 flex items-center justify-center flex-col gap-y-1">
                <BiPodcast className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800 whitespace-nowrap">گردونه شانس</span>
              </div>
              <div className="w-full lg:max-w-[145px] mt-2 lg:mt-0">
                <img className="w-full object-cover" src="/image/digiclub/lucky-draw.png" alt="گردونه شانس" />
              </div>
            </Link>
          </span>
          <span className="block w-1/3 h-full bg-white p-1">
            <Link className="overflow-hidden w-full h-full flex lg:flex-row flex-col justify-between items-center" to={"#"}>
              <div className="lg:flex-row lg:gap-x-1 flex items-center justify-center flex-col gap-y-1">
                <BiCycling className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800 whitespace-nowrap">ماموریت ها</span>
              </div>
              <div className="w-full lg:max-w-[145px] mt-2 lg:mt-0">
                <img className="w-full object-cover" src="/image/digiclub/lucky-draw.png" alt="گردونه شانس" />
              </div>
            </Link>
          </span>
          <span className="block w-1/3 h-full bg-white p-1 rounded-l-lg">
            <Link className="overflow-hidden w-full h-full flex lg:flex-row flex-col justify-between items-center" to={"#"}>
              <div className="lg:flex-row lg:gap-x-1 flex items-center justify-center flex-col gap-y-1">
                <BiDonateHeart className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800 whitespace-nowrap">جایزه ها</span>
              </div>
              <div className="w-full lg:max-w-[145px] mt-2 lg:mt-0">
                <img className="w-full object-cover" src="/image/digiclub/lucky-draw.png" alt="گردونه شانس" />
              </div>
            </Link>
          </span>
        </div>
      </div>
    </section >
  );
}

export default DigiClubHome;