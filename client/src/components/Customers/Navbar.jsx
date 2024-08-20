import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo-div">
          <a href="#" className="logo"></a>
        </div>
        <div className="navigation_menu">
          <ul className="nav-ul">
            <li className="nav_li">
              <a href="#">Lorem</a>
            </li>
            <li className="nav_li">
              <a href="#">Lorem</a>
            </li>
            <li className="nav_li">
              <a href="#">Lorem</a>
            </li>
            <li className="nav_li">
              <a href="#">Lorem</a>
            </li>
            <li className="nav_li">
              <a href="#">Lorem</a>
            </li>
          </ul>
        </div>
        <div className="profile-icon">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
