import PropTypes from "prop-types";
import { RiDeleteBin6Fill, RiEditBoxFill } from "react-icons/ri";
import { tdStyle } from "../../../../constants/dashboardTableConstants";

const TableBody = ({
  allSoftwareAndTools,
  deleteSoftwareAndToolsHandler,
  navigate,
}) => {
  return (
    <tbody>
      {allSoftwareAndTools &&
        allSoftwareAndTools.data?.map((tools) => (
          <tr key={tools?._id}>
            <td className={tdStyle}>{tools.title}</td>
            <td className={tdStyle}>
              <img
                src={tools?.url}
                alt="apple"
                width={30}
                // loading="lazy"
              />
            </td>
            <td className={tdStyle}>{tools?.pricing}</td>
            <td className={tdStyle}>{tools?.regularPrice}</td>
            <td className={tdStyle}>{tools?.discountPrice}</td>
            <td className={tdStyle}>
              {tools?.pricing !== "Free" &&
                `${parseFloat(tools?.discountPercentage).toFixed(2)} %`}
            </td>
            <td className={tdStyle}>{tools?.click}</td>
            <td className={tdStyle}>{tools?.visited}</td>
            <td
              style={{ width: "280px", minHeight: "65px", padding: "2px 5px" }}
              className={`flex flex-wrap items-center justify-start gap-1 ${tdStyle}`}
            >
              {tools?.subCategories?.map((subcategory, i) => (
                <p
                  className="border inline px-[2.5px] py-[1.5px] rounded bg-red-200 border-none text-zinc-700 text-xs"
                  key={i}
                >
                  {subcategory}
                </p>
              ))}
            </td>
            <td className={tdStyle}>
              <div className="flex items-center justify-around  hover:cursor-pointer">
                <div>
                  <RiEditBoxFill
                    onClick={() =>
                      navigate(
                        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/b38ee85103fa171859bc716a20d777958df408f41364a0f444ea739cb7057d1f/${tools?._id}`
                      )
                    }
                    className="text-xl transition-colors duration-300 hover:text-green-400"
                  />
                </div>
                <div onClick={() => deleteSoftwareAndToolsHandler(tools?.key)}>
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
  allSoftwareAndTools: PropTypes.shape({
    data: PropTypes.array,
  }),
  deleteSoftwareAndToolsHandler: PropTypes.func,
  navigate: PropTypes.func,
};

export default TableBody;
