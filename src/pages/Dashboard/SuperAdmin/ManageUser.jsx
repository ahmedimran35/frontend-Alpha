/**
 * This component renders a table that list all users of the website for admin with pagination.
 *
 * @param {}
 * @returns {ReactNode} A React element that renders a table of all users.
 */
// import necessary packages
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../components/isLoading/Loading";
import H2Title from "../../../components/Titles/H2Title";
import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { Pagination } from "@mui/material";
import { calculateNumberOfPages } from "../../../utils/Functions/Common/calculatePagination";
import TableHead from "./manageUsersComponents/TableHead";
import TableBody from "./manageUsersComponents/TableBody";
import FiterByNumPagination from "./manageUsersComponents/FilterByNumPagination";
import SearchFieldForAuthorized from "../../../components/SearchFieldForAuthorized/SearchFieldForAuthorized";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import onSearchHandler from "../Seo/functions/onSearchHandler";

const ManageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchErrMessage, setSearchErrMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // pagination handlers
  const handleChange = (event) => {
    setLimit(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // scroll to the top when changing filter for pagination, or change page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageLimit, currentPage]);

  // call when refresh button beside search is clicking
  const refreshHandler = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setLimit(10);
  };

  // fetch all user data from database
  const {
    data: allUser = [],
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "manageUser", searchTerm, currentPage, pageLimit],
    queryFn: async () => {
      let url = "";

      if (searchTerm) {
        url = `/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/b8d83be4fc78fce383da7f87661bbf94c5382a40582ac0467e22e8eda492629b?searchTerm=${searchTerm}&page=${currentPage}&limit=${pageLimit}`;
      } else {
        url = `/04f8996da763b7a969b1028ee3007569eaf3a635486ddab211d512c85b9df8fb/b8d83be4fc78fce383da7f87661bbf94c5382a40582ac0467e22e8eda492629b?page=${currentPage}&limit=${pageLimit}`;
      }
      const res = await axiosSecure.get(url);
      return res?.data;
    },
    staleTime: 10000, // Refetch data after 1 minute of inactivity
  });

  // function to search user in the database
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const searchTerm = form.get("searchTerm");
  //   setSearchTerm(searchTerm);
  // };

  // show loading icon
  if (isLoading || isPending) return <Loading isLoading={true} />;

  // return the react node
  return (
    <div className="space-y-6 mt-12">
      <H2Title baseText={"Manage"} coloredText={"Users"}></H2Title>
      {/* Table  of users with search bar */}
      {/* search input with refresh button  */}

      {/* render button clears search term and search input field  */}
      <div className="flex justify-end gap-2">
        {searchTerm && (
          <>
            <button
              onClick={refreshHandler}
              className="text-red-500 text-xl px-4 border h-full py-2 rounded-md cursor-pointer"
            >
              <FiRefreshCcw />
            </button>
            <SearchFieldForAuthorized
              onSubmitHandler={(e) =>
                onSearchHandler(e, setSearchErrMessage, setSearchTerm)
              }
              searchTerm={searchTerm}
              searchErrMessage={searchErrMessage}
            ></SearchFieldForAuthorized>
          </>
        )}
        {searchTerm === "" && (
          <>
            <SearchFieldForAuthorized
              onSubmitHandler={(e) =>
                onSearchHandler(e, setSearchErrMessage, setSearchTerm)
              }
              searchTerm={searchTerm}
              searchErrMessage={searchErrMessage}
            ></SearchFieldForAuthorized>
          </>
        )}
      </div>

      {/* Users Table  */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-separate rounded-lg border-slate-200"
          cellSpacing="0"
        >
          {/* table head  */}
          <TableHead />
          {/* Table Body  */}
          <TableBody allUser={allUser} refetch={refetch} />
        </table>
      </div>

      {/* pagination 1, 2, 3  */}
      <div className=" pb-20 ">
        <div className=" flex justify-between items-center h-16   mt-2  rounded-md ">
          <Pagination
            color="error"
            count={calculateNumberOfPages(
              allUser?.meta?.total,
              allUser?.meta?.limit
            )}
            onChange={handlePageChange}
            page={currentPage}
            variant="outlined"
            shape="rounded"
          />
          {/* filter: number of users shown in one page */}
          <FiterByNumPagination
            pageLimit={pageLimit}
            handleChange={handleChange}
          ></FiterByNumPagination>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
