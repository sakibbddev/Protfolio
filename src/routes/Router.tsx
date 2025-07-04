import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePages/HomePages";
import PrimaryLayout from "../layout/PrimaryLayout";
import About from "../pages/aboutPages/About";
import Service from "../pages/servicePages/Service";
import Portfolio from "../pages/portfolio/Portfolio";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Service />} />
        <Route path="/portfolio" index element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default Router;
