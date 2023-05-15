import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function TextSpan({
  index,
  children,
  letterClass,
  indexLetter,
}) {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1,0.9,1)",
        "scale3d(1,0.8,1)",
        "scale3d(1,0.7,1)",
        "scale3d(1,0.7,1)",
        "scale3d(1,0.7,1)",
        "scale3d(1,0.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true)
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={()=>setIsPlaying(false)}
      className={`${letterClass} _${index + indexLetter}`}
    >
      {children}
    </motion.span>
  );
}
