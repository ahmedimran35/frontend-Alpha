import { Link } from "react-router-dom";
import SignUpWithGoogle from "../SignUpWithGoogle/SignUpWithGoogle";
import H2Title from "../Titles/H2Title";

const Signup = () => {
  return (
    <div className=" max-w-7xl mx-auto min-h-[500px] my-20">
      <H2Title>Create An Account</H2Title>
      <SignUpWithGoogle />

      <p className=" text-center mt-10">
        Already a member?{" "}
        <Link to={"/login"}>
          <span className=" font-bold text-blue-500">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
