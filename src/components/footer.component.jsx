import { useNavigate } from "react-router-dom";
import { Logot } from "./images.assets";

export default function Footer() {
  const navigate = useNavigate();
  const handleClick = () => {
    const pathname = window.location.pathname;
    console.log(pathname);
    if (pathname === "/contact") {
      navigate("/");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a href="#home" className="footer__wrapper__logo" onClick={handleClick}>
          <img className="footer__wrapper_logo_img" src={Logot} alt="" />
          <span className="footer__wrapper__logo__text">SPUniverse</span>
        </a>
        <ul className="footer__wrapper__item">
          <a href="#home" onClick={handleClick}>
            <li className="footer__wrapper__item__links footer__wrapper__item__links--active">
              Home <p className="active-nav-border"></p>
            </li>
          </a>
          <a href="#about" onClick={handleClick}>
            <li className="footer__wrapper__item__links">Why Choose Us</li>
          </a>
          <a href="#work" onClick={handleClick}>
            <li className="footer__wrapper__item__links">Projects</li>
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.behance.net/sudhanshuprasad2002">
            <li className="footer__wrapper__item__links">Behance</li>
          </a>
        </ul>
      </div>
    </footer>
  );
}
