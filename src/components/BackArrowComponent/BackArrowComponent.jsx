/**
 * * This component renders a arrow button that goes back to previous page
 */
import { FaArrowLeft } from "react-icons/fa";

const BackArrowComponent = () => {
  return (
    <button onClick={() => window.history.back()}>
      <FaArrowLeft className="text-2xl hover:text-[#ff0000] hover:cursor-pointer transition-colors duration-150" />
    </button>
  );
};

export default BackArrowComponent;
