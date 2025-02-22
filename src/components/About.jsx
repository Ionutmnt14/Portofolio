import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="text-text min-h-screen w-full bg-gradient-to-br from-black via-blue-900 to-purple-900 flex flex-col items-center justify-center">
      <div className="">
        <h1 className="">About Me</h1>
      </div>
      <div className="">
        <p className="">
          Hi, I’m <span className="font-semibold">Ionut</span>, a{" "}
          <b>passionate</b> Front-End Developer specializing in creating modern,
          responsive, and high-performance web applications. I love crafting
          pixel-perfect UI and bringing designs to life with clean and efficient
          code.
        </p>
      </div>
      <div className="flex">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </div>
    </section>
  );
};

export default About;
