import "./index.css";

const NoPhoto = ({ className }) => {
  const noPhotoClassName = `no-photo ${className}`.trim();

  return <div className={noPhotoClassName} />;
};

export default NoPhoto;
