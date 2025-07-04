import { Link } from "react-router-dom";
import { RecentProjectsContent } from "../../content/RecentProjectsContent";
import ProjectsCard from "../../components/common/ProjectsCard";

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
                <ProjectsCard
                  projects={RecentProjectsContent.projects.slice(0, 2)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
