
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi"
import { useEffect, useState } from "react";
import { http } from "../../services/httpService";
import { data } from "../../data/data";
import { separate } from "../../utils/separate";


const EmazingSliderHome = () => {
  const [dataProducts, setDataProducts] = useState(null)

  useEffect(() => {
    //Get_offProduct("/products")
    setDataProducts(data.products.filter(p => p.discount > 0))
  }, [])

  async function Get_offProduct(url) {
    try {
      const { data } = await http.get(url)
      data && setDataProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const LoadingCard = () => {
    return (
      <>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-md p-2 min-w-[175px] max-w-[175px] h-full">
          <div className="w-full animate-pulse flex flex-col justify-between items-center">
            <div className="flex items-center justify-center bg-slate-300 h-32 w-32"></div>
            <div className="w-full space-y-5 py-3 flex px-4 flex-col items-start">
              <div className="h-2 w-1/3 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 w-full bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 w-full bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const CardAmazingProduct = ({ product }) => {
    return (
      <Link to={`/product/${product.title}/${product.id}`} state={{ state: product }} className="rounded cursor-pointer h-full min-w-[175px] bg-white block">
        <div className="w-full h-[150px] flex items-center justify-center">
          <img className="h-full object-cover" src={product.image[0]} />
        </div>
        <article className="h-full px-2 mt-4">
          <div className="w-full flex items-center justify-between">
            <span className="bg-red-600 text-white rounded-full px-1 text-sm">{product.discount}%</span>
            <span className="font-sans text-md font-bold flex items-center justify-center">
              {separate(product.offPrice)}
              <span className="text-[13px] text-gray-600">تومان</span>
            </span>
          </div>
          <div className="w-full flex items-center justify-end pl-8 mt-1">
            <span className="font-sans text-md line-through text-gray-400">{separate(product.price)}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <section className="lg:container bg-red-500 lg:rounded-2xl py-4 px-0.5">
      <div className="scrollbar-hidden w-full h-[230px] overflow-x-scroll overflow-y-hidden flex flex-nowrap items-center justify-start gap-x-1">

        <Link to="/amazingproducts" className="h-full min-w-[175px] flex flex-col justify-center items-center">
          <img className="object-cover h-[40%]" src="/image/amazingSlider/amazing-typo.svg" />
          <img className="object-cover h-[40%]" src="/image/amazingSlider/General.png" />
          <span className="mt-2 flex items-center justify-center text-white">
            مشاهده همه
            <FiChevronLeft className="!text-xl" />
          </span>
        </Link>
        {!dataProducts ? <LoadingCard /> :
          dataProducts.slice(0, 11).map(product => {
            return (
              <CardAmazingProduct key={product.id} product={product} />
            )
          })
        }

        {/*<AmazingSliderItem product={data[0]} onClick={() => cartDispatch({ type: "Add_To_Cart", payload: "mahdi" })} />*/}

        <Link to="/amazingproducts" className="ml-4 rounded min-w-[170px] h-full flex flex-col bg-white items-center justify-center">
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

