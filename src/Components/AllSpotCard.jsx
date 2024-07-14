import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllSpotCard = ({ spot }) => {
  const {
    _id,
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
      <figure className="relative">
        <img src={photo} />
        <Link to={`/spotDetails/${_id}`}>
          <span className="text-4xl absolute right-6 top-4 text-white opacity-80">
            <FaEye />
          </span>
        </Link>
        <span className="absolute left-4 top-4 bg-white opacity-60 rounded-lg py-1 px-2">
          {country}
        </span>
      </figure>
      <div className="card-body ">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="card-title">{spotName}</h2>
            <p>
              <h2>Cost : {cost}</h2>
            </p>
          </div>
          <div>
            <span className="flex items-center gap-1">
              <FaLocationDot />
              {location}
            </span>
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
