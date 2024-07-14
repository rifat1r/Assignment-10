import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/touristspots/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user.email]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/touristspots/id/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = spots.filter((cof) => cof._id !== id);
          setSpots(remaining);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tourist Spot</th>
            <th>Country</th>
            <th>Average Cost </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {spots.map((spot) => (
          <tbody key={spot._id}>
            {/* row 1 */}
            <tr>
              <td>{spot.spotName}</td>
              <td>{spot.country}</td>
              <td>{spot.cost}</td>
              <Link to={`/touristspots/id/${spot._id}`}>
                <td className="">EDIT</td>
              </Link>
              <td
                onClick={() => handleDelete(spot._id)}
                className="btn btn-error text-white"
              >
                X
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyList;
