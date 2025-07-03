import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePages/HomePages";
import PrimaryLayout from "../layout/PrimaryLayout";
import About from "../pages/aboutPages/About";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
