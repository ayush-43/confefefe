import { projects } from "../constants";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { github } from "../assets";
import { useNavigate } from "react-router-dom";

const AwardCard = ({
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
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const GreenAwards = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 p-10 h-2vh bg-white">
      <h2 className={styles.sectionHeadText}>Green Awards</h2>
      <p className={styles.heroSubText}>
        bsdk askdaskldaksdhakshdlashdl ahsdl ahmasd mdachod aksdhkashdlasd{" "}
      </p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <AwardCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <button
        onClick={() => navigate("/nominations")}
        className="mt-20 text-green-500 hover:cursor-pointer bg-white p-2 border-r-2"
      >
        Nomination...
      </button>
    </div>
  );
};

export default GreenAwards;
