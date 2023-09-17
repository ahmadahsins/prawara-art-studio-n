import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudioPage from "./pages/StudioPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import CardWorks from "./components/CardWorks";
import ToTop from "./components/ToTop"
import BoardGame from "./components/BoardGame";
import VideoPage from "./pages/VideoPage";

import { cardWorks2d, cardWorks3d, cardWorksGambar, textBoardGame } from "./constants";
import { useState } from "react";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

    const stickNavbar = () => {
      let windowHeight = window.scrollY;
      if(windowHeight > 0) {
          setIsScroll(true);
      } else {
          setIsScroll(false);
      }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar stickNavbar={stickNavbar} isScroll={isScroll} />
        { isScroll && <ToTop /> }
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/works" element={<WorksPage />}>
            <Route path="2d" element={<CardWorks cardWorks={cardWorks2d} />} />
            <Route path="3d" element={<CardWorks cardWorks={cardWorks3d} />} />
            <Route path="gambar" element={<CardWorks cardWorks={cardWorksGambar}  />} />
            <Route path="board-game" element={<BoardGame title={textBoardGame.title} text={textBoardGame.text} text2={textBoardGame.text2} imageUrl={textBoardGame.imageUrl} />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
