import { FiTrash2 } from "react-icons/fi";

const CartItem = ({ product }) => {
  return (
    <div className="bg-white w-full p-3 flex items-center justify-start rounded-lg shadow">
      {/*image product*/}
      <div className="w-20 h-20 flex items-center justify-center">
        <img className="h-full object-cover" src={product.image} alt="image_Product" />
      </div>
      {/*Ditail*/}
      <div className="w-full flex flex-col justify-between gap-y-4 select-none">
        <span className="font-bold text-sm">{product.name}</span>
        <p className="text-orange-500">{product.price}</p>
      </div>
      {/*increment dicrement delete*/}
      <div className="h-20 flex flex-col justify-between items-end">
        <div>
          <FiTrash2 className="text-orange-500 text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-3 select-none">
          <span className="bg-gray-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-slate-800 rounded-full"> + </span>
          <p>{product.quantity}</p>
          <span className="bg-orange-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-white rounded-full"> - </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;