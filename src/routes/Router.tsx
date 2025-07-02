import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePages/HomePages";
import PrimaryLayout from "../layout/PrimaryLayout";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
