import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../components/isLoading/Loading";

import { Navigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const SeoRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  
  const {
    data: loggedUserRole = {},
    isLoading: isUserDataLoading,
    isPending: isUserLoading,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["loggedUserRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/${user?.email}`);
      return res?.data?.data;
    },
    // Configure caching behavior
    staleTime: 600000, // Refetch data after 10 minute of inactivity
    cacheTime: 6000000, // Remove data from cache after 100 minute (optional)
  });
  const isLoadingData = loading || isUserDataLoading || isUserLoading;

  if (isLoadingData) return <Loading isLoading={true} />;

  return user && loggedUserRole?.role === "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467" ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

SeoRoutes.propTypes = {
  children: PropTypes.object,
};

export default SeoRoutes;
