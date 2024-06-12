/**
 * This component renders a table that list all software and tools of the website for seo with pagination.
 *
 * @param {}
 * @returns {ReactNode} A React element that renders a table of all software and tools.
 */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../components/isLoading/Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { FiRefreshCcw } from "react-icons/fi";
import { calculateNumberOfPages } from "../../../utils/Functions/Common/calculatePagination";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SearchFieldForAuthorized from "../../../components/SearchFieldForAuthorized/SearchFieldForAuthorized";
import TableHead from "./ManageSoftwareToolsComponents/TableHead";
import TableBody from "./ManageSoftwareToolsComponents/TableBody";
import FiterByNumPagination from "../SuperAdmin/manageUsersComponents/FilterByNumPagination";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { softwareAndToolsRootURL } from "../../../utils/Constants/decryptedApiConstants/apiURL";
import onSearchHandler from "./functions/onSearchHandler";

const ManageSoftwareAndTools = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchErrMessage, setSearchErrMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const deleteSoftwareAndToolsHandler = (key) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#B2BEB5",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/${softwareAndToolsRootURL}?key=${key}`)
          .then((res) => {
            if (res.data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Software and Tools has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
      }
    });
  };

  // pagination functions
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

  // fetch all software and tools data from database
  const {
    data: allSoftwareAndTools = [],
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: [
      user?.email,
      "manageSoftwareAndTools",
      searchTerm,
      currentPage,
      pageLimit,
    ],
    queryFn: async () => {
      let url = "";
      if (searchTerm) {
        url = `/${softwareAndToolsRootURL}?searchTerm=${searchTerm}&page=${currentPage}&limit=${pageLimit}`;
      } else {
        url = `/${softwareAndToolsRootURL}?page=${currentPage}&limit=${pageLimit}`;
      }
      const res = await axiosPublic.get(url);

      return res?.data?.data;
    },
  });

  // show loading icon when fetching data
  if (isLoading || isPending) return <Loading isLoading={true} />;

  const refreshHandler = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setLimit(10);
  };

  return (
    <div className=" space-y-6 ">
      {/* add dynamic name and description for seo friendliness */}
      <Helmet>
        <title>Software And Tools</title>
        <meta name="description" content="Software And Tools" />
      </Helmet>
      {/* search input with refresh button  */}
      <div className=" flex justify-end items-center gap-2">
        {/* render button clears search term and search input field  */}
        <div className="flex">
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

        {/* link to add software and tools form  */}
      </div>

      <div className="w-full overflow-x-auto mt-2">
        <table
          className="w-full text-left border border-separate rounded-lg border-slate-200"
          cellSpacing="0"
        >
          {/* table head  */}
          <TableHead />
          {/* Table Body  */}
          <TableBody
            allSoftwareAndTools={allSoftwareAndTools}
            deleteSoftwareAndToolsHandler={deleteSoftwareAndToolsHandler}
            axiosPublic={axiosPublic}
            navigate={navigate}
          />
        </table>
      </div>

      {/* pagination 1, 2, 3  */}
      <div className=" pb-20 ">
        <div className=" flex    justify-between items-center h-16   mt-2  rounded-md ">
          <Pagination
            color="error"
            count={calculateNumberOfPages(
              allSoftwareAndTools?.meta?.total,
              allSoftwareAndTools?.meta?.limit
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

export default ManageSoftwareAndTools;
