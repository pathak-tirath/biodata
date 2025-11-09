import Photo from "@/assets/images/tirath2.png";
const PhotoThree = () => {
  return (
    <div className="p-2  mb-4 justify-center flex">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-100 rounded-3xl"></div>
        <img
          src={Photo}
          alt="Tirath Pathak"
          className="relative  w-96 h-96 rounded-3xl shadow-2xl object-cover mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default PhotoThree;