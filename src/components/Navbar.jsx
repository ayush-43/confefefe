import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useNavigate } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState(""); // Define the active state
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  const scrollToElement = (id) => {
    const element = document.getElementById(`${id}`);
    element?.scrollIntoView();
  };

  const onLinkClick = (linkId) => {
    switch (linkId) {
      case "about":
      case "schedule":
      case "sponsors":
      case "contact":
      case "speakers": {
        if (location.pathname !== "/") {
          navigate("/");
        }
        setTimeout(() => scrollToElement(linkId), 0);
        break;
      }
      case "home": {
        if (location.pathname === "/") {
          setTimeout(() => scrollToElement("wmccmain"), 0);
        } else {
          navigate("/");
        }
        break;
      }
      default: {
        navigate(`/${linkId}`);
        break;
      }
    }
  };

  return (
    <nav className={`w-full items-center fixed z-20 bg-green-800`}>
      {/* <div className={`bg-white text-black-100 w-full flex justify-between`}>
        <div className="flex gap-5 py-1" style={{ height: "15px" }}>
          <FaFacebookF className="text-xl" />
          <FaInstagram className="text-xl" />
          <CiMail className="text-xl" />
        </div>
        <div className="flex items-center gap-5">
          <IoCallOutline className="text-lg" />
          <p>9847012345</p>
        </div>
      </div> */}
      <div
        className={`w-full flex justify-between items-center max-w-8xl mx-auto py-4  ${styles.paddingX}`}
      >
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={"/src/assets/logomain.png"}
            alt="logo"
            className="h-15 w-15 object-contain cursor-pointer"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer tracking-wider">
            Waste Management & &nbsp;
            <span className="sm:block hidden">Climate Conference</span>
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-white"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <div
                className="hover:text-green-600"
                onClick={() => onLinkClick(link.id)}
              >
                {link.title}
              </div>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <div
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-green-600"
                  >
                    {link.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
