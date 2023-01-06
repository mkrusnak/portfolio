import TechLogos from "./TechLogos";
import project1Pic from "../assets/1e16ed09.jpeg";
import ProjectLinks from "./ProjectLinks";

const ProjectThree = () => {



    return(


              <div className="text-left  flex-col max-w-6xl min-w-fit shadow-lg p-6  rounded-xl m-6 md:flex-row lg:flex xl:flex   dark:bg-white  ">
             
        <div className="object-center static">
          <img
            className="rounded-lg  object-cover  m-2 w-100 h-100"
            src={project1Pic}
          />
        </div>

        <div className="p-1 md:p-10 flex-col ">
          <h1 className="text-center pb-3 text-4xl ">Inline Post</h1>
          <h4 className="italic py-2 text-xl text-gray-700">Car enthusiast forum</h4>
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

<TechLogos />

<ProjectLinks />

        </div>
      </div>
    )
}

export default ProjectThree;