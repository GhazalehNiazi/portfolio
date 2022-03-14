import React from "react";

function Navbar() {
  return (
    <div className="bg-neutral-300 text-gray-800 min-h-max p-5 flex flex-row justify-between">
      <ul className="flex flex-row justify-between ">
        <li className="mx-1 ">
          <a >Ghazale Niazi</a>
        </li>
        {/* <li><a></a></li>*/}
        <li>
          <a>based in Tehran, Iran</a>
        </li>
      </ul>
      <ul className="flex flex-row">
        <li >
          <a >Projects,</a>
        </li>
        <li>
          <a>About,</a>
        </li>
        <li>
          <a>Contact,</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
