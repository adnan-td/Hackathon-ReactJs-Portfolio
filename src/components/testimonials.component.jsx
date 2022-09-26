import { useEffect, useState } from "react";
import { arrowleft, arrowright, Stars5 } from "./images.assets";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [current, setcurrent] = useState(0);
  const [isRight, SetisRight] = useState(true);

  useEffect(() => {
    if (current < 0) setcurrent(2);
    if (current > 2) setcurrent(0);
  }, [current]);
  return (
    <div className="testimonial">
      <AnimatePresence exitBeforeEnter>
        {current === 0 && (
          <Testimonial
            key="1"
            text="I provided an asymmetric design, wasn’t sure if he code exactly the same with
        animations. The result was mind blowing. It was just what I wanted. I am happy working
        with him. I would recommend highly!"
            name="Suraj Seervi"
            designation="Owner of Salvi Fashion"
            setbuttonstate={setcurrent}
            no={current + 1}
            isright={isRight}
            setright={SetisRight}
          />
        )}
        {current === 1 && (
          <Testimonial
            key="2"
            text="I share roblox scripts online and needed a redesigned. Sudhanshu redesigned and coded the website which was beyond my expectations and also did SEO. I am grateful for what he did!"
            name="Arin"
            designation="Owner of Skumminity"
            setbuttonstate={setcurrent}
            no={current + 1}
            isright={isRight}
            setright={SetisRight}
          />
        )}
        {current === 2 && (
          <Testimonial
            key="3"
            text="I wanted to make a video platform but was not sure where to start with. I am good at coding but designing is not my piece of cake. Sudhanshu designed an elegant UI that amazed me. I recommend you all!"
            name="Seb Haven"
            designation="Owner of Havenstreams"
            setbuttonstate={setcurrent}
            no={current + 1}
            isright={isRight}
            setright={SetisRight}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Testimonial({ text, name, designation, setbuttonstate, no, key, isright, setright }) {
  const [lr, setlr] = useState(isright);
  const [didClick, setClick] = useState({ 1: false, 2: false });
  const animationsRight = {
    initial: (lr) => ({ x: lr ? -700 : 700, opacity: 0 }),
    animate: { x: 0, opacity: 1 },
    exit: (lr) => ({ x: !lr ? -700 : 700, opacity: 0 }),
  };

  useEffect(() => {
    if (didClick[1]) {
      setbuttonstate(no - 2);
    }
    if (didClick[2]) {
      setbuttonstate(no);
    }
  }, [didClick, no, setbuttonstate]);

  return (
    <motion.div
      key={key}
      className="testimonial__wrapper"
      custom={lr}
      variants={animationsRight}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{ type: "spring", duration: 0.3 }}
    >
      <div className="testimonial__wrapper__main">
        <img src={Stars5} alt="" className="testimonial__wrapper__main__rating" />
        <p className="testimonial__wrapper__main__content">{text}</p>
        <div className="testimonial__wrapper__main__avatar">
          <div className="testimonial__wrapper__main__avatar__div">
            <div
              className={`testimonial__wrapper__main__avatar__div__img testimonial__wrapper__main__avatar__div__img--0${no}`}
            ></div>
            <div className="testimonial__wrapper__main__avatar__div__content">
              <p className="testimonial__wrapper__main__avatar__div__content__name">{name}</p>
              <p className="testimonial__wrapper__main__avatar__div__content__position">
                {designation}
              </p>
            </div>
          </div>
          <div className="testimonial__wrapper__main__avatar__divbutton">
            <div
              className="testimonial__wrapper__main__avatar__divbutton__button"
              onClick={() => {
                setlr(false);
                setClick({ 1: true, 2: false });
                setright(false);
              }}
            >
              <img src={arrowleft} alt="" />
            </div>
            <div
              className="testimonial__wrapper__main__avatar__divbutton__button"
              onClick={() => {
                setlr(true);
                setClick({ 1: false, 2: true });
                setright(true);
              }}
            >
              <img src={arrowright} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        loading="lazy"
        className={`testimonial__wrapper__imgdiv testimonial__wrapper__imgdiv--0${no}`}
      ></div>
    </motion.div>
  );
}
