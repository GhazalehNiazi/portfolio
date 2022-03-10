import React from "react";

function Project(props) {
  return (
    <div className="flex min-h-fit mb-5 md:mb-20">
      <div className="flex flex-col ">
        <div className="flex  flex-col justify-between px-1 py-5 md:flex-row">
          <h2 className="order-0 text-md sm:text-lg">{props.number}</h2>{" "}
          <a href={props.address} target="_blank" className="text-l text-violet-400 order-2 sm:text-xl lg:text-2xl">
            {props.address}
          </a>{" "}
          <h2 className="text-md sm:text-lg md:order-3">{props.time}</h2>
        </div>
        <div className=" w-11/12 self-center ">
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
}

export default Project;
