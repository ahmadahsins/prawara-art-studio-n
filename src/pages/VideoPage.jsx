/* eslint-disable react/prop-types */
import ReactPlayer from "react-player"
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

const VideoPage = ({ videoGamelan }) => {
    const path = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    return (
        <>
        {
            path === "/video" && <div className="py-32">
                {videoGamelan?.map((video, index) => ( 
                    <motion.div className="lg:h-[80vh] flex justify-center items-center mb-20 lg:mb-0" key={index} id={video.title} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                        <div className="flex flex-col gap-3 w-[80%] shadow-xl px-6 md:px-12 py-10 mx-2 bg-slate-100">
                            <h1 className="text-xl lg:text-2xl text-yellow-600 font-semibold">{video.title}</h1>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="">
                                    <ReactPlayer url={video.url} controls={true} width="100%" height="100%" className="" />
                                </div>
                                <div className="w-full flex flex-col justify-between gap-5">
                                    <p className="text-black md:text-lg text-justify">{video.text}</p>
                                    <motion.button className="bg-black w-fit text-white normal-case font-extralight px-3 py-2 rounded-md shadow-lg" whileHover={{ scale: 1.025, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                        <Link to={`/video/${video.title}`}>Lihat detail</Link>
                                    </motion.button> 
                                </div>
                            </div>
                        </div>
                    </motion.div>                        
                ))}
                </div>
            }
            <Outlet />
            <Footer />
        </>
    )
}

export default VideoPage
