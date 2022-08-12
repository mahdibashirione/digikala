import { FiTrash2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartActions } from "../../context/Cart/CartProvider";

const CartItem = ({ product }) => {
  const cartDispatch = useCartActions()

  return (
    <div className="bg-white w-full p-3 border flex items-center justify-start rounded-lg shadow">
      {/*image product*/}
      <div className="relative min-w-[80px] h-20 flex items-center justify-center ml-4">
        <img className="h-full object-cover" src={product.image[0]} alt="image_Product" />
        {product.discount > 0 && <span className="bg-red-500 rounded-full py-1 px-2 text-sm absolute right-0 -top-4 text-white">{product.discount}%</span>}
      </div>
      {/*Ditail*/}
      <div className="w-full flex flex-col justify-start gap-y-4 select-none">
        <span className="font-bold text-sm">{product.title}</span>
        <div className="text-zinc-800 w-full flex items-center justify-between gap-x-2" >
          <div className="flex items-center justify-start gap-x-2">
            رنگ :
            <span style={{ backgroundColor: `${product.color}`, color: `${product.color}`, }} className={`w-5 h-5 rounded-full shadow`}></span>
          </div>
          {/*increment dicrement delete*/}
          <div className="py-2 px-3 select-none text-red-500 border rounded-lg flex justify-center items-center gap-x-3">
            <FiPlus onClick={() => cartDispatch({ type: "Increment", payload: product })} className="text-lg cursor-pointer" />
            <p>{product.quantity}</p>
            {product.quantity > 1 ? <FiMinus onClick={() => cartDispatch({ type: "Decrement", payload: product })} className="text-lg cursor-pointer" />
              : <FiTrash2 onClick={() => cartDispatch({ type: "Decrement", payload: product })} className="text-lg cursor-pointer" />}
          </div>
        </div>
        <div className="select-none text-white gap-x-2 flex justify-between items-center">
          <p className="text-red-500 font-bold">{product.discount > 0 ? product.offPrice : product.price} تومان</p>
          {product.discount > 0 && <span className="text-gray-500 line-through">{product.price}</span>}
        </div>
      </div>
    </div>
  );
}

export default CartItem;