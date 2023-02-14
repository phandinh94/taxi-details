import iconPartner from "../../assets/Icon-Add.jpg";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="background-top">
        <div className="cloud-left"></div>
        <div className="cloud-right"></div>
      </div> */}
      <div className="background-bettween">
        <div className="navbar-left">
          <ul className="navbar-top-left">
            <li className="navbar-top left-items">
              <i className="fa-solid fa-plane-departure"></i>
            </li>
            <li className="navbar-top left-items">
              <i className="fa-solid fa-bed"></i>
            </li>
            <li className="navbar-top left-items">
              <i className="fa-solid fa-home"></i>
            </li>
            <li className="navbar-top left-items">
              <i className="fa-solid fa-taxi"></i>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="btn-navbar partner">
            <div className="icon icon-partner">
              <img src={iconPartner} alt="img" />
            </div>
            <div className="text text-partner">Become a Partner</div>
            <div className="down down-partner">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="btn-navbar profile-user">
            <div className="icon avatar-user">
              <img src={iconPartner} alt="img" />
            </div>
            <div className="text user-name">Phan Dinh</div>
            <div className="down down-partner">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="btn-user"></div>
        </div>
      </div>
      <div className="background-bottom"></div>
    </div>
  );
}

export default Navbar;
