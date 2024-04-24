import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { max } from "three/examples/jsm/nodes/Nodes.js";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";
import carrentImage from "../assets/carrent.png";

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
      <div className="flex flex-wrap items-center justify-center">
        <motion.div variants={textVariant()} className="text-center">
          <h2 className={`mt-2 ${styles.sectionHeadText}`}>About WMCC</h2>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center mt-4">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-green-900 text-[20px] leading-[30px] max-w-[50%] pr-3"
          >
            WMCC serves as a vital platform for fostering dialogue, sharing
            insights, and mobilizing stakeholders towards sustainable solutions.
            By bringing together industry leaders, policymakers, innovators, and
            other stakeholders, KWMC aims to address the multifaceted challenges
            of waste management comprehensively. WMCC serves as a vital platform
            for fostering dialogue, sharing insights, and mobilizing
            stakeholders towards sustainable solutions. By bringing together
            industry leaders, policymakers, innovators, and other stakeholders,
            KWMC aims to address the multifaceted challenges of waste management
            comprehensively.
          </motion.p>
          <div className="max-w-[50%]">
            {/* Replace 'imageSrc' with the actual source of your image */}
            <img src={carrentImage} alt="About WMCC" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className={styles.sectionHeadText}>Conference Highlights</h2>

        <p className="mt-4 text-green-900 text-[20px] leading-[30px]">
          WMCC serves as a vital platform for fostering dialogue, sharing
          insights, and mobilizing stakeholders towards sustainable solutions.
          By bringing together industry leaders, policymakers, innovators, and
          other stakeholders, KWMC aims to address the multifaceted challenges
          of waste management comprehensively. WMCC serves as a vital platform
          for fostering dialogue, sharing insights, and mobilizing stakeholders
          towards sustainable solutions. By bringing together industry leaders,
          policymakers, innovators, and other stakeholders, KWMC aims to address
          the multifaceted challenges of waste management comprehensively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/highlights")}
          className="text-green-600 hover:cursor-pointer border-green-600 px-4 py-4 mt-5 font-bold"
        >
          See more...
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
