/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: -175
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  }
};

const CardStudio = ({ imageUrl, title, text, list }) => {
  return (
    <div className="flex flex-col lg:flex-row h-[46rem] lg:h-96 shadow-xl bg-black text-white overflow-hidden rounded-md">
        <motion.div className="lg:w-[45%] overflow-hidden" variants={cardVariants} initial="offscreen" whileInView="onscreen">
          <img src={imageUrl} alt="Movie" className="w-full h-full object-cover hover:scale-105 transition duration-300"/>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:w-[55%] pt-20 px-5 lg:px-10 gap-10 text-sm md:text-base">
          <div className="flex flex-col lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-5">{title}</h2>
            <p className="font-extralight">{text}</p>
          </div>
          <ul className="flex flex-col lg:w-1/2 gap-3">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default CardStudio
