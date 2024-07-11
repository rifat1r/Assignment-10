import { FaLocationDot } from "react-icons/fa6";

const AllSpotCard = ({ spot }) => {
  const {
    country,
    spotName,
    totalVisitors,
    location,
    description,
    cost,
    seasonality,
    travelTime,
    name,
    email,
    photo,
  } = spot;
  return (
    <div className="card bg-gray-200 w-96 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="card-body ">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="card-title">{spotName}</h2>
            <p className="flex items-center gap-1">
              <FaLocationDot />
              {location}
            </p>
          </div>
          <div>
            <h2>Cost : {cost}</h2>
            <h2>Travel Time : {travelTime}</h2>
          </div>
        </div>
        <p>{email}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AllSpotCard;
