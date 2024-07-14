import { useContext, useEffect, useState } from "react";
import SpotCard from "./SpotCard";

const TouristSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/touristspots/email/rifatul564@gmail.com")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
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
