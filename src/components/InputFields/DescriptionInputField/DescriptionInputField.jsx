/**
 * This component renders a input field to take description text.
 * @param {function} register react hook function to register a input field
 * @param {string} title parameter name for register function
 * @param {string} label label of the input field
 * @param {string} defaultValue default value of our input field
 * @returns {ReactNode} input field for adding description input.
 */
import PropTypes from "prop-types";
import { textAreaClass } from "../../../utils/Constants/InputFieldConstants/InputFieldConstants";
import { TextField } from "@mui/material";
import "../../css/border.css";

const DescriptionInputField = ({
  register,
  title,
  label,
  defaultValue = "",
  maxLength = 70,
  minLength = 50,
}) => {
  return (
    <>
      <div>
        <TextField
          id="outlined-multiline-static"
          {...register(`${title}`, {
            required: true,
            pattern: {
              value: /^(?!\s)[\w\s:.\-,$%&()!@#^*;"'-+\\[\]=`]+$/gm,
              message: `Invalid ${label} Format`,
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
          label={label}
          className={`${textAreaClass} customTextField  `}
          defaultValue={defaultValue}
          multiline
          rows={4}
          InputLabelProps={{ shrink: true }}
          sx={{
            fieldset: { borderColor: "#cbd5e1" },
          }}
          variant="outlined"
        />
      </div>
    </>
  );
};

DescriptionInputField.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
  title: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

export default DescriptionInputField;
