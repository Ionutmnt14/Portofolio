
import { heroImg } from "../assets/images";

const Hero = () => {
  return (
    <section className=" w-full h-screen flex justify-between items-center">
      <div className="flex w-full h-screen mx-auto flex-1">
        <img src={heroImg} alt="" />
      </div>
      <div className="flex-2">

        <h1 className="text-text text-4xl">Hello! I am <br />Ionut</h1>
        <h2 className="text-text"></h2>
      </div>
    </section>
  );
};

export default Hero;
