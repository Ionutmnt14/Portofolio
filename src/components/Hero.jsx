import { heroImg } from "../assets/images/images";
import { FaDownload } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "motion/react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center bg-background px-20 pb-12  font-montserrat relative overflow-hidden ">
      <div className="flex-1 relative z-10">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-text py-4 relative z-10"
        >
          <motion.h1 variants={textVariants} className="text-6xl font-medium ">
            Hi, <span className="text-electric">I&lsquo;m</span> Ionut
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-3xl font-bold mt-2 py-4"
          >
            I build beautiful & interactive web experiences.
          </motion.h1>
        </motion.div>
        <motion.div className="w-full flex flex-row relative z-10">
          <motion.button
            className="text-text flex items-center gap-2 px-6 py-3 bg-electric font-semibold rounded-lg shadow-md transition-all "
            whileHover={{ scale: 1.1, backgroundColor: "#1f6feb" }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
        </motion.div>
      </div>

      <motion.div
        className="text-text flex absolute text-[40vh] font-bold whitespace-nowrap bottom-[70px] w-auto overflow-hidden opacity-10"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer
      </motion.div>

      <motion.div
        className=" flex items-center flex-col absolute inset-x-2/4 bottom-0 gap-1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-electric flex "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LuMouse size={30} />
        </motion.div>
        <motion.div
          className="text-electric"
          animate={{ y: [0, -2.6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <MdKeyboardDoubleArrowDown size={30} />
        </motion.div>
      </motion.div>
      <motion.div className="flex-1 flex justify-center relative z-10"
      variants={imgVariants} initial="initial" animate="animate"
      >
        <img src={heroImg} alt="heroImg" className="w-full h-auto max-w-2xl" />
      </motion.div>

    </section>
  );
};

export default Hero;
