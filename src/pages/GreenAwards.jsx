import { projects } from "../constants";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { github } from "../assets";
import { useNavigate } from "react-router-dom";
import { services } from "../constants";

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
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center z-10 -mt-6">
          {index + 1}
        </div>
      </div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full mt-6"
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

const GreenAwards = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center mt-20 p-10 bg-white">
        <div>
          <div className="text-center mt-6">
            <h2 className={styles.sectionHeadText}>Green Awards</h2>
          </div>
          <p className="text-black text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto
            qui ipsum vero libero, maxime voluptatem et magnam expedita.
            Ratione, iusto. Repudiandae, quos corrupti perferendis perspiciatis
            placeat eum dolore molestias.{" "}
          </p>
        </div>
        <div className="mt-20 gap-10 grid grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <div className="justify-center">
          <button
            onClick={() => navigate("/nominations")}
            className="bg-green-600 text-white font-bold text-xl py-3 px-5 rounded mt-12"
          >
            Apply For Nomination
          </button>
        </div>
      </div>
    </>
  );
};

export default GreenAwards;
