import About from "../components/About";
import CardStudio from "../components/CardStudio";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageOwner from "../components/ImageOwner";
import { motion } from "framer-motion";
import { useEffect } from "react";


import { textStudio, cardStudioContent, imageUrlCarouselStudio, imageOwner } from "../constants";

const cardVariants = {
  offscreen: {
  opacity: 0,
  },
  onscreen: {
  opacity: 1,
  transition: {
      type: "spring",
      duration: 2
  }
  }
};

const StudioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Carousel imageUrl={imageUrlCarouselStudio} />
      <About title={textStudio.title} text={textStudio.text} imageUrl={textStudio.imageUrl} list={textStudio.list} />
      <div className="flex flex-col gap-10 mx-5 lg:mx-10 pt-10 pb-20 my-20">
        {cardStudioContent.map((content, index) => (
          <CardStudio key={index} imageUrl={content.imageUrl} title={content.title} text={content.text} list={content.list} />
        ))}
      </div>
      <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-5 lg:px-20 my-20" variants={cardVariants} initial="offscreen" whileInView="onscreen">
        {imageOwner.map((owner, index) => (
          <ImageOwner key={index} name={owner.name} imageUrl={owner.imageUrl}/>
        ))}
      </motion.div>
      <Footer />
    </>
  )
}

export default StudioPage
