import { FaStar } from "react-icons/fa";
import { Reviews } from "../../content/WorkedBrand";

const Review = () => {
  return (
    <div className="client-feedback">
      <h2 className="main-common-title">Trusted By 20+ Clients</h2>
      <div className="row client-feedback-slider">
        {Reviews.map((data, index) => (
          <div key={index} className="col-lg-6 g-1">
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
  );
};

export default Review;
