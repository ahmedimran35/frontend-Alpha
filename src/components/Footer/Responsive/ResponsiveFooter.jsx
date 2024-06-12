import ResInformation from "./responsiveComponents/ResInformation";
import ResLegal from "./responsiveComponents/ResLegal";
import ResSocialMedia from "./responsiveComponents/ResSocialMedia";
import ResSupportLinks from "./responsiveComponents/ResSupportLinks";
import ResCopyRightedText from "./responsiveComponents/ResCopyRightedText";
import useImportantPageData from "../../../Hooks/useImportantPageData";
import DescriptionOfFooter from "../DescriptionOfFooter";

const ResponsiveFooter = () => {
  const currentYear = new Date().getFullYear();
  const { informationPages, legalPages, supportPages } = useImportantPageData();

  return (
    <>
      <footer className="w-full rounded bg-black shadow-md">
        <DescriptionOfFooter />
        <ResInformation informationPages={informationPages} />
        <ResLegal legalPages={legalPages} />
        <ResSupportLinks supportPages={supportPages} />
        <ResSocialMedia />
        <ResCopyRightedText currentYear={currentYear} />
      </footer>
    </>
  );
};

export default ResponsiveFooter;
