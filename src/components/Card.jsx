const Card = ({ index, title, icon }) => {
  return (
    <div className="bg-green-700 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-lg mx-5">
      <img src={icon} alt={title} className="w-16 h-16" />
      <h3 className="text-white-100 text-[20px] font-bold text-center ">
        {title}
      </h3>
    </div>
  );
};

export default Card;
