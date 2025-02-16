
import Photo from "@/assets/images/tirath2.png";

const Image2 = () => {
  return (
    <div className="p-2 sm:w-11/12 sm:mb-0 w-8/12 mb-4 justify-center flex">
      <img
        src={Photo}
        alt="Tirath Pathak"
        className="w-5/6 rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
};

export default Image2;
