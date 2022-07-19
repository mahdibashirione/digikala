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
      <Link to={`/product/${product.name}/${product._id}`} state={{ state: product }} className="min-w-[80px] h-20 flex items-center justify-center overflow-hidden ml-4">
        <img className="h-full object-cover" src={product.image} alt="image_Product" />
      </Link>
      {/*Ditail*/}
      <div className="w-full flex flex-col justify-start gap-y-4 select-none">
        <span className="font-bold text-sm">{product.name}</span>
        {product.discount > 0 && <div className="select-none text-white gap-x-2 flex justify-start items-center">
          <span className="text-gray-500 line-through">{product.price}</span>
          <span className="bg-red-500 rounded-full py-1 px-2 text-sm">{product.discount}%</span>
        </div>}
        <p className="text-red-500 font-bold">{product.discount > 0 ? product.offPrice : product.price} تومان</p>
      </div>
      {/*increment dicrement delete*/}
      <div className="py-2 px-3 select-none text-red-500 border rounded-lg flex justify-center items-center gap-x-3">
        <FiPlus onClick={() => cartDispatch({ type: "Increment", payload: product })} className="text-lg cursor-pointer" />
        <p>{product.quantity}</p>
        {product.quantity > 1 ? <FiMinus onClick={() => cartDispatch({ type: "Decrement", payload: product })} className="text-lg cursor-pointer" />
          : <FiTrash2 onClick={() => cartDispatch({ type: "Decrement", payload: product })} className="text-lg cursor-pointer" />}
      </div>
    </div>
  );
}

export default CartItem;