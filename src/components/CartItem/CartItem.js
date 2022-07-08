import { FiTrash2 } from "react-icons/fi";
import { useCartActions } from "../../context/Cart/CartProvider";

const CartItem = ({ product }) => {
  const cartDispatch = useCartActions()

  return (
    <div className="bg-white w-full p-3 flex items-center justify-start rounded-lg shadow">
      {/*image product*/}
      <div className="min-w-[80px] h-20 flex items-center justify-center">
        <img className="h-full object-cover" src={product.image} alt="image_Product" />
      </div>
      {/*Ditail*/}
      <div className="w-full flex flex-col justify-start gap-y-4 select-none">
        <span className="font-bold text-sm">{product.name}</span>
        {product.afterPrice && <div className="select-none text-white gap-x-2 flex justify-start items-center">
          <span className="text-gray-500 line-through">{product.price}</span>
          <span className="bg-red-500 rounded-full py-1 px-2 text-sm">{product.discount}</span>
        </div>}
        <p className="text-orange-500 font-bold">{product.afterPrice || product.price}</p>
      </div>
      {/*increment dicrement delete*/}
      <div className="h-20 flex flex-col justify-between items-end">
        <div onClick={() => cartDispatch({ type: "Delete_From_Cart", id: product.id })}>
          <FiTrash2 className="text-orange-500 text-xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-3 select-none">
          <span onClick={() => cartDispatch({ type: "Increment", id: product.id })} className="bg-gray-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-slate-800 rounded-full"> + </span>
          <p>{product.quantity}</p>
          <span onClick={() => cartDispatch({ type: "Decrement", id: product.id })} className="bg-orange-300 text-lg cursor-pointer w-6 h-6 flex justify-center items-center text-white rounded-full"> - </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;