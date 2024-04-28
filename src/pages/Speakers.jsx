import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
// import { OurSpeakers } from "../components";

const ProjectCard = ({ index, name, description, image }) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)} id="speakers">
      <div className="bg-white p-5 rounded-2xl sm:w-[280px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </div>

        <div className="mt-5">
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </div>
      {/* </Tilt> */}
    </div>
  );
};

const OurSpeakers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-between py-24">
      <div>
        <div className="text-center">
          <h2 className="text-white font-extrabold md:text-[60px]">
            Our Speakers
          </h2>
          <hr className="border-b-6 border-white w-48 mx-auto mt-1" />
        </div>

        <div className="w-full">
          <p className="mt-3 text-[17px] leading-[30px] text-center text-white ">
            Join us on this revolutionary discussion about Climate Change and
            Waste Management.
          </p>
        </div>
        <div className="py-8">
          <div className="grid grid-cols-4 gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(OurSpeakers, "");
