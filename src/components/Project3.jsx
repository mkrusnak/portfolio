import Project3Logos from "./Project3Logos";
import project3Pic from "../assets/eduardo-goody-hP9S-xsS2WM-unsplash-1.jpeg";
import Project3Links from "./Project3Links";

const Project3 = () => {
  return (
    <div
      className="text-left
       mb-10
        bg-gradient-to-r from-purple-100 via-yellow-50 to-green-50
         flex-col max-w-6xl min-w-fit shadow-xl p-6  rounded-xl m-6 md:flex-row lg:flex xl:flex  dark:bg-white  "
    >
      <div className="object-center self-center static">
        <img
          className="rounded-lg object-cover  m-2 w-100 h-100"
          src={project3Pic}
        />
      </div>

      <div className="p-1 md:p-10 md:pt-5 flex-col ">
        <h1 className="text-center pb-3 text-gray-800 text-4xl font-burtons ">
          Save the Bees
        </h1>
        <h4 className="italic py-2 indent-1 text-lg text-gray-800">
          Help the Bee collect flowers until the time runs out. Make sure you{" "}
          <span className="font-bold">don't get hit by missile </span>🚀 in the
          process.
        </h4>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>• Canvas 2D game built using HTML, CSS, Javascript</li>
          <li>
            • Used DOM Manipulation so user can control the game with mouse
            imputs
          </li>
          <li>• Game process built using Async/await function</li>
          <li>
            <span className=" font-bold">Tip:</span> click the mouse past the
            flower you are trying to collect and Bee will fly faster.
          </li>
        </ul>

        <Project3Logos />

        <Project3Links />
      </div>
    </div>
  );
};

export default Project3;
