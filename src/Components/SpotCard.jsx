import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
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
    <div className="card  shadow-2xl">
      <figure className="relative">
        <img className="h-[300px]" src={photo} />
        <Link to={`/spotDetails/${_id}`}>
          <span className="text-4xl absolute right-6 top-4 text-white opacity-80">
            <FaEye />
          </span>
        </Link>

        <span className="absolute left-4 top-4 bg-white opacity-60 rounded-lg py-1 px-2">
          {country}
        </span>
      </figure>
      <div className="card-body">
        <div className="flex justify-between gap-20 -mt-4 items-baseline">
          <h2 className="text-2xl font-semibold">{spotName}</h2>
          <p className="flex items-center text-xl gap-1 text-gray-500">
            <FaLocationDot />
            {location}
          </p>
        </div>
        <div>
          <p className="text-gray-500  text-lg">{description}</p>
        </div>
        <div className="flex justify-end gap-3 mr-10 mt-3 -mb-7 py-5">
          <span className="bg-orange-500 px-4 py-0 text-white opacity-80 rounded-xl">
            {cost}
          </span>
          <span className="bg-orange-500 px-4 py-0 text-white opacity-80 rounded-xl">
            {seasonality}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
