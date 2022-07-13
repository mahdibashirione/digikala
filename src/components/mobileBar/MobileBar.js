import { Link, useLocation } from "react-router-dom";





const MobileBar = () => {

  const routes = [
    { path: "/", lable: "خانه" },
    { path: "/categories", lable: "دسته بندی ها" },
    { path: "/cart", lable: "سبد خرید" },
  ]

  const location = useLocation()

  const inRoute = routes.find(rout => rout.path == location.pathname)

  return (
    <section className="z-30 text-sm whitespace-nowrap w-full bg-white fixed bottom-0 flex justify-between items-center right-0 border-t">
      <Link to="/categories" className={`px-4 py-2 flex items-center justify-center h-full`}>
        <div className={`flex items-center justify-center px-3 py-1.5 rounded-full ${inRoute.path === "/categories" ? "bg-red-500" : "bg-white"}`}>
          <div className="w-8 h-8"><img className="w-full object-cover fill-slate-200" src="/image/mobileBar/category.svg" alt="cart" /></div>
          <span className={`${inRoute.path === "/categories" ? "block" : "hidden"} text-white font-bold mr-2 `}>دسته بندی</span>
        </div>
      </Link>
      <Link to="/" className={`px-4 py-2 flex items-center justify-center h-full`}>
        <div className={`flex items-center justify-center px-3 py-1.5 rounded-full ${inRoute.path === "/" ? "bg-red-500" : "bg-white"}`}>
          <div className="w-8 h-8"><img className="w-full object-cover fill-slate-200" src="/image/mobileBar/home.svg" alt="home" /></div>
          <span className={`${inRoute.path === "/" ? "block" : "hidden"} text-white font-bold mr-2 `}>خانه</span>
        </div>
      </Link>
      <Link to="/cart" className={`px-4 py-2 flex items-center justify-center h-full`}>
        <div className={`flex items-center justify-center px-3 py-1.5 rounded-full ${inRoute.path === "/cart" ? "bg-red-500" : "bg-white"}`}>
          <div className="w-8 h-8"><img className="w-full object-cover fill-slate-200 -mt-[3px]" src="/image/mobileBar/cart.svg" alt="cart" /></div>
          <span className={`${inRoute.path === "/cart" ? "block" : "hidden"} text-white font-bold mr-2 `}>سبد خرید</span>
        </div>
      </Link>
    </section>
  );
}

export default MobileBar;