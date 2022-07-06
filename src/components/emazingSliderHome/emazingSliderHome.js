
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi"
import { useCartActions } from "../../context/Cart/CartProvider";
import { useEffect, useState } from "react";
import AmazingSliderItem from "../amazingSliderItem/AmazingSliderItem";
import axios from "axios";


const EmazingSliderHome = () => {

  const cartDispatch = useCartActions()
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("/amazingProduct")
      .then(res => setData(res.data))
  }, [])

  return (
    <section className="container bg-red-500 rounded-lg py-4 px-0.5">
      <div className="scrollbar-hidden w-full h-[245px] overflow-x-scroll overflow-y-hidden flex flex-nowrap items-center justify-start gap-x-1">

        <Link to="#" className="h-full min-w-[175px] flex flex-col justify-center items-center">
          <img className="object-cover h-[40%]" src="/image/amazingSlider/amazing-typo.svg" />
          <img className="object-cover h-[40%]" src="/image/amazingSlider/General.png" />
          <span className="mt-2 flex items-center justify-center text-white">
            مشاهده همه
            <FiChevronLeft className="!text-xl" />
          </span>
        </Link>
        {!data ? <span>loading...</span> :
          data.map(product => {
            return (
              <AmazingSliderItem key={product.id} product={product} />
            )
          })
        }

        {/*<AmazingSliderItem product={data[0]} onClick={() => cartDispatch({ type: "Add_To_Cart", payload: "mahdi" })} />*/}

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

