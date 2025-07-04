import { WorkedBrand } from "../../content/WorkedBrand";

const WorkingBrand = () => {
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
        Worked With {WorkedBrand.length}+ Brands ✨ Worldwide
      </h2>
      <div className="working-with-main">
        {WorkedBrand.map((data, index) => (
          <div key={index} className="items">
            <img src={data.logo} alt={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingBrand;
