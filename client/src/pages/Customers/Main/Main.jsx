import "./Main.css";
import Category from "./Category";
import AllItems from "./AllItems";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
      <div className="medium-header mobile">
        All items
      </div>
        <div className="row">
          <Category />
          <AllItems />
        </div>
      </div>
    </div>
  );
};

export default Main;
