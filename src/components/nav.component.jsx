import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Logot, arrowicon, menu02 } from "./images.assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const handleClick = () => {
    const pathname = window.location.pathname;
    if (pathname === "/contact") {
      navigate("/");
    }
    setIsOpen(false);
  };
  return (
    <nav className="nav">
      <div className="nav__desktop">
        <a href="#home" className="nav__desktop__logo" onClick={handleClick}>
          <img className="nav__desktop_logo_img" src={Logot} alt="loading" />
          <span className="nav__desktop__logo__text">SPUniverse</span>
        </a>
        <ul className="nav__desktop__item">
          <a href="#home" onClick={handleClick}>
            <li className="nav__desktop__item__links nav__desktop__item__links--active">
              Home <p className="active-nav-border"></p>
            </li>
          </a>
          <a href="#about" onClick={handleClick}>
            <li className="nav__desktop__item__links">Why Choose Us</li>
          </a>
          <a href="#work" onClick={handleClick}>
            <li className="nav__desktop__item__links">Projects</li>
          </a>
          <a href="https://www.behance.net/sudhanshuprasad2002" target="_blank" rel="noreferrer">
            <li className="nav__desktop__item__links">Behance</li>
          </a>
        </ul>
        <Link className="nav__desktop__contact" to="/contact">
          <button className="nav__desktop__contact__button">
            <span>Contact</span>
            <img src={arrowicon} alt="loading" />
          </button>
        </Link>
      </div>

      <motion.div className="nav__mobile" initial={false} animate={isOpen ? "open" : "closed"}>
        <div className="nav__mobile__wrapper">
          <a href="#home" className="nav__desktop__logo" onClick={handleClick}>
            <img className="nav__desktop_logo_img" src={Logot} alt="loading" />
            <span className="nav__desktop__logo__text">SPUniverse</span>
          </a>
          <motion.img
            className="nav__menu"
            src={menu02}
            alt="loading"
            style={{ cursor: "pointer" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <motion.div
            className="nav__mobile__absolute"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            initial="closed"
            animate="open"
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <ul className="nav__desktop__item nav__mobile__absolute__item">
              <motion.a
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="nav__mobile__absolute__item__anchor"
                href="#home"
                onClick={handleClick}
              >
                <li className="nav__desktop__item__links nav__mobile__absolute__item__anchor__li nav__item__links--active">
                  Home
                </li>
              </motion.a>
              <motion.a
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="nav__mobile__absolute__item__anchor"
                href="#about"
                onClick={handleClick}
              >
                <li className="nav__desktop__item__links nav__mobile__absolute__item__anchor__li">
                  Why Choose Us
                </li>
              </motion.a>
              <motion.a
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="nav__mobile__absolute__item__anchor"
                href="#work"
                onClick={handleClick}
              >
                <li className="nav__desktop__item__links nav__mobile__absolute__item__anchor__li">
                  Projects
                </li>
              </motion.a>
              <motion.a
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="nav__mobile__absolute__item__anchor"
                href="https://www.behance.net/sudhanshuprasad2002"
              >
                <li className="nav__desktop__item__links nav__mobile__absolute__item__anchor__li">
                  Behance
                </li>
              </motion.a>
            </ul>
            <Link className="nav__desktop__contact nav__mobile__absolute__contact" to="/contact">
              <button className="nav__desktop__contact__button nav__mobile__absolute__contact__button">
                <span>Contact</span>
                <img src={arrowicon} alt="loading" />
              </button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
}
