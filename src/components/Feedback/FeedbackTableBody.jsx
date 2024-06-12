import { MdDelete } from "react-icons/md";
import { tdStyle } from "../../constants/dashboardTableConstants";

const FeedbackTableBody = () => {
  const allUser = [
    {
      email: "email@gmail.com",
      name: "name",
      username: "username",
      role: "role",
    },
  ];
  return (
    <tbody>
      {allUser &&
        allUser?.data?.map((normaluser) => (
          <tr key={normaluser._id}>
            <td className={tdStyle}>{normaluser?.name}</td>
            <td className={tdStyle}>{normaluser?.username}</td>
            <td className={tdStyle}>{normaluser?.email}</td>
            <td className={tdStyle}>{normaluser?.role}</td>
            <td className={tdStyle}>
              <button className="font-bold bg-[#ff0000] text-white p-1 rounded-md">
                <MdDelete className="md:text-xl lg:text-2xl" />
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default FeedbackTableBody;
