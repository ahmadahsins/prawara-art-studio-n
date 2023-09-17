/* eslint-disable react/prop-types */
import ReactPlayer from "react-player"
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import { videoGamelan } from "../constants";

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 200
    },
    onscreen: {
        opacity: 1,
        y: 0,
    transition: {
        type: "spring",
        duration: 2
    }
    }
};

const VideoPage = () => {
    return (
        <>
            <div className="py-32">
            {videoGamelan.map((video, index) => ( 
                <motion.div className="lg:h-[80vh] flex justify-center items-center mb-20 lg:mb-0" key={index} id={video.title} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                    <div className="flex flex-col gap-3 w-[80%] shadow-xl px-12 py-10 bg-slate-100">
                        <h1 className="text-xl lg:text-2xl text-yellow-600 font-semibold">{video.title}</h1>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="">
                                <ReactPlayer url={video.url} controls={true} width="100%" height="100%" className="" />
                            </div>
                            <div className="w-full">
                                <p className="text-black md:text-lg text-justify">{video.text}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>                        
            ))}
            </div>
            <Footer />
        </>
    )
}

export default VideoPage
