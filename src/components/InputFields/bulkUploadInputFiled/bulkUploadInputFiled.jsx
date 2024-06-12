/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from "react";

const BulkUploadInputField = ({
  title,
  label,
  type,
  defaultValue = "",
  handleChangeFn,
  index,
  readOnly = false,
  value,
  condition,
  regex,
  maxLength = 70,
  minLength = 1,
}) => {
  const [error, setError] = useState("");
  const validateInput = (text) => {
    if (!text.match(regex) && value) {
      setError(`Invalid ${title} format`);
    } else if (value && value.length < minLength && label !== "Category") {
      setError(`${title} must have a minimum of ${minLength} characters`);
    } else if (value && value.length > maxLength && label !== "Category") {
      setError(`${title} cannot exceed ${maxLength} characters`);
    } else {
      setError("");
    }
  };

  useEffect(() => {
    validateInput(value);
  }, [value]);

  const handleBlur = (e) => {
    const newValue = e.target.value;
    validateInput(newValue);
  };
  return (
    <>
      <TextField
        required
        size="small"
        className={`w-full customTextField   ${condition} `}
        id={`${title}`}
        type={type}
        inputProps={{ readOnly }}
        label={label}
        variant="outlined"
        defaultValue={defaultValue}
        sx={{
          fieldset: { borderColor: "#cbd5e1" },
        }}
        value={value}
        onBlur={handleBlur}
        onChange={(e) => handleChangeFn(index, e)}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </>
  );
};

BulkUploadInputField.propTypes = {
  register: PropTypes.func,
  title: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  regex: PropTypes.any,
  type: PropTypes.string,
  inputProps: PropTypes.object,
  handleChangeFn: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.value,
  readOnly: PropTypes.bool,
  condition: statusbar,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

export default BulkUploadInputField;
