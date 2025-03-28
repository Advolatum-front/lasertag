import "./index.css";

const StyledCheckbox = (props) => {
  const { className = "", caption = "" } = props;

  return (
    <label className={`styled-checkbox ${className}`}>
      <input type="checkbox" className="styled-checkbox__checkbox" />
      <span className="styled-checkbox__fake-checkbox-wrapper">
        <span className="styled-checkbox__fake-checkbox"></span>
      </span>
      <span className="styled-checkbox__caption">{caption}</span>
    </label>
  );
};

export default StyledCheckbox;
