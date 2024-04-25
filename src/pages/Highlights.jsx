import { styles } from "../styles";

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
          className="bg-green-900 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-lg"
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

const Highlights = () => {
  return (
    <div className="mt-20 p-10 h-2vh bg-white">
      <h2 className={styles.sectionHeadText}>Highlights</h2>
      <p className="text-black text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        sed nobis vel. Provident, nulla in esse maxime tenetur reiciendis
        voluptas ea autem ullam doloremque magnam saepe iure repellendus
        corrupti quis.
      </p>
    </div>
  );
};

export default Highlights;
