import React from "react";

import simplicity from "../../Assets/simplycity.png";
import believe from "../../Assets/believe.png";

const data = [
  {
    id: 1,
    title: "Simplicity",
    image: simplicity,
    desc: "Things being made beautiful simple are at the heart of everything we do",
  },
  {
    id: 2,
    title: "Believe",
    image: believe,
    desc: "We believe in making things better for everyon, even if just a little bit",
  },
  {
    id: 3,
    title: "Trust",
    image: simplicity,
    desc: "We work on the basis of creating trust which can be nurtured through authenticity and transparency",
  },
];

const Value = () => {
  return (
    <div className="my-[6rem]">
      <h1 className="text-textColor text-[25px] pb-[3rem] w-[400px] block font-semibold m-auto text-center">
        Values that holds us true and to account
      </h1>
      <div className="grid gap-10 grid-cols-3 items-center">
        {data.map(({ id, title, image, desc }) => (
          <div key={id} className="rounded-[10px] p-6 hover:bg-lightBlue">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blueColor  h-[48px] w-[48px] flex items-center justify-center">
                <img src={image} alt="" />
              </div>
              <span className="text-[18px] text-textColor font-semibold">
                {title}
              </span>
            </div>
            <p className="text-[16px] text-textColor opacity-[.7] py-[1rem]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;
