import React from "react";

function SignleCredit() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[0.8rem] text-white">Artist name</span>
          <span>Main Artist</span>
        </div>
        <button className="px-3 py-1 rounded-full text-white  ring-1 ring-grayColor">
          Follow
        </button>
      </div>
    </div>
  );
}

export default SignleCredit;
