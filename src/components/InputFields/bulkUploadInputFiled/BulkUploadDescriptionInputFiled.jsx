/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from "react";

const BulkUploadDescriptionInputField = ({
  label,
  defaultValue = "",
  handleChangeFn,
  index,
  condition,
  value,
  regex,
  maxLength = 70,
  minLength = 50,
  title,
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
      <div>
        <TextField
          id="outlined-multiline-static"
          label={label}
          className={`${textAreaClass} customTextField ${condition} `}
          defaultValue={defaultValue}
          multiline
          rows={4}
          sx={{
            fieldset: { borderColor: "#cbd5e1" },
          }}
          value={value}
          onBlur={handleBlur}
          onChange={(e) => handleChangeFn(index, e)}
          variant="outlined"
        />
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    </>
  );
};

BulkUploadDescriptionInputField.propTypes = {
  defaultValue: PropTypes.any,
  label: PropTypes.string,
  register: PropTypes.func,
  title: PropTypes.string,
  handleChangeFn: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  condition: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  regex: PropTypes.any,
};

export default BulkUploadDescriptionInputField;
