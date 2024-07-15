import { FaLocationDot } from "react-icons/fa6";

const ActivityCard = ({ activity }) => {
  const { image, name, description, spot, country } = activity;
  return (
    <div className="card card-side bg-base-100 shadow-xl my-5">
      <figure className="min-w-[400px] h-[250px] ">
        <img className="w-[400px] " src={image} />
      </figure>
      <div className="card-body">
        <div className="flex gap-20">
          <h2 className="text-2xl font-semibold">{country}</h2>
          <p className="flex items-center gap-1 text-gray-500">
            <FaLocationDot />
            {spot}
          </p>
        </div>
        <div className="bg-red-600">
          <hr />
          <hr />
          <hr />
        </div>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
