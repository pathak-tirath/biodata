import Photo from "@/assets/images/tirath.png";

const Image2 = () => {
  return (
    <div className="p-2  mb-4 justify-center flex">
      <img
        src={Photo}
        alt="Tirath Pathak"
        className="w-52 h-60 rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
};

export default Image2;
