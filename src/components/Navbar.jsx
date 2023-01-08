import { BsFillMoonStarsFill } from "react-icons/bs";
import resume from "../assets/Maksym Rusnak resume.pdf";
import { useState } from "react";
import resumeLogo from '../assets/process-resume.svg'
import emailLogo from '../assets/—Pngtree—vector email icon_3876640.png'
import projectsLogo from '../assets/Noun_Project_coding_icon_2752876.svg'


const Navbar = () => {



    // const [darkMode, setDarkMode] = useState(false);


    return (
        <>
        <nav className="p-3 pb-3   shadow-md rounded-md  sticky top-0 z-50 backdrop-blur-sm">
    
        <ul className="flex flex-wrap justify-center items-center">
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
              href={resume}
              target="_blank"
            >
          <button
          type="button"
          className="text-gray-900  bg-white-  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 "
        >
         <img src={resumeLogo} alt="resumeLogo" className="w-8 h-8 mr-1 " />
          Resume
        </button>
        </a>
          </li>


          <li>
          <a
              href="#contact"
            >
          <button
          type="button"
          className="text-gray-900   hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 "
        >
         <img src={emailLogo} alt="emailLogo" className="w-8 h-8 mr-1 " />
          Contact
        </button>
        </a>
          </li>
         


          <li>
          <a
              href="#projects"
              
            >
          <button
          type="button"
          className="text-gray-900 hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 "
        >
         <img src={projectsLogo} alt="emailLogo" className="w-8 h-7 mr-2 " />
          Projects
        </button>
        </a>
          </li>
         
          



        </ul>
      </nav>
      </>
    )
}

export default Navbar;