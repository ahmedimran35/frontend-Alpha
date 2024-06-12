import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink } from "react-router-dom";
import SignInButton from "../buttons/SignInButton/SignInButton";
import brandLogoalpha from "/BrandLogoalpha.svg";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../isLoading/Loading";
import useCategory from "../../Hooks/useCategory";

const Navbar = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { setSelectedSubCategory } = useCategory();

  const {
    data: userInfo = {},
    isLoading,
    isPending,
  } = useQuery({
    enabled: !!user?.email,
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/${user?.email}`
      );
      return res?.data;
    },
    staleTime: 100000, // Refetch data after 10 minute of inactivity
  });

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  if (loading || isPending || isLoading) return <Loading isLoading={true} />;

  return (
    <header className="max-w-[766px] lg:max-w-7xl mx-auto flex flex-row items-center justify-between mt-4 text-black font-medium">
      {/* brand logo */}
      <Link
        to="/"
        className="flex items-center gap-2 flex-grow md:flex-grow-0 py-3 text-lg focus:outline-none"
      >
        <img
          src={brandLogoalpha}
          alt="brand logo"
          className="w-48 md:w-64"
          rel="preload"
        />
      </Link>

      {/* mobile view */}
      <button
        className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
        onClick={() => setIsToggleOpen(!isToggleOpen)}
        aria-expanded={isToggleOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      <ul
        role="menubar"
        aria-label="Select page"
        className={`absolute top-0 left-0 h-[320px] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 hidden lg:visible md:relative md:top-0  md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:bg-white/0 md:px-0 md:py-0  md:pt-0 md:opacity-100 ${
          isToggleOpen
            ? "visible opacity-100 backdrop-blur-sm"
            : "invisible opacity-0"
        }`}
      >
        <li role="none" className="flex items-stretch">
          <Link
            onClick={() => setSelectedSubCategory("design-template")}
            to="category-data?category=design-template"
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4"
          >
            <span>Design Template</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            onClick={() => setSelectedSubCategory("stock-photos")}
            to="category-data?category=stock-photos"
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4"
          >
            <span>Stock Photos</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            onClick={() => setSelectedSubCategory("tools-and-softwares")}
            to="category-data?category=tools-and-softwares"
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4"
          >
            <span>Software & Tools </span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            onClick={() => setSelectedSubCategory("courses-and-learning")}
            to="category-data?category=courses-and-learning"
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4"
          >
            <span>Courses & Learning</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            onClick={() => setSelectedSubCategory("icon")}
            to="category-data?category=icon"
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4"
          >
            <span>Icons</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 transition-colors duration-300 text-base md:text-[8px] lg:text-sm hover:text-[#ff0000] focus:text-[#ff0000] focus:outline-none focus-visible:outline-none md:px-[5px] lg:px-4 lg:hidden"
            to="/donate"
          >
            <span>Donate</span>
          </Link>
        </li>
      </ul>

      <div className="contents lg:hidden">
        {user && user ? (
          <div className="flex gap-1">
            {user && (
              <button className="hover:bg-[#ff0000] rounded-md p-1 transition-colors duration-300 text-[#ff0000] hover:text-white">
                <AiOutlineUser className="text-xl" />
              </button>
            )}

            {/* <LogOutButton/> */}
          </div>
        ) : (
          <SignInButton />
        )}
      </div>

      <nav className="flex md:gap-3 items-center text-sm">
        <NavLink
          to="/donate"
          className="hover:text-[#ff0000] text-base md:text-[8px] lg:text-sm transition-colors duration-300 hidden lg:contents"
        >
          Donate
        </NavLink>

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
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
