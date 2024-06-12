import { tableHeadingsStyle } from "../../../../constants/dashboardTableConstants";

const TableHead = () => {
    return (
        <thead>
          <tr>
            <th scope="col" className={` ${tableHeadingsStyle}  rounded-tl-lg`}>
              Name
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Preview
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Pricing
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-white bg-[#ff0000]"
            >
              Regular Price
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Discount Price
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Discount Percentage
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Clicked
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Visited
            </th>
            <th scope="col" className={tableHeadingsStyle}>
              Sub Category
            </th>
    
            <th scope="col" className={` ${tableHeadingsStyle}  rounded-tr-lg`}>
              Actions
            </th>
          </tr>
        </thead>
      );
};

export default TableHead;