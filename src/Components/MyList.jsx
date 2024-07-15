import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/touristspots/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristspots/id/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((cof) => cof._id !== id);
              setSpots(remaining);
            }
          });
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
              <Link
                className="text-green-500 font-medium mr-10 "
                to={`/addActivity/${spot._id}`}
              >
                <td className="">Add Activity</td>
              </Link>
              <Link to={`/touristspots/id/${spot._id}`}>
                <td className="btn mr-16">EDIT</td>
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
