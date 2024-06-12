import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/isLoading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading isLoading={true}  />; 

  return user ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoutes;
