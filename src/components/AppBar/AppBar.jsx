import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLogin = useSelector(isLoggedInSelector);
  return (
    <>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
