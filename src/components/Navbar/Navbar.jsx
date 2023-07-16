import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 navbar">
      <div className="logoDiv">
        <h1 className="text-[32px] text-blueColor logo">
          <span className="font-semibold">Job</span> box
        </h1>
      </div>
      <div className="flex items-center gap-8 menu">
        <li className="text-[#6f6f6f] hover:text-blueColor menuList">
          Companies
        </li>
        <li className="text-[#6f6f6f] hover:text-blueColor menuList">About</li>
        <li className="text-[#6f6f6f] hover:text-blueColor menuList">
          Contact
        </li>
        <div className="flex gap-4 items-center">
          <button className="py-3 px-6 border rounded-[8px] border-blueColor text-blueColor hover:bg-blueColor hover:text-white">
            Employer
          </button>
          <button className="py-3 px-6 border rounded-[8px] border-blueColor bg-blueColor text-white hover:bg-[#5F9AF7]">
            Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
