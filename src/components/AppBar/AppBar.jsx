import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLogin = useSelector(isLoggedInSelector);
  return (
    <nav className={s.navBox}>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default AppBar;
