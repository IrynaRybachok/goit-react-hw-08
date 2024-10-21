import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </>
  );
};
export default UserMenu;
