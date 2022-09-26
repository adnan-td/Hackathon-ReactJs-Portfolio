import {
  Underline,
  zap,
  heart,
  diamont,
  star,
  arrowround,
  linkexternal01,
  f3,
} from "../components/images.assets";

import { Link } from "react-router-dom";
import Navbar from "./nav.component";
import { MouseHover } from "./mousehover.component";
import { useRef, useState } from "react";

export default function Home() {
  const latestref = useRef(null);
  const [didME, setDidME] = useState(false);

  return (
    <div className="home" id="home">
      <div className="pink__circle pink__circle--01"></div>
      <div className="pink__circle pink__circle--02"></div>
      <Navbar />
      <div className="hero">
        <div className="yellow__circle yellow__circle--01"></div>
        <div className="yellow__circle yellow__circle--02"></div>
        <div className="hero__content">
          <div className="hero__content__top">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="hero__content__top__heading">
              The web is a canvas, let's{" "}
              <span className="hero__content__top__heading__span">
                paint it
                <img
                  src={Underline}
                  alt="loading"
                  className="hero__content__top__heading__span__underline"
                />
              </span>{" "}
              together.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="hero__content__top__para"
            >
              We are a team of designers and developers who work together to create the best web
              design for our clients.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="hero__content__bottom"
          >
            <a className="hero__content__bottom__links" href="#work">
              <button className="hero__content__bottom__links__buttons">
                <span className="see-project hero__content__bottom__links__buttons__text">
                  See Projects
                </span>
                <img src={zap} alt="loading" />
              </button>
            </a>
            <Link className="hero__content__bottom__links" to="/contact">
              <button className="hero__content__bottom__links__buttons--primary hero__content__bottom__links__buttons">
                <span className="hire-us-button hero__content__bottom__links__buttons__text hero__content__bottom__links__buttons__text--primary">
                  Hire Us
                </span>
                <img src={linkexternal01} alt="loading" />
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="hero__imgcon"
        >
          <div
            className="hero__imgcon__div"
            ref={latestref}
            onMouseEnter={() => {
              setDidME(true);
            }}
            onMouseLeave={() => {
              setDidME(false);
            }}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.replace("https://dribbble.com/shots/19489857-Meta-Launch");
            }}
          >
            {didME && <MouseHover reff={latestref} />}
            <div className="hero__imgcon__div__img">
              <img src={f3} alt="loading" className="hero__imgcon__div__img__t" />
            </div>
            <div className="hero__imgcon__div__heart">
              <img src={heart} alt="loading" className="hero__imgcon__div__heart__img" />
            </div>
            <div className="hero__imgcon__div__tag">
              <span className="hero__imgcon__div__tag__text" id="hero__imgcon__div__tag__text">
                Latest Project!
                <img className="hero__imgcon__div__tag__img" src={arrowround} alt="loading" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper__scrollbox">
        <div className="home__scrollbox">
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Make your website shine</p>
            <img src={diamont} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
          <div className="home__scrollbox__textwraps">
            <p className="home__scrollbox__textwraps__text">Bring your vision to life!</p>
            <img src={star} alt="loading" className="home__scrollbox__textwraps__img" />
          </div>
        </div>
      </div>
    </div>
  );
}
