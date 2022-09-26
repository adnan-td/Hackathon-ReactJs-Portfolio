import { happy, handdrawnaccents, arrowh } from "./images.assets";
import { Link } from "react-router-dom";
import Footer from "./footer.component";

export default function ContactH() {
  return (
    <div className="wrap-circle">
      <div className="wrap-circle__yellow__circle wrap-circle__yellow__circle--01"></div>
      <div className="wrap-circle__yellow__circle wrap-circle__yellow__circle--02"></div>
      <div className="wrap-circle__pink__circle wrap-circle__pink__circle--01"></div>
      <div className="contacth">
        <div className="contacth__wrapper">
          <p className="contacth__wrapper__heading">
            <img src={happy} alt="" className="contacth__wrapper__heading__happy" />
            <img src={handdrawnaccents} alt="" className="contacth__wrapper__heading__accent" />
            Have a project in mind? Let’s get to work.
          </p>
          <Link to="/contact" className="contacth__wrapper__link">
            <button className="contacth__wrapper__link__button">
              Say Hello
              <img className="contacth__wrapper__link__button__icon" src={arrowh} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
