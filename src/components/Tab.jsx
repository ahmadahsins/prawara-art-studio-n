import { Link } from "react-router-dom";
import { useState } from "react";

const Tab = () => {
  const [active, setActive] = useState('2d');

  return (
    <div className="tabs tabs-boxed bg-black shadow-lg">
        <Link to="2d" className={`tab ${active === '2d' ? 'text-black bg-white' : 'text-white'}`} onClick={() => {setActive('2d');}}>2D</Link> 
        <Link to="3d" className={`tab ${active === '3d' ? 'text-black bg-white' : 'text-white'}`} onClick={() => {setActive('3d');}}>3D</Link>
        <Link to="gambar" className={`tab ${active === 'gambar' ? 'text-black bg-white' : 'text-white'}`} onClick={() => {setActive('gambar');}}>Gambar</Link> 
        <Link to="board-game" className={`tab ${active === 'board-game' ? 'text-black bg-white' : 'text-white'}`} onClick={() => {setActive('board-game');}}>Prawara Board Game</Link> 
    </div>
  )
}

export default Tab
