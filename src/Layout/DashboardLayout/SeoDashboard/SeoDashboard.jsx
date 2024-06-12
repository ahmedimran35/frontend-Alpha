import { NavLink } from "react-router-dom";

const SeoDashboard = () => {
  return (
    <div className="my-3 flex justify-center items-center bg-red-200 md:w-[220px] rounded-md">
      <NavLink className={activeLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeLinkStyle} to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/46bade64727b5046da39635eea8448e552d31d9009829b919ffc96e65847fc88">
        Manage Asset
      </NavLink>
      {/* <NavLink
        className={activeLinkStyle}
        to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/42439c1a1b7c8aa202928936a3166617c580039f6c99e745405e92c9cb54fdfa"
      >
        Manage Software and Tools
      </NavLink>
      <NavLink
        className={activeLinkStyle}
        to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/dd6c71448dfe05bfa1c2bbd71cab1db5cdc1292615133c8adb6d988e2bc138d4"
      >
        Manage Important Pages
      </NavLink> */}
    </div>
  );
};
const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "bg-[#ff0000] text-white text-sm p-2 rounded-md m-2 "
    : " hover:bg-red-700 text-sm hover:text-white  m-2  rounded-md p-2";

export default SeoDashboard;
