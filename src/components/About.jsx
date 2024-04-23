import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { max } from "three/examples/jsm/nodes/Nodes.js";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" id="about">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-green-700 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-lg"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white-100 text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`mt-2 ${styles.sectionHeadText}`}>About WMCC</h2>{" "}
        {/* Adjusted margin-top */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-green-900 text-[20px] leading-[30px]"
      >
        WMCC serves as a vital platform for fostering dialogue, sharing
        insights, and mobilizing stakeholders towards sustainable solutions. By
        bringing together industry leaders, policymakers, innovators, and other
        stakeholders, KWMC aims to address the multifaceted challenges of waste
        management comprehensively. WMCC serves as a vital platform for
        fostering dialogue, sharing insights, and mobilizing stakeholders
        towards sustainable solutions. By bringing together industry leaders,
        policymakers, innovators, and other stakeholders, KWMC aims to address
        the multifaceted challenges of waste management comprehensively. <br />
      </motion.p>

      <div className="mt-20">
        <h2 className={styles.sectionHeadText}>Conference Highlights</h2>
        <br />
        {/* <p className="text-black text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, a.
          Eveniet esse perferendis voluptatibus sit quisquam. Commodi ad rem
          quibusdam et ab vitae magnam praesentium totam, nesciunt voluptatum
          quia dolorem.
        </p> */}
        <p className="text-black text-[20px] leading-[30px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, a.
          Eveniet esse perferendis voluptatibus sit quisquam. Commodi ad rem
          quibusdam et ab vitae magnam praesentium totam, nesciunt voluptatum
          quia dolorem.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <button
        onClick={() => navigate("/highlights")}
        className="mt-20 text-green-600 hover:cursor-pointer bg-white p-2 border-r-2"
      >
        See more...
      </button>
      <button
        onClick={() => navigate("/highlights")}
        className="mt-20 text-green-600 hover:cursor-pointer bg-white p-2 border-r-2"
      ></button>
    </>
  );
};

export default SectionWrapper(About, "about");
