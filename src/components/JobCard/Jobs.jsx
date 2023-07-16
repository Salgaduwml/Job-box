import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";

const data = [
  {
    id: 1,
    title: "Senior Affiliate Marketing Manager",
    time: "1d",
    location: "Colombo",
    desc: "Information & Communication Technology > Engineering - Software",
    image: logo1,
    company: "Tech Hire Ventures",
  },
  {
    id: 2,
    title: "Wordpress Developer",
    time: "1d",
    location: "Colombo",
    desc: "Information & Communication Technology > Engineering - Software",
    image: logo2,
    company: "Tekhqs",
  },
  {
    id: 3,
    title: "Art Director",
    time: "1d",
    location: "Colombo",
    desc: "Marketing & Communications > Digital & Search Marketing",
    image: logo3,
    company: "Redsky Digital",
  },
  {
    id: 4,
    title: "Manager - Student Counsellor",
    time: "2d",
    location: "Colombo",
    desc: "Administration & Office Support > Client & Sales Administration",
    image: logo4,
    company: "ISC Education",
  },
  {
    id: 5,
    title: "UI/UX Engineer Intern",
    time: "2d",
    location: "Colombo",
    desc: "Design & Architecture",
    image: logo5,
    company: "Arthy HQC",
  },
  {
    id: 6,
    title: "Email Marketing Specialist",
    time: "Half Life",
    location: "Colombo",
    desc: "Advertising, Arts & Media > Promotions",
    image: logo6,
    company: "Half Life",
  },
];

const Jobs = () => {
  return (
    <div className="grid grid-cols-2 py-12 gap-10">
      {data.map(({ id, title, time, location, desc, image, company }) => (
        <div
          key={id}
          className="group group/item w-full p-6 bg-white rounded-[10px] hover:bg-blueColor shadow-3xl hover:shadow-lg singleJob"
        >
          <span className="flex justify-start items-center gap-6">
            <img src={image} alt="pwc logo" className="w-[40px]" />
            <span className="flex flex-col gap-1">
              <h1 className="text-[20px] font-medium text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="text-[14px] text-blueColor font-medium block group-hover:text-white">
                {company}
              </span>
            </span>
            <span className="flex justify-between items-center gap-1 text-[#ccc] ml-auto">
              <BiTimeFive />
              {time}
            </span>
          </span>
          <hr className="my-6" />
          <p className="text-[#959595] text-[16px] group-hover:text-white">
            {desc}
          </p>
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              <CiLocationOn className="text-[25px] text-[#ccc] icon" />
              <h6 className="text-[#ccc]">{location}</h6>
            </div>

            <button
              className="border-[1px] rounded-md border-blueColor block py-[12px] px-[20px] text-[16px] text-blueColor group-hover:bg-white
         group-hover/item:text-textColor"
            >
              Apply now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
