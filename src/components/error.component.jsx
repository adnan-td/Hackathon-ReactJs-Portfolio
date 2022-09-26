import { error, arrowh } from "./images.assets";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error">
      <div className="features__yellow__circle features__yellow__circle--01"></div>
      <div className="features__pink__circle features__pink__circle--01"></div>
      <img className="error__img" src={error} alt="" />
      <h2 className="error__head">Error 404! Page Not Found</h2>
      <Link to="/" className="contacth__wrapper__link">
        <button className="contacth__wrapper__link__button">
          Go to Home
          <img
            className="contacth__wrapper__link__button__icon"
            src={arrowh}
            alt=""
          />
        </button>
      </Link>
    </div>
  );
}
