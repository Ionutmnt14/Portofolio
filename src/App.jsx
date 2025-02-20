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
    <div className="overflow-hidden">
      <Cursor />
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax1 />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Parallax2 />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;

