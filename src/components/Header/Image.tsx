
import Photo from "@/assets/images/tirath.png";

const Image = () => {
  return (
    <div className="p-2 sm:w-1/4 sm:mb-0 w-11/12 mb-4 justify-center flex">
      <img
        src={Photo}
        alt="Tirath Pathak"
        className="w-5/6 h-56 border-2 border-gray-700 rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
};

export default Image;
