/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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

const CardGamelan = ( { title, url, text }) => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-1 md:gap-10 pt-36 pb-20 md:py-20">
            <motion.div className="lg:h-[80vh] flex justify-center items-center mb-20 lg:mb-0" variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                <div className="flex flex-col gap-3 w-[80%] shadow-xl px-6 md:px-12 py-10 mx-2 bg-slate-100">
                    <h1 className="text-xl lg:text-2xl text-yellow-600 font-semibold">{title}</h1>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="">
                            <ReactPlayer url={url} controls={true} width="100%" height="100%" className="" />
                        </div>
                        <div className="w-full">
                            <p className="text-black md:text-lg text-justify">{text}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.button className="bg-black text-white normal-case font-extralight px-3 py-2 rounded-md shadow-lg" whileHover={{ scale: 1.025, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to={'/video'}>Lihat jenis gamelan lainnya</Link>
            </motion.button>                       
        </div>
    )
}

export default CardGamelan
