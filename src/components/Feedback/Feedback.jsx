import FeedbackTableBody from "./FeedbackTableBody";
import FeedbackTableHead from "./FeedbackTableHead";

const Feedback = () => {
  return (
    <div className="space-y-6 mt-12">
      <FeedbackTableHead />
      <FeedbackTableBody />
    </div>
  );
};

export default Feedback;
