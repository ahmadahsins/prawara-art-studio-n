import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const cardVariants = {
  offscreen: {
  y: 100,
  opacity: 0,
  },
  onscreen: {
  y: 0,
  opacity: 1,
  transition: {
      type: "spring",
      duration: 2
  }
  }
};

const textVariants = {
  offscreen: {
  y: 50,
  opacity: 0,
  },
  onscreen: {
  y: 0,
  opacity: 1,
  transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    }
  }
}

const CardHome = ({ title, text, imageUrl, link }) => {
  return (
    <motion.div className="hero max-w-2xl lg:max-w-4xl h-96 scale-90 lg:scale-100 shadow-xl rounded-md" style={{backgroundImage: `url('${imageUrl}')`}}variants={cardVariants} initial="offscreen" whileInView="onscreen">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-white">
        <motion.div className="max-w-md" variants={textVariants} initial="offscreen" whileInView="onscreen" transition={{ duration: 0.5 }}>
            <motion.h1 className="mb-5 text-5xl font-bold">{title}</motion.h1>
            <Link to={link} className="mb-5 hover:underline">{text}</Link>
        </motion.div>
        </div>
    </motion.div>
  )
}

export default CardHome
