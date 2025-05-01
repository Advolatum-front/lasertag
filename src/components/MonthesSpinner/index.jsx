import { useState } from "react";

import { monthesNames } from "../../utils/date/monthesNames.js";

import "./index.css";

const MonthesSpinner = (props) => {
  const { startValue, onDecrease, onIncrease, className = "" } = props;

  const [spinnerValue, setSpinnerValue] = useState(startValue);

  const decrease = () => {
    const newVal =
      spinnerValue === 0 ? monthesNames.length - 1 : spinnerValue - 1;
    setSpinnerValue(newVal);

    onDecrease();
  };

  const increase = () => {
    const newVal =
      spinnerValue === monthesNames.length - 1 ? 0 : spinnerValue + 1;
    setSpinnerValue(newVal);

    onIncrease();
  };

  const prevCaption =
    monthesNames[
      spinnerValue === 0 ? monthesNames.length - 1 : spinnerValue - 1
    ];
  const currCaption = monthesNames[spinnerValue];
  const nextCaption =
    monthesNames[
      spinnerValue === monthesNames.length - 1 ? 0 : spinnerValue + 1
    ];

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
