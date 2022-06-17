import { useState } from "react";
import { Link } from "react-router-dom";

const Line1BanerHome = () => {
  const [dataBaner, setDataBaner] = useState([
    { image: "/image/baner/1.jpg", url: "#", alt: "baner1" },
    { image: "/image/baner/2.jpg", url: "#", alt: "baner2" },
    { image: "/image/baner/3.jpg", url: "#", alt: "baner3" },
    { image: "/image/baner/4.jpg", url: "#", alt: "baner4" },
  ])
  return (
    <section className="container grid gap-2 grid-cols-2 xl:grid-cols-4 p-4 md:px-0">
      {dataBaner.map(data => {
        return (
          <Link to={data.url} className="block w-full">
            <aside className="w-full overflow-hidden rounded-lg">
              <img className="w-full object-cover" src={data.image} alt={data.alt} />
            </aside>
          </Link>
        )
      })}
    </section >
  );
}

export default Line1BanerHome;