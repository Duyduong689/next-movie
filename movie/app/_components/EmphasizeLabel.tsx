import React from "react";

function EmphasizeLabel() {
  return (
    <div className=" mt-[200px] text-white z-10">
      <div className="today flex flex-row items-center italic uppercase">
        <hr className="w-[11%]" />
        <span className=" text-[14px]">Today</span>
      </div>
      <div className="soon flex flex-row items-center italic uppercase mt-[9px]">
        <hr className="w-[13%]" />
        <span className=" text-[20px]">Soon</span>
      </div>
    </div>
  );
}

export default EmphasizeLabel;
