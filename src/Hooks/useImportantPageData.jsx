import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { importantPageRootURL } from "../utils/Constants/decryptedApiConstants/apiURL";

const useImportantPageData = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allImportantPage = [],
    isTestLoading,
    isTestPending,
  } = useQuery({
    queryKey: ["important-page"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/${importantPageRootURL}`);
      return res?.data?.data;
    },
    staleTime: 10000, // Refetch data after 1 minute of inactivity
  });

  const informationPages = allImportantPage.filter(
    (page) => page.category == "Information"
  );
  const legalPages = allImportantPage.filter(
    (page) => page.category == "Legal"
  );
  const supportPages = allImportantPage.filter(
    (page) => page.category == "Support"
  );

  return {
    allImportantPage,
    isTestLoading,
    isTestPending,
    informationPages,
    legalPages,
    supportPages,
  };
};

export default useImportantPageData;
