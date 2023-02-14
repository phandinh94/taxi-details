import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="menu-sidebar">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="sidebar-list">
        <div className="sidebar-item">
          <i className="fa-solid fa-house" />
        </div>
        <div className="sidebar-item">
          <i className="fa-solid fa-briefcase"></i>
        </div>
        <div className="sidebar-item">
          <i className="fa-solid fa-address-book"></i>
        </div>
        <div className="sidebar-item">
          <i className="fa-solid fa-earth-americas"></i>
        </div>
        <div className="sidebar-item">
          <i className="fa-solid fa-question"></i>
        </div>
      </div>
      <div className="medal">
        <i className="fa-solid fa-medal"></i>
      </div>
    </div>
  );
}

export default SideBar;
