import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { signSn } from "../../utils/signSn";
import brandedLogoAlpha from "/BrandLogoalpha.svg";
import Cookies from "js-cookie";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Toast } from "../../constants/toast";

const SignInPage = () => {
  const { googleSignIn, user } = useAuth();
  const [isAlreadySignIn] = useState(Cookies.get("email"));

  const handleGoogleSignIn = () => {
    if (user) return;
    signSn(googleSignIn, Toast);
  };

  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" h-10 mt-5">
        <Link to={"/"}>
          <img
            className=" max-h-16"
            src={brandedLogoAlpha}
            alt="YT Shops Alpha Logo"
          />
        </Link>
      </div>
      <div className="p-2 md:p-0 mt-48 flex justify-center items-center">
        <div className=" p-5 w-[450px] h-96 mx-aut border rounded-md shadow-sm flex justify-center items-center">
          <div>
            <p className=" base text-center">Welcome to YT Shops</p>
            <h3 className=" text-3xl font-semibold text-center mt-2">
              Your Journey Starts Here!
            </h3>

            <div className=" mt-5 w-full mx-auto  pb-5">
              <button
                data-test="signinBtn"
                onClick={handleGoogleSignIn}
                className={`w-full inline-flex items-center justify-center gap-2 text-sm tracking-wide text-white transition-colors duration-300 px-6 py-2 hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl rounded-md font-medium h-12`}
              >
                <span className="text-lg">
                  <FaGoogle />
                </span>{" "}
                Continue with Google
              </button>
            </div>

            {!isAlreadySignIn && (
              <p>
                By Proceed, I agree to YT Shop&apos;s Website
                <span className=" text-blue-500 font-bold">
                  <Link to="/Terms of use"> Terms of use</Link>
                </span>
                ,
                <span className=" text-blue-500 font-bold">
                  <Link to="/Privacy policy">Privacy policy</Link>
                </span>
                , and
                <span className=" text-blue-500 font-bold">
                  <Link to="/License agreement">License agreement</Link>
                </span>
                .
              </p>
            )}

            <div className=" mt-10 border "></div>
            <p className=" text-center mt-3">
              Not Interested?{" "}
              <span className=" text-red-400">
                <Link to={"/"}>Cancel</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
