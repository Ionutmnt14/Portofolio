import { motion, useInView, useScroll, useTransform } from "motion/react";
import { sun, mountains, stars } from "../assets/images/images";
import { useRef } from "react";

const Parallax1 = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const refref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <motion.h1
          ref={refref}
          style={{ y: yText }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-white text-8xl font-bold tracking-wider my-8"
        >
          Projects
        </motion.h1>
      </div>

      <motion.div className="absolute w-full h-full">
        <img
          src={mountains}
          alt="Mountains"
          className="absolute w-full h-full object-cover z-30"
        />
      </motion.div>

      <motion.div className="absolute w-full h-full" style={{ y: yBg }}>
        <img
          src={sun}
          alt="Planets"
          className="absolute w-full h-full object-cover z-20"
        />
      </motion.div>

      <motion.div className="absolute w-full h-full" style={{ y: yBg }}>
        <img
          src={stars}
          alt="Stars"
          className="absolute w-full h-full object-cover z-10"
        />
      </motion.div>
    </div>
  );
};

export default Parallax1;
