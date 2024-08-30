import "./Main.css";
import Category from "./Category";
import AllItems from "./AllItems";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <p className="medium-header mobile">All items</p>
        <div className="row">
          <Category />
          <AllItems />
        </div>
      </div>
    </div>
  );
};

export default Main;
