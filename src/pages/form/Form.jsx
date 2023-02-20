import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Formbtn() {
  return (
    <form className="formbtn">
      <div className="formbtn-item">
        <label className="title-form">TYPE</label>
        <div className="form-area">
          <div>
            <input
              className="input-form"
              name="form-type"
              type="text"
              placeholder="Outstation One-way"
            />
          </div>
          <div>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div className="formbtn-item">
        <label className="title-form">FROM</label>
        <div className="form-area">
          <input className="input-form" name="form-from" placeholder="Mumbai" />
        </div>
      </div>

      <div className="formbtn-item">
        <label className="title-form">TO</label>
        <div className="form-area">
          <input className="input-form" name="form-to" placeholder="Goa" />
        </div>
      </div>

      <div className="formbtn-item">
        <label className="title-form">PICK-UP DATE</label>
        <div className="form-area">
          <div>
          <input
          className="input-form"
          name="form-pickupdate"
          type="text"
          placeholder="Fri, 16 Oct 2020"
        />
          </div>
          <div>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
        </div>
        
      </div>

      <div className="formbtn-item">
        <label className="title-form">PICK-UP TIME</label>
        <div className="form-area">
          <div>
            <input
              className="input-form"
              name="form-pickuptime"
              type="text"
              placeholder="3:00 AM"
            />
          </div>
          <div>
            <i className=" fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div className="formbtn-btn">
        <button className="btn-search">Search Flight</button>
      </div>
    </form>
  );
}

export default Formbtn;
