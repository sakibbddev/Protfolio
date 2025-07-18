import Faq from "../../components/common/Faq";
import { FaqContent } from "../../content/FaqContent";
import Profile from "../homePages/Profile";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Contact = () => {
  return (
    <>
      <section className="content-box-area mt-4">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <div className="col-xl-8">
              <div className="card content-box-card">
                <div className="card-body portfolio-card contact-card">
                  <div className="top-info">
                    <div className="text">
                      <h1 className="main-title">
                        Let's 👋 <span>Work</span> Together
                      </h1>
                      <p>
                        I'm here to help if you're searching for a product
                        designer to bring your idea to life or a design partner
                        to help take your business to the next level.
                      </p>
                    </div>
                  </div>
                  <div className="contact-area">
                    <ContactForm />
                    <Map />
                    <div className="frequently-asked-questions">
                      <div className="frequently-asked-questions-main">
                        <div className="accordion" id="accordionExample">
                          <Faq faq={FaqContent.serviceFaq} />
                        </div>
                      </div>
                    </div>
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

export default Contact;
