import PropTypes from "prop-types";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import findCategoryValue from "../../../utils/Functions/Common/findCategoryValue";

const ViewMoreButton = ({ url, assets }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const category = findCategoryValue(url);

  return (
    <div
      onClick={() => {
        navigate(`${url}`);
        queryClient.invalidateQueries({ queryKey: ["all-assets"] });
      }}
      className={
        category === "icon"
          ? `h-28 w-full relative hover:scale-95`
          : `h-44 w-full relative`
      }
    >
      <div
        className="rounded-md bg-white flex justify-center relative  items-center mx-auto brightness-50 hover:scale-95 duration-150 delay-75 hover:cursor-pointer h-full w-full"
        style={{
          backgroundImage: `url("${assets?.result[8]?.url}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className={`flex justify-center items-center rounded-md selector m-2 absolute ${
          category === "icon" ? "top-[35px] pr-4 w-full" : "top-[70px] left-1/3"
        }   text-white cursor-pointer`}
      >
        <p className=" w-fit bottom-0 text-sm text-white font-semibold rounded-md z-10">
          View More
        </p>
      </div>
    </div>
  );
};

ViewMoreButton.propTypes = {
  assets: PropTypes.object,
  url: PropTypes.string,
};

export default ViewMoreButton;
