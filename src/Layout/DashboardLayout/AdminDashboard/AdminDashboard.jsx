import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="my-3 flex justify-center items-center bg-red-200 md:w-[290px] rounded-md"> 
    {/* md:w-[390px] when feedback includes*/}
      <NavLink className={activeLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeLinkStyle} to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/35ea33bcec36ccce8bdb472f803c4fc0d0eaae9d4c51181e5000a9eff322179b">
        Analytics
      </NavLink>
      <NavLink className={activeLinkStyle} to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/17e21e87cd28d0fae82e2ea454787ccd2b48ff664d515f15013833655881358b">
        Manage User
      </NavLink>
  {/*     <NavLink className={activeLinkStyle} to="/dashboard/906673d45758e5d8964febf9865fadea13302b0cb65a8a21875edcd2a60b16f9">
        Feedback
      </NavLink> */}
    </div>
  );
};
const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
      ? "bg-[#ff0000] text-white text-sm p-2 rounded-md m-2  "
      : " hover:bg-red-700 text-sm hover:text-white  m-2  rounded-md p-2";

export default AdminDashboard;
