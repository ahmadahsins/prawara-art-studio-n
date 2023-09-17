/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom"
const CardWorks = ({ cardWorks }) => {
  const path = useLocation().pathname;

  return (
    <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 pt-10">
        {cardWorks.map((card, index) => (
            <div className="flex flex-col justify-between w-80 lg:w-96 shadow-xl rounded-md p-3" key={index}>
                <div className="h-[90%] flex items-center bg-zinc-900 overflow-hidden">
                  <img src={card.imageUrl} alt={card.title} className="w-full object-cover hover:scale-105 transition duration-300" />
                </div>
                {path !== "/works/gambar" && <p className="p-5 text-center text-base font-semibold text-black">{card.title}</p>}
            </div>
        ))}
    </div>
  )
}

export default CardWorks
