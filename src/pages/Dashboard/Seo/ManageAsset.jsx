/**
 * This component renders a table that list all assets of the website for seo with pagination.
 *
 * @param {}
 * @returns {ReactNode} A React element that renders a table of all assets.
 */

import { Helmet } from "react-helmet-async";
import ManageAssetTab from "../../../components/ui/ManageAssetTab";
import H2Title from "../../../components/Titles/H2Title";

const ManageAsset = () => {
  return (
    <div className=" max-w-7xl mx-auto space-y-6 mt-20">
      {/* add dynamic name and tags */}
      <Helmet>
        <title>Manage Asset</title>
        <meta name="description" content="Manage the asset" />
      </Helmet>

      {/* Page Heading  */}
      <H2Title baseText={"Manage"} coloredText={"Assets"}></H2Title>
      {/* Tab */}
      <div className=" pt-5 ">
        <ManageAssetTab />
      </div>
    </div>
  );
};

export default ManageAsset;
