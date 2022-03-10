import React from "react";

function Header() {
  return (
    <div className="bg-neutral-300 p-6 flex flex-col items-start justify-between h-[88vh]">
      <div>
        <h1 className="text-5xl sm:text-7xl  xl:text-8xl max-w-min">
          FRONTEND DEVELOPER
        </h1>
      </div>
      <div className="self-end">
        <h1 className="text-5xl sm:text-7xl xl:text-8xl max-w-min text-left">
          GHAZALE NIAZI
        </h1>
      </div>
    </div>
  );
}

export default Header;
