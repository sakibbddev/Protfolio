import { Title } from "react-head";
import Profile from "./Profile";
import Experience from "./Experience";
import RecentProjects from "./RecentProjects";
import Services from "./Services";
import WorkTogether from "./WorkTogether";
const Home = () => {
  return (
    <>
      <Title>Home | My Portfolio</Title>
      <section className="home-area">
        <div className="container">
          <div className="row g-4">
            <Profile />
            <Experience />
            <RecentProjects />
          </div>
          <div className="services-area mt-24">
            <div className="row g-4">
              <Services />
              <WorkTogether />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
