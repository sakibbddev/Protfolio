import { Link } from "react-router-dom";
type Project = {
  image: string;
  name: string;
  category: string;
  preview: string;
  id?: string | number; // Optional unique identifier
};
type ProjectsCardProps = {
  projects: Project[];
};

const ProjectsCard = ({ projects }: ProjectsCardProps) => {
  return (
    <>
      {projects.map((data, index) => (
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
    </>
  );
};

export default ProjectsCard;
