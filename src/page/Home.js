import BanerHome from "../components/BanerHome/BanerHome.js";
import CategoriesHome from "../components/categoriesHome/CategoriesHome.js";
import DigiClubHome from "../components/digiclubHome/DigiClubHome.js";
import DigiPlusHome from "../components/digiplusHome/DigiPlusHome.js";
import EmazingSliderHome from "../components/emazingSliderHome/emazingSliderHome.js";
import FeatureHome from "../components/FeatureHome/FeatureHome.js";
import SliderFullHome from "../components/SliderFullHome.js/SliderFullHome.js";
import Footer from "../components/footer/Footer.js"

const Home = () => {
  return (
    <>
      <SliderFullHome />
      <FeatureHome />
      <EmazingSliderHome />
      <BanerHome />
      <CategoriesHome />
      <DigiPlusHome />
      <DigiClubHome />
      <Footer />
    </>
  );
}

export default Home;