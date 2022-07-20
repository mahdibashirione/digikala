import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <Link to={`/product/${product.name}/${product._id}`} state={{ state: product }} className="relative select-none px-4 py-2 h-[275px] rounded-lg border shadow bg-white flex flex-col justify-between items-center">
      <div className="h-[120px] w-[120px]">
        <img className="w-full object-cover" src={product.image} alt="product" />
      </div>
      <span className="text-sm w-full whitespace-nowrap text-ellipsis break-words overflow-hidden mt-2">{product.name}</span>
      <div className="w-full flex items-center justify-between">
        {product.discount > 0 && <span className="bg-red-500 text-white rounded-full py-1 px-1.5 text-sm">{product.discount}%</span>}
        {product.discount > 0 && <span className="text-gray-500 line-through w-full block text-left">{product.price}</span>}
      </div>
      <div className="text-orange-500 w-full flex items-center justify-end">
        <p className="font-bold">{product.discount > 0 ? product.offPrice : product.price}</p>
        <p className="text-sm mr-1">تومان</p>
      </div>
      <button className="w-full border-t py-1.5 text-sm text-gray-500">مشاهده و خرید</button>
    </Link>
  );
}

export default CardProduct;