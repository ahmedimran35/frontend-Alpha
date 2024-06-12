/**
 * * A Component that renders Digital Enchanced Journey seciton of Homepage
 */
import { BsFillBoxSeamFill } from "react-icons/bs";
import { IoIosStopwatch } from "react-icons/io";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaFileZipper } from "react-icons/fa6";
import {
  title_1,
  title_2,
  title_3,
  title_4,
  description_1,
  description_2,
  description_3,
  description_4,
  sectionClasses,
} from "./WCUComponets/cardConstands";
import H2Title from "../../../components/Titles/H2Title";
import H3Title from "../../../components/Titles/H3Title";
import ChooseCard from "./WCUComponets/ChooseCard";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-10 max-w-7xl mx-auto">
      {/* title section  */}
      <H3Title text="Benefits"></H3Title>
      <H2Title baseText="Enjoy Your" coloredText="Creator Journey" />
      {/* cards section */}
      <section className={sectionClasses}>
        {/* first card  */}
        <ChooseCard Icon={BsFillBoxSeamFill} title={title_1} description={description_1}/>
        {/* second card  */}
        <ChooseCard Icon={IoIosStopwatch} title={title_2} description={description_2} />
        {/* third card  */}
        <ChooseCard Icon={RiLightbulbFlashFill} title={title_3} description={description_3} />
        {/* fourth card  */}
        <ChooseCard Icon={FaFileZipper} title={title_4} description={description_4} />
      </section>
    </section>
  );
};

export default WhyChooseUs;
