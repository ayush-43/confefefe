import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ index, name, description, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      id="speakers"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[280px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>Our Speakers</h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] text-center"
        >
          Join us on this revolutionary discussion about Climate Change and
          Waste Management.
        </motion.p>
      </div>
      <div className="bg-gray-300 px-10 py-8">
        <div className="grid grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/speakers")}
        >
          See all..
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
