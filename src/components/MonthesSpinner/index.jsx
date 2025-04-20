import { useState } from "react";

import "./index.css";

const MonthesSpinner = (props) => {
  const { startValue, values, onDecrease, onIncrease, className = "" } = props;

  const [spinnerValue, setSpinnerValue] = useState(startValue);

  const decrease = () => {
    const newVal = spinnerValue === 0 ? values.length - 1 : spinnerValue - 1;
    setSpinnerValue(newVal);

    onDecrease();
  };

  const increase = () => {
    const newVal = spinnerValue === values.length - 1 ? 0 : spinnerValue + 1;
    setSpinnerValue(newVal);

    onIncrease();
  };

  const prevCaption =
    values[spinnerValue === 0 ? values.length - 1 : spinnerValue - 1];
  const currCaption = values[spinnerValue];
  const nextCaption =
    values[spinnerValue === values.length - 1 ? 0 : spinnerValue + 1];

  const monthesSpinnerClassName = className
    ? `monthes-spinner ${className}`
    : `monthes-spinner`;

  return (
    <div className={monthesSpinnerClassName}>
      <button className="monthes-spinner__prev" onClick={decrease}>
        {prevCaption}
      </button>

      <span className="monthes-spinner__current">{currCaption}</span>

      <button className="monthes-spinner__next" onClick={increase}>
        {nextCaption}
      </button>
    </div>
  );
};

export default MonthesSpinner;
