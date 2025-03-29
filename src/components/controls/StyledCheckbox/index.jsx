import "./index.css";

const StyledCheckbox = (props) => {
  const { className = "", caption = "", tabIndex = 0 } = props;

  return (
    <label className={`styled-checkbox ${className}`}>
      <input
        type="checkbox"
        className="styled-checkbox__checkbox"
        tabIndex={tabIndex}
      />
      <span className="styled-checkbox__fake-checkbox-wrapper">
        <span className="styled-checkbox__fake-checkbox"></span>
      </span>
      <span className="styled-checkbox__caption">{caption}</span>
    </label>
  );
};

export default StyledCheckbox;
