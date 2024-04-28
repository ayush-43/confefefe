/* eslint-disable no-unused-vars */
// Footer.jsx

import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center bg-gray-200 py-4">
        <button
          className="button text-white bg-black w-72 py-6 rounded-2xl text-xl"
          style={{ cursor: "default" }}
        >
          CONTACT US
        </button>
      </div>
      <div>
        <div className="flex gap-16 bg-gray-200 text-black justify-center py-4 text-lg font-bold">
          <div className="flex flex-col gap-3 text-xl">
            <IoCallOutline className="w-full text-black" />
            +977 9847021453
          </div>
          <div className="flex flex-col gap-3 text-xl">
            <CiMail className="w-full text-black" />
            info@gmail.com
          </div>
          <div className="flex flex-col gap-3 text-xl">
            <FaInstagram className="w-full text-black" />
            @company_instagram
          </div>
          <div className="flex flex-col gap-3 text-xl">
            <FaFacebookF className="w-full text-black" />
            @company_facebook
          </div>
        </div>
      </div>
      <div className="text-center text-xl text-white bg-[#166534] py-6 h-full ">
        June 5, 2024 | World Environment Day <br></br>Hotel Soaltee, Kathmandu
        <br></br>
        <br></br>© 2024 WMCC. All rights reserved.
      </div>
    </div>
    // <footer className="bg-gray-300 text-black  h-full mt-2">
    //   <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
    //     <div className="text-center mb-4 w-full">
    //       <div className="w-52 flex justify-center">
    //         <h3 className="rounded-full border border-white px-3 py-3 mb-5 mt-5 text-white bg-black text-xl">
    //           CONTACT US
    //         </h3>
    //       </div>
    // <div className="flex gap-4 mt-6">
    //   <div className="flex">
    //     <IoCallOutline />
    //     +977 9847021453
    //   </div>
    //   <div className="flex">
    //     <CiMail />
    //     info@gmail.com
    //   </div>
    //   <div className="flex">
    //     <FaInstagram />
    //     @company_instagram
    //   </div>
    //   <div className="flex">
    //     <FaFacebookF />
    //     @company_facebook
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // <div className="text-center text-lg text-white bg-[#166534] py-2 h-full mt-6">
    //   June 5, 2024 | World Environment Day <br></br>Hotel Soaltee, Kathmandu
    //   <br></br>
    //   <br></br>© 2024 WMCC. All rights reserved.
    // </div>
    // </footer>
  );
};

export default Footer;
