import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Kadyan Store",
  };

  return (
    <div style={{backgroundColor: "#FFFFE0"}}>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
