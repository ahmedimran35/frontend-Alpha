import { Helmet } from "react-helmet-async";
import UpdateDesignTemplateForm from "../../Forms/UpdateDesignTemplateForm";
import H2Title from "../../../components/Titles/H2Title";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";

const UpdateDesignTemplate = () => {
  return (
    <section className=" rounded-lg flex flex-col items-center justify-center space-y-5">
      <Helmet>
        <title>Update Design Template</title>
      </Helmet>

      <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">      
        <BackArrowComponent/>
      </div>
      
      <H2Title baseText={"Update"} coloredText={"Design Template"}></H2Title>

      {/* form  */}
      <div className="flex flex-row justify-center bg-white md:w-[750px] lg:w-[800px] mx-auto pb-16 ">
        <UpdateDesignTemplateForm />
      </div>
    </section>
  );
};

export default UpdateDesignTemplate;
