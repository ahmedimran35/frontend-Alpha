import MainTitle from "./bannerComponents/MainTitle";
import SubText from "./bannerComponents/SubText";
import DonateText from "./bannerComponents/DonateText";
import DonateButton from "../../../components/buttons/DonateButton/DonateButton";
import NewBannerSearch from "./bannerComponents/NewBannerSearch";

const BannerSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col justify-center items-center text-center gap-8 my-20 md:my-32 lg:my-40">
        <SubText />
        <MainTitle />
        <NewBannerSearch />
        <DonateButton />
        <DonateText />
      </div>
    </div>
  );
};

export default BannerSection;
