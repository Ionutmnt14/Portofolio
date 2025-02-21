import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax1 from "./components/Parallax1";
import About from "./components/About";
import Parallax2 from "./components/Parallax2";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden snap-y snap-mandatory scroll-smooth">
      {/* <Cursor /> */}
      <section id="home" className=" ">
        <Hero />
      </section>
      <section id="parallax1" className="w-screen h-screen">
        <Parallax1 />
      </section>
      <section id="about" className="w-screen h-screen ">
        <About />
      </section>
      <section id="parallax2" className="w-screen h-screen ">
        <Parallax2 />
      </section>
      <section id="projects" className="w-screen h-screen ">
        <Projects />
      </section>
      <section id="contact" className="w-screen h-screen ">
        <Contact />
      </section>
    </div>
  );
};

export default App;
