import CategoriesHome from "../components/categoriesHome/CategoriesHome.js";
import DigiClubHome from "../components/digiclubHome/DigiClubHome.js";
import EmazingSliderHome from "../components/emazingSliderHome/emazingSliderHome.js";
import FeatureHome from "../components/FeatureHome/FeatureHome.js";
import Line1BanerHome from "../components/line1BanerHome/Line1BanerHome.js";
import SliderFullHome from "../components/SliderFullHome.js/SliderFullHome.js";

const Home = () => {
  return (
    <>
      <SliderFullHome />
      <FeatureHome />
      <EmazingSliderHome />
      <Line1BanerHome />
      <CategoriesHome />
      <DigiClubHome />
    </>
  );
}

export default Home;