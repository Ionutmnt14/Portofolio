import { motion, useInView, useScroll, useTransform } from "motion/react";
import { planets, mountains, stars } from "../assets/images/images";
import { useRef } from "react";
import { react, html, css, fmotion, tailwind, js } from "../assets/icons/icons";

const skills = [
  { name: "HTML", img: html, color: "#ff3fa4" },
  { name: "CSS", img: css, color: "#ff6d00" },
  { name: "JavaScript", img: js, color: "#48cae4" },
  { name: "React", img: react, color: "#ff006e" },
  { name: "Tailwind", img: tailwind, color: "#f9a826" },
  { name: "Motion", img: fmotion, color: "#d00000" },
];

const shakeVariant = {
  shake: {
    y: [0, -1, 1, -1, 1, -1, 1, 0],
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
  const refref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}
    >
      <div className="w-full h-full flex flex-col items-center">
        {/* Title */}
        <motion.h1
        ref={refref}
          style={{ y: yText }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-white text-8xl font-bold tracking-wider my-8"
        >
          Skills
        </motion.h1>

    
        <motion.div
          className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-9 relative h-full items-center justify-center z-30 mx-auto mb-10"
          style={{ y: yBg }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center gap-5 w-16 h-16 md:w-24 md:h-24 border-4 rounded-lg py-3 px-3`}
              style={{ borderColor: skill.color }}
            >
              <motion.img
                src={skill.img}
                alt={skill.name}
                variants={shakeVariant}
                animate="shake"
              />
              <p className="text-white text-center font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Layers */}
      <motion.div className="absolute w-full h-full">
        <img
          src={mountains}
          alt="Mountains"
          className="absolute w-full h-full object-cover z-30"
        />
      </motion.div>

      <motion.div className="absolute w-full h-full" style={{ y: yBg }}>
        <img
          src={planets}
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
