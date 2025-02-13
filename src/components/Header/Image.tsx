
import Photo from "@/assets/images/tirath.png";

const Image = () => {
  return (
    <div className="p-2 w-1/4">
      <img
        src={Photo}
        alt="Tirath Pathak"
        className="w-5/6 h-56 border-2 border-gray-700 rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
};

export default Image;
