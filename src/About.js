import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Kadyan Ecommerce",
  };

  return (
    <div style={{backgroundColor: "#FFFFE0"}}>
      {myName}
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
