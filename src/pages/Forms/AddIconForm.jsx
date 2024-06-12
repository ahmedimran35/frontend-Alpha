import IconTab from "../../components/ui/IconTab";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const AddIconForm = ({ files, setFiles }) => {
  return (
    <div className=" min-h-screen py-10  ">
      <Helmet>
        <title>Add Icon</title>
      </Helmet>

      <div className="mt-10 flex justify-center">
        <IconTab files={files} setFiles={setFiles} />
      </div>
    </div>
  );
};

AddIconForm.propTypes = {
  files: PropTypes.any,
  setFiles: PropTypes.func,
};

export default AddIconForm;
