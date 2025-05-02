import { useState } from "react";

import { monthesNames } from "../../utils/date/monthesNames.js";

import "./index.css";

const MonthesSpinner = (props) => {
  const { startValue, onDecrease, onIncrease, className = "" } = props;

  // TODO: make useMemo
  const prevCaption =
    monthesNames[(startValue + monthesNames.length - 1) % monthesNames.length];
  const currCaption = monthesNames[startValue];
  const nextCaption = monthesNames[(startValue + 1) % monthesNames.length];

  const monthesSpinnerClassName = className
    ? `monthes-spinner ${className}`
    : `monthes-spinner`;

  return (
    <div className={monthesSpinnerClassName}>
      <button className="monthes-spinner__prev" onClick={onDecrease}>
        {prevCaption}
      </button>

      <span className="monthes-spinner__current">{currCaption}</span>

      <button className="monthes-spinner__next" onClick={onIncrease}>
        {nextCaption}
      </button>
    </div>
  );
};

export default MonthesSpinner;
