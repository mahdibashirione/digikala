
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import MobileBar from "../components/mobileBar/MobileBar";

const Layout = ({ children }) => {

  const location = useLocation()
  //const isMobileNavbar = (location.pathname === "/") || (location.pathname === "/categories") || (location.pathname === "/cart")
  const isheader = (location.pathname === "/user/register") || (location.pathname === "/user/login")

  return (
    <>
      {!isheader && <Header />}
      <main>
        {children}
      </main>
      {/*{isMobileNavbar && <MobileBar />}*/}
    </>
  );
}

export default Layout;