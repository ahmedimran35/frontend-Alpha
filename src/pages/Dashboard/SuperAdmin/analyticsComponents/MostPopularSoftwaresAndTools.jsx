/**
 * * A Table for Top 10 most popular softwares
 * @param {Array} toolsAndSoftwares an array containing a list of tools and softwares
 * @returns {ReactNode} A table list 10 most powerful software
 */

import PropTypes from "prop-types";
const MostPopularSoftwaresAndTools = ({ toolsAndSoftwares }) => {
  return (
    <div className="lg:col-span-4 px-6 py-4 rounded-b-xl pt-10 shadow-md border-[1px]">
      <h3 className="font-semibold leading-none tracking-tight text-2xl">
        Most Popular Tools & Softwares
      </h3>
      <p className="text-zinc-600 mt-1  pb-4">
        Your website&apos;s most popular tools and software of all time
      </p>
      <table className="table-auto w-full text-left whitespace-no-wrap mx-auto">
        <TableHead></TableHead>
        <TableBody toolsAndSoftwares={toolsAndSoftwares}></TableBody>
      </table>
    </div>
  );
};

MostPopularSoftwaresAndTools.propTypes = {
  toolsAndSoftwares: PropTypes.object,
};
function TableHead() {
  return (
    <thead>
      <tr>
        <th className="px-1 lg:px-4 py-2  lg:py-3 title-font tracking-tighter font-medium text-white text-sm bg-[#ff0000] rounded-tl rounded-bl">
          Name
        </th>
        <th className="px-1 lg:px-4 py-2 lg:py-3 title-font tracking-tighter font-medium text-white text-sm bg-[#ff0000]">
          Sub Categories
        </th>
        <th className="px-1 lg:px-4 py-2 lg:py-3 title-font tracking-tighter font-medium text-white text-sm bg-[#ff0000]">
          Pricing
        </th>
        <th className="px-1 lg:px-4 py-2 lg:py-3 title-font tracking-tighter font-medium text-white text-sm bg-[#ff0000]">
          Views
        </th>
        <th className="px-1 lg:px-4 py-2 lg:py-3 title-font tracking-tighter font-medium text-white text-sm bg-[#ff0000]  rounded-r">
          Visited
        </th>
      </tr>
    </thead>
  );
}

function TableBody({ toolsAndSoftwares }) {
  return (
    <tbody className="text-sm">
      {toolsAndSoftwares?.trending.map((asset, i) => {
        return (
          <tr key={i}>
            <td className="px-2 py-2">{asset?.title}</td>
            <td className="flex gap-1 py-2 px-2 flex-wrap">
              {asset?.subCategories.map((subcategory, i) => (
                <p
                  className="border inline p-1 rounded bg-red-200 border-none text-zinc-700 text-xs"
                  key={i}
                >
                  {subcategory}
                </p>
              ))}
            </td>
            <td className="px-2 py-2">{asset?.pricing}</td>
            <td className="px-2 py-2">{asset?.click}</td>
            <td className="px-2 py-2 text-gray-900">{asset?.visited}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

TableBody.propTypes = {
  toolsAndSoftwares: PropTypes.object,
};
export default MostPopularSoftwaresAndTools;
