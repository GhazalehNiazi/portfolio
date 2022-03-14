import React from "react";
import project1 from "../assests/project1-tumbnail.png";
import Project from "./Project";
import project2 from "../assests/project2-tumbnail.png";
function Projects() {
  return (
    <div className="bg-zinc-900 p-5  text-slate-200">
      <h1 className="text-3xl sm:text-5xl pb-2 sm:py-8  flex justify-center ">selected Projects</h1>
      <div>
        <Project
          img={project1}
          time="2021-present"
          address="https://GhazalehNiazi.github.io/restaurant/"
          number="1/4"
          name="Restarant app"
        />
        <Project
          img={project2}
          time="2021-present"
          address="https://GhazalehNiazi.github.io/weather-app/"
          number="2/4"
          name="Restarant app"
        />
        <Project
          img={project1}
          time="2021-present"
          address="https://GhazalehNiazi.github.io/restaurant/"
          number="3/4"
          name="Restarant app"
        />
        <Project
          img={project2}
          time="2021-present"
          address="https://GhazalehNiazi.github.io/weather-app/"
          number="4/4"
          name="Restarant app"
        />
      </div>
    </div>
  );
}

export default Projects;
