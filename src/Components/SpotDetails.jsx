import { useLoaderData, useNavigate } from "react-router-dom";

const SpotDetails = () => {
  const navigate = useNavigate();
  const spot = useLoaderData();
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
    <div
      className="hero min-h-screen w-3/4 mx-auto my-24 rounded-xl"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md  p-8 rounded-xl shadow-lg">
          <h1 className="mb-5 text-4xl font-bold">{spotName}</h1>
          <p className="mb-3 text-xl font-semibold">{country}</p>
          <p className="mb-3">{description}</p>
          <p className="mb-3">
            <strong>Location:</strong> {location}
          </p>
          <p className="mb-3">
            <strong>Total Visitors:</strong> {totalVisitors}
          </p>
          <p className="mb-3">
            <strong>Cost:</strong> ${cost}
          </p>
          <p className="mb-3">
            <strong>Seasonality:</strong> {seasonality}
          </p>
          <p className="mb-3">
            <strong>Travel Time:</strong> {travelTime} hours
          </p>
          <p className="mb-3">
            <strong></strong> {name} ({email})
          </p>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-primary mt-5"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
