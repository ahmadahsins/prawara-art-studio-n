/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { logoWhite } from "../assets";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ stickNavbar, isScroll }) => {
    const [isChecked, setIsChecked] = useState(false);
    const path = useLocation().pathname;

    const handleOnClick = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

    return (
        <motion.div className={`flex justify-between fixed z-10 w-full items-center md:justify-center text-white font-extralight py-5 md:py-10 ${!isScroll && path === "/" ? "bg-transparent" : "bg-black"}`}>
            <div className="">
                <div className="dropdown">
                <label className="btn btn-ghost swap swap-rotate md:hidden">
                    <input type="checkbox" checked={isChecked} onClick={() => handleOnClick()}  />
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
                {
                    isChecked && <motion.ul initial={{ x: '-100vw', opacity: 0 }} animate={{ x: '-40vw', opacity: 1 }} tabIndex={0} className="menu menu-md items-center dropdown-content rounded-none h-screen mt-3 z-0 p-2 shadow bg-black w-screen">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/studio'>Studio</Link></li>
                    <li><Link to='/works/2d'>Works</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </motion.ul>
                }
                </div>
            </div>
            <div className="block md:hidden mr-6">
                <img src={logoWhite} alt="prawara-logo" className="w-24" />
            </div>
            <div className="hidden md:flex">
                <ul className="flex items-center gap-10 text-md px-1">
                    <motion.li whileHover={{ scale: 1.1, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to='/'>Home</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.1, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to='/studio#'>Studio</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.1, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><img src={logoWhite} alt="prawara-logo" className="w-32" /></motion.li>
                    <motion.li whileHover={{ scale: 1.1, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to='/works/2d'>Works</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.1, color: "goldenrod" }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to='/contact'>Contact</Link></motion.li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Navbar
