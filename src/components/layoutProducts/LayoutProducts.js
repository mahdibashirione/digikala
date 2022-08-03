import { Disclosure } from '@headlessui/react'
import CheckBox from '../common/checkBox'
import { FiSliders, FiChevronDown, FiFilter, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useEffect, useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
import { GET_Data } from "../../utils/requestHttp"
import Radio from '../common/radio'
import { useRef } from "react"
import ReactPaginate from 'react-paginate';

const LayoutProducts = () => {

  const sort = useRef()
  const panelFilter = useRef()
  const backDrop = useRef()

  const [allProduct, setAllProduct] = useState(null)
  const [pageNumber, setPageNumber] = useState(0)
  const [pageCount, setPageCount] = useState(1);

  const productPerPage = 20;
  const pagesVisited = pageNumber * productPerPage;
  const currentProduct = allProduct && allProduct.slice(pagesVisited, pagesVisited + productPerPage)

  const [filter, setFilter] = useState({
    sort: "پربازدید ترین",
    brand: "",
    color: "",
  })

  useEffect(() => {
    GET_Data("/product", setAllProduct)
  }, [])

  useEffect(() => {
    allProduct && setPageCount(Math.ceil(allProduct.length / productPerPage))
  }, [allProduct])

  const [dataFilters, setDataFilters] = useState({
    brands: [
      { value: "apple", name: "brand", lable: "اپل" },
      { value: "sony", name: "brand", lable: "سونی" },
      { value: "lg", name: "brand", lable: "ال جی" },
      { value: "samsung", name: "brand", lable: "سامسونگ" },
      { value: "mi", name: "brand", lable: "شیامی" },
      { value: "htc", name: "brand", lable: "اچ تی سی" },
    ],
    colors: [
      { value: "red", name: "color", lable: "قرمز" },
      { value: "purple", name: "color", lable: "بنفش" },
      { value: "white", name: "color", lable: "سفید" },
      { value: "black", name: "color", lable: "مشکی" },
      { value: "blue", name: "color", lable: "ابی" },
      { value: "green", name: "color", lable: "سبز" },
      { value: "yellow", name: "color", lable: "زرد" },
    ],
    prices: [
      { value: "5", name: "price", lable: "تا 5 میلیون" },
      { value: "10", name: "price", lable: "تا 10 میلیون" },
      { value: "20", name: "price", lable: "تا 20 میلیون" },
      { value: "25", name: "price", lable: "تا 25 میلیون" },
      { value: "50", name: "price", lable: "تا 50 میلیون" },
      { value: "100", name: "price", lable: "تا 100 میلیون" },
    ],
  })

  const sortHandler = (e) => {
    setFilter({ ...filter, sort: e.target.innerText })
  }

  const LoadProduct = () => {
    return (
      <>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
        <div className='h-[270px] bg-gray-400 rounded-lg animate-pulse duration-300'></div>
      </>
    )
  }

  const handleSortOpen = () => {
    sort.current.classList.replace("max-h-0", "max-h-[calc(100vh-40%)]")
    backDrop.current.classList.replace("-top-[500px]", "top-0")
  }

  const handleFilterOpen = () => {
    panelFilter.current.classList.replace("max-h-0", "max-h-[calc(100vh-40%)]")
    backDrop.current.classList.replace("-top-[500px]", "top-0")
  }

  const handleClusePopUp = () => {
    sort.current.classList.replace("max-h-[calc(100vh-40%)]", "max-h-0")
    panelFilter.current.classList.replace("max-h-[calc(100vh-40%)]", "max-h-0")
    backDrop.current.classList.replace("top-0", "-top-[500px]")
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <section className="w-full min-h-screen bg-[#eee]">
      {/*backDrop*/}
      <span onClick={handleClusePopUp} ref={backDrop} className='md:hidden w-screen h-[calc(100vh-60%)] z-40 bg-zinc-900/60 -top-[500px] transition-all duration-300 fixed'></span>
      <div className="md:container py-4 grid grid-cols-1 md:grid-cols-[250px_minmax(100px,_1fr)] grid-rows-[60px_minmax(100px,_1fr)] gap-4">
        {/*filter*/}
        <article ref={panelFilter} className="md:static h-full text-sm md:text-base fixed bottom-0  rounded-t-lg md:bottom-auto w-full md:min-h-full overflow-hidden z-40 md:z-10 w-fuul max-h-0  duration-300 transition-all  md:block md:col-span-1 md:row-span-full">
          <div className="h-full duration-300 transition-all scrollbar-hidden md:h-auto md:max-h-[450px] overflow-y-auto flex flex-col gap-y-2 rounded-lg bg-white p-3">
            {/* brand */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full select-none justify-between rounded-lg p-4 text-left text-sm font-medium text-white-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='w-5 h-5'>
                        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.8334 13.271H1.16669C0.92752 13.271 0.729187 13.0727 0.729187 12.8335C0.729187 12.5943 0.92752 12.396 1.16669 12.396H12.8334C13.0725 12.396 13.2709 12.5943 13.2709 12.8335C13.2709 13.0727 13.0725 13.271 12.8334 13.271Z" fill="#222F5D" />
                          <path d="M2.15845 12.8331H1.28345L1.31262 5.81558C1.31262 5.31975 1.54011 4.85893 1.93095 4.5556L6.01428 1.37643C6.59178 0.927259 7.40262 0.927259 7.98595 1.37643L12.0693 4.54976C12.4543 4.85309 12.6876 5.32558 12.6876 5.81558V12.8331H11.8126V5.82142C11.8126 5.59976 11.7076 5.38393 11.5326 5.24393L7.44928 2.07059C7.18678 1.86643 6.81928 1.86643 6.55095 2.07059L2.46762 5.24977C2.29262 5.38393 2.18762 5.59976 2.18762 5.82142L2.15845 12.8331Z" fill="#222F5D" />
                          <path d="M9.91665 13.2707H4.08331C3.84415 13.2707 3.64581 13.0723 3.64581 12.8332V7.2915C3.64581 6.56817 4.23498 5.979 4.95831 5.979H9.04165C9.76498 5.979 10.3541 6.56817 10.3541 7.2915V12.8332C10.3541 13.0723 10.1558 13.2707 9.91665 13.2707ZM4.52081 12.3957H9.47915V7.2915C9.47915 7.05234 9.28081 6.854 9.04165 6.854H4.95831C4.71915 6.854 4.52081 7.05234 4.52081 7.2915V12.3957Z" fill="#222F5D" />
                          <path d="M5.83331 10.7915C5.59415 10.7915 5.39581 10.5932 5.39581 10.354V9.479C5.39581 9.23984 5.59415 9.0415 5.83331 9.0415C6.07248 9.0415 6.27081 9.23984 6.27081 9.479V10.354C6.27081 10.5932 6.07248 10.7915 5.83331 10.7915Z" fill="#222F5D" />
                          <path d="M7.875 4.8125H6.125C5.88583 4.8125 5.6875 4.61417 5.6875 4.375C5.6875 4.13583 5.88583 3.9375 6.125 3.9375H7.875C8.11417 3.9375 8.3125 4.13583 8.3125 4.375C8.3125 4.61417 8.11417 4.8125 7.875 4.8125Z" fill="#222F5D" />
                        </svg>
                      </div>
                      <span>برند</span>
                    </div>
                    <FiChevronDown className='text-lg' />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-sm text-gray-500 flex flex-col items-start">
                    {dataFilters.brands.map(brand => <CheckBox key={brand.value} lable={brand.lable} name={brand.name} value={brand.value} />)}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* color */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full select-none justify-between rounded-lg p-4 text-left text-sm font-medium text-white-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='w-5 h-5'>
                        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.83335 2.62484V10.4998C5.83335 11.1298 5.57668 11.7073 5.16834 12.1273L5.14502 12.1507C5.09252 12.2032 5.03419 12.2557 4.98169 12.2965C4.80669 12.4482 4.60835 12.5648 4.40418 12.6465C4.34001 12.6757 4.27585 12.699 4.21169 12.7223C3.98419 12.7982 3.73919 12.8332 3.50002 12.8332C3.34252 12.8332 3.18503 12.8157 3.03336 12.7865C2.95753 12.769 2.88169 12.7515 2.80585 12.7282C2.71252 12.699 2.62502 12.6698 2.53752 12.629C2.53752 12.6232 2.53752 12.6232 2.53168 12.629C2.36835 12.5473 2.21086 12.454 2.06503 12.3432L2.05919 12.3373C1.98335 12.279 1.91336 12.2207 1.84919 12.1507C1.78503 12.0807 1.72085 12.0107 1.65668 11.9348C1.54585 11.789 1.45252 11.6315 1.37086 11.4682C1.37669 11.4623 1.37669 11.4623 1.37086 11.4623C1.37086 11.4623 1.37085 11.4565 1.36502 11.4507C1.33002 11.369 1.30085 11.2815 1.27168 11.194C1.24835 11.1182 1.23085 11.0423 1.21335 10.9665C1.18418 10.8148 1.16669 10.6573 1.16669 10.4998V2.62484C1.16669 1.74984 1.75002 1.1665 2.62502 1.1665H4.37502C5.25002 1.1665 5.83335 1.74984 5.83335 2.62484Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12.8333 9.62484V11.3748C12.8333 12.2498 12.25 12.8332 11.375 12.8332H3.5C3.73917 12.8332 3.98417 12.7982 4.21167 12.7223C4.27583 12.699 4.33999 12.6757 4.40416 12.6465C4.60833 12.5648 4.80667 12.4482 4.98167 12.2965C5.03417 12.2557 5.0925 12.2032 5.145 12.1507L5.16832 12.1273L9.135 8.1665H11.375C12.25 8.1665 12.8333 8.74984 12.8333 9.62484Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M2.80578 12.7285C2.45578 12.6235 2.12329 12.431 1.84912 12.151C1.56912 11.8768 1.37661 11.5443 1.27161 11.1943C1.49911 11.9235 2.07661 12.501 2.80578 12.7285Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M10.7158 6.58572L9.13495 8.16656L5.16827 12.1274C5.57661 11.7074 5.83328 11.1299 5.83328 10.4999V4.86489L7.41411 3.28406C8.03244 2.66573 8.86078 2.66573 9.47912 3.28406L10.7158 4.52073C11.3341 5.13906 11.3341 5.96739 10.7158 6.58572Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.50002 11.0832C3.82219 11.0832 4.08335 10.822 4.08335 10.4998C4.08335 10.1777 3.82219 9.9165 3.50002 9.9165C3.17785 9.9165 2.91669 10.1777 2.91669 10.4998C2.91669 10.822 3.17785 11.0832 3.50002 11.0832Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>رنگ</span>
                    </div>
                    <FiChevronDown className='text-lg' />
                  </Disclosure.Button>
                  <Disclosure.Panel className=" text-sm text-gray-500 flex flex-col items-start">
                    {dataFilters.colors.map(brand => <CheckBox key={brand.value} lable={brand.lable} name={brand.name} value={brand.value} />)}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* price */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full select-none justify-between rounded-lg p-4 text-left text-sm font-medium text-white-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div className='flex items-center justify-center gap-x-2'>
                      <div className='w-5 h-5'>
                        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5234 7.90383C10.2784 8.143 10.1384 8.48717 10.1734 8.85467C10.2259 9.48467 10.8034 9.9455 11.4334 9.9455H12.5418V10.6397C12.5418 11.8472 11.5559 12.833 10.3484 12.833H3.65177C2.44427 12.833 1.45844 11.8472 1.45844 10.6397V6.71385C1.45844 5.50635 2.44427 4.52051 3.65177 4.52051H10.3484C11.5559 4.52051 12.5418 5.50635 12.5418 6.71385V7.55385H11.3634C11.0368 7.55385 10.7393 7.68217 10.5234 7.90383Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1.45844 7.23877V4.57297C1.45844 3.8788 1.88427 3.26044 2.53177 3.01544L7.16343 1.26544C7.88677 0.991275 8.6626 1.52796 8.6626 2.30379V4.52045" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M13.1593 8.14917V9.35088C13.1593 9.67171 12.9026 9.93418 12.576 9.94585H11.4326C10.8026 9.94585 10.2251 9.48502 10.1726 8.85502C10.1376 8.48752 10.2776 8.14335 10.5226 7.90418C10.7385 7.68252 11.036 7.5542 11.3626 7.5542H12.576C12.9026 7.56587 13.1593 7.82834 13.1593 8.14917Z" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.08331 7H8.16665" stroke="#222F5D" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <span>محدوده قیمت</span>
                    </div>
                    <FiChevronDown className='text-lg' />
                  </Disclosure.Button>
                  <Disclosure.Panel className=" text-sm text-gray-500 flex flex-col items-start">
                    {dataFilters.prices.map(brand => <Radio key={brand.value} lable={brand.lable} name={brand.name} value={brand.value} />)}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </article>
        {/*sort*/}
        <article className="text-sm md:text-base md:col-[2/3] py-2 md:py-0 z-30 md:z-10 md:py-auto fixed top-[105px] md:top-auto bg-white md:bg-transparent w-full md:w-auto h-[70px] md:h-auto md:relative md:row-[1/2] px-4 md:px-0 gap-x-2 flex items-center justify-between">
          <div className="border md:border-0 px-4 select-none md:w-full w-1/2 h-full flex text-sm lg:text-[1rem] items-center rounded-lg bg-white justify-start gap-x-4 text-gray-400">
            <FiSliders className="text-red-500 text-2xl" />
            <div ref={sort} className='h-full fixed duration-300 transition-all md:border-0 overflow-hidden md:relative bg-white w-full border-t md:w-auto max-h-0 md:h-full md:max-h-full right-0 flex-col md:flex-row bottom-0 z-40 md:z-10  md:flex items-center justify-center gap-4'>
              <span onClick={(e) => sortHandler(e)} name="sort" value="Bestselling" className={`${filter.sort === "پرفروش ترین" && "font-bold text-slate-900"} text-center py-4 md:py-0 cursor-pointer w-full md:w-auto block`}>پرفروش ترین</span>
              <span onClick={(e) => sortHandler(e)} name="sort" value="MostVisited" className={`${filter.sort === "پربازدید ترین" && "font-bold text-slate-900"} text-center py-4 md:py-0 cursor-pointer w-full md:w-auto block`}>پربازدید ترین</span>
              <span onClick={(e) => sortHandler(e)} name="sort" value="MostExpensive" className={`${filter.sort === "گرانترین" && "font-bold text-slate-900"} text-center py-4 md:py-0 cursor-pointer w-full md:w-auto block`}>گرانترین</span>
              <span onClick={(e) => sortHandler(e)} name="sort" value="Ceapest" className={`${filter.sort === "ارزان ترین" && "font-bold text-slate-900"} text-center py-4 md:py-0 cursor-pointer w-full md:w-auto block`}>ارزان ترین</span>
            </div>
            <span onClick={handleSortOpen} className='font-bold cursor-pointer h-full w-full md:hidden flex items-center justify-start text-slate-800'>{filter.sort}</span>
          </div>
          <div onClick={handleFilterOpen} className="border md:border-0 cursor-pointer flex px-4 items-center md:hidden w-1/2 bg-white h-full rounded-lg justify-start gap-2">
            <FiFilter className='text-xl text-red-500' />
            <span className='font-bold text-slate-800'>فیلترها</span>
          </div>
        </article>
        {/*products*/}
        <article className="z-10 px-4 md:px-0 md:col-[2/3] row-[2/3] rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allProduct ? currentProduct.map(p => <CardProduct product={p} />) : <LoadProduct />}
        </article>
      </div >
      {/*pagination*/}
      <div className='w-full flex items-center justify-center py-6 select-none'>
        <ReactPaginate
          previousLabel={<FiChevronRight className='text-lg' />}
          nextLabel={<FiChevronLeft className='text-lg' />}
          renderOnZeroPageCount={null}
          breakLabel="..."
          pageRangeDisplayed={5}
          pageCount={pageCount}
          onPageChange={changePage}
          disabledClassName="opacity-50"
          containerClassName="flex items-center gap-x-2"
          activeClassName='font-bold text-white px-2.5 rounded-lg bg-gray-400 p-1.5 text-sm'
          previousClassName='font-bold text-blue-500 rounded-lg border border-blue-500 p-1.5 text-sm hover:bg-blue-500 hover:text-white'
          nextClassName='font-bold text-blue-500 rounded-lg border border-blue-500 p-1.5 text-sm hover:bg-blue-500 hover:text-white'
        />
      </div>
    </section >
  );
}

export default LayoutProducts;