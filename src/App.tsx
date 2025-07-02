import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import "./css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/style.css";
import "./css/slick.css";
import "./css/responsive.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
