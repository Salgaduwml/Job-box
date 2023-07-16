import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="grid gap-10 bg-lightBlue rounded-[10px] p-12 searchDiv">
      <form action="">
        <div className="flex justify-between items-center rounded-[8px] bg-white gap-10 p-4 shadow-lg shadow-greyIsh">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search job here..."
            />
            <AiOutlineCloseCircle className="text-[25px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by comany..."
            />
            <AiOutlineCloseCircle className="text-[25px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by location..."
            />
            <AiOutlineCloseCircle className="text-[25px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="bg-blueColor h-[48px] px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400">
            Search
          </button>
        </div>
      </form>

      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-smibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contain</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-smibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part time</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-smibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer">Clear all</span>
      </div>
    </div>
  );
};

export default Search;
