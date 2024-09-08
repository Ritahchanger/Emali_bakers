import Navbar from "../components/Customers/Navbar";
import Footer from "../components/Customers/Footer";
import "./Notfound.css"
const NotFound = () => {
  return (
    <div className="not-found">
      <Navbar />

      <p className="empty"></p>
      <div className="container main">
        <h3>404 PAGE NOT FOUND</h3>
      </div>
    
    </div>
  );
};

export default NotFound;
