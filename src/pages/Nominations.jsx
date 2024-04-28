import { styles } from "../styles";
import FormfacadeEmbed from "@formfacade/embed-react";

const Nominations = () => {
  return (
    <div className="py-10 h-2vh bg-white">
      <h2 className={styles.sectionHeadText}>Green Awards</h2>
      {/* <p className={styles.heroSubText}>
        bsdk askdaskldaksdhakshdlashdl ahsdl ahmasd mdachod aksdhkashdlasd{" "}
      </p> */}
      <div>
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/108350963951618136498/form/1FAIpQLSe5pLVIeN7SAan4ZcVUBUudED2ZTSaUwqitaw-rNmzQY9pGRQ/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </div>
  );
};

export default Nominations;
