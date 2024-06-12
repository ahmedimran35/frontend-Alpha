import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton/PrimaryButton";
import BASMainText from "./BASComponents/BASMainText";
import BASPhoto from "./BASComponents/BASPhoto";
import { nanoid } from "nanoid";

const BrowseAllSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black my-20">
      <div className="md:max-w-4xl lg:max-w-7xl mx-auto h-[500px] md:h-[400px] lg:h-[550px] flex flex-col md:flex-row justify-between items-center p-10">
        <div className="text-white max-w-xl w-fit flex flex-col justify-between items-start gap-5 lg:gap-10 ">
          <h3 className="text-sm md:text-md text-[#ABABAB]">
            Welcome to the new YT SHOPS
          </h3>
          <BASMainText />
          <div
            onClick={() => {
              navigate(`/category-data?category=All`, {
                replace: true,
                state: nanoid(),
              });
            }}
          >
            <PrimaryButton text="Browse All Categories" />
          </div>
        </div>

        <BASPhoto />
      </div>
    </div>
  );
};

export default BrowseAllSection;
