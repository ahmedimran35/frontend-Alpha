import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill, RiEditBoxFill } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Loading from "../../../../components/isLoading/Loading";
import Swal from "sweetalert2";
import getReadableDate from "../../../../utils/dateFormate";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageImportantPages = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: allImportantPages = [],
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: [user?.email, "manage-important-pages"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/e51210ce250c2139111c7f61be481cc034f2b5c0fedbe3c5d8ff69949d04a936"
      );
      return res?.data?.data;
    },
  });
  if (isLoading || isPending) return <Loading isLoading={true} />;
  return (
    <div className=" space-y-6 mt-20">
      <Helmet>
        <title>Manage Important Pages</title>
        <meta name="description" content="Manage Important Pages" />
      </Helmet>

      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-separate rounded-lg border-slate-200"
          cellSpacing="0"
        >
          {/* table head  */}
          <TableHead />
          {/* Table Body  */}
          <TableBody
            allImportantPages={allImportantPages}
            isLoading={isLoading}
            isPending={isPending}
            refetch={refetch}
          />
        </table>
      </div>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className={` ${tableHeadingsStyle}  rounded-tl-lg`}>
          Page Name
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Category
        </th>
        <th scope="col" className={tableHeadingsStyle}>
          Created Date
        </th>

        <th scope="col" className={tableHeadingsStyle}>
          Last Update
        </th>
        <th scope="col" className={` ${tableHeadingsStyle}  rounded-tr-lg`}>
          Actions
        </th>
      </tr>
    </thead>
  );
};

const TableBody = ({ allImportantPages, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const deleteSoftwareAndToolsHandler = (id) => {
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
            `/e51210ce250c2139111c7f61be481cc034f2b5c0fedbe3c5d8ff69949d04a936/${id}`
          )
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

  return (
    <tbody>
      {allImportantPages &&
        // eslint-disable-next-line react/prop-types
        allImportantPages?.map((page) => (
          <tr key={page?._id}>
            <td className={tdStyle}>{page.pageName}</td>

            <td className={tdStyle}>{page?.category}</td>
            <td className={tdStyle}>{getReadableDate(page?.createdAt)}</td>
            <td className={tdStyle}>{getReadableDate(page?.updatedAt)}</td>

            <td className={tdStyle}>
              <div className="flex items-center justify-around  hover:cursor-pointer">
                <div>
                  <RiEditBoxFill
                    onClick={() =>
                      navigate(
                        `/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/88c60f426f5387f8fb84bf04132ef7aec5ff8843a2dc7de2d83fa968c7826133/${page?._id}`
                      )
                    }
                    className="text-xl transition-colors duration-300 hover:text-green-400"
                  />
                </div>
                <div onClick={() => deleteSoftwareAndToolsHandler(page?._id)}>
                  <RiDeleteBin6Fill className="text-xl transition-colors duration-300 hover:text-[#ff0000]" />
                </div>
              </div>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

TableBody.propTypes = {
  allImportantPages: PropTypes.array,
  refetch: PropTypes.func,
};

const tdStyle =
  "h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200";
const tableHeadingsStyle =
  "h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-white bg-[#ff0000]";

export default ManageImportantPages;
