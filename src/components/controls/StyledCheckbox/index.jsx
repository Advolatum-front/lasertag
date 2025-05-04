import "./index.css";

const StyledCheckbox = (props) => {
  const {
    className = "",
    caption = "",
    tabIndex = 0,
    checked = false,
    onChange,
    name = "",
    value = "on",
  } = props;

  const handleChange = () => {
    onChange?.();
  };

  return (
    <label className={`styled-checkbox ${className}`}>
      <input
        type="checkbox"
        className="styled-checkbox__checkbox"
        tabIndex={tabIndex}
        checked={checked}
        onChange={handleChange}
        name={name}
        value={value}
      />
      <span className="styled-checkbox__fake-checkbox-wrapper">
        <span className="styled-checkbox__fake-checkbox"></span>
      </span>
      <span className="styled-checkbox__caption">{caption}</span>
    </label>
  );
};

export default StyledCheckbox;
