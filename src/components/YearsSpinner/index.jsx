import { useState } from "react";

import "./index.css";

const YearsSpinner = (props) => {
  const { startValue, onDecrease, onIncrease, className = "" } = props;

  const [spinnerValue, setSpinnerValue] = useState(startValue);

  const decrease = () => {
    setSpinnerValue(spinnerValue - 1);
    onDecrease();
  };

  const increase = () => {
    setSpinnerValue(spinnerValue + 1);
    onIncrease();
  };

  const yearsSpinnerClassName = className
    ? `years-spinner ${className}`
    : `years-spinner`;

  return (
    <div className={yearsSpinnerClassName}>
      <button className="years-spinner__prev" onClick={decrease}>
        {spinnerValue - 1}
      </button>

      <span className="years-spinner__current">{spinnerValue}</span>

      <button className="years-spinner__next" onClick={increase}>
        {spinnerValue + 1}
      </button>
    </div>
  );
};

export default YearsSpinner;
