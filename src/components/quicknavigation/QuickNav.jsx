import "./Quicknav.css"
function QuickNav() {
    return ( <div className="qicknav-content">
    <div className="quicknav-left"><h4>Car Details</h4></div>
    <div className="quicknav-right">
        <div className="info"><b>Info and price</b></div>
        <div className="guest"><b>Cuest Ratings</b></div>
        <div className="location-quick"><b>Location</b></div>
    </div>
    </div> );
}

export default QuickNav;