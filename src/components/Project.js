import React from "react";

function Project(props) {
  return (
    <div className="flex min-h-fit mb-5 md:mb-20 lg:px-38 xl:px-40">
      <div className="flex flex-col ">
        <div className="flex  flex-col justify-evenly px-1 py-5 md:flex-row sm:pb-10">
          <h2 className="order-0 text-md sm:text-lg md:text-2xl">
            {props.number}
          </h2>{" "}
          <a
            href={props.address}
            target="_blank"
            className="text-sm text-violet-400 order-2 sm:text-xl md:text-2xl"
          >
            {props.address}
          </a>{" "}
          <h2 className="text-md sm:text-lg md:order-3 md:text-2xl">
            {props.time}
          </h2>
        </div>
        <div className=" w-11/12 sm:w-9/12 self-center animate-moveInLeft cursor-pointer">
          <img src={props.img} />
          <div className="pt-3  sm:text-lg text-violet-400 text-xs">more detail</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
