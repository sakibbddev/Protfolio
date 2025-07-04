import { Link } from "react-router-dom";
import { HederContent } from "../../content/HederContent";

const WorkTogetherSlide = () => {
  return (
    <div className="work-together-slider">
      <div className="slider-main d-flex gap-4 align-items-center">
        <div className="slider-item">
          <Link to={HederContent.chat.link}>Let's 👋 Work Together</Link>
          <Link to={HederContent.chat.link}>Let's 👋 Work Together</Link>
        </div>
        <div className="slider-item">
          <Link to={HederContent.chat.link}>Let's 👋 Work Together</Link>
          <Link to={HederContent.chat.link}>Let's 👋 Work Together</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkTogetherSlide;
