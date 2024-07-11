const AddTouristSpots = () => {
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const spotName = form.spotName.value;
    const totalVisitors = form.totalVisitors.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const newSpot = {
      country,
      spotName,
      totalVisitors,
      location,
      description,
      cost,
      seasonality,
      travelTime,
      name,
      email,
      photo,
    };
    console.log(newSpot);
    fetch("http://localhost:5000/touristspots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="">
      <form onSubmit={handleAddSpot}>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg w-full">
            <div className="label">
              <span className="label-text">Country Name</span>
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control max-w-lg  w-full ">
            <div className="label">
              <span className="label-text">Tourist Spot Name</span>
            </div>
            <input
              type="text"
              name="spotName"
              placeholder="Tourist Spot Name"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg w-full">
            <div className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </div>
            <input
              type="text"
              name="totalVisitors"
              placeholder="Total Visitors Per Year"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control max-w-lg   w-full ">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg  w-full">
            <div className="label">
              <span className="label-text">Short Description</span>
            </div>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control max-w-lg   w-full ">
            <div className="label">
              <span className="label-text">average_cost</span>
            </div>
            <input
              type="text"
              name="cost"
              placeholder="average_cost
"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg  w-full">
            <div className="label">
              <span className="label-text">seasonality </span>
            </div>
            <input
              type="text"
              name="seasonality"
              placeholder="seasonality "
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control max-w-lg   w-full ">
            <div className="label">
              <span className="label-text">Travel Time</span>
            </div>
            <input
              type="text"
              name="travelTime"
              placeholder="Travel Time"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
        <div className="flex justify-center gap-5 ">
          <label className="form-control max-w-lg  w-full">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="User Email"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control max-w-lg   w-full ">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
        <div className="w-full">
          <label
            className="form-control
           w-full"
          >
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div>
          <button className="btn btn-block mt-8 btn-secondary">Add Spot</button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpots;
