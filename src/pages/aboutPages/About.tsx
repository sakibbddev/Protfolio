import { Link } from "react-router-dom";
import { ProfileInfo } from "../../content/ProfileInfo";
import { Reviews, WorkedBrand } from "../../content/WorkedBrand";
import Profile from "../homePages/Profile";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body">
                  <div className="top-info">
                    <div className="text">
                      <h4 className="main-title">
                        Hi, This Is
                        <br />
                        <span>{ProfileInfo.profileName}</span>👋
                      </h4>
                      <p>
                        A Professional <b>{ProfileInfo.designation}</b> 🖥️ From{" "}
                        <b>{ProfileInfo.country}</b> having{" "}
                        <b>{ProfileInfo.experience}</b> of Experiences
                      </p>
                    </div>
                    <div className="available-btn">
                      <span>
                        <i className="fas fa-circle"></i> Available For Hire
                      </span>
                    </div>
                  </div>
                  <div className="counter-area">
                    <div className="counter">
                      <div className="counter-item">
                        <h3 className="number">05+</h3>
                        <p className="subtitle">Year of Experience</p>
                      </div>
                      <div className="counter-item">
                        <h3 className="number">70+</h3>
                        <p className="subtitle">Project Completed</p>
                      </div>
                      <div className="counter-item">
                        <h3 className="number">20+</h3>
                        <p className="subtitle">Happy Client</p>
                      </div>
                    </div>
                    <div className="circle-area">
                      <div className="circle-text">
                        <img
                          className="circle-image"
                          src="assets/img/about-us/circle-text.svg"
                          alt="circle-text"
                        />
                        <img
                          className="circle-image circle-image-light d-none"
                          src="assets/img/about-us/circle-text-light.svg"
                          alt="circle-text"
                        />
                        <span className="arrow-down">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 5V35"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15 30L20 35L25 30"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="working-with-area">
                    <h2 className="main-common-title">
                      Worked With {WorkedBrand.length}+ Brands ✨ Worldwide
                    </h2>
                    <div className="working-with-main">
                      {WorkedBrand.map((data, index) => (
                        <div key={index} className="items">
                          <img src={data.logo} alt={data.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="client-feedback">
                    <h2 className="main-common-title">
                      Trusted By 20+ Clients
                    </h2>
                    <div className="row client-feedback-slider">
                      {Reviews.map((data, index) => (
                        <div key={index} className="col-lg-6">
                          <div className="feedback-item">
                            <div className="feedback-top-info">
                              <div className="rating">
                                {Array.from({ length: data.rating }, (_, i) => (
                                  <FaStar key={i} color="#ffa20c" />
                                ))}
                              </div>
                            </div>
                            <div className="details">
                              <p>{data.comment}</p>
                            </div>
                            <div className="designation">
                              <p>
                                <span>Company</span> - {data.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="awards-recognitions">
                    <h2 className="main-common-title">
                      Awards and Recognitions
                    </h2>
                    <div className="awards-recognitions-main">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="d-block w-100">
                            <div className="awards-item">
                              <div className="award-name">
                                <div className="icon">
                                  <img
                                    src="assets/img/icons/adobe.svg"
                                    alt="adobe"
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    Adobe Design Contest
                                  </h4>
                                  <p className="year">2022 - 2023</p>
                                </div>
                              </div>
                              <div className="winner-tag">
                                <h4 className="title">
                                  <svg
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Runner Up
                                </h4>
                              </div>
                              <div className="project-btn">
                                <span>
                                  View Project
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
                                    />
                                    <path
                                      d="M4.66699 4.5835H9.91699V9.8335"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block w-100">
                            <div className="awards-item">
                              <div className="award-name">
                                <div className="icon">
                                  <img
                                    src="assets/img/icons/dribbble.svg"
                                    alt="dribbble"
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    Dribbble Design Contest
                                  </h4>
                                  <p className="year">2022 - 2023</p>
                                </div>
                              </div>
                              <div className="winner-tag">
                                <h4 className="title">
                                  <svg
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Gold Winner
                                </h4>
                              </div>
                              <div className="project-btn">
                                <span>
                                  View Project
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
                                    />
                                    <path
                                      d="M4.66699 4.5835H9.91699V9.8335"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block w-100">
                            <div className="awards-item">
                              <div className="award-name">
                                <div className="icon">
                                  <img
                                    src="assets/img/icons/awwwards.png"
                                    alt="awwwards"
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">Awwwards Nominee</h4>
                                  <p className="year">2022 - 2023</p>
                                </div>
                              </div>
                              <div className="winner-tag">
                                <h4 className="title">
                                  <svg
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Runner Up
                                </h4>
                              </div>
                              <div className="project-btn">
                                <span>
                                  View Project
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
                                    />
                                    <path
                                      d="M4.66699 4.5835H9.91699V9.8335"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block w-100">
                            <div className="awards-item">
                              <div className="award-name">
                                <div className="icon">
                                  <img
                                    src="assets/img/icons/behance.svg"
                                    alt="behance"
                                  />
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    Behance Design Contest
                                  </h4>
                                  <p className="year">2022 - 2023</p>
                                </div>
                              </div>
                              <div className="winner-tag">
                                <h4 className="title">
                                  <svg
                                    className="icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9Z"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M12 15L15.4 20.89L16.998 17.657L20.596 17.889L17.196 12"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.80234 12L3.40234 17.89L7.00034 17.657L8.59834 20.889L11.9983 15"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Gold Winner
                                </h4>
                              </div>
                              <div className="project-btn">
                                <span>
                                  View Project
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
                                    />
                                    <path
                                      d="M4.66699 4.5835H9.91699V9.8335"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="article-publications">
                    <h2 className="main-common-title">
                      Article and Publications
                    </h2>
                    <div className="article-publications-main">
                      <div className="row article-publications-slider">
                        <div className="col-lg-6">
                          <div className="article-publications-item">
                            <div className="image">
                              <a href="article.html" className="d-block w-100">
                                <img
                                  src="assets/img/blog/blog-img-1.jpg"
                                  alt="blog-img-1"
                                  className="img-fluid w-100"
                                />
                              </a>
                              <a href="article.html" className="tags">
                                Development
                              </a>
                            </div>
                            <div className="text">
                              <Link to="/" className="title">
                                Want To Upgrade Your Brain? Stop Doing These 7
                                Things
                              </Link>
                              <ul className="list-unstyled">
                                <li>15 min read</li>
                                <li>Nov 6, 2023</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="article-publications-item">
                            <div className="image">
                              <a href="article.html" className="d-block w-100">
                                <img
                                  src="assets/img/blog/blog-img-2.jpg"
                                  alt="blog-img-2"
                                  className="img-fluid w-100"
                                />
                              </a>
                              <a href="article.html" className="tags">
                                Development
                              </a>
                            </div>
                            <div className="text">
                              <a href="article.html" className="title">
                                Want To Upgrade Your Brain? Stop Doing These 7
                                Things
                              </a>
                              <ul className="list-unstyled">
                                <li>15 min read</li>
                                <li>Nov 6, 2023</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="article-publications-item">
                            <div className="image">
                              <a href="article.html" className="d-block w-100">
                                <img
                                  src="assets/img/blog/blog-img-3.jpg"
                                  alt="blog-img-3"
                                  className="img-fluid w-100"
                                />
                              </a>
                              <a href="article.html" className="tags">
                                Development
                              </a>
                            </div>
                            <div className="text">
                              <a href="article.html" className="title">
                                Want To Upgrade Your Brain? Stop Doing These 7
                                Things
                              </a>
                              <ul className="list-unstyled">
                                <li>15 min read</li>
                                <li>Nov 6, 2023</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work-together-slider">
                    <div className="slider-main d-flex gap-4 align-items-center">
                      <div className="slider-item">
                        <a href="contact.html">Let's 👋 Work Together</a>
                        <a href="contact.html">Let's 👋 Work Together</a>
                      </div>
                      <div className="slider-item">
                        <a href="contact.html">Let's 👋 Work Together</a>
                        <a href="contact.html">Let's 👋 Work Together</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default About;
