import Footer from "@/components/layout/Footer";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import ChooseMechanicalKeyboards from "./ChooseMechanicalKeyboard";
import CustomizableOptions from "./CustomizableOptions";
import PopularBrands from "./PopularBrands";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Advertisement/>
      <Products/>
      <PopularBrands/>
      <Reviews/>
      <ChooseMechanicalKeyboards/>
      <CustomizableOptions/>
      <Footer />
    </div>
  );
};

export default Home;