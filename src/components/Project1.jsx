import Project1Logos from "./Project1Logos";
import project1Pic from "../assets/1e16ed09.jpeg";
import Project1Links from "./Project1Links";

const Project1 = () => {

    return(

       

        <div className="
        my-20
        bg-gradient-to-r from-red-100 via-gray-50 to-blue-50
        text-left flex-col max-w-6xl min-w-fit shadow-xl p-6  rounded-xl m-6 md:flex-row lg:flex xl:flex  dark:bg-white  ">
             
        <div className="object-center  self-center  static">
          <img
            className="rounded-lg  object-cover  m-2 w-100 h-100"
            src={project1Pic}
          />
        </div>

        <div className="p-1 md:p-10 md:pt-5  flex-col ">
          <h1 className="text-center pb-3 text-4xl font-burtons ">Inline Post</h1>
          <h4 className="italic py-2 text-xl text-gray-700">Car enthusiast forum with ability to post, comment, send private messages, list cars for sale and more.</h4>
          <ul className="space-y-2">
            <li>
              • Single page application developed using MongoDB,
              ExpressJs, React and NodeJs
            </li>
            <li>
              • Built REST API and implemented ability to CRUD models on the
              frontend
            </li>
            <li>
              • Designed Authentication middleware using JSON Web Token
              and bcryptJs to handle passwords
            </li>
            <li>
              • Used JWT Payload to set up admin role and protect the
              routes
            </li>
          </ul>

<Project1Logos />

<Project1Links />

        </div>
      </div>

        
    )
}

export default Project1;