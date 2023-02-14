import Formbtn from "./form/Form";
import Navbar from "./navbar/NavBar";
import SideBar from "./sidebar/SideBar";
import "./Homepage.css"
import QuickNav from "../components/quicknavigation/QuickNav";
import InfoPrice from "../components/info/InfoAndPrice";
import Location from "../components/location/Location";

function HomePage() {
    return ( <div className="homepage">
      <Navbar/>
        <SideBar/>
        <div className="background-bottom">
        <Formbtn/>
        <div className="content">
          <div className="quicknav">
            <QuickNav/>
          </div>
          <div className="infoprice">
            <InfoPrice/>
          </div>
          <div className="location">
            <Location/>
          </div>
        </div>
        </div>
        
        
    </div> );
}

export default HomePage;