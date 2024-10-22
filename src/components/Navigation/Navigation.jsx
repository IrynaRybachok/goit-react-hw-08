import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedInSelector } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};

export default Navigation;
