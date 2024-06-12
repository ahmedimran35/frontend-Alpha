import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { backarrow } from "../../../utils/Constants/Common/CommonConst";
import H2Title from "../../../components/Titles/H2Title";
import AddStockPhotosForm from "../../Forms/AddStockPhotosForm";

const AddStockPhotos = () => {
  return (
    <div className=" rounded-lg flex flex-col items-center justify-center space-y-5">
      <Helmet>
        <title>Add Stock Photos</title>
      </Helmet>

      <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">
        <Link
          to="/cf44bf790dc91eba457118f0cafd54bb980ebaeab506e0dc72a32c3eb5dc6c02/46bade64727b5046da39635eea8448e552d31d9009829b919ffc96e65847fc88"
          className="flex justify-start items-center "
        >
          <FaArrowLeft className={backarrow} />
        </Link>
      </div>

      <H2Title baseText={"Add"} coloredText={"Stock Photos"}></H2Title>

      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pb-16 ">
        <AddStockPhotosForm />
      </div>
    </div>
  );
};

export default AddStockPhotos;
