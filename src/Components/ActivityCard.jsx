import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const ActivityCard = ({ activityObj }) => {
  const {
    _id,
    activity,
    rating,
    description,
    photo,
    country,
    spotName,
    adder,
  } = activityObj;

  return (
    <div className="card  md:card-side bg-base-100 shadow-xl my-5 md:h-[240px] lg:h-[250px] ">
      <figure className="min-w-[400px] md:h-[240px] lg:h-[250px] ">
        <img
          className="w-full md:w-[400px]"
          src={photo}
          alt={`${activity} photo`}
        />
      </figure>
      <div className="my-auto space-y-3 ml-4 mt-6">
        <div className="flex items-center gap-12 lg:gap-20">
          <h2 className="text-2xl font-semibold">{country}</h2>
          <p className="flex items-center gap-1 text-gray-500 font-medium">
            <FaLocationDot />
            {spotName}
          </p>
          <p className="text-blue-400 font-medium">By {adder}</p>
        </div>
        <div className="-ml-4">
          <hr />
          <hr />
          <hr />
        </div>
        <h2 className="card-title">{activity}</h2>
        <p>{description}</p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name={`rating-${_id}`}
              className="mask mask-star-2 bg-orange-400"
              checked={star <= rating}
              readOnly
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
