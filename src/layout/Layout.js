
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;