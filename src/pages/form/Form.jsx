import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Formbtn() {
  return (
    <form className="formbtn">
        <div className="formbtn-item">
          <label>TYPE</label>
          <input
            className="input-form"
            name="form-type"
            type="text"
            placeholder="Outstation One-way"
          />
        </div>

        <div className="formbtn-item">
          <label>FROM</label>
          <input className="input-form" name="form-from" placeholder="Mumbai" />
        </div>

        <div className="formbtn-item">
          <label>TO</label>
          <input className="input-form" name="form-to" placeholder="Goa" />
        </div>

        <div className="formbtn-item">
          <label>PICK-UP DATE</label>
          <input
            className="input-form"
            name="form-pickupdate"
            type="text"
            placeholder="Fri, 16 Oct 2020"
          />
        </div>

        <div className="formbtn-item">
          <label>PICK-UP TIME</label>
          <input
            className="input-form"
            name="form-pickuptime"
            type="text"
            placeholder="3:00 AM"
          />
        </div>

        <div className="formbtn-btn">
          <button className="btn-search">Search Flight</button>
        </div>
    </form>
  );
}

export default Formbtn;
