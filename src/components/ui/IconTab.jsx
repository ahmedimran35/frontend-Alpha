import { useState } from "react";
import AddBulkIconForm from "../../pages/Forms/AddBulkIconFrom";
import SingleIconUploadForm from "../../pages/Forms/SingleIconUpload";
import PropTypes from "prop-types";
const IconTab = ({ files, setFiles }) => {
  const [tab, setTab] = useState(false);

  return (
    <div>
      <div className="w-80  border  h-14  rounded-xl flex gap-3 p-2  ">
        <div
          className={`w-full    flex justify-center item-center flex-1 rounded-xl ${
            tab == false ? "bg-red-500 text-white" : "text-gray-800 "
          } `}
        >
          <button onClick={() => setTab(false)}>Single Upload</button>
        </div>
        <div
          className={`w-full    flex justify-center item-center flex-1 rounded-xl ${
            tab ? "bg-red-500 text-white" : " text-gray-800"
          } `}
        >
          <button onClick={() => setTab(true)}>Bulk Upload</button>
        </div>
      </div>
      {/*  Tab ------------ */}
      {tab ? (
        <div>
          <AddBulkIconForm files={files} setFiles={setFiles} />
        </div>
      ) : (
        <div>
          <SingleIconUploadForm />
        </div>
      )}
    </div>
  );
};
IconTab.propTypes = {
  files: PropTypes.array,
  setFiles: PropTypes.func,
};

export default IconTab;
