import { Link } from "react-router-dom"
import { BiPodcast } from "react-icons/bi"
import { BiCycling } from "react-icons/bi"
import { BiDonateHeart } from "react-icons/bi"
import { useState } from "react"

const DigiClubHome = () => {

  const [dataClub, setDataClub] = useState([
    { id: 1, img: "/image/digiclub/lucky-draw.png", url: "#", title: "گردونه شانس", icon: <BiPodcast className="text-xl text-blue-500" /> },
    { id: 2, img: "/image/digiclub/missions.png", url: "#", title: "ماموریت ها", icon: <BiCycling className="text-xl text-blue-500" /> },
    { id: 3, img: "/image/digiclub/awards.png", url: "#", title: "جایزه ها", icon: <BiDonateHeart className="text-xl text-blue-500" /> },
  ])

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
          {dataClub.map(data => {
            return (
              <Link key={data.id} className="w-1/3 h-full rounded bg-white p-1 overflow-hidden flex lg:flex-row flex-col justify-between items-center" to={"#"}>
                <div className="lg:flex-row lg:gap-x-1 flex items-center justify-center flex-col gap-y-1">
                  {data.icon}
                  <span className="text-sm font-sans text-slate-800 whitespace-nowrap">{data.title}</span>
                </div>
                <div className="w-full lg:max-w-[145px] mt-4 lg:mt-0">
                  <img className="w-full object-cover" src={data.img} alt={data.title} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section >
  );
}

export default DigiClubHome;