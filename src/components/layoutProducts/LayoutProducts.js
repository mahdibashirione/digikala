import { Disclosure } from '@headlessui/react'
import { FiSliders } from "react-icons/fi"

const LayoutProducts = () => {
  return (
    <section className="w-full bg-[#f4f4f4]">
      <div className="container py-4 grid grid-cols-1 md:grid-cols-[250px_minmax(100px,_1fr)] grid-rows-[60px_minmax(900px,_1fr)] gap-4">
        <article className="md:col-span-1 md:row-span-full">
          <div className="p-2 w-full bg-white rounded-lg sticky top-[85px]">
            <div className="mx-auto w-full flex flex-col gap-y-2 max-w-md rounded-2xl bg-white p-2">
              {/*category*/}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full select-none justify-between rounded-lg bg-red-100 p-4 text-left text-sm font-medium text-white-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>دسته بندی</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-sm text-gray-500 flex flex-col items-start">
                      <span className='cursor-pointer px-4 py-2 rounded-md block w-full hover:bg-slate-100'>موبایل</span>
                      <span className='cursor-pointer px-4 py-2 rounded-md block w-full hover:bg-slate-100'>لوازم خانگی</span>
                      <span className='cursor-pointer px-4 py-2 rounded-md block w-full hover:bg-slate-100'>ابزارالات</span>
                      <span className='cursor-pointer px-4 py-2 rounded-md block w-full hover:bg-slate-100'>لوزم خودرو</span>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* brand */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full select-none justify-between rounded-lg bg-red-100 p-4 text-left text-sm font-medium text-white-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>برند</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className=" text-sm text-gray-500 flex flex-col items-start">
                      <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
                        <input type={"checkbox"} className="w-5 h-5 cursor-pointer" name="sony" />
                        <label htmlFor="apple" className='cursor-pointer py-3 w-full'>اپل</label>
                      </div>
                      <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
                        <input type={"checkbox"} className="w-5 h-5 cursor-pointer" name="samsung" />
                        <label htmlFor="samsung" className='cursor-pointer py-3 w-full'>سامسونگ</label>
                      </div>
                      <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
                        <input type={"checkbox"} className="w-5 h-5 cursor-pointer" name="mi" />
                        <label htmlFor="mi" className='cursor-pointer py-3 w-full'>شیامی</label>
                      </div>
                      <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
                        <input type={"checkbox"} className="w-5 h-5 cursor-pointer" name="lg" />
                        <label htmlFor="lg" className='cursor-pointer py-3 w-full'>ال جی</label>
                      </div>
                      <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
                        <input type={"checkbox"} className="w-5 h-5 cursor-pointer" name="sony" />
                        <label htmlFor="sony" className='cursor-pointer py-3 w-full'>سونی</label>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </article>
        <article className="md:col-[2/3] md:row-[1/2] bg-white rounded-lg">
          <div className="px-4 w-full h-full flex items-center justify-start">
            <FiSliders className="text-red-500 text-2xl" />
          </div>
        </article>
        <article className="md:col-[2/3] md:row-[2/3] bg-white rounded-lg"></article>
      </div >
    </section >
  );
}

export default LayoutProducts;