import { useContext, useEffect, useState } from "react";
import SpotCard from "./SpotCard";
import { AuthContext } from "../Provider/AuthProvider";

const TouristSpots = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/touristspots/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user?.email]);
  return (
    <div>
      <h2>Tourist Spots : {spots.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
