import { useState, useEffect } from "react";
import "./index.css";

const LabeledInput = (props) => {
  const {
    required,
    type = "text",
    id,
    onChange,
    className,
    label,
    tabIndex = 0,
    value: externalValue,
    defaultValue,
    ...restProps
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (externalValue !== undefined) {
      setInternalValue(externalValue);
      setIsActive(!!externalValue);
    }
  }, [externalValue]);

  const isControlled = externalValue !== undefined;
  const value = isControlled ? externalValue : internalValue;

  const labelClassName =
    isActive || value || type === "date"
      ? "float-label__label active"
      : "float-label__label";

  const floatLabelClass = className
    ? `float-label ${className}`
    : "float-label";

  const requiredMarker = required && (
    <span className="float-label__required-marker">*</span>
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    setIsActive(!!newValue);
    onChange?.(e);
  };

  return (
    <div className={floatLabelClass}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        className="float-label__input"
        tabIndex={tabIndex}
        {...restProps}
      />

      <label className={labelClassName} htmlFor={id}>
        <span>{label}</span>
        {requiredMarker}
      </label>
    </div>
  );
};

export default LabeledInput;
