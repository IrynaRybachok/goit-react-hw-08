import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
