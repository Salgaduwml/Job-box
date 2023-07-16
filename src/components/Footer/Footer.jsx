import React from "react";

const Footer = () => {
  return (
    <div className="p-[5rem] mb-4 bg-blueColor rounded-[10px] grid gap-8 grid-cols-5 m-auto items-start justify-center">
      <div>
        <div>
          <h1 className="text-[25px] text-white logo pb-[1.5rem]">
            <strong>Job</strong> box
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-[.7] leading-6">
          We always help our seekers find the best jobs and companies find the
          best candidates
        </p>
      </div>
      <div></div>
      <div className="grid">
        <span className="text-[18px] font-medium pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="text-[18px] font-medium pb-[1.5rem] text-white">
          Product
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Pricing</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Integrations
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="text-[18px] font-medium pb-[1.5rem] text-white">
          Legal
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Terms of Service
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Privacy Policy
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">GDPR</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
