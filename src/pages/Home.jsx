import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Sponsors,
  // Works,
  OurSpeakers,
  StarsCanvas,
  Footers,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>

      <div className="relative z-0 bg-white">
        <About />
        {/* <div className="bg-green-800">
          <Works />
        </div> */}
        <div className="bg-green-700">
          <OurSpeakers />
        </div>
        <div className="py-8 ">
          <Experience />
        </div>
        <div className="text-2xl">
          <Sponsors />
        </div>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footers />
        </div>
      </div>
    </>
  );
};

export default Home;
