import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useResponsiveness from "../../../../Hooks/useResponsiveness";

const IconCard = ({ titleId, asset }) => {
  const navigate = useNavigate();
  const { isLaptopView, isDesktopView2 } = useResponsiveness();
  return (
    <div
      onClick={() => navigate(`/category-data/icon/${titleId}`)}
      className="rounded w-full hover:drop-shadow shadow shadow-slate-200
                  relative bg-white hover:shadow-lg h-full flex justify-center items-center group mx-auto hover:cursor-pointer hover:scale-105"
    >
      <img
        className={`rounded-md selector p-2 ${
          isDesktopView2 ? "w-28 h-28 p-5" : "w-30 h-20 "
        } ${isLaptopView ? "h-28 " : ""} `}
        src={asset?.url}
        alt={asset?.alternativeText}
        loading="lazy"
      />
    </div>
  );
};

IconCard.propTypes = {
  asset: PropTypes.shape({
    alternativeText: PropTypes.string,
    url: PropTypes.string,
  }),
  titleId: PropTypes.string,
};

export default IconCard;
