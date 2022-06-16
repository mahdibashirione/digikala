import { useState } from "react";
import { Link } from "react-router-dom";

const FeatureHome = () => {

  const [dataFeature, setDataFeature] = useState([
    { icon: '/image/iconHome/1.png', alt: 'دیجیکالا جت', title: 'دیجیکالا جت', url: '#' },
    { icon: '/image/iconHome/2.png', alt: 'تخفیف های تابستونی', title: 'تخفیف های تابستونی', url: '#' },
    { icon: '/image/iconHome/3.png', alt: 'دیجی پی', title: 'دیجی پی', url: '#' },
    { icon: '/image/iconHome/4.png', alt: 'دیجی کالا مهر', title: 'دیجی کالا مهر', url: '#' },
    { icon: '/image/iconHome/5.png', alt: 'حراج مد و پوشاک', title: 'حراج مد و پوشاک', url: '#' },
    { icon: '/image/iconHome/6.png', alt: 'قرعه کشی بهار', title: 'قرعه کشی بهار', url: '#' },
    { icon: '/image/iconHome/7.png', alt: 'دیجی پلاس', title: 'دیجی پلاس', url: '#' },
  ])

  return (
    <section className="font-sans text-sm py-6 w-full container  grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-y-6">
      {dataFeature.map(data => {
        return (
          <Link to={data.url} className="flex items-center justify-center flex-col">
            <img className="w-full max-w-[52px]" src={data.icon} alt={data.alt} />
            <span className="whitespace-nowrap">{data.title}</span>
          </Link>
        )
      })}
      <button className="flex items-center justify-center flex-col">
        <div className="rounded-full flex items-center justify-center gap-x-1 w-[52px] h-[52px] bg-gray-200">
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="blick w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
        <span>بیشتر</span>
      </button>
    </section>
  );
}

export default FeatureHome;