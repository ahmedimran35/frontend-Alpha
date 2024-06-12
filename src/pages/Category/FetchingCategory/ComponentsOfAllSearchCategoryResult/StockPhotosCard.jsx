import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const StockPhotosCard = ({ titleId, asset }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/category-data/stock-photos/${titleId}`)}
      className="rounded-md w-fit hover:drop-shadow shadow shadow-slate-20 relative bg-white hover:shadow-lg h-fit flex justify-center items-center group mx-auto hover:cursor-pointer"
    >
      <img
        className={`lg:w-72  lg:h-40 rounded-md selector m-2  `}
        src={
          asset.subCategory == "psd" || asset.subCategory == "pdf"
            ? asset.previewUrl
            : asset?.url
        }
        alt={asset?.alternativeText}
        loading="lazy"
      />
      <p className="absolute w-fit px-1 py-[2px] m-1 bottom-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 text-white font-medium rounded-md">
        {asset?.title}
      </p>
    </div>
  );
};

StockPhotosCard.propTypes = {
  asset: PropTypes.shape({
    alternativeText: PropTypes.string,
    previewUrl: PropTypes.string,
    subCategory: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  titleId: PropTypes.string,
};

export default StockPhotosCard;
