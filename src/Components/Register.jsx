import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    if (password.length < 6) {
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Password must be atleast six character",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Password must have an uppercase character",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (!/[a-z]/.test(password)) {
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Password must have an lowercase character",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
            .then((result) => console.log(result))
            .catch((error) => console.log(error.message));
        }
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col  w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Please Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute bottom-3 right-3 text-2xl"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link className="text-blue-500 font-semibold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
