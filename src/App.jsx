import { useState } from "react";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import ContactForm from "./components/ContactForm";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import "./App.css";
import Navbar from "./components/Navbar";
import MyLinks from "./components/MyLinks";
import photo from "../src/assets/webdev.svg";




import backgroundImg from "../src/assets/PngItem_409754.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white  px-30 md:px-30  lg:px-40 dark:bg-gray-900">
     
<Navbar  />
          {/* <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> */}
          <section  className=" ">
            {/* <nav className='p-10 mb-10 flex justify-between sticky top-0 z-50'>
<h1 className='text-xl font-burtons'>Navbar menu</h1>
<ul className='flex items-center'>
  <li> <BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)
  console.log('ok')}} className='cursor-pointer' /> </li>
  <li>   <a className='bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' href={resume} target="_blank">Resume</a>  </li>
  <li>   <a className='bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' href='https://github.com/mkrusnak' target="_blank">Github</a>  </li>
  <li>   <a className='bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' href='https://www.linkedin.com/in/mkrusnak' target="_blank">LinkedIn</a>  </li>
  <li>   <a className='bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' href='#projects'>Projects</a>  </li>
</ul>
</nav> */}

            <div className="text-center bg-backgroundImg  bg-opacity-75   min-h-screen p-10 pt-30">
            <div  className="">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                {" "}
                Maksym Rusnak
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                <span className="text-gray-700">Full-stack</span> software
                developer
              </h3>
              <MyLinks />
              <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                {" "}
                Strong professional driven by a desire to contribute and make a
                difference. I enjoy working on complex things, connecting dots
                together and building the a picture from the ground up
              </p>
              </div>
           
              {/* <div className='relative mx-auto  w-100 h-100 overflow-hidden md:h-96 md:w-96'>

<img className="grayscale" src={photo} />


</div>  */}

            </div>

            {/* <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
<AiFillTwitterCircle />
<AiFillYoutube />
  <AiFillLinkedin />
</div>

*/}


          </section>

          <section >
            <h1 id="projects"  className="text-center mt-28 font-burtons text-5xl text-gray-700">Projects</h1>


<Project1 />


        <Project2 />



        <Project3 />

       
          </section>


<ContactForm />




          {/* <div >
    <h1 className='text-3xl py-1 text-center'>Projects i worked on</h1>
    <p className='text-md py-2 leading-8 text-gray-800'>this is all the <span className='text-teal-500'>projects</span> that i worked
     on they are all listed here</p>



     <p className='text-md py-2 leading-8 text-gray-800'>TESTIN gow this is all qowrkidgsdng jjhfsaj ewj <span className='text-teal-500'>projects</span> that i worked
     on they are all listed here this is second section to fill more info</p>


  </div>



<div className='lg:flex gap-10'>

  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <img className='mx-auto' src={design} width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2' >Find a Friend</h3>
    <p className='py-2'>service that lets you find a pets available for adoption statewide</p>
    <h4 className='py-4 text-teal-600'>technologies i used</h4>
    <p  className='text-gray-800 py-1'>nodejs</p>
    <p className='text-gray-800 py-1'>handlebars</p>
    <p className='text-gray-800 py-1'>express</p>
  </div>

  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <img className='mx-auto' src={code} width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2' >Find a Friend</h3>
    <p className='py-2'>service that lets you find a pets available for adoption statewide</p>
    <h4 className='py-4 text-teal-600'>technologies i used</h4>
    <p  className='text-gray-800 py-1'>nodejs</p>
    <p className='text-gray-800 py-1'>handlebars</p>
    <p className='text-gray-800 py-1'>express</p>
  </div>


  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <img className='mx-auto' src={consultation} width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2' >Find a Friend</h3>
    <p className='py-2'>service that lets you find a pets available for adoption statewide</p>
    <h4 className='py-4 text-teal-600'>technologies i used</h4>
    <p  className='text-gray-800 py-1'>nodejs</p>
    <p className='text-gray-800 py-1'>handlebars</p>
    <p className='text-gray-800 py-1'>express</p>
  </div>



</div> */}

          {/* <section>
            <div>
              <h3 className="text-3xl py-1">Portfolio</h3>

              <p className="text-md py-2 leading-8 text-gray-800">
                Sed ut perspiciatis unde omnis{" "}
                <span className="text-teal-500">voluptatem</span> iste natus
                error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis
              </p>

              <p className="text-md py-2 leading-8 text-gray-800">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut <span className="text-teal-500">wazzzzuuuuppp</span> fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt
              </p>
            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover w-100 h-100"
                  src={pic1}
                />
              </div>

              <div className="basis-1/3  flex-1">
                <img
                  className="rounded-lg object-cover w-100 h-100"
                  src={pic2}
                />
              </div>

              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover w-100 h-100"
                  src={pic2}
                />
              </div>

              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover w-100 h-100"
                  src={pic2}
                />
              </div>
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}

export default App;
