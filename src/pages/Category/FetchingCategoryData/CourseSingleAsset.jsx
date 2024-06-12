import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../components/isLoading/Loading";
import { Helmet } from "react-helmet-async";
import "./style.css";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SignInButton from "../../../components/buttons/SignInButton/SignInButton";
import SmallLoading from "../../../components/isLoading/SmallLoading";
import ScrollToTop from "../../../components/ScrollToTheTop/ScrollToTheTop";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";
import {
  courseAndLearningRootURL,
  // downloadRootURL,
} from "../../../utils/Constants/decryptedApiConstants/apiURL";
import DisableContextMenu from "../../../components/DisableRightClick/DisableContextMenu";
// import downloadZipFile from "../../../utils/Functions/Downloads/zipDownloadHandler";
import {
  downloadAssetAPIcall,
  isDownloadExitsAssetAPIcall,
} from "../../../utils/APIs/downloadAssetAPIs/downloadAssetAPIs";
import { handleDownloadResponse } from "../../../utils/Functions/Downloads/assetDownloadHandle";
import Swal from "sweetalert2";
import DownloadLoading from "../../../components/isLoading/DownloadLoading";

const CourseSingleAsset = () => {
  const { titleId } = useParams();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const splittedSlug = titleId?.split("-");
  const { user, loading: userLoading } = useAuth();
  const assetId = splittedSlug[splittedSlug.length - 1];

  const {
    data: assetDetail = {},
    isLoading,
    isPending,
  } = useQuery({
    queryKey: [titleId, "assetDetail"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `${courseAndLearningRootURL}/details-check-by-user/${assetId}`
      );
      return res?.data?.data;
    },
    staleTime: 10000, // Refetch data after 1 minute of inactivity
  });

  // const category = "courses-and-learning";

  const coursesAndLearningFileDownloadHandler = async (
    key,
    originalFileName
  ) => {
    try {
      setLoading(true);

      const bucketName = "course-and-learning";
      const downloadInfo = {
        assets: assetId,
        userEmail: user?.email,
        bucketName,
        setLoading,
      };

      const result = await isDownloadExitsAssetAPIcall(downloadInfo);

      if (result?.status == 200) {
        const response = await downloadAssetAPIcall(key, bucketName);
        if (response) {
          setLoading(false);
          handleDownloadResponse(response, originalFileName);
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: `${
          error?.response?.data?.message !== "undefine"
            ? error?.response?.data?.message
            : "Something Is Wrong"
        }`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
    }
  };

  if (isLoading || isPending) return <Loading isLoading={true} />;

  return (
    <DisableContextMenu>
      <main className="max-w-7xl mx-auto min-h-fit ">
        <Helmet>
          <title>{assetDetail?.metaTitle}</title>
          <meta name="description" content={assetDetail?.metaDescription} />
        </Helmet>
        <ScrollToTop />
        <div className={`my-10 ml-10`}>
          <BackArrowComponent />
        </div>
        <div
          className={`flex  ${
            assetDetail?.category === "icon"
              ? "flex-col md:items-center  lg:flex-row"
              : "flex-col md:flex-row"
          } items-center lg:items-start md:items-start  justify-center gap-4 lg:gap-8 my-10 mx-2 `}
        >
          <div
            className={` ${
              assetDetail?.category === "icon"
                ? "w-[250px] md:w-fit"
                : "w-[80%] md:w-[1200px]"
            } `}
          >
            <img
              className={` ${
                assetDetail?.category === "icon"
                  ? "w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[480px]"
                  : "w-full lg:w-[920px] h-full lg:h-[517.5px] "
              } rounded-md selector object-center`}
              src={
                assetDetail.type == "psd" || assetDetail.type == "pdf"
                  ? assetDetail.previewUrl
                  : assetDetail?.url
              }
              alt={assetDetail?.alternativeText}
              draggable={false}
            />
          </div>
          <div
            className={` ${
              assetDetail?.category === "icon"
                ? "w-[250px] md:w-[350px] h-fit border px-4 py-2 md:py-7"
                : "w-[80%] md:w-[400px] h-fit border px-4 py-2 md:py-7 "
            } rounded-md sticky top-2 space-y-2 `}
          >
            <h3 className="text-lg md:text-xl lg:text-3xl font-semibold">
              {assetDetail?.title}
            </h3>
            <p className="text-xs lg:text-sm text-justify ">
              {assetDetail?.description}
            </p>
            <div className="flex gap-2 pb-3">
              {Object.values(assetDetail?.tags)?.map((tag) => (
                <p
                  key={tag}
                  className="bg-gray-200 px-1 py-[2px] rounded-md text-xs"
                >
                  {tag}
                </p>
              ))}
            </div>

            {/* {userLoading? "Loading": "Done"} */}
            {userLoading ? (
              <SmallLoading />
            ) : user?.email ? (
              <div className="flex flex-row gap-2 mt-5">
                 {loading ? (
                  <DownloadLoading />
                ) : (
                  <button
                    onClick={() =>
                      coursesAndLearningFileDownloadHandler(
                        assetDetail.key,
                        assetDetail?.title
                      )
                    }
                    disabled={loading}
                    className="inline-flex items-center justify-center px-2 py-1 md:px-4 md:py-[10px] text-xs md:text-[12px] lg:text-[15px] font-medium tracking-wide text-white border transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:shadow-2xl hover:bg-white hover:text-[#f00] hover:border-[#f00] uppercase hover:cursor-pointer min-w-32 min-h-fit"
                  >
                    Download
                  </button>
                )}

                <Link to={`/donate`}>
                  <button className="inline-flex items-center justify-center px-2 py-1 md:px-4 md:py-[10px] text-xs md:text-[12px] lg:text-[15px] font-medium tracking-wide text-[#ff0000] hover:text-white transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap border border-[#ff0000] bg-white hover:bg-[#ff0000] hover:shadow-2xl uppercase hover:cursor-pointer">
                    Donate
                  </button>
                </Link>
              </div>
            ) : (
              <div className=" p-2 border border-[#ff0000] rounded-md shadow shadow-[#ff0000]  space-y-3">
                <h4 className=" text-center font-semibold text-[#ff0000]">
                  Sign-in required
                </h4>
                <p className="text-sm">
                  Think this icon is perfect? Sign up for an account to download
                  it - it&apos;s super easy!
                </p>
                <div className=" text-center" data-test="signInSmall">
                  <SignInButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </DisableContextMenu>
  );
};

export default CourseSingleAsset;
