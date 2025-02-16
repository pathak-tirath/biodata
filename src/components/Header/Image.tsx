import Photo from "@/assets/images/tirath.png";

const Image = () => {
  return (
    <div className="p-2 sm:w-10/12 sm:mb-0 w-8/12 mb-4 justify-center flex">
      <img
        src={Photo}
        alt="Tirath Pathak"
        className="w-5/6   border-gray-700 rounded-3xl shadow-2xl object-cover"
      />
    </div>
  );
};

export default Image;
