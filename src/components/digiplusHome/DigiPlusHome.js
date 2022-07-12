import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import { BiCreditCard } from "react-icons/bi"
import { BiHourglass } from "react-icons/bi"
import { Link } from "react-router-dom";
import { http } from "../../services/httpService";


const DigiPlusHome = () => {

  const [dataDigiPlus, setDataDigiPlus] = useState(null)

  useEffect(() => {
    Get_DigiPlus()
  }, [])

  async function Get_DigiPlus() {
    try {
      const { data } = await http.get("/digiPlus")
      if (data) setDataDigiPlus(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [numberProductsView, numberProductsViewmd, numberProductsViewlg] = [3, 8, 12]



  return (
    <section className="w-full mt-4">
      <div className="lg:container w-full lg:rounded-lg p-4 bg-[#941B80] flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:max-w-[300px] flex flex-col md:flex-row lg:flex-col justify-between">
          <div className="select-none md:w-1/2 lg:w-full flex flex-col items-start justify-start font-sans text-md text-white">
            <h2 className="text-4xl font-bold">digiplus</h2>
            <p className="my-4">خدمات ویژه برای اعضای دیجی پلاس</p>
            <button className="border border-white rounded-md flex items-center justify-center py-1.5 px-4 text-sm">
              عضویت
              <BiArrowBack className="mr-2 text-xl" />
            </button>
          </div>
          <div className="w-full h-full md:w-1/2 lg:w-full max-w-[300px] flex justify-start">
            <div className="h-full">
              <img className="w-full object-cover" src="https://www.digikala.com/statics/img/png/digiplus/plus-widget.png" alt="digiPlus" />
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-[880px] flex flex-col lg:gap-x-2 lg:flex-row items-center justify-center">
          <div className="bg-white p-4 w-full rounded-lg mt-2 lg:m-0 flex flex-col justify-start items-center">
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
            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-y-6">
              {dataDigiPlus ? dataDigiPlus.slice(0, (window.innerWidth >= 1024 && numberProductsViewlg) || (window.innerWidth < 768 ? numberProductsView : numberProductsViewmd))
                .map(data => {
                  return (
                    <Link to={`/product/${data.nameEN}/${data.id}`} state={{ state: data }} className="flex flex-col items-center justify-center w-full">
                      <div className="w-full max-w-[120px]">
                        <img className="w-full object-cover" src={data.img} alt={data.name} />
                      </div>
                    </Link>
                  )
                }) : <span>Loading...</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigiPlusHome;