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
            4.9
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="ratting-review">
            <div>Exilent</div>
            <div>
              <p>275 Review  
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-sale">
        <div className="sale-money">
          <p>20 off</p>
          <p>sale</p>
          <p>$129</p>
        </div>
        <div className="sum-pay">
          <p>
            <b>399</b>USD
          </p>
          <p>Per</p>
          <p>night</p>
          <div className="btn-sumpay">
            <button className="btn-sumclick">PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPrice;
