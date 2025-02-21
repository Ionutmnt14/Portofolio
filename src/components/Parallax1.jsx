import { motion, useScroll, useTransform } from "motion/react";
import { planets, mountains, stars } from "../assets/images";
import { useRef } from "react";

const Parallax1 = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="w-full h-screen relative flex items-center content-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="bg-cover w-full h-full absolute 3">
        <img src={mountains} alt="" />
      </motion.div>
      <motion.div className="bg-cover w-full h-full absolute 2">
        <img src={planets} alt="" />
      </motion.div>
      <motion.div className="bg-cover w-full h-full absolute 1">
        <img src={stars} alt="" />
      </motion.div>
    </div>
  );
};

export default Parallax1;
