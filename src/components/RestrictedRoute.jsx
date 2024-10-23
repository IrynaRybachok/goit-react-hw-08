import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
