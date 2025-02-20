import { heroImg } from "../assets/images";
import { FaDownload } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import {  motion } from "motion/react";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 15,
    },
  },
};


const Hero = () => {
  return (
    <section className="w-full h-[90%]  flex items-center bg-background px-20 pb-12 font-montserrat relative overflow-hidden ">
      <div className="flex-1 relative z-10">
        <div className="text-text py-4 relative z-10">
          <h1 className="text-6xl font-medium ">
            Hi, <span className="text-electric">I&lsquo;m</span> Ionut
          </h1>
          <h1 className="text-3xl font-bold mt-2 py-4">
            I build beautiful & interactive web experiences.
          </h1>
        </div>
        <div className="w-full flex flex-row relative z-10">
          <motion.button
            className="text-text flex items-center gap-2 px-6 py-3 bg-electric font-semibold rounded-lg shadow-md transition-all "
            whileHover={{ scale: 1.1, backgroundColor: "#1f6feb" }}
            whileTap={{ scale: 1 }}
          >
            Download CV
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <FaDownload size={20} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      <motion.div
        className="text-text flex absolute text-[40vh] font-bold whitespace-nowrap bottom-[70px] w-auto overflow-hidden "
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer
      </motion.div>

      <div className="flex-1 flex justify-center relative z-10">
        <img src={heroImg} alt="heroImg" className="w-full h-auto max-w-2xl" />
      </div>
    </section>
  );
};

export default Hero;
