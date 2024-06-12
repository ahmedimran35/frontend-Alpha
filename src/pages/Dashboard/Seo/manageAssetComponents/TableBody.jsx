import PropTypes from "prop-types";
import { RiDeleteBin6Fill, RiEditBoxFill } from "react-icons/ri";
import { tdStyle } from "../../../../constants/dashboardTableConstants";

const TableBody = ({ allAsset, navigate, deleteAsset }) => {
  const navigateUpdatePage = (category, id) => {
    if (category === "design-template") {
      navigate(
        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/update-design-template/${id}`
      );
    } else if (category === "icon") {
      navigate(
        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/update-icon/${id}`
      );
    }
    // Saif Bro Add Your Update Component (Stock Photos, Course And Learning)
    // For Example
    else if (category === "stock-photos") {
      navigate(
        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/update-stock-photos/${id}`
      );
    } else {
      navigate(
        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/update-course/${id}`
      );
    }
  };

  return (
    <tbody>
      {allAsset &&
        allAsset?.data?.map((asset) => (
          <tr key={asset._id}>
            <td className={`${tdStyle} w-72`}>{asset.title}</td>
            <td className={`${tdStyle} w-28`}>
              <img
                src={
                  // asset.subCategory == "psd" || asset.subCategory == "pdf"
                  //   ? asset.previewUrl
                  //   : asset?.url
                  asset.type == "psd" || asset.type == "pdf"
                    ? asset.previewUrl
                    : asset?.url
                }
                alt="apple"
                width={30}
                // loading="lazy"
              />
            </td>
            <td className={`${tdStyle} w-28`}>{asset?.type}</td>
            <td className={`${tdStyle} w-28`}>{asset?.finalDownload}</td>
            <td className={`${tdStyle} w-28`}>{asset?.download}</td>
            <td className={`${tdStyle} w-28`}>{asset?.click}</td>
            <td className={`${tdStyle} w-48`}>{asset?.category}</td>
            <td className={`${tdStyle} w-28`}>
              <div className="flex items-center justify-around  hover:cursor-pointer">
                <div>
                  <RiEditBoxFill
                    onClick={() =>
                      navigateUpdatePage(asset?.category, asset?._id)
                    }
                    className="text-xl transition-colors duration-300 hover:text-green-400"
                  />
                </div>
                <div
                  onClick={() =>
                    asset.category === "courses-and-learning" ||
                    asset.category === "design-template"
                      ? deleteAsset(asset?.key, asset?.previewKey)
                      : deleteAsset(asset?.key)
                  }
                >
                  <RiDeleteBin6Fill className="text-xl transition-colors duration-300 hover:text-[#ff0000]" />
                </div>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

TableBody.propTypes = {
  allAsset: PropTypes.shape({
    data: PropTypes.array,
  }),
  deleteAsset: PropTypes.func,
  navigate: PropTypes.func,
};

export default TableBody;
