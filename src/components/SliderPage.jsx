import { SectionWrapper } from "../hoc";
import Slider from "react-slick";
import Card from "./Card";
import { services } from "../constants";
const SliderPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="">
      {services.map((i) => {
        return (
          <>
            <div key={i.id}>
              <Card title={i.title} icon={i.icon} />
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default SectionWrapper(SliderPage, "");
