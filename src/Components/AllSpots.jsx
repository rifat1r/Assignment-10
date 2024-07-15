import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { useEffect, useState } from "react";

const AllSpots = () => {
  const [allSpots, setAllSpots] = useState(
    "http://localhost:5000/touristspots"
  );
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(allSpots)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [allSpots]);

  return (
    <div>
      <div className="text-center my-7">
        <h2 className="text-4xl font-semibold">
          Journey Through South Asia's Best Tourist Spots
        </h2>
        <p className="text-2xl mt-3 text-gray-400 font-medium mb-3">
          Curated by Our Community of Travelers
        </p>

        <div className="w-[600px] mx-auto">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="dropdown dropdown-top">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-accent text-white mb-10 m-1"
          >
            Sort By Average Cost
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a
                onClick={() =>
                  setAllSpots("http://localhost:5000/touristspots/costasc")
                }
              >
                ascending
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setAllSpots("http://localhost:5000/touristspots/cost");
                }}
              >
                descending
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7">
        {spots.map((spot) => (
          <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
