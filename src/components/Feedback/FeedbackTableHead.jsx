import { tableHeadingsStyle } from "../../constants/dashboardTableConstants";

const FeedbackTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className={` ${tableHeadingsStyle}  rounded-tl-lg`}>
          Email
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Feedback Type
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Concern
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Status
        </th>

        <th scope="col" className={` ${tableHeadingsStyle}  rounded-tr-lg`}>
          See Details
        </th>
      </tr>
    </thead>
  );
};

export default FeedbackTableHead;
