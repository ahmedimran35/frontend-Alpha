import Feedback from "../../../../components/Feedback/Feedback";
import H2Title from "../../../../components/Titles/H2Title";

const AdminFeedback = () => {
  return (
    <div >
      <H2Title
        baseText={"Feedback Request for"}
        coloredText={"Admin"}
      ></H2Title>
      <Feedback />
    </div>
  );
};

export default AdminFeedback;
