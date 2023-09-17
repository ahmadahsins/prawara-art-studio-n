/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

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

const Partner = ({ imgPartnerUrl }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-32 py-24 bg-black">
        {imgPartnerUrl.map((url, index) => (
            <motion.img key={index} src={url} alt="partner-logo" className="w-36 md:w-48" variants={cardVariants} initial="offscreen" whileInView="onscreen" />
        ))}
    </div>
  )
}

export default Partner
