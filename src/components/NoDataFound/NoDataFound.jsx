import { PiMagnifyingGlassBold } from "react-icons/pi";
import H2Title from "../Titles/H2Title";

const NoDataFound = () => {
  return (
    <div className=" max-w-4xl mx-auto flex flex-col gap-3 justify-center items-center">
      <H2Title baseText={"No Data"} coloredText={"Found"}/>
      <PiMagnifyingGlassBold className="text-4xl font-bold text-center text-[#ff0000]" />
    </div>
  );
};

export default NoDataFound;
