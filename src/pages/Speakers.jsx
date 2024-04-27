import { speakersPanels } from "../constants";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const SpeakerCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      id="speakers"
      className="mb-16 mr-16"
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
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};

const Panels = (panel) => {
  console.log(panel);
  const data = panel.panel.data || [];
  const leftCards = data.slice(0, 2);
  const rightCards = data.slice(2, 4);
  const middleCard = data.slice(4, 5);

  return (
    <div>
      <h2 className={styles.sectionHeadText}>Panel {panel.panel.number}</h2>
      <p className="text-black">{panel.panel.topic || "topic"}</p>
      <p className="text-black">{panel.panel.objective || "objective"}</p>
      <p className="text-black">{panel.panel.outcome || "outcome"}</p>
      <div className="mt-20 flex justify-center">
        <div className="flex flex-col items-center">
          {leftCards.map((panelData, index) => (
            <SpeakerCard
              key={`speaker-panel-left-${index}`}
              index={index}
              {...panelData}
            />
          ))}
        </div>
        <div className="flex flex-col items-center mt-60">
          {middleCard.map((panelData, index) => (
            <SpeakerCard
              key={`speaker-panel-middle-${index}`}
              index={index}
              {...panelData}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          {rightCards.map((panelData, index) => (
            <SpeakerCard
              key={`speaker-panel-right-${index}`}
              index={index}
              {...panelData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  const panel1Data = speakersPanels.find((data) => data.number === 1);

  return (
    <>
      <div className="py-10 bg-white text-white flex flex-col justify-center items-center">
        <div className="mt-10">
          <h2 className={styles.sectionHeadText}>Speakers</h2>
        </div>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quam
          reprehenderit. Quo esse molestiae reiciendis libero voluptates
          officiis dignissimos iusto? Odit deserunt odio dolore molestias
          aperiam porro incidunt temporibus eum.
        </p>
      </div>
      <div className="p-10 h-2vh bg-white flex flex-col justify-center items-center ">
        {panel1Data && (
          <div className="panel-container text-center bg-gray-200 p-20 pr-6 rounded-md">
            <Panels panel={panel1Data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Speakers;

// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { useNavigate } from "react-router-dom";

// const ProjectCard = ({ index, name, description, image }) => {
//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       id="speakers"
//     >
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-white p-5 rounded-2xl sm:w-[280px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-black font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <div>
//         <motion.div variants={textVariant()} className="text-center">
//           <h2 className="text-white font-extrabold md:text-[60px]">
//             Our Speakers
//           </h2>
//         </motion.div>

//         <div className="w-full">
//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="mt-3 text-secondary text-[17px] leading-[30px] text-center text-white "
//           >
//             Join us on this revolutionary discussion about Climate Change and
//             Waste Management.
//           </motion.p>
//         </div>
//         <div className="py-8">
//           <div className="grid grid-cols-4 gap-10">
//             {projects.map((project, index) => (
//               <ProjectCard
//                 key={`project-${index}`}
//                 index={index}
//                 {...project}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="py-5 flex items-center justify-center">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => navigate("/speakers")}
//         >
//           See all..
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Works, "");
