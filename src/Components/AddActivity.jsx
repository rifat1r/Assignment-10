import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddActivity = () => {
  const spot = useLoaderData();
  const navigate = useNavigate();
  const { _id, name } = spot;
  const handleAddActivity = (e) => {
    e.preventDefault();
    console.log(_id);
    const activity = e.target.activity.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const country = e.target.country.value;
    const spotName = e.target.spotName.value;
    const adder = name;
    const obj = {
      activity,
      rating,
      description,
      photo,
      country,
      spotName,
      adder,
    };
    console.log(obj);
    fetch("https://assignment-10-server-eight-gold.vercel.app/activity", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged In Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="">
      <p className="text-center text-4xl mb-4 font-semibold">
        Post New Activity
      </p>
      <hr />
      <hr />
      <hr />
      <form onSubmit={handleAddActivity}>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg w-full">
            <div className="label">
              <span className="label-text">Country Name</span>
            </div>
            <input
              type="text"
              defaultValue={spot.country}
              name="country"
              placeholder="Country"
              className="input input-bordered w-full max-w-lg"
              disabled
            />
          </label>
          <label className="form-control max-w-lg  w-full ">
            <div className="label">
              <span className="label-text">Tourist Spot Name</span>
            </div>
            <input
              type="text"
              name="spotName"
              defaultValue={spot.spotName}
              placeholder="Tourist Spot Name"
              className="input input-bordered w-full max-w-lg"
              disabled
            />
          </label>
        </div>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg w-full">
            <div className="label">
              <span className="label-text">Activity Name</span>
            </div>
            <input
              type="text"
              name="activity"
              placeholder="Activity Name"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </label>
          <label className="form-control max-w-lg  w-full ">
            <div className="label">
              <span className="label-text">Rate the activity out of five</span>
            </div>
            <input
              type="number"
              name="rating"
              placeholder="Your Rating"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </label>
        </div>
        <div className="max-w-[1043px] mx-auto ">
          <label
            className="form-control
          "
          >
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered  "
              required
            />
          </label>
        </div>
        <div className="max-w-[1043px] mx-auto ">
          <label
            className="form-control
          "
          >
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Activity Photo"
              className="input input-bordered  "
              required
            />
          </label>
        </div>
        <div className="max-w-[1043px] mx-auto">
          <button className="btn w-full mt-8 btn-secondary">
            Post Activity
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddActivity;
