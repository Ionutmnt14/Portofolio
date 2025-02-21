//scrolling tospecific sections

import  { useRef } from "react";

const ScrollSnapPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white p-4 z-10">
        <button
          onClick={() => scrollToSection(section1Ref)}
          className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Section 1
        </button>
        <button
          onClick={() => scrollToSection(section2Ref)}
          className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Section 2
        </button>
        <button
          onClick={() => scrollToSection(section3Ref)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Section 3
        </button>
      </nav>
      <div className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-auto">
        <section ref={section1Ref} className="snap-center overflow-hidden h-screen">
          <div className="flex items-center justify-center h-full bg-blue-200">
            <h1 className="text-4xl font-bold">Section 1</h1>
          </div>
        </section>
        <section ref={section2Ref} className="snap-center overflow-hidden h-screen">
          <div className="flex items-center justify-center h-full bg-green-200">
            <h1 className="text-4xl font-bold">Section 2</h1>
          </div>
        </section>
        <section ref={section3Ref} className="snap-center overflow-hidden h-screen">
          <div className="flex items-center justify-center h-full bg-yellow-200">
            <h1 className="text-4xl font-bold">Section 3</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollSnapPage;