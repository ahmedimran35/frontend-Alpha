import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SignInButton from "../../../components/buttons/SignInButton/SignInButton";
import useAuth from "../../../Hooks/useAuth";
import SmallLoading from "../../../components/isLoading/SmallLoading";
import parse from "html-react-parser";
import "./briefDescriptionStyle.css";
import { Helmet } from "react-helmet-async";
import Loading from "../../../components/isLoading/Loading";
import ScrollToTop from "../../../components/ScrollToTheTop/ScrollToTheTop";
import "./style.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";
import formatTextWithSpaces from "../../../utils/Functions/Common/formatTextWithSpaces";
import getLastId from "../functionsForCategory/getLastId";
import { softwareAndToolsRootURL } from "../../../utils/Constants/decryptedApiConstants/apiURL";
import DisableContextMenu from "../../../components/DisableRightClick/DisableContextMenu";

const SingleSoftwareAndTools = () => {
  const { user, loading: userLoading } = useAuth();
  const { titleId } = useParams();
  const splittedSlug = formatTextWithSpaces(titleId);

  const softwareToolsID = getLastId(splittedSlug);

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    data: singleSoftwareTools = {},
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["single Software", titleId],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/${softwareAndToolsRootURL}/${softwareToolsID}`
      );
      return res?.data?.data;
    },
    staleTime: 60000, // Refetch data after 1 minute of inactivity
  });

  if (isLoading || isPending) return <Loading isLoading={true} />;

  const calculateUserPartnerWebSiteVisitedHandler = async () => {
    try {
      await axiosSecure.post(
        `/${softwareAndToolsRootURL}/visited-partner/${softwareToolsID}`
      );
    } catch (error) {
      // console.error(error);
      Swal.fire({
        title: ` Something Went Wrong.`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0000",
      });
    }
  };
  const loadedBriefDescription = singleSoftwareTools?.briefDescription || "";

  return (
    <DisableContextMenu>
      <div className="max-w-7xl mx-auto my-10">
        <Helmet>
          <title>{singleSoftwareTools?.metaTitle}</title>
          <meta
            name="description"
            content={singleSoftwareTools?.metaDescription}
          />
        </Helmet>
        <ScrollToTop />
        <div className={`my-10 ml-10`}>
          <BackArrowComponent />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-between my-10 px-10 gap-10">
        <div className="lg:w-[62%]">
          <img
            className="w-fit h-fit rounded-md selector"
            src={singleSoftwareTools?.url}
            alt="affiliated software"
            draggable={false}
          />
          <div className=" py-5 px-1 mt-3 ">
            <div className="blog-post">{parse(loadedBriefDescription)}</div>
          </div>
        </div>
        <div className="lg:w-[34%] border px-4 py-2 rounded-md lg:sticky top-2">
          <h3 className="text-lg md:text-xl lg:text-3xl  font-semibold my-5">
            {singleSoftwareTools?.title}
          </h3>
          <p className="mb-2 text-xs lg:text-sm text-justify ">
            {singleSoftwareTools?.description}
          </p>
          {singleSoftwareTools?.pricing === "Freemium" ||
            singleSoftwareTools?.pricing === "Paid" ? (
            <>
              <div className="flex flex-row justify-start items-center gap-2 mt-3">
                <p className="text-[#ff0000] text-lg font-semibold">
                  {parseInt(singleSoftwareTools?.discountPercentage)}%
                </p>{" "}
                <p className="text-lg font-semibold">
                  {" "}
                  ${singleSoftwareTools?.discountPrice}
                </p>
                <br />
              </div>
              <p className="text-sm">
                <s> ${singleSoftwareTools?.regularPrice}</s>
              </p>
            </>
          ) : (
            <p className="flex flex-row justify-center items-center text-lg font-semibold my-3">
              Free
            </p>
          )}
          {userLoading ? (
            <SmallLoading />
          ) : user ? (
            <div className=" flex items-center gap-3 justify-center mt-5 mb-3">
              <button
                onClick={() => calculateUserPartnerWebSiteVisitedHandler()}
                className=" w-fit "
              >
                <a
                  href={singleSoftwareTools?.affiliateURL}
                  target="blank"
                  className="inline-flex items-center justify-center px-3 py-2 md:px-4 md:py-[10px] text-xs md:text-[12px] lg:text-[15px] font-medium tracking-wide text-white transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap bg-[#ff0000] hover:bg-[#C21807] hover:shadow-2xl uppercase hover:cursor-pointer"
                >
                  Get now
                </a>
              </button>

              <Link to={`/donate`}>
                <button className="inline-flex items-center justify-center px-2 py-1 md:px-4 md:py-[10px] text-xs md:text-[12px] lg:text-[15px] font-medium tracking-wide text-[#ff0000] hover:text-white transition duration-300 rounded-lg hover-visible:outline-none whitespace-nowrap border border-[#ff0000] bg-white hover:bg-[#ff0000] hover:shadow-2xl uppercase hover:cursor-pointer">
                  Donate
                </button>
              </Link>
            </div>
          ) : (
            <div className=" p-2 border border-[#ff0000] rounded-md shadow shadow-[#ff0000]  space-y-3 my-3">
              <h4 className=" text-center font-semibold text-[#ff0000]">
                Sign-in required
              </h4>
              <p className="text-sm">
                Think this is perfect? Sign up for an account to download it -
                it&apos;s super easy!
              </p>
              <div className=" text-center">
                <SignInButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </DisableContextMenu>
  );
};

export default SingleSoftwareAndTools;
