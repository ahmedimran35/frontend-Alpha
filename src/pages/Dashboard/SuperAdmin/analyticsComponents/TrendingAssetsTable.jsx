import PropTypes from "prop-types";

const TrendingAssetsTable = ({ assets, category }) => {
  return (
    <div className="col-span-2 px-6 py-4 pt-10 rounded-b-xl shadow-md">
      <h3 className="font-semibold leading-none tracking-tight text-2xl">
        Trending {category}
      </h3>
      <p className="text-zinc-600 mt-1 text-sm pb-4">
        Most clicked {category} on your website in the past month
      </p>
      <table className="table-auto w-full text-left whitespace-no-wrap ">
        <TableHead></TableHead>
        <TableBody assets={assets}></TableBody>
      </table>
    </div>
  );
};

TrendingAssetsTable.propTypes = {
  assets: PropTypes.object,
  category: PropTypes.string,
};

function TableHead() {
  return (
    <thead>
      <tr>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#ff0000] rounded-tl rounded-bl">
          Name
        </th>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#ff0000]">
          Type
        </th>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#ff0000]">
          Views
        </th>
        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#ff0000] rounded-r">
          Downloads
        </th>
      </tr>
    </thead>
  );
}

function TableBody({ assets }) {
  return (
    <tbody>
      {assets?.trending?.map((asset, i) => {
        return (
          <tr key={i}>
            <td className="px-4 py-3">{asset?.title}</td>
            <td className="px-4 py-3">{asset?.type}</td>
            <td className="px-4 py-3">{asset?.click}</td>
            <td className="px-4 py-3 text-lg text-gray-900">
              {asset?.download}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

TableBody.propTypes = {
  assets: PropTypes.shape({
    trending: PropTypes.array,
  }),
};

export default TrendingAssetsTable;
