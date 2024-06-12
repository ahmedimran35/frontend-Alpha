/**
 * * A component that renders a card based on icon, text and description provided.
 */
import PropTypes from "prop-types"
import { parentDivClass } from "./cardConstands";
const ChooseCard = ({Icon, title, description }) => {
  return (
    <div className={parentDivClass}>
      <Icon className="text-4xl text-[#ff0000]" />
      <h3 className="text-lg md:text-xl font-[500] h-5" data-test="card-heading-1">
        {title}
      </h3>
      <p
        className="text-gray-600 text-sm text-justify tracking-tight"
        data-test="card-para-1"
      >
        {description}
      </p>
    </div>
  );
};

ChooseCard.propTypes = {
  Icon: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string
}

export default ChooseCard;
