import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-40 ">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {" "}
        Oops! The page you are looking for does not exist.
      </h2>
      <Link to="/">
        <div className="flex justify-center">
          <button
            className="btn btn-primary   
        "
          >
            Go Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
