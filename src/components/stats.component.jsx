import { useEffect, useState } from "react";

export default function Stats() {
  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [n3, setn3] = useState(0);
  const [repeat, setrepeat] = useState(false);
  useEffect(() => {
    Noscroll(6, setn1, 100);
    Noscroll(3, setn2, 200);
    Noscroll(1, setn3, 500);
  }, [repeat]);

  function Noscroll(n, setfunc, delay) {
    const sleep = (time) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const doSomething = async () => {
      for (let i = 0; i < n + 1; i++) {
        await sleep(delay);
        setfunc(i);
      }
    };

    doSomething();
  }
  return (
    <div className="stats">
      <div
        className="stats__wrapper"
        onMouseEnter={() => {
          setrepeat(!repeat);
        }}
      >
        <div className="stats__wrapper__content">
          <div className="stats-mod-wid">
            <h1 className="stats__wrapper__content__heading">0{n1}+</h1>
            <p className="stats__wrapper__content__para">Projects Completed</p>
          </div>
        </div>
        <div className="stats__wrapper__content">
          <div className="stats-mod-wid">
            <h1 className="stats__wrapper__content__heading">0{n2}</h1>
            <p className="stats__wrapper__content__para">Hackathon awards</p>
          </div>
        </div>
        <div className="stats__wrapper__content">
          <div className="stats-mod-wid">
            <h1 className="stats__wrapper__content__heading">0{n3}+</h1>
            <p className="stats__wrapper__content__para">Years of experience</p>
          </div>
        </div>
        <div className="stats__wrapper__content">
          <div className="stats-mod-wid">
            <h1 className="stats__wrapper__content__heading">0{n1}+</h1>
            <p className="stats__wrapper__content__para">Happy clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
