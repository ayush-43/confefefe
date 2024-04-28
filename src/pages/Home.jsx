import {
  About,
  Contact,
  Experience,
  Hero,
  Sponsors,
  OurSpeakers,
  StarsCanvas,
  Footers,
  SliderPage,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>

      <div className="relative z-0 bg-white">
        <About />
        <div className="bg-green-700 ">
          <OurSpeakers />
        </div>
        <div className="py-8 ">
          <Experience />
        </div>
        {/* <div>
          <SliderPage />
        </div> */}
        <div className="text-2xl">
          <Sponsors />
        </div>
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
