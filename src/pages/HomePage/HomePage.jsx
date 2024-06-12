import BannerSection from "./BannerSection/BannerSection";
import BrowseAllSection from "./BrowseAllSection/BrowseAllSection";
import TopCategories from "./TopCategories/TopCategories";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const HomePage = () => {

  return (
    <main>
      <BannerSection />
      <TopCategories />
      <BrowseAllSection />
      <WhyChooseUs />
    </main>
  );
};

export default HomePage;
