import { BiArrowBack } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { BiCreditCard } from "react-icons/bi"
import { BiHourglass } from "react-icons/bi"
import { Link } from "react-router-dom";


const DigiPlusHome = () => {
  return (
    <section className="w-full mt-4">
      <div className="container w-full rounded-lg p-4 bg-[#941B80] flex flex-col lg:flex-row items-start justify-between">
        <div className="select-none flex flex-col items-start justify-start font-sans text-md text-white">
          <h2 className="text-4xl font-bold">digiplus</h2>
          <p className="my-4">خدمات ویژه برای اعضای دیجی پلاس</p>
          <button className="border border-white rounded-md flex items-center justify-center py-1.5 px-4 text-sm">
            عضویت
            <BiArrowBack className="mr-2 text-xl" />
          </button>
        </div>
        <div className="w-full lg:max-w-[880px] flex flex-col lg:gap-x-2 lg:flex-row items-center justify-center">
          {/*left*/}
          <div className="bg-white p-2 w-full rounded-t-lg lg:rounded-none lg:rounded-r-lg mt-4 lg:m-0 flex flex-col justify-start items-center">
            {/*title*/}
            <div className="w-full flex items-center justify-between font-sans select-none">
              <span className="flex items-center justify-center">
                <BiCreditCard className="text-[#941B80] text-2xl ml-1" />
                هدیه نقدی
              </span>
              <Link to={"#"} className="flex items-center justify-center text-[#941B80]">
                مشاهده همه
                <BiChevronLeft className="text-xl" />
              </Link>
            </div>
            {/*products*/}
            <div className="w-full grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
            </div>
          </div>
          {/*right*/}
          <div className="bg-white p-2 w-full rounded-b-lg lg:rounded-none lg:rounded-l-lg mt-2 lg:m-0 flex flex-col justify-start items-center">
            {/*title*/}
            <div className="w-full flex items-center justify-between font-sans select-none">
              <span className="flex items-center justify-center">
                <BiHourglass className="text-[#941B80] text-2xl ml-1" />
                ارسال فوری
              </span>
              <Link to={"#"} className="flex items-center justify-center text-[#941B80]">
                مشاهده همه
                <BiChevronLeft className="text-xl" />
              </Link>
            </div>
            {/*products*/}
            <div className="w-full grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
              <div className="p-2 flex items-center justify-center">
                <Link to={"#"} className="max-w-[120px] flex flex-col items-center justify-center w-full">
                  <div className="w-full">
                    <img className="w-full object-cover" src="/image/digiplusHome.jpg" alt="کالا" />
                  </div>
                  <p className="font-sans text-sm text-[#941B80]">2,500 تومان هدیه</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigiPlusHome;