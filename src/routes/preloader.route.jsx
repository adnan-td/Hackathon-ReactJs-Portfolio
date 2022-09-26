import { useContext } from "react";
import Lottie from "react-lottie";
import { WidthContext } from "../context/screenwidth.context";

export default function Preloader() {
  const lottieconfig = {
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: require("../Assets/lottie/geometric-ring-loader-4702140.json"),
  };
  const screenwidth = useContext(WidthContext);
  function Widthvalue() {
    if (screenwidth > 1100) return 350;
    if (screenwidth <= 1100 && screenwidth > 600) return 250;
    if (screenwidth <= 600) return 200;
  }

  return (
    <div className="container">
      <Lottie options={lottieconfig} height={Widthvalue()} width={Widthvalue()} />
    </div>
  );
}
