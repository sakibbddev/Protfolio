import { ExpertTech } from "../../content/ExpertTech";

const WorkExperience = () => {
  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body work-experiance-card">
          <h3 className="card-title">Work Experience</h3>
          <div className="work-experiance-main">
            <ul className="work-experiance-slider list-unstyled">
              {ExpertTech.experienceDetails.map((data, index) => (
                <li key={index}>
                  <div className="date">
                    <p>{data.duration}</p>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <img src={data.companyLogo} alt="adobe" />
                    </div>
                    <div className="text">
                      <h4 className="title">{data.companyName}</h4>
                      <h6 className="subtitle">{data.position}</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="work-experiance-slider list-unstyled">
              {ExpertTech.experienceDetails.map((data, index) => (
                <li key={index}>
                  <div className="date">
                    <p>{data.duration}</p>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <img src={data.companyLogo} alt="adobe" />
                    </div>
                    <div className="text">
                      <h4 className="title">{data.companyName}</h4>
                      <h6 className="subtitle">{data.position}</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
