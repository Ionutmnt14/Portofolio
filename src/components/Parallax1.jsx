import { motion, useScroll, useTransform } from "motion/react";
import { planets, mountains, stars } from "../assets/images/images";
import { useRef } from "react";
import { react, html, css, fmotion, tailwind, js } from "../assets/icons/icons";

const variants = {
  shake: {
    y: [0, -1, 1, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const variants2 = {
  shake: {
    y: [0, -2, 1, -2, 1, -2, 1, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Parallax1 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)",
      }}
    >
      <div className="w-full h-full items-center flex flex-col">
        <motion.div style={{ y: yText }} className="flex  py-8">
          <motion.h1
            style={{ y: yText }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-white text-8xl font-bold tracking-wider"
          >
            Skills
          </motion.h1>
        </motion.div>
        <motion.div
          className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2  justify-center items-center h-full gap-9 relative z-30 mx-auto mb-10"
          style={{ y: yBg }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#ff3fa4] rounded-lg py-3 px-3">
            <motion.img
              src={html}
              alt=""
              variants={variants2}
              animate="shake"
            />
            <p className="text-text text-center font-semibold">HTML</p>
          </div>
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#ff6d00] rounded-lg py-3 px-3">
            <motion.img src={css} alt="" variants={variants} animate="shake" />
            <p className="text-text text-center font-semibold ">CSS</p>
          </div>
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#48cae4] rounded-lg py-3 px-3">
            <motion.img
              src={js}
              alt=""
              className="rounded-lg"
              variants={variants2}
              animate="shake"
            />
            <p className="text-text text-center font-semibold">JavaScript</p>
          </div>
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#ff006e] rounded-lg py-3 px-3">
            <motion.img
              src={react}
              alt=""
              variants={variants}
              animate="shake"
            />
            <p className="text-text text-center font-semibold">React</p>
          </div>
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#f9a826] rounded-lg py-3 px-3">
            <motion.img
              src={tailwind}
              alt=""
              variants={variants2}
              animate="shake"
            />
            <p className="text-text text-center font-semibold">Tailwind</p>
          </div>
          <div className="items-center flex flex-col gap-5 w-16 h-16 md:w-24 md:h-24 border-4 border-[#d00000] rounded-lg py-3 px-3">
            <motion.img
              src={fmotion}
              alt=""
              variants={variants}
              animate="shake"
            />
            <p className="text-text text-center font-semibold">Motion</p>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute w-full h-full">
        <img
          src={mountains}
          alt=""
          className="absolute w-full h-full object-cover z-30"
        />
      </motion.div>

      <motion.div className="absolute w-full h-full " style={{ y: yBg }}>
        <img
          src={planets}
          alt=""
          className="absolute w-full h-full object-cover z-20"
        />
      </motion.div>

      <motion.div className="absolute w-full h-full " style={{ y: yBg }}>
        <img
          src={stars}
          alt=""
          className="absolute w-full h-full object-cover z-10"
        />
      </motion.div>
    </div>
  );
};

export default Parallax1;
