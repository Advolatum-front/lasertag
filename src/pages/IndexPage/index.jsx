import Hero from "../../components/index-page/Hero";
import Definition from "../../components/index-page/Definition";
import AboutUs from "../../components/index-page/AboutUs";
import OurPartners from "../../components/index-page/OurPartners";
import IndexNews from "../../components/index-page/IndexNews";
import Media from "../../components/index-page/Media";

import "./index.css";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Definition />
      <AboutUs />
      <OurPartners />
      <IndexNews />
      <Media />
    </>
  );
};

export default IndexPage;
