import { NavLink } from "react-router-dom";
import "./index.scss";

const NavbarComponent: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <img
              src="https://cdn2.steamgriddb.com/icon_thumb/a0e7be097b3b5eb71d106dd32f2312ac.png"
              alt=""
            />
          </div>

          <div className="navbar-links">
            <NavLink className="navbar-link" to="/">Home</NavLink>
            <NavLink className="navbar-link" to="/about/">About</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
