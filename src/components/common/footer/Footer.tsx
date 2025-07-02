import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="text text-center">
            <p>
              © {currentYear} All Rights Reserved by <Link to="/">Sakib</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
