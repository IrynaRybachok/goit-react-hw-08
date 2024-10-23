import { Link } from "react-router-dom";
import s from "./Home.module.css";
import { FaStar } from "react-icons/fa";
const Home = () => {
  return (
    <div className={s.homeSection}>
      <div className={s.container}>
        <h2 className={s.title}>Welcome to Phonebook!</h2>
        <p className={s.text}>
          This is your personal contact management application. Here you can:
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <FaStar className={s.iconStar} size="15" />
            <span>Add new contacts</span>
          </li>
          <li className={s.item}>
            <FaStar className={s.iconStar} size="15" />
            <span>Edit and delete existing ones</span>
          </li>
          <li className={s.item}>
            <FaStar className={s.iconStar} size="15" />
            <span>Quickly find the people you need using the search</span>
            function
          </li>
        </ul>
        <p className={s.text}>
          <Link className={s.linkRegister} to="/register">
            Sign up
          </Link>{" "}
          now and take control of your contacts!
        </p>
      </div>
    </div>
  );
};

export default Home;
