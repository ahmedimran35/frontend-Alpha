
import useAuth from "../../../Hooks/useAuth";
import { Toast } from "../../../constants/toast";
/**
 * 
 * @returns renders logout button with proper fucntionalit
 */
const LogOutButton = () => {
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut().then(() => {
        Toast.fire({
          icon: "info",
          title: "You've been logged out!",
        });
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title: "Log out failed!",
        });
      });
  }
  return (
    <button
      onClick={handleLogout}
      className={`inline-flex items-center justify-center gap-2 text-sm tracking-wide text-white transition-colors duration-300 px-4 py-[6px] lg:px-6 lg:py-2 hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl rounded-md font-medium`}
    >
      Logout
    </button>
  );
};

export default LogOutButton;
