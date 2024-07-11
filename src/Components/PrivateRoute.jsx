import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg mx-auto"></span>;
  }
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoute;
