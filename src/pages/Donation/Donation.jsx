import { Helmet } from "react-helmet-async";
import H2Title from "../../components/Titles/H2Title";
import ScrollToTop from "../../components/ScrollToTheTop/ScrollToTheTop";
import Message from "./Message";
import { donationDiv } from "./DonationConst";
import DonationInput from "./DonationInput";




const Donation = () => {



  return (
    <div className="max-w-7xl mx-auto my-20">
      <Helmet>
        <title>Donate to YT Shops</title>
        <meta
          name="description"
          content="Your donation can keep this site free forever"
        />
      </Helmet>
      <H2Title baseText="Donate to" coloredText="YT Shops" />

      <ScrollToTop />
      <div className={donationDiv}>
        <Message />
        <DonationInput />
      </div>
    </div >
  );
};

export default Donation;

