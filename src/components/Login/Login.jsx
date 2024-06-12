import { Link } from "react-router-dom";
import SignUpWithGoogle from "../SignUpWithGoogle/SignUpWithGoogle";
import H2Title from "../Titles/H2Title";

const Login = () => {
  return (
    <div className=" max-w-4xl mx-auto  my-20">
      <H2Title>Login To Continue</H2Title>
      <hr />
      <SignUpWithGoogle/>

      <p className=" text-center mt-10">
        New to YT Shops?{" "}
        <Link to={"/signup"}>
          {" "}
          <span className=" font-bold text-blue-500">Sign-up</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
