import { easeOut } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const menuVariants = {
  open: {
    clipPath: "circle(1200px at 100px 100px)",
    transition: {
      type: "spring",
      stiffness: 10,
    },
  },

  closed: {
    clipPath: "circle(0px at 100px 100px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Projects",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [gradientPosition, setGradientPosition] = useState(0);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between  items-center mx-20 my-8 bg-transparent">
      <div>
        <motion.h1
          variants={variants}
          initial="initial"
          animate="animate"
          style={{
            background: `linear-gradient(90deg, #e6edf3, #9333ea, #1f6feb)`,
            backgroundSize: "200% 200%",
            backgroundPosition: `${gradientPosition}% 50%`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-4xl font-montserrat font-bold cursor-default"
        >
          Ionut
        </motion.h1>
      </div>
      {/* Desktop Menu */}
      <motion.div initial="initial" animate="animate" variants={variants}>
        <ul className="md:flex hidden justify-between items-center gap-4 font-montserrat font-medium text-text">
          {NavbarMenu.map((e) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={e.id}
              className="relative group px-3 py-2 cursor-pointer"
            >
              <a href={e.path}>{e.title}</a>
              <span className="absolute bottom-0 rounded-full left-0 w-0 h-1 bg-electric group-hover:w-full transition-all duration-500"></span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden text-text">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}

      <motion.div variants={menuVariants}
      animate={nav ? "open" : "closed"}
        className={`${
          nav ? "translate-x-0" : "-translate-x-full"
        }  fixed left-0 top-0 w-[60%] h-full border-r border-e-gray-900 text-text bg-soft transform transition-transform duration-300 ease-in-out flex items-center  flex-col gap-28`}
      >
        <motion.h1 
        className="text-4xl font-montserrat font-bold cursor-default my-4">
          Ionut
        </motion.h1>
        <ul className="flex flex-col items-center gap-3">
          {NavbarMenu.map((e) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={e.id}
              className=" px-3 py-2 cursor-pointer"
            >
              <a className="text-2xl " href={e.path}>
                {e.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
