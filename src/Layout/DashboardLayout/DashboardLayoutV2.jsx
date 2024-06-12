import { Link, Outlet } from "react-router-dom";
import SeoDashboard from "./SeoDashboard/SeoDashboard";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import brandLogoalpha from "/BrandLogoalpha.svg";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/isLoading/Loading";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const DashboardLayoutV2 = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: loggedinUser = {},
    isLoading,
    isPending: isUserLoading,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["logged-in-User"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/${user?.email}`);
      return res?.data?.data;
    },
    staleTime: 600000, // Refetch data after 10 minute of inactivity
  });

  if (isUserLoading || isLoading) return <Loading isLoading={true} />;

  return (
    <div className=" max-w-7xl mx-auto my-5 space-y-5">
      <div className=" flex md:flex-row">
        <AppBar
          position="static"
          color="transparent"
          border="none"
          elevation={0}
          sx={{
            display: { xs: "flex", sm: "flex" }, // Ensure flexbox for all breakpoints
            flexDirection: { xs: "column", sm: "row" }, // Control flex direction
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters className=" flex flex-col md:flex-row">
              <Typography variant="h6" className=" flex flex-col">
                <Link to="/">
                  <img
                    src={brandLogoalpha}
                    alt="YT Shops Alpha Logo"
                    className="w-96 md:w-72 md:ml-[-15px]"
                  />
                </Link>
              </Typography>
            </Toolbar>
          </Container>

          {loggedinUser?.role === "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47" && (
            <li
              role="none"
              className="flex items-stretch  md:mr-[15px] lg:mr-0"
            >
              <AdminDashboard />
            </li>
          )}
          {loggedinUser?.role === "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467" && (
            <li
              role="none"
              className="flex items-stretch  md:mr-[15px] lg:mr-0"
            >
              <SeoDashboard />
            </li>
          )}
        </AppBar>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayoutV2;
