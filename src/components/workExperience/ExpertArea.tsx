import { ExpertTech } from "../../content/ExpertTech";

const ExpertArea = () => {
  return (
    <div className="card expertise-card mt-3">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {ExpertTech.expertise.map((data, index) => (
              <div key={index} className="col-xl-4 col-md-4 col-sm-6 col-6">
                <div className="expertise-item">
                  <div className="image text-center">
                    <img src={data.logo} alt="figma" />
                  </div>
                  <div className="text">
                    <h4 className="title">{data.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;
