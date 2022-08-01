import { Link } from "react-router-dom";
import { FiStar, FiHome } from "react-icons/fi";



const CardAmazingProduct = ({ product }) => {
  return (
    <Link to={`/product/${product.name}/${product._id}`} state={{ state: product }} className="md:border p-2 flex md:flex-col md:justify-start justify-between items-center w-full border-b select-none">
      {/*image*/}
      <div className="md:w-full w-32 h-32 md:h-64 ml-4 md:ml-0">
        <img src={product.image} alt={""} className="h-full object-cover" />
      </div>
      <div className="flex flex-col w-full h-full text-sm">
        {/*name*/}
        <span className="block md:mb-6 text-lg text-slate-800 w-full text-ellipsis overflow-hidden whitespace-nowrap">
          {product.name}
        </span>
        <div className="w-full flex justify-between mt-4 md:mt-0">
          <div className="flex items-center gap-x-2">
            <FiHome className="text-blue-500 text-lg" />
            <span>موجود در انبار دیجی کالا</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>4.5</span>
            <FiStar className="text-yellow-500" />
          </div>
        </div>
        <div className="w-full flex-wrap flex justify-between items-center my-4">
          <div className="w-1/2">
            <span className="text-white px-2 py-1 bg-red-500 rounded-full">{product.discount}%</span>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-x-2">
            <span className="text-lg">{product.offPrice}</span>
            <span>تومان</span>
          </div>
          <div className="w-full flex items-center justify-end gap-x-2">
            <span className="text-gray-400 line-through ml-11">{product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardAmazingProduct;