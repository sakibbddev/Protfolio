import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="col-xl-8">
        <div className="card services-card">
          <div className="card-body">
            <h3 className="card-title">
              Services I Offered
              <Link className="link-btn" to="/services">
                {" "}
                See All Services
                <svg
                  className="icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16699 10H15.8337"
                    stroke="#4770FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.833 15L15.833 10"
                    stroke="#4770FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.833 5L15.833 10"
                    stroke="#4770FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </h3>
            <div className="services-main mt-24">
              <div className="row g-4">
                <ServiceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
