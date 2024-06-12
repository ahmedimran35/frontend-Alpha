import { useParams } from "react-router-dom";
import UpdateIconForm from "../../../Forms/UpdateIconForm";
import H2Title from "../../../../components/Titles/H2Title";
import { Helmet } from "react-helmet-async";
import BackArrowComponent from "../../../../components/BackArrowComponent/BackArrowComponent";

const UpdateIcon = () => {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Update Design Template</title>
      </Helmet>
      <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">
        <BackArrowComponent />
      </div>
      <H2Title baseText={"Update"} coloredText={"Icon"} />
      <UpdateIconForm id={id} />
    </div>
  );
};

export default UpdateIcon;
