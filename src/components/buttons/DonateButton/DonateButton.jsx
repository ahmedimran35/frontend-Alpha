import { Link } from "react-router-dom";

const DonateButton = () => {
  return (
    <Link to={"/donate"}>
      <button
        className={`inline-flex items-center justify-center px-3 py-2 md:px-4 md:py-[13px] text-xs md:text-[12px] lg:text-base  text-white transition duration-300 rounded-lg whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807]`}
      >
        Donate Now
        <span className="text-2xl">
        </span>
      </button>
    </Link>
  );
};

export default DonateButton;
