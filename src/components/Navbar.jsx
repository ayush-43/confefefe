import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useNavigate } from "react-router-dom";

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
    <nav className={`w-full items-center fixed top-0 z-20 bg-green-800`}>
      <div className={`bg-white text-green-900 w-full flex justify-between`}>
        <div className="flex gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-8"
            fill="currentColor"
            style={{ color: "#1877f2" }}
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-10"
            fill="currentColor"
            style={{ color: "#c13584" }}
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-10"
            fill="currentColor"
            style={{ color: "#ea4335" }}
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          {/* <img
            src={"/src/assets/logomain.png"}
            alt="logo"
            className="h-15 w-15 object-contain cursor-pointer"
          />
          <img
            src={"/src/assets/logomain.png"}
            alt="logo"
            className="h-15 w-15 object-contain cursor-pointer"
          />
          <img
            src={"/src/assets/logomain.png"}
            alt="logo"
            className="h-15 w-15 object-contain cursor-pointer"
          /> */}
        </div>
        <div className="flex items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <p>9847012345</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-10"
            fill="currentColor"
            style={{ color: "#ea4335" }}
            viewBox="0 0 24 24"
          >
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full flex justify-between items-center max-w-8xl mx-auto py-5  ${styles.paddingX}`}
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
