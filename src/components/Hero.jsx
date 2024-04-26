import { motion } from "framer-motion";
import { styles } from "../styles";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footers";
import bg_image from "../assets/neww.png";

const Hero = () => {
  const navigate = useNavigate();
  const onNominationClick = () => {
    navigate("/greenawards");
  };

  return (
    <>
      <section
        className={`relative w-full h-screen flex flex-col justify-center items-center`}
        id="wmccmain"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5"></div>

          <div className="text-center">
            <div className="text-center">
              <h1 className="font-black text-white lg:text-[60px] text-white lg">
                Waste Management &
              </h1>
            </div>
            <div className="font-black text-green-600 lg:text-[70px] lg">
              Climate Conference
            </div>
            <br />
            <hr className="border-b-6 border-white w-1/2 mx-auto mt-1" />
            <br />
            <p className="font-bold text-xl mt-2 text-white-100">
              Nepal's Biggest Waste Management and Climate Conference.{" "}
              <br className="sm:block hidden" />
            </p>
            <button
              className="bg-green-700 text-white font-bold text-xl py-2 px-5 rounded mt-6"
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
    </>
  );
};

export default Hero;
