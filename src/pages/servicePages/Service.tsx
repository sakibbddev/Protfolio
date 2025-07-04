import { Link } from "react-router-dom";
import Award from "../../components/common/Award";
import Faq from "../../components/common/Faq";
import Review from "../../components/common/Review";
import WorkingBrand from "../../components/common/WorkingBrand";
import { FaqContent } from "../../content/FaqContent";
import { ServicesContent } from "../../content/ServicesContent";
import Profile from "../homePages/Profile";
import ServiceCard from "../homePages/ServiceCard";
import { HederContent } from "../../content/HederContent";

const Service = () => {
  return (
    <>
      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Services I <span>Offered</span>
                      </h1>
                      <p>
                        Transforming Ideas into Innovative Reality, Elevate Your
                        Vision with Our Expert{" "}
                        <b>Product Design and Development</b> Services!
                      </p>
                    </div>
                    <div className="available-btn">
                      <span>
                        <i className="fas fa-circle"></i> Available For Hire
                      </span>
                    </div>
                  </div>
                  <div className="services">
                    <div className="row g-4">
                      <ServiceCard servicesContent={ServicesContent} />
                    </div>
                  </div>
                  <WorkingBrand />
                  <Review />
                  <Award />
                  <Faq faq={FaqContent.serviceFaq} />
                  <div className="work-together-slider">
                    <div className="slider-main d-flex gap-4 align-items-center">
                      <div className="slider-item">
                        <Link to={HederContent.chat.link}>
                          Let's 👋 Work Together
                        </Link>
                        <Link to={HederContent.chat.link}>
                          Let's 👋 Work Together
                        </Link>
                      </div>
                      <div className="slider-item">
                        <Link to={HederContent.chat.link}>
                          Let's 👋 Work Together
                        </Link>
                        <Link to={HederContent.chat.link}>
                          Let's 👋 Work Together
                        </Link>
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
      </section>
    </>
  );
};

export default Service;
