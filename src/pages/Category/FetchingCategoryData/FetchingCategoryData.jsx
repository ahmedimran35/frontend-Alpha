import { NavLink } from "react-router-dom";
import useCategory from "../../../Hooks/useCategory";
import useResponsiveness from "../../../Hooks/useResponsiveness";
import CategoryLoading from "../../../components/isLoading/CategoryLoading";
import "./style.css";
import formatTextWithSpaces from "../../../utils/Functions/Common/formatTextWithSpaces";

const FetchingCategoryData = () => {
  const { isLaptopView, isDesktopView2, isMobileView } = useResponsiveness();

  const {
    categoryBasedDatas,
    isCategoryLoading,
    isCategoryFetching,
    category,
    loading,
  } = useCategory();

  if (isCategoryLoading || isCategoryFetching || loading) {
    return <CategoryLoading category={category} />;
  }

  return (
    <div
      className={` grid ${
        category === "icon"
          ? isDesktopView2
            ? "grid-cols-7 gap-6 w-fit"
            : isLaptopView
            ? "grid-cols-6 gap-1"
            : isMobileView
            ? "grid-cols-4 md:grid-cols-5 gap-5 md:gap-5"
            : "grid-cols-3 gap-10"
          : "grid-cols-1 md:grid-cols-3 gap-2"
      }  rounded-md   `}
    >
      {Array.isArray(categoryBasedDatas?.data) &&
        categoryBasedDatas?.data?.map((asset, i) => {
          const titleSlug = formatTextWithSpaces(asset?.title);
          const titleId = `${titleSlug}-${asset?._id}`;
          return (
            <NavLink
              to={`/category-data/${category}/${titleId}`}
              key={asset._id}
              data-test={`asset-${i}`}
              className={`${
                category === "icon" || asset?.category == "icon"
                  ? "rounded w-full h-full hover:drop-shadow shadow shadow-slate-200"
                  : "rounded-md w-fit hover:drop-shadow shadow shadow-slate-20"
              }  relative bg-white hover:shadow-lg h-fit flex justify-center items-center group mx-auto hover:cursor-pointer w-full `}
            >
              <img
                className={`${
                  category === "icon" || asset?.category == "icon"
                    ? isDesktopView2
                      ? "w-28 h-28 p-5 "
                      : "w-30 h-20 "
                    : "object-center w-full h-[250px] md:h-28 lg:w-72  lg:h-40   p-2 rounded-xl    "
                } ${isLaptopView ? "h-28 " : ""} rounded-md selector p-2  `}
                src={
                  asset?.type == "psd" || asset?.type == "pdf"
                    ? asset.previewUrl
                    : asset?.url
                }
                alt={asset?.alternativeText}
                loading={
                  category === "icon"
                    ? i > 27
                      ? "lazy"
                      : "eager"
                    : i > 8
                    ? "lazy"
                    : "eager"
                }
              />
              {category === "icon" ? (
                " "
              ) : (
                <p className="absolute w-fit px-1 py-[2px] m-1 bottom-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 text-white font-medium rounded-md">
                  {asset?.title}
                </p>
              )}
            </NavLink>
          );
        })}
    </div>
  );
};

export default FetchingCategoryData;
