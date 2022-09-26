import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseHover({ reff }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);
      setMousePosition({
        x: e.layerX - 25,
        y: e.layerY - 20,
      });
    };

    reff.current.addEventListener("mousemove", mouseMove);

    return () => {
      reff.current.removeEventListener("mousemove", mouseMove);
    };
  }, [reff]);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.div className="cursor-div" variants={variants} animate={cursorVariant}>
      View
    </motion.div>
  );
}
