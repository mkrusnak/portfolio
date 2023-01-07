import Project2Logos from "./Project2Logos";
import project2Pic from "../assets/project2Pic.jpg";
import Project2Links from "./Project2Links";



const Project2 = () => {



    return(

        <div className="text-left flex-col max-w-6xl min-w-fit shadow-lg p-6  rounded-xl m-6 md:flex-row lg:flex xl:flex  dark:bg-white  ">
             
       

        <div className="p-1 md:p-10 md:pr-5 md:pt-5 flex-col ">
          <h1 className="text-center pb-3 text-4xl font-burtons ">Find a Friend</h1>
          <h4 className="italic py-2 text-xl text-gray-700">Pet adoption service that helps you find animals available for adoption and more.</h4>
          <ul className="space-y-2">
            <li>
              • Single page application developed using MongoDB, ExpressJs, React and NodeJs
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

<Project2Logos />

<Project2Links />

        </div>


        <div className="object-center self-center static">
          <img
            className="rounded-lg  object-cover  m-2 w-100 h-100"
            src={project2Pic}
          />
        </div>



      </div>

    )
}

export default Project2;