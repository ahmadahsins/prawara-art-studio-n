import About from "../components/About";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Partner from "../components/Partner";
import CardHome from "../components/CardHome";
import { useEffect } from "react";

import { textHome, services, imgPartnerUrl, imageUrlCarouselHome } from "../constants";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Carousel imageUrl={imageUrlCarouselHome}/>

      <About title={textHome.title} text={textHome.text} text2={textHome.text2} imageUrl={textHome.imageUrl} />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-5 pt-16 pb-32">
        {services.map((service, index) => (
          <CardHome title={service.title} text={service.text} imageUrl={service.imageUrl} link={service.link} key={index} />
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center py-10 bg-black">
        <Partner imgPartnerUrl={imgPartnerUrl} />
      </div>

      <Footer />
    </>
  )
}

export default HomePage
