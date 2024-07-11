import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";

const AllSpots = () => {
  const allSpots = useLoaderData();
  return (
    <div>
      <h2>All Spots come here: {allSpots.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7">
        {allSpots.map((spot) => (
          <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
