import { useState } from "react";
import { f2iphone } from "./images.assets";

export default function About() {
  const [whichtab, settab] = useState(0);
  return (
    <div className="features" id="about">
      <div className="features__yellow__circle features__yellow__circle--01"></div>
      <div className="features__pink__circle features__pink__circle--01"></div>
      <div className="features__content">
        <p className="features__content__tag">About Us</p>
        <div className="features__content__text">
          <h1 className="features__content__text__heading">Why Choose Us?</h1>
          <p className="features__content__text__para">
            SPUniverse is a leading web design and development agency in India. We are known for our
            creativity, innovation and high quality work.
          </p>
        </div>
      </div>
      <div loading="lazy" className={`features__img features__img--0${whichtab + 1}`}>
        {whichtab === 1 ? <img className="features__img__iphone" src={f2iphone} alt="" /> : ""}
      </div>
      <div className="features__tabs">
        <div
          className={
            whichtab === 0
              ? "features__tabs__content features__tabs__content--mod"
              : "features__tabs__content"
          }
          onClick={() => {
            settab(0);
          }}
        >
          <h2 className="features__tabs__content__heading">Innovative Designs</h2>
          <p className="features__tabs__content__para">
            Designs are the backbone of any business. They can make or break a sale. We create
            innovative designs that stand out from the rest of your competitors.
          </p>
        </div>
        <div
          className={
            whichtab === 1
              ? "features__tabs__content features__tabs__content--mod"
              : "features__tabs__content"
          }
          onClick={() => {
            settab(1);
          }}
        >
          <h2 className="features__tabs__content__heading">Storytelling</h2>
          <p className="features__tabs__content__para">
            The design of a website is not just about the aesthetics. It is also about the story it
            tells and we do just that with our design.
          </p>
        </div>
        <div
          className={
            whichtab === 2
              ? "features__tabs__content feature_tag--mod-span features__tabs__content--mod"
              : "features__tabs__content feature_tag--mod-span"
          }
          onClick={() => {
            settab(2);
          }}
        >
          <h2 className="features__tabs__content__heading">Use Latest Tech Stack</h2>
          <p className="features__tabs__content__para">
            We are expert in the latest technology stack. We use the latest technologies to develop
            websites and provide your users with a better user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
