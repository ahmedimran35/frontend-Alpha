import PropTypes from "prop-types"
import useAuth from "../Hooks/useAuth";
import Loading from "../components/isLoading/Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const location = useLocation();
  
  const {
    data: loggedUserRole = {},
    isLoading,
    isPending: isUserLoading,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: [user?.email, "loggedUserRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/${user?.email}`);
      return res?.data.data;
    },
    // Configure caching behavior
    staleTime: 60000, // Refetch data after 1 minute of inactivity
  });

  if (loading || isLoading || isUserLoading)
    return <Loading isLoading={true} />;

  if (user && loggedUserRole?.role === "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47") return children;

  return <Navigate to={"/"} state={{ from: location }} replace />;
};

AdminRoutes.propTypes = {
  children: PropTypes.object
}

export default AdminRoutes;
