import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import NavbarItem from "../../components/Navbar/NavbarItem";
import Product from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <div className="test">
        <NavbarItem />
        <Slider />
        <Intro />
        <Product />
      </div>

      <Footer />
    </>
  );
}
