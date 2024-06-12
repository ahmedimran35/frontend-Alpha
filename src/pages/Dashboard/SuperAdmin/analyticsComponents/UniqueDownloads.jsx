import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa";

const UniqueDownloads = ({ uniqueDownloads }) => {
  return (
    <div className="col-span-1 lg:col-span-1 lg:row-span-2 border-2 p-6 rounded-xl overflow-hidden text-center bg-white shadow-md hover:shadow-lg text-black shadow-slate-200 flex flex-row items-center justify-between">
      <div className="w-full h-full flex flex-col items-start justify-center gap-2 ">
        <div className=" flex w-full justify-between">
          <span className="tracking-tight font-medium  text-zinc-600">
            Unique Downloads
          </span>
          <div className="h-full flex justify-center items-start text-zinc-700">
            <FaDownload />
          </div>
        </div>
        <span className="text-xl lg:text-4xl font-bold">
          +{uniqueDownloads?.total === null ? 0 : uniqueDownloads?.total}
        </span>
        <span className="text-sm text-zinc-600">
          <span className="text-[#ff0000]">
            {" "}
            +
            {uniqueDownloads?.lastMonth === null
              ? 0
              : uniqueDownloads?.lastMonth}
          </span>{" "}
          downloaded this month
        </span>
      </div>
    </div>
  );
};

UniqueDownloads.propTypes = {
  uniqueDownloads: PropTypes.object,
};

export default UniqueDownloads;
