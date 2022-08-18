import { Link } from "react-router-dom";
import { separate } from "../../utils/separate";

const CardProduct = ({ product }) => {
  return (
    <Link to={`/product/${product.title}/${product.id}`} state={{ state: product }} className="hover:scale-105 duration-300 relative select-none px-4 py-2 h-[275px] rounded-lg border shadow bg-white flex flex-col justify-between items-center">
      <div className="h-[120px] w-[120px] flex items-center justify-center">
        <img className="h-full object-cover" src={product.image[0]} alt="product" />
      </div>
      <span className="text-sm w-full line-clamp-1 mt-2">
        {product.title}
      </span>
      <div className="w-full flex items-center justify-between">
        {product.discount > 0 && <span className="bg-red-500 text-white rounded-full p-1 text-sm">{product.discount}%</span>}
        {product.discount > 0 && <span className="text-gray-500 line-through w-full block text-left">{product.price}</span>}
      </div>
      <div className="text-red-500 w-full flex items-center justify-end">
        <p className="font-bold">{product.discount > 0 ? separate(product.offPrice) : separate(product.price)}</p>
        <p className="text-sm mr-1">تومان</p>
      </div>
      <button className="w-full border-t py-2 text-sm text-gray-500">مشاهده و خرید</button>
    </Link>
  );
}

export default CardProduct;