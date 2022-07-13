
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import MobileBar from "../components/mobileBar/MobileBar";

const Layout = ({ children }) => {

  const location = useLocation()
  const isMobileNavbar = (location.pathname === "/") || (location.pathname === "/categories") || (location.pathname === "/cart")


  return (
    <>
      <Header />
      {children}
      {isMobileNavbar && <MobileBar />}
      <Footer />
    </>
  );
}

export default Layout;