import { Link } from "react-router-dom"
import { BiPodcast } from "react-icons/bi"
import { BiCycling } from "react-icons/bi"
import { BiDonateHeart } from "react-icons/bi"

const DigiClubHome = () => {
  return (
    <section className="mt-2 mb-8 w-full p-4 bg-gradient-to-r from-teal-400 to-teal-700">
      <div className="container flex flex-col items-center">
        <div className="w-full py-2">
          <Link className="block w-28" to={"#"}>
            <div className="w-full">
              <img className="w-full object-cover" src="/image/digiclub/digiclub.svg" alt="دیجی کلاب" />
            </div>
          </Link>
        </div>
        <div className="max-w-[390px] max-h-32 gap-x-0.5 flex items-center justify-center mt-4">
          <span className="block w-1/3 h-full bg-white p-1 rounded-r-lg">
            <Link className="w-full h-full flex flex-col justify-between items-center" to={"#"}>
              <div className="flex items-center justify-center flex-col gap-y-1">
                <BiPodcast className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800">گردونه شانس</span>
              </div>
              <div className="w-full mt-2">
                <img className="w-full object-cover" src="/image/digiclub/lucky-draw.png" alt="گردونه شانس" />
              </div>
            </Link>
          </span>
          <span className="block w-1/3 h-full bg-white p-1">
            <Link className="w-full h-full flex flex-col justify-between items-center" to={"#"}>
              <div className="flex items-center justify-center flex-col gap-y-1">
                <BiCycling className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800">ماموریت ها</span>
              </div>
              <div className="w-full mt-2">
                <img className="w-full object-cover" src="/image/digiclub/lucky-draw.png" alt="گردونه شانس" />
              </div>
            </Link>
          </span>
          <span className="block w-1/3 h-full bg-white p-1 rounded-l-lg">
            <Link className="w-full h-full flex flex-col justify-between items-center" to={"#"}>
              <div className="flex items-center justify-center flex-col gap-y-1">
                <BiDonateHeart className="text-xl text-blue-500" />
                <span className="text-sm font-sans text-slate-800">جایزه ها</span>
              </div>
              <div className="w-full mt-2">
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