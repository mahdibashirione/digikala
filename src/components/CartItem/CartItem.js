import { FiTrash2 } from "react-icons/fi";

const CartItem = () => {
  return (
    <div className="bg-white w-full p-3 flex items-center justify-start rounded-lg shadow">
      <div className="w-20 h-20 flex items-center justify-center">
        <img className="h-full object-cover" src="/image/Cart/1.png" alt="image_Product" />
      </div>
      <div className="w-full flex flex-col justify-between gap-y-4 select-none">
        <span className="font-bold text-sm">اپل واچ سری 7 44mm</span>
        <p className="text-orange-500">12,500,000</p>
      </div>
      <div className="h-20 flex flex-col justify-between items-end">
        <div>
          <FiTrash2 className="text-orange-500 text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-3 select-none">
          <span className="bg-gray-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-slate-800 rounded-full"> + </span>
          <p>0</p>
          <span className="bg-orange-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-white rounded-full"> - </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;