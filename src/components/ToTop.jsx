import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ToTop = () => {
    return (
        <motion.a href='#' className='w-4 fixed rounded-full z-10 bottom-4 right-4 p-4 text-black border-black hover:text-yellow-800 bg-white border-4 border-solid hover:border-yellow-800 transition-all duration-200' initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'spring', duration: 0.5, bounce: 1}}>
            <FaArrowUp />
        </motion.a>
    )
}

export default ToTop
