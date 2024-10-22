import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations";
import { isRefreshingSelector } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const isRefreshing = useSelector(isRefreshingSelector);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="register" element={<RegistrationPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        ></Route>
      </Route>
      {/* <Route path="*" element={}></Route> */}
    </Routes>
  );
}

export default App;
