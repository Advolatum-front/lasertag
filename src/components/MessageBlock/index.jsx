import {
  MBT_ERROR,
  MBT_SUCCESS,
  MBT_NOTIFICATION,
} from "../../utils/message-block-types";

import "./index.css";

const MESSAGE_TYPES_DICT = new Map();
MESSAGE_TYPES_DICT.set(MBT_ERROR, "mbt-error")
  .set(MBT_SUCCESS, "mbt-success")
  .set(MBT_NOTIFICATION, "mbt-notification");

const MessageBlock = ({ children, className = "", type }) => {
  const mbtTypeClass = MESSAGE_TYPES_DICT.get(type);
  const wrapperClass =
    `message-block-wrapper ${mbtTypeClass} ${className}`.trim();

  return <div className={wrapperClass}>{children}</div>;
};

export default MessageBlock;
