/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { imgBoardGame } from "../constants";

const cardVariants = {
    offscreen: {
    opacity: 0,
    },
    onscreen: {
    opacity: 1,
    transition: {
        type: "spring",
        duration: 1.5
    }
    }
};

const BoardGame = ({ title, text, text2, imageUrl }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 px-5 lg:px-20 py-10 lg:py-24">
                <motion.h1 className="text-xl text-yellow-600 font-semibold visible lg:hidden order-1" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>{title}</motion.h1>
                <motion.div className="w-full lg:w-1/2 flex flex-col gap-3 text-black text-justify order-3 lg:order-2" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                    <h1 className="text-xl text-yellow-600 font-semibold hidden lg:block">{title}</h1>
                    <p className="mb-[0.1px]">{text}</p>
                    <p>{text2}</p>
                </motion.div>
                <motion.div className="w-full lg:w-1/2 flex flex-nowrap justify-center md:justify-start gap-3 lg:gap-5 order-2 lg:order-3" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                        {imageUrl.map((url, index) => (
                            <div className="overflow-hidden rounded-md" key={index}>
                                <img src={url} alt="prawara-board-game" className="rounded-md w-40 md:w-64 lg:w-[21.5rem] shadow-xl object-cover hover:scale-105 transition duration-300" />
                            </div>
                        ))}
                </motion.div>
            </div>
            <motion.div className="flex flex-wrap gap-3 lg:gap-5 w-full justify-center md:justify-start lg:justify-center md:pl-10 lg:pl-0" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                {imgBoardGame.map((img, index) => (
                    <div className="overflow-hidden rounded-md" key={index}>
                        <img src={img} alt="prawara-board-game" className="rounded-md w-[22rem] md:w-[25rem] lg:w-[28rem] shadow-xl object-cover hover:scale-105 transition duration-300" />
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default BoardGame
