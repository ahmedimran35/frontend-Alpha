import { Helmet } from "react-helmet-async";
import BackArrowComponent from "../../../../components/BackArrowComponent/BackArrowComponent";
import H2Title from "../../../../components/Titles/H2Title";
import AddIconForm from "../../../Forms/AddIconForm";
import { useState } from "react";

import ConfirmArrowComponent from "../../../../components/BackArrowComponent/ConfirmArrowComponent";
const AddIcon = () => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <Helmet>
        <title>Add Icon</title>
      </Helmet>
      <div className="flex justify-start max-w-3xl mx-auto mt-12 w-full ">
        {!files.length ? (
          <BackArrowComponent />
        ) : (
          <ConfirmArrowComponent files={files} setFiles={files} />
        )}
      </div>

      <H2Title baseText={"Add"} coloredText={"Icon"}></H2Title>
      <AddIconForm files={files} setFiles={setFiles} />
    </div>
  );
};

export default AddIcon;
