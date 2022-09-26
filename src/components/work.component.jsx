import { arrowupright } from "./images.assets";
import { Thumbnail01 } from "./images.assets";
import { Thumbnail02 } from "./images.assets";
import { Thumbnail03 } from "./images.assets";
import { Thumbnail04 } from "./images.assets";
import { Thumbnail05 } from "./images.assets";
import { Thumbnail06 } from "./images.assets";

export default function Work() {
  return (
    <div className="work" id="work">
      <div className="work__yellow__circle work__yellow__circle--01"></div>
      <div className="work__pink__circle work__pink__circle--01"></div>
      <div className="work__pink__circle work__pink__circle--02"></div>
      <div className="work__content">
        <p data-aos="fade-up" data-aos-duration="1000" className="work__content__tag">
          Works
        </p>
        <div className="work__content__text">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="work__content__text__heading"
          >
            All Projects
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="work__content__text__para"
          >
            Here is the showcase to all the projects we have done so far.
          </p>
        </div>
      </div>
      <div className="work__grid">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="work__grid__items"
        >
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail01}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">Scripthome</div>
            <div className="work__grid__items__content__para">
              Scripthome is a roblox script providing platform where you get free roblox scripts.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://www.behance.net/gallery/148806507/Skumminity-Web-Design"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="work__grid__items"
        >
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail02}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">Havenstreams</div>
            <div className="work__grid__items__content__para">
              Havenstreams is a video streaming platform where you can watch movies and series for
              free.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://www.behance.net/gallery/139193711/Havenstreams"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="work__grid__items"
        >
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail03}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">SP Learning</div>
            <div className="work__grid__items__content__para">
              SP Learning is a e-learning platform where students can upgrade their academic skills
              by studying with us.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://www.behance.net/gallery/137999965/SP-E-Learning"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="work__grid__items">
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail04}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">Salvi Fashion</div>
            <div className="work__grid__items__content__para">
              Salvi Fashion is an e-commerce platform and their goal is to provide quality fashion
              products.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://dribbble.com/shots/19489847-SalviFashion"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="work__grid__items"
        >
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail05}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">Meta launch</div>
            <div className="work__grid__items__content__para">
              Meta launch is a NFT Site which provides a platform for buying and selling NFTs.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://dribbble.com/shots/19489857-Meta-Launch"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="work__grid__items"
        >
          <div className="work__grid__items__thumbnail">
            <img
              loading="lazy"
              className="work__grid__items__thumbnail__img"
              src={Thumbnail06}
              alt=""
            />
          </div>
          <div className="work__grid__items__content">
            <div className="work__grid__items__content__heading">Web3 Foundation</div>
            <div className="work__grid__items__content__para">
              Web3 Foundation is a software development company related to Web3.
            </div>
          </div>
          <a
            className="work__grid__items__button"
            href="https://react-web3funds.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <span className="work__grid__items__button__text">View Project</span>
            <img className="work__grid__items__button__img" src={arrowupright} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
