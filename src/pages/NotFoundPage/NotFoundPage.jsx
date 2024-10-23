import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";
  return (
    <>
      <h2>NotFoundPage</h2>
      <Link to={backLink}>Go back</Link>
    </>
  );
};

export default NotFoundPage;
