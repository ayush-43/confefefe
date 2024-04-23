import { motion } from "framer-motion";

import { styles } from "../styles";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const onNominationClick = () => {
    navigate("/greenawards");
  };
  return (
    <section className={`relative w-full h-screen mx-auto`} id="wmccmain">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#22c55e]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Waste Management &{" "}
            <span className="text-[#22c55e]">Climate Conference</span>
          </h1>
          <br />
          <hr className="border-b-2 border-white w-80" />
          <br />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Nepal's Biggest Waste Management <br className="sm:block hidden" />
            and Climate Conference.
          </p>
          {/* <button
            className="bg-green-500 text-white font-bold text-lg py-3 px-5 rounded mt-6 mt-35 py-10"
            onClick={onNominationClick}
          >
            Apply for Nomination
          </button> */}
          <button
            className="bg-green-800 text-white font-bold text-lg py-3 px-5 rounded mt-6 mt-35
            tracking-wider"
          >
            Apply for Nomination
          </button>
        </div>
      </div>

      <div>
        <h1 className=""></h1>
      </div>

      {/* <ComputersCanvas /> */}

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
