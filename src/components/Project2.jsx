import Project2Logos from "./Project2Logos";
import project2Pic from "../assets/project2Pic.jpg";
import Project2Links from "./Project2Links";



const Project2 = () => {



    return(

        <div className="text-left 
        my-20        bg-gradient-to-r from-gray-100 via-orange-50 to-green-50
         flex-col max-w-6xl min-w-fit shadow-xl p-6  rounded-xl m-6 md:flex-row lg:flex xl:flex  dark:bg-white  ">
             
       

        <div className="p-1 md:p-10 md:pr-5 md:pt-5 flex-col ">
          <h1 className="text-center pb-3 text-4xl font-burtons ">Find a Friend</h1>
          <h4 className="italic py-2 text-xl text-gray-700">Pet adoption service that helps you find animals available for adoption and more.</h4>
          <ul className="space-y-2">
            <li>
              • Built using ExpressJs, NodeJs, Axios, MongoDB and HandlebarsJs
            </li>
            <li>
              • Implemented 3rd party REST API using Axios to get data and filter it based on users input
            </li>
            <li>
              • Connected MongoDB to give user the ability to CRUD models
            </li>
            <li>
              • Set up authentication using Express-Session and bcryptJs to hash passwords
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