import { useState } from "react";
import { http } from "../services/httpService";




const DashboardPage = () => {

  const [newProduct, setNewProduct] = useState({
    image: "/image/amazingSlider/imgProduct/1.jpg",
    discount: 7,
    offPrice: "6250000",
    price: "12500000",
    name: "ساعت هوشمند اپل",
    nameEN: "Apple Watch Serises 7"
  })


  const handleSubmit = () => {
    http.post("/products", JSON.stringify(
      {
        ...newProduct,
        _id: Math.floor(Math.random() * 10000)
      }
    )).then(res => console.log(res))
  }

  return (
    <selection className="w-full h-full">
      <article className="md:container m-4">
        <button className="bg-blue-500 rounded-lg py-3 text-sm text-white px-4 hover:scale-95 duration-300" onClick={handleSubmit}>Add New Product</button>
      </article>
    </selection>
  );
}

export default DashboardPage;