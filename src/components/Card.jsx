const Card = ({ imageSrc, name, profession, description }) => {
  return (
    <div className="max-w-xs mx-auto relative overflow-hidden rounded-lg shadow-lg bg-white w-64 h-64">
      <img
        className="w-full h-32 object-cover object-center"
        src={imageSrc}
        alt="Card"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
        <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{profession}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
