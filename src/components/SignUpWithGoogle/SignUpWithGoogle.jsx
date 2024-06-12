import { FaGoogle } from "react-icons/fa6";

const SignUpWithGoogle = () => {
  return (
    <div className=" max-w-xs mx-auto py-1">
      <button
        className=" w-full font-bold text-lg text-center p-2 rounded-md flex justify-center items-center flex-col hover:shadow-red-200 shadow hover:shadow-md"
      >
        <FaGoogle className=" text-2xl text-white"></FaGoogle> Continue With Google
      </button>
    </div>
  );
};

export default SignUpWithGoogle;
