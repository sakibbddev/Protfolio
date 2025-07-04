import { ProfileInfo } from "../../content/ProfileInfo";
import Profile from "../homePages/Profile";
import Award from "../../components/common/Award";
import WorkingBrand from "../../components/common/WorkingBrand";
import Review from "../../components/common/Review";
import WorkTogetherSlide from "../../components/common/WorkTogetherSlide";

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
                          src="/images/icons/circle-text.svg"
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
                  <WorkingBrand />
                  <Review />
                  <Award />
                  <WorkTogetherSlide />
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
