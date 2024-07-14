import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
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
                className="absolute bottom-11 right-3 text-2xl"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex gap-2 mt-6">
              <button onClick={handleGoogleLogIn} className="btn ">
                {" "}
                <span className="text-xl">
                  <FaGoogle />
                </span>
                Google Sign In
              </button>
              <button onClick={handleGithubLogin} className="btn ">
                {" "}
                <span className="text-xl">
                  <FaGithub />
                </span>
                Github Sign In
              </button>
            </div>
            <p className="text-center mt-5">
              New to this site?
              <Link className="text-blue-500 font-semibold" to="/Register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
