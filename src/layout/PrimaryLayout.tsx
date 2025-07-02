import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";

const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PrimaryLayout;
