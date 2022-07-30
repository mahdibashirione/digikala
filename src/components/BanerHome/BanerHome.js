import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_Data } from "../../utils/requestHttp";

const BanerHome = () => {
  const [dataBaner, setDataBaner] = useState(null)

  useEffect(() => {
    GET_Data("/banerHome", setDataBaner)
  }, [])

  const LoadingBaner = () => {
    return (
      <>
        <aside className="animate-pulse duration-200 bg-gray-400 h-48 w-full overflow-hidden rounded-lg"></aside>
        <aside className="animate-pulse duration-200 bg-gray-400 h-48 w-full overflow-hidden rounded-lg"></aside>
        <aside className="animate-pulse duration-200 bg-gray-400 h-48 w-full overflow-hidden rounded-lg"></aside>
        <aside className="animate-pulse duration-200 bg-gray-400 h-48 w-full overflow-hidden rounded-lg"></aside>
      </>
    )
  }

  return (
    <section className="container grid gap-2 grid-cols-2 xl:grid-cols-4 p-4 md:px-0">
      {dataBaner ? dataBaner.map(data => {
        return (
          <Link key={data.id} to={data.url} className="block w-full">
            <aside className="w-full overflow-hidden rounded-lg">
              <img loading="lazy" className="w-full object-cover" src={data.img} alt={data.title} />
            </aside>
          </Link>
        )
      }) : <LoadingBaner />}
    </section >
  );
}

export default BanerHome;