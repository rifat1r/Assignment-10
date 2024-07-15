import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-eight-gold.vercel.app/activity")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="">
      <div className="text-center my-10">
        <h2 className="text-4xl font-semibold">
          Activities Added by Our Community
        </h2>
        <p className="text-xl font-medium text-gray-400 mt-3">
          Find the best activities for each spot, curated by our travel
          community.
        </p>
        <div className="w-2/3 mx-auto mt-2">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      {activities.map((activityObj) => (
        <ActivityCard
          key={activityObj._id}
          activityObj={activityObj}
        ></ActivityCard>
      ))}
    </div>
  );
};

export default Activities;
