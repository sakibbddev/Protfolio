import ExpertArea from "../../components/workExperience/ExpertArea";
import WorkExperience from "../../components/workExperience/WorkExperience";

const Experience = () => {
  return (
    <div className="col-xl-4">
      <div className="row g-4">
        <div className="col-lg-12">
          <WorkExperience />
          <ExpertArea />
        </div>
      </div>
    </div>
  );
};

export default Experience;
