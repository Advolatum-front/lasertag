import { useState } from "react";

import "./index.css";

const LabeledInput = (props) => {
  const { required, type = "text", id, onInput, widthClass, label } = props;

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const labelClassName =
    isActive || type === "date"
      ? "float-label__label active"
      : "float-label__label";

  const floatLabelClass = widthClass
    ? `float-label ${widthClass}`
    : "float-label";

  const requiredMarker = required && (
    <span className="float-label__required-marker">*</span>
  );

  const handleTextChange = (text) => {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleTextInput = (text) => {
    if (!onInput) {
      return;
    }

    setValue(text);
    onInput(text);
  };

  return (
    <div className={floatLabelClass}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        onInput={(e) => handleTextInput(e.target.value)}
        className="float-label__input"
      />

      <label className={labelClassName} htmlFor={id}>
        <span>{label}</span>
        {requiredMarker}
      </label>
    </div>
  );
};

export default LabeledInput;
