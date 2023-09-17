import { Outlet } from "react-router-dom";
import Tab from "../components/Tab";
import Footer from '../components/Footer';
import { useEffect } from "react";

const WorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center py-36">
        <Tab />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default WorksPage
