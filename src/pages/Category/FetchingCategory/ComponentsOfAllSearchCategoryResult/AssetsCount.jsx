/**
 * Show assets count for a category
 * @param {number} total number of assets
 * @returns {ReactNode} a react node to show assets
 */
import PropTypes from "prop-types";
const AssetsCount = ({ total = 0 }) => {
  return (
    <p className="text-sm text-gray-500">
      {` ${total} ${total > 1 ? "Assets" : "Asset"}  `}
    </p>
  );
};

AssetsCount.propTypes = {
  total: PropTypes.number,
};

export default AssetsCount;
