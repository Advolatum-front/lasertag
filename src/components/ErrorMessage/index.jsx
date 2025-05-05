import "./index.css";

const ErrorMessage = ({ msg = "", className = "" }) => {
  const wrapperClass = `error-msg-wrapper ${className}`.trim();

  return <div className={wrapperClass}>{msg}</div>;
};

export default ErrorMessage;
