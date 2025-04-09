import "./index.css";

import Activities from "../../../components/cabinet/Activities";
import Favorites from "../../../components/cabinet/Favorites";
import MyProfile from "../../../components/cabinet/MyProfile";
import Index from "../../../components/cabinet/Index";

const Content = (props) => {
  const { pathname } = props;

  if (pathname.startsWith("/cabinet/activities")) {
    return <Activities />;
  }

  if (pathname.startsWith("/cabinet/myprofile")) {
    return <MyProfile />;
  }

  if (pathname.startsWith("/cabinet/favorites")) {
    return <Favorites />;
  }

  if (pathname.startsWith("/cabinet/index")) {
    return <Index />;
  }
};

export default Content;
