import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../components/isLoading/Loading";
import { FiRefreshCcw } from "react-icons/fi";
import SearchFieldForAuthorized from "../../../components/SearchFieldForAuthorized/SearchFieldForAuthorized";
import { Pagination } from "@mui/material";
import TableBody from "./manageAssetComponents/TableBody";
import { calculateNumberOfPages } from "../../../utils/Functions/Common/calculatePagination";
import FiterByNumPagination from "../SuperAdmin/manageUsersComponents/FilterByNumPagination";
import TableHead from "./manageAssetComponents/TableHead";
import { Helmet } from "react-helmet-async";
import {
  ByAdmin,
  designTemplateRootURL,
} from "../../../utils/Constants/decryptedApiConstants/apiURL";
import onSearchHandler from "./functions/onSearchHandler.js";

const ManageDesignTemplate = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchErrMessage, setSearchErrMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // clear cache
  queryClient.invalidateQueries({ queryKey: ["manage-design-template"] });
  const deleteAsset = (key, previewKey) => {
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
          .delete(
            `/${designTemplateRootURL}?key=${key}&previewKey=${previewKey}`
          )
          .then((res) => {
            if (res.data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Asset has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  // pagination handlers
  const handleChange = (event) => {
    setLimit(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageLimit, currentPage]);

  // function to search user in the database

  // fetch all user data from database
  const {
    data: allAsset = [],
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: [
      user?.email,
      "manage-design-template",
      searchTerm,
      currentPage,
      pageLimit,
    ],
    queryFn: async () => {
      let url = "";
      if (searchTerm) {
        url = `/${designTemplateRootURL}/${ByAdmin}?searchTerm=${searchTerm}&page=${currentPage}&limit=${pageLimit}`;
      } else {
        url = `/${designTemplateRootURL}/${ByAdmin}?page=${currentPage}&limit=${pageLimit}`;
      }
      const res = await axiosSecure.get(url);
      return res?.data;
    },
    // staleTime: 1000,
  });

  // click on search clear button beside search field
  const refreshHandler = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setLimit(10);
  };

  // show loading icon when fetching data
  if (isLoading || isPending) return <Loading isLoading={true} />;

  return (
    <div>
      <div className=" flex justify-end items-center gap-2">
        {/* render refresh button if there search term  */}
        <Helmet>
          <title>Design Template</title>
          <meta name="description" content="Design Template" />
        </Helmet>

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
      </div>

      <div className="w-full overflow-x-auto mt-10">
        <table
          className="w-full text-left border border-separate rounded-lg border-slate-200"
          cellSpacing="0"
        >
          {/* table head  */}
          <TableHead />
          {/* Table Body  */}
          <TableBody
            allAsset={allAsset}
            refetch={refetch}
            navigate={navigate}
            deleteAsset={deleteAsset}
          />
        </table>
      </div>

      {/* pagination 1, 2, 3  */}
      <div className=" pb-20 ">
        <div className=" flex justify-between items-center h-16 mt-2 rounded-md ">
          <Pagination
            color="error"
            count={calculateNumberOfPages(
              allAsset?.meta?.total,
              allAsset?.meta?.limit
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

export default ManageDesignTemplate;
