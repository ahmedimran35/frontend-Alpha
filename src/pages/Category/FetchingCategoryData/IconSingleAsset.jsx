/* eslint-disable no-unused-vars */
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
  downloadRootURL,
  iconRootURL,
  imageDownload,
} from "../../../utils/Constants/decryptedApiConstants/apiURL";
import {
  buttonClass,
  donateClass,
} from "../../../utils/Constants/FetchingCategoryData/IconSingleAssetConstant";
import DisableContextMenu from "../../../components/DisableRightClick/DisableContextMenu";
import downloadHandler from "../../../utils/Functions/Downloads/downloadHandler";
import {
  downloadAssetAPIcall,
  isDownloadExitsAssetAPIcall,
} from "../../../utils/APIs/downloadAssetAPIs/downloadAssetAPIs";
import { handleDownloadResponse } from "../../../utils/Functions/Downloads/assetDownloadHandle";
import UploadLoading from "../../../components/isLoading/UploadLoading";

const CategoryIConSingleAsset = () => {
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
        `${iconRootURL}/details-check-by-user/${assetId}`
      );
      return res?.data?.data;
    },
    staleTime: 600000, // Refetch data after 10 minute of inactivity
  });

  const iconFIleDownloadHandler = async (key, originalFileName) => {
    try {
      setLoading(true);
      const bucketName = "icons";
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
      // console.log(error);
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
        <div className="my-10 ml-10">
          <BackArrowComponent />
        </div>
        <div className="flex flex-col md:items-center  lg:flex-row items-center lg:items-start      justify-center gap-4 lg:gap-8 my-10 mx-2">
          <div className="w-[250px] md:w-fit">
            <img
              className={` w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[480px]
               rounded-md selector object-center `}
              src={assetDetail?.url}
              alt={assetDetail?.alternativeText}
              draggable={false}
            />
          </div>
          <div
            className={`w-[250px] md:w-[350px] h-fit border px-4 py-2 md:py-7
           rounded-md sticky top-2 space-y-2`}
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
                  <UploadLoading />
                ) : (
                  <button
                    onClick={() =>
                      iconFIleDownloadHandler(
                        assetDetail?.key,
                        assetDetail?.title
                      )
                    }
                    disabled={loading}
                    className={buttonClass}
                  >
                    Download
                  </button>
                )}

                <Link to={`/donate`}>
                  <button className={donateClass}>Donate</button>
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

export default CategoryIConSingleAsset;
