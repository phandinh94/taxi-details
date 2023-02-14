import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="menu-sidebar">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="sidebar-list">
        <li>
          <i className="fa-solid fa-house" />
        </li>
        <li >
          <i className="fa-solid fa-briefcase"></i>
        </li>
        <li>
          <i className="fa-solid fa-address-book"></i>
        </li>
        <li>
          <i className="fa-solid fa-earth-americas"></i>
        </li>
        <li>
          <i className="fa-solid fa-question"></i>
        </li>
      </ul>
      <div className="medal">
        <i className="fa-solid fa-medal"></i>
      </div>
    </div>
  );
}

export default SideBar;
