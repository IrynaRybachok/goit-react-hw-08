import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <div className={s.UserMenu}>
      <h2 className={s.title}>Welcome, {user.name}</h2>
      <button
        className={s.btnLogout}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
