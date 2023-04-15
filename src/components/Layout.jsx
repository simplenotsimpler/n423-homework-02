import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
