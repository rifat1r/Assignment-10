import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity}></ActivityCard>
      ))}
    </div>
  );
};

export default Activities;
