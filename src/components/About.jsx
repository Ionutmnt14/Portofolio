import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { motion } from "motion/react";
import { about } from "../assets/images/images";

const socialLinks = [
  {
    id: "facebook",
    icon: <FaFacebookF size={30} />,
    url: "https://www.facebook.com/Ionut.Muntean076",
  },
  {
    id: "instagram",
    icon: <FaInstagram size={30} />,
    url: "https://www.instagram.com/ionut_muntean14/",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/ionut-muntean-95b9b7307/",
  },
  {
    id: "github",
    icon: <FaGithubSquare size={30} />,
    url: "https://github.com/Ionutmnt14",
  },
];

const About = () => {
  const newTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="text-text min-h-screen w-full flex flex-col items-center justify-between relative">
      <div className="w-full h-screen absolute">
        <img
          src={about}
          alt=""
          className="object-cover overflow-hidden h-full w-full absolute top-0 right-0 -z-20 "
        />
        <div className="bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 w-full h-full absolute -z-10 opacity-95"></div>
      </div>
      <div className="flex flex-1 items-center justify-center w-full h-full relative z-10">
        <motion.h1 className="text-8xl font-bold">About Me</motion.h1>
      </div>
      <div className="flex flex-1 justify-center items-center relative z-10">
        <motion.p
          className="text-4xl text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m <span className="font-semibold">Ionut</span>, a{" "}
          <b>passionate</b> Front-End Developer specializing in creating modern,
          responsive, and high-performance web applications. I love crafting
          pixel-perfect UI and bringing designs to life with clean and efficient
          code.
        </motion.p>
      </div>
      <div className="flex flex-1 items-center justify-center z-10 relative">
        {socialLinks.map(({ id, icon, url }) => (
          <div
            key={id}
            onClick={() => newTab(url)}
            className={`flex justify-center items-center w-16 h-16 cursor-pointer`}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
