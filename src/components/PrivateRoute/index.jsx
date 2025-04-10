import { Route } from "react-router-dom";

import IndexCabinet from "../../pages/cabinet/IndexCabinet";

import "./index.css";

const PrivateRoute = ({ component, ...rest }) => {
  const element = <IndexCabinet>{component}</IndexCabinet>;

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
