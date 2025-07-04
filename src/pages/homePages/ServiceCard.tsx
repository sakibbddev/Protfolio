type ServiceItem = {
  icon: string;
  title: string;
};

type Props = {
  servicesContent: ServiceItem[];
};

const ServiceCard = ({ servicesContent }: Props) => {
  return (
    <>
      {servicesContent.map((data, index) => (
        <div key={index} className="col-md-3 col-sm-6 col-6">
          <div className="services-item text-center">
            <div className="image">
              <img
                style={{ maxWidth: "64px", maxHeight: "64px" }}
                src={data.icon}
                alt={data.title}
              />
            </div>
            <div className="text">
              <h6 className="title">{data.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
