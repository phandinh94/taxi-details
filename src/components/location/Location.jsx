import iconMap from "../../assets/locationimg/iconmap.png";
import iconHour from "../../assets/locationimg/hour.png";
import mapIconSearch from "../../assets/locationimg/Active.png";
import mapImgSearch from "../../assets/locationimg/Image-Map.png";
import "./Location.css";
function Location() {
  return (
    <div className="location-content">
      <div className="location-left">
        <h2>Supplier Location</h2>
        <div className="location-item">
          <div className="imgicon">
            <img className="icon-address" src={iconMap} />
          </div>
          <div className="texticon">
            <h4>Pick Up & Drop Off</h4>
            <p>Alamo - Doha AIRPORT</p>
            <p>
              Rental Louge Vertical Circle, Ground Floor, Doha, Qatar, 24659
            </p>
          </div>
        </div>
        <div className="location-item">
          <div className="imgicon">
            <img className="icon-address" src={iconHour} />
          </div>
          <div className="texticon">
            <h4>Opending hours</h4>
            <p>Monday - Friday</p>
            <p>6:00 AM - 12:00</p>
          </div>
        </div>
      </div>
      <div className="location-right">

        <div className="imgmap-location">
          <img className="imgmap-search" src={mapImgSearch} />
        </div>

        <div className="iconsearch-location">
          <img className="map-search" src={mapIconSearch} />
        </div>

        <div className="btn-searchmap"><button className="btn-showmap"><b>SHOW ON MAP</b></button></div>
      </div>
    </div>
  );
}

export default Location;
