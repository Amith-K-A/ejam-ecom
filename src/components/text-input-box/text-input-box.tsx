import React from "react";
import { TextInput } from "../../interface/text-input";
import "./text-input-box.scss";

const TextInputBox: React.FC<TextInput> = ({
  placeholder = "",
  reference = null,
  id = "",
  errorText,
  error,
  type = "text",
  required = false,
  onChange,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        ref={reference}
        required={required}
        onChange={onChange}
        value={value}
      />
      {error && <span className="error">{errorText}</span>}
    </>
  );
};

export default TextInputBox;
