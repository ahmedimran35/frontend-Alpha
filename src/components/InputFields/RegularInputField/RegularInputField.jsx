/**
 * This component renders a input field to take asset title, meta title, affilate URL in add asset form.
 * @param {function} register react hook function to register a input field
 * @param {string} title parameter name for register function
 * @param {string} label label of the input field
 * @param {object} regex regex for validation
 * @param {object} inputProps input props for our input field
 * @param {string} defaultValue default value of our input field
 * @returns {ReactNode} input field to take in text, number, url, altertive.
 */
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "../../css/border.css";
const RegularInputField = ({
  register,
  title,
  label,
  regex,
  type,
  defaultValue = "",
  inputProps = {},
  maxLength = 70,
  minLength = 5,
}) => {
  return (
    <TextField
      size="small"
      className="w-full customTextField"
      {...register(`${title}`, {
        required: true,
        pattern: {
          value: regex,
          message: `Invalid ${label} format`,
        },
        maxLength: {
          value: maxLength,
          message: `${label} cannot exceed ${maxLength} characters`,
        },
        minLength: {
          value: minLength,
          message: `${label} must have minimum ${minLength} characters`,
        },
      })}
      id={`${title}`}
      type={type}
      inputProps={inputProps}
      label={label}
      InputLabelProps={{ shrink: true }}
      variant="outlined"
      defaultValue={defaultValue}
      sx={{
        fieldset: { borderColor: "#cbd5e1" },
      }}
    />
  );
};

RegularInputField.propTypes = {
  register: PropTypes.func,
  title: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  regex: PropTypes.object,
  type: PropTypes.string,
  inputProps: PropTypes.object,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

export default RegularInputField;
