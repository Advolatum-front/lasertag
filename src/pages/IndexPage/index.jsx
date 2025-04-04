import Hero from "../../components/index-page/Hero";
import Definition from "../../components/index-page/Definition";
import AboutUs from "../../components/index-page/AboutUs";
import OurPartners from "../../components/index-page/OurPartners";

import "./index.css";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Definition />
      <AboutUs />
      <OurPartners />
    </>
  );
};

export default IndexPage;
