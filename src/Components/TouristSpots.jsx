import { useEffect, useState } from "react";
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
      <h2 className="text-center mt-10 text-5xl font-semibold ">
        Top Tourist Spots in Southeast Asia
      </h2>
      <p className="text-center text-xl mb-3 mt-4">
        Join us on a journey through the heart of Southeast Asia. Our featured
        tourist spots highlight the region's incredible diversity, <br />
        from bustling cities to serene natural landscapes
      </p>

      <div className="w-[600px] mx-auto mb-10">
        <hr />
        <hr />
        <hr />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 px-7">
        {spots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;
