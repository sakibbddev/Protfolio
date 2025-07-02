import { Link } from "react-router-dom";
import { RecentProjectsContent } from "../../content/RecentProjectsContent";

const RecentProjects = () => {
  return (
    <>
      <div className="col-xl-4">
        <div className="card card-projects">
          <div className="card-body">
            <h3 className="card-title">
              Recent Projects{" "}
              <Link className="link-btn" to="">
                All Projects
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
                    stroke="#05af2b"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.833 15L15.833 10"
                    stroke="#05af2b"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.833 5L15.833 10"
                    stroke="#05af2b"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </h3>
            <div className="projects-main mt-24">
              <div className="row g-4 parent-container">
                {RecentProjectsContent.projects.map((data, index) => (
                  <div key={index} className="col-lg-12">
                    <div className="project-item">
                      <div className="image">
                        <img
                          src={data.image}
                          alt={data.name}
                          className="img-fluid w-100"
                        />
                        <Link
                          to={data.preview}
                          target="_blank"
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
                        <div className="info">
                          <span className="category">{data.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
