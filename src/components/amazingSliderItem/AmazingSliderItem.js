import { Link } from "react-router-dom";
import { useCartActions } from "../../context/Cart/CartProvider";

const AmazingSliderItem = ({ product }) => {
  const cartDispatch = useCartActions()

  return (
    <Link onClick={() => cartDispatch({ type: "Add_To_Cart", payload: product })} to="#" className="block h-full min-w-[175px] bg-white">
      <div className="w-full h-[150px] flex items-center justify-center">
        <img className="h-full object-cover" src={product.image} />
      </div>
      <div className="w-full px-2 mb-2">
        <span className="text-sm">
          {product.name}
        </span>
      </div>
      <article className="h-full px-2">
        <div className="w-full flex items-center justify-between">
          <span className="bg-red-600 text-white rounded-full px-1">{product.discount}</span>
          <span className="font-sans text-md font-bold flex items-center justify-center">
            {product.afterPrice}
            <span className="text-[13px] text-gray-600">تومان</span>
          </span>
        </div>
        <div className="w-full flex items-center justify-end pl-8 mt-1">
          <span className="font-sans text-md line-through text-gray-400">{product.price}</span>
        </div>
      </article>
    </Link>
  );
}

export default AmazingSliderItem;