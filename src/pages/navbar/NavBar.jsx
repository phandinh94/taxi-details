import iconPartner from "../../assets/Icon-Add.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar" >
        <div className="navbar-left">
            <button className="navbar-top left-items">
              <i className="fa-solid fa-plane-departure"></i>
            </button>
            <button className="navbar-top left-items">
              <i className="fa-solid fa-bed"></i>
            </button>
            <button className="navbar-top left-items">
              <i className="fa-solid fa-home"></i>
            </button>
            <button className="navbar-top left-items">
              <i className="fa-solid fa-taxi"></i>
            </button>
        </div>

        <div className="navbar-right">
          <div className="btn-navbar partner">
            <div className="partner icon-partner">
              <img src={iconPartner} alt="img" />
            </div>
            <div className="partner text-partner">Become a Partner</div>
            <div className="partner down-partner">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="btn-navbar profile-user">
            <div className="profile avatar-user">
              <img src={iconPartner} alt="img" />
            </div>
            <div className="profile user-name">Phan Dinh</div>
            <div className="profile down-profile">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="btn-user"></div>
        </div>

    </div>
  );
}

export default Navbar;
