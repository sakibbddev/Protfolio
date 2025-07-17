import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import BgShapes from "../components/common/BgShapes";

const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <BgShapes />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
