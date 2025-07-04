import { Link } from "react-router-dom";
import Profile from "../homePages/Profile";
import WorkTogetherSlide from "../../components/common/WorkTogetherSlide";
import { RecentProjectsContent } from "../../content/RecentProjectsContent";
import { BsThreeDots } from "react-icons/bs";

const Portfolio = () => {
  return (
    <>
      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Check Out My Latest <span>Projects</span>
                      </h1>
                      <p>
                        I'm here to help as your professional full-stack
                        developer, ready to bring your ideas to life and take
                        your business to the next level. With expertise in
                        React, Django, and Node.js, I deliver complete solutions
                        - from intuitive frontends to robust backends. Let's
                        transform your vision into a high-performing digital
                        product.
                      </p>
                    </div>
                  </div>
                  <div className="portfolio-area">
                    <div className="row g-4 parent-container">
                      {RecentProjectsContent.projects.map((data, index) => (
                        <div key={index} className="col-lg-12">
                          <div className="portfolio-item">
                            <div className="image">
                              <img
                                src={data.image}
                                alt="project-1"
                                className="img-fluid w-100"
                              />
                              <Link
                                to={data.preview}
                                className="gallery-popup full-image-preview parent-container"
                              >
                                <svg
                                  className="icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                >
                                  <path d="M10 4.167v11.666M4.167 10h11.666"></path>
                                </svg>
                              </Link>
                            </div>
                            <div className="text">
                              <div className="info">
                                <a
                                  href="portfolio-details.html"
                                  className="title"
                                >
                                  {data.name}
                                </a>
                                <p className="subtitle">{data.category}</p>
                              </div>
                              <div className="visite-btn">
                                <a href="portfolio-details.html">
                                  Visit Site
                                  <svg
                                    className="arrow-up"
                                    width="14"
                                    height="15"
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.91634 4.5835L4.08301 10.4168"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M4.66699 4.5835H9.91699V9.8335"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pagination">
                      <ul className="list-unstyled">
                        <li className="prev">
                          <button>
                            <svg
                              className="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button>1</button>
                        </li>
                        <li>
                          <button>2</button>
                        </li>
                        <li>
                          <button>3</button>
                        </li>
                        <li>
                          <button className="next-page-btn">
                            <span className="dots">
                              <BsThreeDots />
                            </span>
                            <span className="next-page">
                              <svg
                                className="icon icon-arrow-right"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="m6 17 5-5-5-5"></path>
                                <path d="m13 17 5-5-5-5"></path>
                              </svg>
                            </span>
                            <span className="next-page-number">
                              Next 4 pages
                            </span>
                          </button>
                        </li>
                        <li>
                          <button>100</button>
                        </li>
                        <li className="next">
                          <button>
                            <svg
                              className="icon"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              ></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <WorkTogetherSlide />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- background shape area start --> */}
      <div className="background-shapes">
        <div className="shape-1 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="shape-2 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
