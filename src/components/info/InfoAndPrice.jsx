import "./InfoAndPrice.css";
import carImg from "../../assets/picture/car.png";
function InfoPrice() {
  return (
    <div className="info-contnet">
      <div className="product-img">
        <img className="imginfo-product" src={carImg} />
      </div>
      <div className="infornation-product">
        <h2>White Jaguar XF 2 Car</h2>
        <p>Rome Ciampion Airport</p>
        <div className="ratting-product">
          <div className="ratting-star">
            <b>4.9</b>
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="ratting-review">
            <b>Exilent</b>
            <div className="star-review">
              <div className="review-area">275 Review</div>
              <div className="star-area">
                <span className="fa fa-star item-star checked"></span>
                <span className="fa fa-star item-star checked"></span>
                <span className="fa fa-star item-star checked"></span>
                <span className="fa fa-star item-star"></span>
                <span className="fa fa-star item-star"></span>
              </div>
            </div>
          </div>
        </div>
        <b>
          Popular <br></br>
          Service
        </b>
        <div className="contemplate">
          <div className="contemplate-item">
            <i className="fa-solid fa-location-dot contemplate-icon"></i>
            <b> Parking</b>
          </div>
          <div className="contemplate-item">
            <i className="fa-solid fa-couch contemplate-icon"></i>
            <b> Seat</b>
          </div>
          <div className="contemplate-item">
            <i className="fa-solid fa-fan contemplate-icon"></i>
            <b> AC Control</b>
          </div>
          <div className="contemplate-item">
            <i className="fa-solid fa-wifi contemplate-icon"></i>
            <b> Wifi</b>
          </div>
        </div>
        <hr></hr>
        <div className="checked-area">
          <div className="checkbox">
            <i className="fa-solid fa-square-check"></i>
            <b className="text-check">Athendments</b>
          </div>
          <div className="checkbox">
            <i className="fa-solid fa-square-check"></i>
            <b className="text-check">Theft protection</b>
          </div>
          <div className="checkbox">
            <i className="fa-solid fa-square-check"></i>
            <b className="text-check">Collision Damage Waiver</b>
          </div>
        </div>
      </div>
      <div className="info-sale">
        <div className="sale-money">
          <b className="number-sale">20 OFF</b>
          <p className="text-numbersale">
            Sale
            <br></br>
            $129
          </p>
        </div>
        <div className="sum-pay">
            <p className="title-right">
                <span className="money-usd">399</span>  USD<br></br>
                Per<br></br>
                Night

            </p>
          <div className="btn-sumpay">
            <button className="btn-sumclick"><b>PAY NOW</b></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPrice;
