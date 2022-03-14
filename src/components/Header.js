import React from "react";

function Header() {
  return (
    <div className="bg-neutral-300 p-6 flex flex-col items-start justify-between h-[75vh] sm:h-[85vh] lg:h-[88.2vh] xl:h-[90vh]">
      <div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl max-w-min">
          FRONTEND DEVELOPER
        </h1>
      </div>
      <div className="self-end">
        <h1 className="animate-moveInLeft text-4xl sm:text-6xl  lg:text-7xl xl:text-8xl max-w-min text-left">
          GHAZALEH NIAZI
        </h1>
      </div>
    </div>
  );
}

export default Header;
