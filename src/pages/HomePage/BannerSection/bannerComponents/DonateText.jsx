import { Link } from "react-router-dom";

function DonateText() {

  return (
    <div className="flex justify-between w-[260px] md:w-[288px] lg:w-[332px] text-xs md:text-sm lg:text-base text-[#ABABAB] font-normal">
      <span>To use free forever</span>|

      <Link
        data-test="banner-donate"
        to="/donate"
        className="hover:cursor-pointer hover:text-[#ff0000] transition-colors duration-200"
      >
        Please donate now
      </Link>
    </div>
  );
}

export default DonateText;
