import "./mc.style.scss";
import { Link, useNavigate } from "react-router-dom";
import SuccessIcon from "../../../Assets/chec-icon.svg";
import CloseIcon from "../../../Assets/x-close.svg";

const Modalmc = ({ handleClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const pathname = window.location.pathname;
    console.log(pathname);
    if (pathname === "/contact") {
      navigate("/");
    }
  };

  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="script-fix">
          <img src={SuccessIcon} alt="" />
          <div className="header-wrapper">
            <div className="h-content-div">
              <p className="h-content-1">Email Sent!</p>
              <p className="h-content-2">
                Thank you for contacting me. In the meantime you can see my previous works.
              </p>
            </div>
          </div>
        </div>
        <a href="/#work" className="bottom-button" onClick={handleClick}>
          <button className="next-button" onClick={handleClose}>
            See Work
          </button>
        </a>
      </div>
    </div>
  );
};

export default Modalmc;
