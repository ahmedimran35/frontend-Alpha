/**
 * This component renders a input field to take a file input.
 *
 * @param {function} register react hook function to register a input field
 * @param {string} title parameter name for register function
 * @param {string} label label of the input field
 * @param {string} extraClass classnames for adjusting css of the input field
 * @returns {ReactNode} input field for adding file.
 */
import PropTypes from "prop-types";
import {
  assetNaltClass,
  labelClass,
} from "../../../utils/Constants/InputFieldConstants/InputFieldConstants";
const InputFileField = ({
  register,
  title,
  label,
  extraClass = "",
  accept = "",
}) => {
  return (
    <>
      <input
        {...register(`${title}`)}
        type="file"
        accept={accept}
        placeholder="File"
        className={`h-14 py-4 ${assetNaltClass} ${extraClass}`}
      />
      <label className={labelClass}>{label}</label>
    </>
  );
};

InputFileField.propTypes = {
  register: PropTypes.func,
  title: PropTypes.string,
  extraClass: PropTypes.string,
  label: PropTypes.string,
  accept: PropTypes.string,
  allowedExtentions: PropTypes.array,
};

export default InputFileField;
