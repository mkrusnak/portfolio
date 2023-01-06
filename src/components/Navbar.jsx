import { BsFillMoonStarsFill } from "react-icons/bs";
import resume from "../assets/Maksym Rusnak resume.pdf";
import { useState } from "react";

const Navbar = () => {



    // const [darkMode, setDarkMode] = useState(false);


    return (
        <>
        <nav className="p-5 pt-10 mb-10 flex justify-between sticky top-0 z-50 backdrop-blur-sm">
        <h1 className="text-xl font-burtons">Hello, world!</h1>
        <ul className="flex flex-wrap items-center">
          <li>
            
            {/* <BsFillMoonStarsFill
              onClick={() => {
                setDarkMode(!darkMode);
                console.log("ok");
              }}
              className="cursor-pointer"
            /> */}
          </li>
          <li>
            
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
              href="https://github.com/mkrusnak"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
              href="https://www.linkedin.com/in/mkrusnak"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
              href="#projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
      </>
    )
}

export default Navbar;