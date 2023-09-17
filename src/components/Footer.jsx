import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const containerVariants = {
  offscreen: {
    y: -50
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  }
};

const Footer = () => {
  return (
    <footer className="flex flex-col py-10 bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row justify-evenly gap-10 px-5 py-10">
        <ul className="flex flex-col gap-3 font-normal">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/studio'>Studio</Link></li>
          <li><Link to='/works/2d'>Works</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className="flex gap-10 font-extralight">
          <div className="max-w-xs"><span className="font-semibold">Bantul</span> <br/>
              Jl. S. Parman 48 Bantul Warung, <br />
              Bantul, Daerah Istimewa Yogyakarta <br />
              55711
          </div>
          <div className="max-w-xs"><span className="font-semibold">For Business Inquiries</span> <br/>
              prawara.art@gmail.com <br />
              +62 821-3486-4845
          </div>
        </div>
      </div>
      <hr  className='bg-white'/>
      <div className="flex flex-col items-center gap-5 w-full pt-8">
        <motion.div className="flex justify-center gap-5 text-2xl lg:text-3xl" variants={containerVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
          <div className='rounded-full text-gray-200 border-2 border-gray-200 p-2 hover:bg-gradient-to-bl hover:from-fuchsia-700 hover:via-pink-500 hover:to-yellow-400 hover:text-white hover:border-white transition duration-300'>
            <a href="https://instagram.com/prawara.art?igshid=MmU2YjMzNjRlOQ==" target='_blank' rel="noreferrer"><FaInstagram /></a>
          </div>
          <div className='rounded-full text-gray-200 border-2 border-gray-200 p-2 hover:bg-gradient-to-bl hover:from-green-700 hover:bg-green-400 hover:text-white hover:border-white transition duration-300'>
            <a href="http://wa.me/6282134864845" target='_blank' rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <div className='rounded-full text-gray-200 border-2 border-gray-200 p-2 hover:bg-gradient-to-bl hover:from-red-700 hover:to-red-500 hover:text-white hover:border-white transition duration-300'>
            <a href="mailto:prawara.art@gmail.com" target='_blank' rel="noreferrer"><FaEnvelope /></a>
          </div>
        </motion.div>
        <p className='text-gray-200'>© 2023 Prawara Art Studio. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
