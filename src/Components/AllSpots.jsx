import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";

const AllSpots = () => {
  const allSpots = useLoaderData();
  return (
    <div>
      <div className="text-center my-7">
        <h2 className="text-4xl font-semibold">
          Journey Through South Asia's Best Tourist Spots
        </h2>
        <p className="text-2xl mt-3 text-gray-600 font-medium mb-3">
          Curated by Our Community of Travelers
        </p>

        <div className="w-[600px] mx-auto">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7">
        {allSpots.map((spot) => (
          <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
