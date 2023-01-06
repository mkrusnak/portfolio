import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import "./App.css";
import photo from "../src/assets/1521156606.svg";
import design from "../src/assets/pngaaa.com-2260683.png";
import code from "../src/assets/pngfind.com-random-png-24642.png";
import consultation from "../src/assets/Sale banner design Free PNG - 480x480.png";
import pic1 from "../src/assets/1e16ed09.jpeg";
import pic2 from "../src/assets/Screen Shot 2023-01-04 at 4.10.06 PM.png";
import resume from "../src/assets/Maksym Rusnak resume.pdf";
import backgroundImg from "../src/assets/dunes.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-30 md:px-30  lg:px-40 dark:bg-gray-900">
          <nav className="p-10 mb-10 flex justify-between sticky top-0 z-50 backdrop-blur-sm">
            <h1 className="text-xl font-burtons">Hello, world!</h1>
            <ul className="flex items-center">
              <li>
                {" "}
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                    console.log("ok");
                  }}
                  className="cursor-pointer"
                />{" "}
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href={resume}
                  target="_blank"
                >
                  Resume
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href="https://github.com/mkrusnak"
                  target="_blank"
                >
                  Github
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href="https://www.linkedin.com/in/mkrusnak"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                  href="#projects"
                >
                  Projects
                </a>{" "}
              </li>
            </ul>
          </nav>

          {/* <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'> */}
          <section className=" min-h-screen ">
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

            <div className="text-center p-10 pt-30">
              {/* <h2 className='text-5xl py-2 font-medium md:text-6xl'> I am</h2> */}
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                {" "}
                Maksym Rusnak
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                <span className="text-teal-600">Ful-stack</span> software
                developer
              </h3>
              <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                {" "}
                Strong professional driven by a desire to contribute and make a
                difference. I enjoy working on complex things, connecting dots
                together and building the full picture from the ground up
              </p>
            </div>

            {/* <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
<AiFillTwitterCircle />
<AiFillYoutube />
  <AiFillLinkedin />
</div>

<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>

<img src={photo} />


</div> */}
          </section>

          <section id="projects">

<h1 className="text-center text-5xl text-gray-700">Projects</h1>

          <div className="">

<div className='text-center flex max-w-6xl min-w-fit shadow-lg p-10 rounded-xl m-10  dark:bg-white  ' >





  <div className="object-center static" >
    <img
      className="rounded-lg object-cover static m-2 w-100 h-100"
      src={pic1}
    />
    </div>

    <div className="p-20">
      <h1 className=" text-lg">Inline Post</h1>
      <h4>Car enthusiast forum</h4>
      <ul>
        <li>
          • Single page application developed using MongoDB,
          ExpressJs, React and NodeJs
        </li>
        <li>
          • Developed REST API with ability to CRUD models on the
          frontend
        </li>
        <li>
          • Designed Authentication middleware using JSON Web
          Token and bcryptJs to handle passwords
        </li>
        <li>
          • Used JWT Payload to set up admin role and protect the
          routes
        </li>
      </ul>
    </div>


    <div className="object-center static" >
    <img
      className="rounded-lg object-cover static m-2 w-100 h-100"
      src={pic1}
    />
    </div>

    <div className="p-20">
      <h1 className=" text-lg">Inline Post</h1>
      <h4>Car enthusiast forum</h4>
      <ul>
        <li>
          • Single page application developed using MongoDB,
          ExpressJs, React and NodeJs
        </li>
        <li>
          • Developed REST API with ability to CRUD models on the
          frontend
        </li>
        <li>
          • Designed Authentication middleware using JSON Web
          Token and bcryptJs to handle passwords
        </li>
        <li>
          • Used JWT Payload to set up admin role and protect the
          routes
        </li>
      </ul>
    </div>



    




  </div>
</div> 




</section>




           
            

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
        

          <section>
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
