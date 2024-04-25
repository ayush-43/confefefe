import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { sponsorsData } from "../constants";
import { styles } from "../styles";

const SponsorImage = (sponsor) => {
  return (
    <img
      src={sponsor.sponsor.icon}
      alt={sponsor.sponsor.name}
      className="w-[100%] h-[100%] object-contain"
    />
  );
};

const Sponsors = () => {
  return (
    <div id="sponsors" className="flex flex-col items-center justify-center">
      <h2 className={styles.sectionHeadText}>Sponsors</h2>
      {sponsorsData.map((sponsor) => (
        <div className="flex flex-col mt-10" key={sponsor.title}>
          <div className="flex flex-col items-center justify-center">
            <h2 className={styles.sectionSubText}>{sponsor.title}</h2>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {sponsor.data.map((data, index) => (
              <div className="w-28 h-28 mr-10" key={index}>
                <SponsorImage sponsor={data} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Sponsors, "");
