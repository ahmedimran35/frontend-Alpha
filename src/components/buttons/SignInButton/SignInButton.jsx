import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link
      to={"/sign-in"}
      className={`inline-flex items-center justify-center gap-2 text-sm tracking-wide text-white transition-colors duration-300 px-6 py-2 hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl rounded-md font-medium`}
    >
      Sign In
    </Link>
  );
};

export default SignInButton;
