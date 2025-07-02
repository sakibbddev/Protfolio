import { Link } from "react-router-dom";
import { HederContent } from "../../content/HederContent";

const WorkTogether = () => {
  return (
    <>
      <div className="col-xl-4">
        <div className="card lets-talk-together-card">
          <div className="card-body">
            <div className="scrolling-info">
              <div className="slider-item">
                <p>
                  {HederContent.description}
                  {HederContent.description}
                </p>
              </div>
            </div>
            <h3 className="card-title">
              Let's👋
              <span className="d-block">Work Together</span>
            </h3>
            <Link className="link-btn" to={HederContent.chat.link}>
              {" "}
              {HederContent.chat.title}
              <svg
                className="icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 11.6665V6.6665H12.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkTogether;
