import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutProducts from "../components/layoutProducts/LayoutProducts";
import { http } from "../services/httpService"






const CategoriesPage = () => {

  //const [categoryData, setCategoryData] = useState(null)

  //useEffect(() => {
  //  Get_Category()
  //}, [])

  //async function Get_Category() {
  //  try {
  //    const { data } = await http.get("/category")
  //    if (data) setCategoryData(data)
  //  } catch (e) {
  //    console.log(e)
  //  }
  //}

  //const CardItem = ({ item }) => {
  //  return (
  //    <Link to={`/category/${item.titleEN}s`} className="w-full pt-4 gap-y-2 overflow-hidden flex flex-col items-center justify-between bg-slate-200 rounded-lg">
  //      <span className="text-slate-600">{item.title}</span>
  //      <div className="w-full">
  //        <img className="w-full object-cover" src={item.img} alt={item.title} />
  //      </div>
  //    </Link>
  //  )
  //}

  //const LoadingCard = () => {
  //  return (
  //    <>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //      <article className="flex items-center justify-center w-full h-56 rounded-xl bg-slate-400 animate-pulse duration-300"></article>
  //    </>
  //  )
  //}

  return (
    <LayoutProducts />
    //<section className="w-full">
    //  <div className="container p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
    //    {!categoryData ? <LoadingCard /> : categoryData.map(data => < CardItem item={data} />)}
    //  </div>
    //</section>
  );
}

export default CategoriesPage;