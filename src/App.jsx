import { useState } from "react";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import ContactForm from "./components/ContactForm";
import "./App.css";
import Navbar from "./components/Navbar";
import MyLinks from "./components/MyLinks";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white  px-30 md:px-30  lg:px-40 dark:bg-gray-900">
          <Navbar />

          <section className="">
            <div className="text-center rounded-3xl   bgrnd  min-h-screen p-10 pt-2">
              <div className="pt-16 md:pt-20">
                <h1 className="text-5xl tracking-wide py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500  to-blue-400 font-burtons  md:text-7xl">
                  Maksym Rusnak
                </h1>
                <h2 className="text-3xl text-gray-700 font-burtons py-2 md:text-3xl">
                  <span className="  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500  to-blue-400 ">
                    Full-stack
                  </span>{" "}
                  software developer
                </h2>
                <MyLinks />
                <p className="text-3xl py-5 font-burton indent-3 italic leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto">
                  Strong professional driven by desire to contribute and make a
                  difference. I enjoy working on complex things, connecting dots
                  together and building a full picture from the ground up.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h1
              id="projects"
              className="text-center  font-burtons text-5xl text-gray-700"
            >
              Projects
            </h1>

            <Project1 />

            <Project2 />

            <Project3 />
          </section>

          <ContactForm />
        </main>
      </div>
    </div>
  );
}

export default App;
