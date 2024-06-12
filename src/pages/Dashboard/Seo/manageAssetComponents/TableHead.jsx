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
          File Type
        </th>
        <th
          scope="col"
          className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-white bg-[#ff0000]"
        >
          Actual Downloads
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Downloads
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Clicked
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Category
        </th>

        <th scope="col" className={` ${tableHeadingsStyle}  rounded-tr-lg`}>
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
