import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";
import CardAmazingProduct from "../components/cardProductAmazingPage/cardAmazingProduct";
import { data } from "../data/data";
import { http } from "../services/httpService";



const AmazingProductsPage = () => {

  const [products, setProducts] = useState(null)
  const [filter, setFilter] = useState({
    sort: "پربازدید ترین",
    brand: "",
    color: "",
  })

  const sortHandler = (e) => {
    setFilter({ ...filter, sort: e.target.innerText })
  }

  useEffect(() => {
    //GET_ProductAmazing("/products", setProducts)
    setProducts(data.products.filter(p => p.discount > 0))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  async function GET_ProductAmazing(url, setState) {
    try {
      const { data } = await http.get(url)
      data && setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  const LoadingProduct = () => {
    return (
      <>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex border-b md:border p-3 md:flex-col ">
          <span className="block md:w-full w-32 h-32 md:h-64 bg-gray-400 animate-pulse rounded-lg ml-4 md:ml-0"></span>
          <div className="w-full flex-col h-full md:h-auto justify-start items-start">
            <span className="block w-44 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg"></span>
            <span className="block w-32 h-2.5 mt-4 bg-gray-400 animate-pulse rounded-lg md:mt-6"></span>
            <div className="w-full flex justify-between items-center mt-6">
              <span className="block w-7 h-4 bg-gray-400 animate-pulse rounded-lg"></span>
              <span className="block w-28 h-2.5 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
            <div className="w-full flex justify-end items-center mt-2">
              <span className="block w-20 h-2.5 ml-8 bg-gray-400 animate-pulse rounded-lg"></span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/*sort*/}
      <div className="sticky md:top-[64px] top-0 z-30 w-full flex items-center justify-start gap-x-3 p-4 text-sm bg-red-500">
        <FiSliders className="text-2xl" />
        <div className='gap-x-4 flex items-center text-zinc-700'>
          <span onClick={(e) => sortHandler(e)} name="sort" value="Bestselling" className={`${filter.sort === "پرفروش ترین" && "font-bold text-lg text-white"} whitespace-nowrap cursor-pointer w-full md:w-auto block`}>پرفروش ترین</span>
          <span onClick={(e) => sortHandler(e)} name="sort" value="MostVisited" className={`${filter.sort === "پربازدید ترین" && "font-bold text-lg text-white"} whitespace-nowrap cursor-pointer w-full md:w-auto block`}>پربازدید ترین</span>
          <span onClick={(e) => sortHandler(e)} name="sort" value="MostExpensive" className={`${filter.sort === "گرانترین" && "font-bold text-lg text-white"} whitespace-nowrap cursor-pointer w-full md:w-auto block`}>گرانترین</span>
          <span onClick={(e) => sortHandler(e)} name="sort" value="Ceapest" className={`${filter.sort === "ارزان ترین" && "font-bold text-lg text-white"} whitespace-nowrap cursor-pointer w-full md:w-auto block`}>ارزان ترین</span>
        </div>
      </div>
      <section className="container w-full">
        <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products ? products.map(p => {
            return (
              <CardAmazingProduct product={p} />
            )
          }) : <LoadingProduct />}
        </article>
      </section>
    </>
  );
}

export default AmazingProductsPage;