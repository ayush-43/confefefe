import { motion } from "framer-motion";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
import Footer from "./Footers";

const Hero = () => {
  const navigate = useNavigate();
  const onNominationClick = () => {
    navigate("/greenawards");
  };

  return (
    <section
      className={`relative w-full h-screen flex flex-col justify-center items-center`}
      id="wmccmain"
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#22c55e]" /> */}
          {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        </div>

        <div className="text-center mt-0">
          <h1 className={`${styles.heroHeadText} text-white lg`}>
            Waste Management &{" "}
            <span className="text-[#22c55e]">Climate Conference</span>
          </h1>
          <br />
          <hr className="border-b-2 border-white w-100" />
          <br />
          <p className="font-bold text-2xl mt-2 text-white-100">
            Nepal's Biggest Waste Management <br className="sm:block hidden" />
            and Climate Conference.
          </p>
          <button
            className="bg-green-600 text-white font-bold text-xl py-3 px-5 rounded mt-6 mt-35"
            onClick={onNominationClick}
          >
            Apply for Nomination
          </button>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
