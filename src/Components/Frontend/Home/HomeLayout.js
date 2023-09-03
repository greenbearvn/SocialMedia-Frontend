import Feeds from "./Feeds";
import LayoutFrontend from "../../Frontend/Layout/LayoutFrontend";

const HomeLayout = () => {
  return (
    <LayoutFrontend>
      <div className="main_content">
        <div className="mcontainer">
          <Feeds />
        </div>
      </div>
    </LayoutFrontend>
  );
};

export default HomeLayout;
