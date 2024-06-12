/**
 * This component renders body part of a table where all users are shown to admin.
 *
 * @param {}
 * @returns {ReactNode} A React element that renders body of a table for all users.
 */
import PropTypes from "prop-types";
import { tdStyle } from "../../../../constants/dashboardTableConstants";
import { FormControl, MenuItem, Select } from "@mui/material";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { Toast } from "../../../../constants/toast";
const TableBody = ({ allUser, refetch }) => {
  const [newRole, setNewRole] = useState(null);
  const [previousRole, setPreviousRole] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const axiosSecure = useAxiosSecure();
  const handleChange = (event, email, currentRole) => {
    const selectedValue = event.target.value;
    setSelectedEmail(email);
    setPreviousRole(currentRole);
    setNewRole(selectedValue);
  };

  const handlerRoleChange = (email, previousRole, role) => {
    if (previousRole === role) {
      return false;
    }
    axiosSecure
      .patch(`/auth/authorization/${email}`, { role: role })
      .then((res) => {
        if (res?.data?.success) {
          Toast.fire({
            icon: "success",
            html: `${email}'s <br> Role Has been updated To ${
              role ===
              "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47"
                ? "Admin"
                : role ===
                  "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467"
                ? "SEO"
                : "User"
            }`,
          });
          refetch();
          setNewRole(null);
        }
      });
  };
  return (
    <tbody>
      {allUser &&
        allUser?.data?.map((normaluser) => (
          <tr key={normaluser._id}>
            <td className={tdStyle}>{normaluser?.name}</td>
            <td className={tdStyle}>{normaluser?.username}</td>
            <td className={tdStyle}>{normaluser?.email}</td>
            <td
              className={`${tdStyle} font-bold ${
                normaluser?.role ===
                "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47"
                  ? "text-[#ff0000]"
                  : normaluser?.role ===
                    "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467"
                  ? "text-green-600"
                  : "text-blue-600"
              }`}
            >
              {normaluser?.role ===
              "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47"
                ? "Admin"
                : normaluser?.role ===
                  "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467"
                ? "SEO"
                : "User"}
            </td>

            <td className={tdStyle}>
              <div className="">
                <div className=" flex  flex-row-reverse  justify-around items-center">
                  {/* <ArrowDropDownIcon /> */}
                  <div>
                    <button
                      disabled={newRole == null || newRole === previousRole}
                      className={`${
                        selectedEmail === normaluser?.email &&
                        newRole !== previousRole &&
                        newRole !== null
                          ? " bg-[#ff0000]"
                          : "bg-gray-300 "
                      } text-white px-4 rounded-xl`}
                      onClick={() =>
                        handlerRoleChange(
                          normaluser?.email,
                          normaluser?.role,
                          newRole
                        )
                      }
                    >
                      Click To Change
                    </button>
                  </div>
                  <div>
                    <FormControl
                      sx={{
                        "& .MuiSelect-root": { color: "#ff0000" },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ff0000",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ff0000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ff0000",
                        },
                      }}
                    >
                      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                      <div className=" flex flex-row-reverse  justify-between items-center gap2">
                        <Select
                          className="w-48"
                          sx={{
                            width: 100,
                          }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          size="small"
                          // label="Age"
                          defaultValue={""}
                          onChange={(event) =>
                            handleChange(
                              event,
                              normaluser?.email,
                              normaluser?.role
                            )
                          }
                          // onClick={() => roleChangeHandler(normaluser?.email , newRole)}
                        >
                          <MenuItem
                            value={
                              "b881ec7dbd1a2d9c99dda3627cd7a03c6371f0f5df25b516fcee1834cd606b41"
                            }
                          >
                            User
                          </MenuItem>
                          <MenuItem
                            value={
                              "864910b487ac2b8247e708b993c929c8dc248f78c18afbcf89efab2f2ec99f47"
                            }
                          >
                            Admin
                          </MenuItem>
                          <MenuItem
                            value={
                              "71e3fbabd25ad65e984a05f178e7e02564fae80001bf6acd89b1e4c96ad3c467"
                            }
                          >
                            SEO
                          </MenuItem>
                        </Select>
                      </div>
                    </FormControl>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

TableBody.propTypes = {
  allUser: PropTypes.object,
  refetch: PropTypes.func,
};

export default TableBody;
