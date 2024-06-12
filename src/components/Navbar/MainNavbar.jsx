import brandLogoalpha from "/BrandLogoalpha.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useResponsiveness from "../../Hooks/useResponsiveness";
import SignInButton from "../buttons/SignInButton/SignInButton";
import { useQuery } from "@tanstack/react-query";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineUser } from "react-icons/ai";
import LogOutButton from "../buttons/LogOutButton/LogOutButton";

const MainNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { allCategory, setSelectedCategoryLink, setSearchTerm } = useCategory();
  const { isLaptopView, isDesktopView } = useResponsiveness();

  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo = {} } = useQuery({
    enabled: !!user?.email,
    queryKey: [user?.email, "userInfo"],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(
          `/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/${user?.email}`
        );
        return res?.data;
      }
    },
    staleTime: 10000, // Refetch data after 10 minute of inactivity
  });

  const handleLogout = () => {
    logOut();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="max-w-[766px] md:max-w-7xl mx-auto flex flex-row items-center justify-between pt-4 text-black font-medium ">
      <AppBar position="static" border="none" elevation={0} color="transparent">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "20px",
            paddingLeft: "10px",
          }}
        >
          <Link
            to="/"
            className={`flex-grow ${isLaptopView ? "flex-grow-0" : ""} ${
              isDesktopView ? "flex-grow-0" : ""
            } hover:cursor-pointer`}
          >
            <img
              src={brandLogoalpha}
              className={`w-64 ${isLaptopView ? "w-[210px]" : ""} ${
                isDesktopView ? "w-[260px]" : ""
              }`}
              alt="ytshops"
              rel="preload"
            />
          </Link>

          {/* mobile view */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              {allCategory?.map((categorySingle) => (
                <MenuItem
                  key={categorySingle?.CategoryName}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    to={`/category-data?category=${categorySingle?.categoryLink}`}
                  >
                    {categorySingle?.CategoryName}
                  </Link>
                </MenuItem>
              ))}

              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to={`/category-tools-and-software?category=tools-and-softwares&searchValue=`}
                >
                  Softwares & Tools
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* desktop view */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "center",
              gap: isLaptopView ? "1px" : isDesktopView ? "10px" : "",
              margin: isLaptopView
                ? "10px 0px  0px 0px"
                : isDesktopView
                ? "10px 0px  0px 0px"
                : "",
            }}
          >
            {allCategory.map((categorySingle) => (
              <Link
                onClick={() => {
                  setSelectedCategoryLink(categorySingle);
                  setSearchTerm("");
                }}
                key={categorySingle?.CategoryName}
                to={`/category-data?category=${categorySingle?.categoryLink}`}
              >
                {" "}
                <Button
                  disableRipple
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: 300,
                    fontSize: isLaptopView
                      ? "10px"
                      : isDesktopView
                      ? "12px"
                      : "",
                    "&:hover": {
                      color: "red",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  {categorySingle?.CategoryName}
                </Button>
              </Link>
            ))}
            <Link
              to={`/category-tools-and-software?category=tools-and-softwares&searchValue=`}
            >
              {" "}
              <Button
                onClick={handleCloseNavMenu}
                disableRipple
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 300,
                  fontSize: isLaptopView ? "10px" : isDesktopView ? "12px" : "",
                  "&:hover": {
                    color: "red",
                    bgcolor: "transparent",
                  },
                }}
              >
                Software & Tools
              </Button>
            </Link>
          </Box>
          <Box>
            <div className="hidden lg:contents">
              {user && user ? (
                <div className="flex gap-1">
                  {user &&
                    userInfo?.data?.role ===
                      "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47" && (
                      <Link
                        to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/35ea33bcec36ccce8bdb472f803c4fc0d0eaae9d4c51181e5000a9eff322179b"
                        className="hover:bg-[#ff0000] rounded-md p-1 transition-colors duration-300 text-[#ff0000] hover:text-white"
                      >
                        <AiOutlineUser className="md:text-xl lg:text-3xl" />
                      </Link>
                    )}
                  {user &&
                    userInfo?.data?.role ===
                      "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467" && (
                      <Link
                        to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/46bade64727b5046da39635eea8448e552d31d9009829b919ffc96e65847fc88"
                        className="hover:bg-[#ff0000] rounded-md p-1 transition-colors duration-300 text-[#ff0000] hover:text-white"
                      >
                        <AiOutlineUser className="md:text-xl lg:text-3xl" />
                      </Link>
                    )}
                  <LogOutButton />
                </div>
              ) : (
                <SignInButton />
              )}
            </div>
          </Box>
          <div className="contents lg:hidden">
            {user && user ? (
              <div className="flex gap-1">
                {user &&
                  userInfo?.data?.role ===
                    "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47" && (
                    <Link
                      to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/35ea33bcec36ccce8bdb472f803c4fc0d0eaae9d4c51181e5000a9eff322179b"
                      className="hover:bg-[#ff0000] rounded-md p-1 transition-colors duration-300 text-[#ff0000] hover:text-white"
                    >
                      <AiOutlineUser className="text-3xl" />
                    </Link>
                  )}
                {user &&
                  userInfo?.data?.role ===
                    "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467" && (
                    <Link
                      to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/46bade64727b5046da39635eea8448e552d31d9009829b919ffc96e65847fc88"
                      className="hover:bg-[#ff0000] rounded-md p-1 transition-colors duration-300 text-[#ff0000] hover:text-white"
                    >
                      <AiOutlineUser className="text-3xl" />
                    </Link>
                  )}
                <button
                  onClick={handleLogout}
                  className={`inline-flex items-center justify-center gap-2 text-xs tracking-wide text-white transition-colors duration-300 px-3 py-1 hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl rounded-md font-medium`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default MainNavbar;
