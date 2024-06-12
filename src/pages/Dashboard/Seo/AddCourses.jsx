import { Helmet } from "react-helmet-async";
import AddCoursesForm from "../../Forms/AddCoursesForm";
import H2Title from "../../../components/Titles/H2Title";
import BackArrowComponent from "../../../components/BackArrowComponent/BackArrowComponent";

const AddIconForm = () => {
  return (
    <div className=" min-h-screen max-w-3xl mx-auto py-10  ">
      <Helmet>
        <title>Add Courses</title>
      </Helmet>

      <div className="flex justify-start max-w-3xl mx-auto my-5 w-full">
        <BackArrowComponent />
      </div>

      <H2Title baseText={"Add"} coloredText={"Courses"} />

      <AddCoursesForm />
    </div>
  );
};

export default AddIconForm;
