import PropTypes from "prop-types";
import { FaDonate } from "react-icons/fa";

const TotalDonations = ({ donations }) => {
  return (
    <div className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-2 border-2 p-4 lg:p-6 rounded-xl overflow-hidden text-center bg-white shadow-md hover:shadow-lg text-black shadow-slate-200 ">
      <div className="lg:w-full h-full flex flex-col items-start justify-center gap-2 ">
        <div className=" flex justify-between w-full">
          <span className="tracking-tight font-medium text-zinc-600 ">
            Total Donations
          </span>
          <span className="h-full flex justify-center items-center text-zinc-700">
            <FaDonate />
          </span>
        </div>
        <span className="text-xl lg:text-4xl font-bold">
          ${donations?.total}
        </span>
        <span className="text-xs text-zinc-600">
          <span className="text-[#ff0000]"> +{donations?.lastMonth}</span>{" "}
          earned last month
        </span>
      </div>
    </div>
  );
};

TotalDonations.propTypes = {
  donations: PropTypes.object,
};

export default TotalDonations;
