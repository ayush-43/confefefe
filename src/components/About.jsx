import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { max } from "three/examples/jsm/nodes/Nodes.js";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";
import SliderPage from "./SliderPage";
import Card from "./Card";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full" id="about">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-green-700 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-lg"
//         >
//           <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//           <h3 className="text-white-100 text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };
<Card />;
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <motion.div variants={textVariant()} className="text-center">
          <h2 className="text-green-800 font-black md:text-[60px]">
            About WMCC
          </h2>
          <hr className="border-b-6 border-black w-100 mx-auto mt-1" />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center mt-4">
          <p
            // variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-green-900 text-[20px] leading-[30px] max-w-[100%] pr-3"
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
            comprehensively. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Excepturi officiis minima nesciunt sapiente, perspiciatis
            error ipsa explicabo minus molestiae nam quidem culpa quasi labore
            deserunt tempore accusamus repellendus nostrum necessitatibus.
          </p>
          {/* <div className="max-w-[50%]">
            <img src={carrentImage} alt="About WMCC" className="w-full" />
          </div> */}
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-green-800 font-black md:text-[60px]">
          Conference Highlights
        </h2>
        <hr className="border-b-6 border-black w-1/2 mx-auto mt-1" />

        <p className="mt-4 text-green-900 text-[20px] leading-[30px] justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          veritatis quas. Veritatis, provident dolor, cumque, repellat qui
          praesentium architecto minima tempore quas debitis aut. Incidunt
          inventore voluptas ullam qui dolor quae laborum ducimus porro
          excepturi laboriosam, at, voluptatem nihil impedit obcaecati quas
          voluptatum. Tenetur, aperiam repellendus. Commodi fuga necessitatibus
          dolor. Quae, fugit voluptates. Ipsa cupiditate beatae, quis quia
          officia labore.
        </p>
      </div>
      <div className="py-20">
        <SliderPage />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
