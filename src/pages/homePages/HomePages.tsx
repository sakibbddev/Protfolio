import { Title } from "react-head";
import Profile from "./Profile";
import Experience from "./Experience";
import RecentProjects from "./RecentProjects";
const Home = () => {
  return (
    <>
      <Title>Home | My Portfolio</Title>
      <section className="home-area">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <Experience />
            <RecentProjects />
          </div>
          <div className="services-area mt-24">
            <div className="row g-4">
              <div className="col-xl-8">
                <div className="card services-card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Services I Offered
                      <a className="link-btn" href="services.html">
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
                      </a>
                    </h3>
                    <div className="services-main mt-24">
                      <div className="row g-4">
                        <div className="col-md-3 col-sm-6 col-6">
                          <div className="services-item text-center">
                            <div className="image">
                              <img
                                src="assets/img/icons/ui-ux.svg"
                                alt="ui-ux"
                              />
                            </div>
                            <div className="text">
                              <h3 className="title">UI UX Design</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                          <div className="services-item text-center">
                            <div className="image">
                              <img src="assets/img/icons/app.svg" alt="app" />
                            </div>
                            <div className="text">
                              <h3 className="title">Mobile App</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                          <div className="services-item text-center">
                            <div className="image">
                              <img
                                src="assets/img/icons/prd-design.svg"
                                alt="prd-design"
                              />
                            </div>
                            <div className="text">
                              <h3 className="title">Product Design</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                          <div className="services-item text-center">
                            <div className="image">
                              <img
                                src="assets/img/icons/branding.svg"
                                alt="branding"
                              />
                            </div>
                            <div className="text">
                              <h3 className="title">Branding</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card lets-talk-together-card">
                  <div className="card-body">
                    <div className="scrolling-info">
                      <div className="slider-item">
                        <p>
                          Available For Hire 🚀 Crafting Digital Experiences 🎨
                          Available For Hire 🚀 Crafting Digital Experiences 🎨
                        </p>
                      </div>
                    </div>
                    <h3 className="card-title">
                      Let's👋
                      <span className="d-block">Work Together</span>
                    </h3>
                    <a className="link-btn" href="contact.html">
                      {" "}
                      Let's Talk
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
