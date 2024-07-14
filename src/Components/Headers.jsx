import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut().then().then();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allspots">All Tourists Spots</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addspot">Add Tourist Spot</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/mylist">My List</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-0  px-1 rounded-xl">
          <img
            className="w-20 rounded-full -ml-[20px] m-0 p-0"
            src="https://i.postimg.cc/8zVPX742/fradel-travel-removebg-preview.png"
          />
          <a className="text-xl font-semibold -ml-[15px] m-0 p-0">
            TripTreasure
          </a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user.displayName}
            data-tooltip-place="top"
          >
            <div className="mr-2 flex gap-2">
              <img
                className="rounded-full w-11 h-11 object-fill"
                src={user.photoURL}
              />
              <button onClick={handleSignOut} className="btn">
                {" "}
                Sign Out
              </button>
            </div>
            <Tooltip id="my-tooltip" />
          </a>
        ) : (
          <Link className="btn" to="/login">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Headers;
