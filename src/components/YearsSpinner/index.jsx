import "./index.css";

const YearsSpinner = () => {
  return (
    <div className="years-spinner">
      <button className="years-spinner__prev">2024</button>
      <span className="years-spinner__current">2025</span>
      <button className="years-spinner__next">2026</button>
    </div>
  );
};

export default YearsSpinner;
