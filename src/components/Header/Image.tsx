import Photo from "@/assets/images/tirath_main_skyblue.png";
const Image = () => {
  return (
    <div className="p-2  mb-4 justify-center flex">
        <div className=" rounded-3xl"></div>
        <img
          src={Photo}
          alt="Tirath Pathak"
          className="relative w-52 h-60 rounded-3xl shadow-2xl object-cover mix-blend-multiply"
        />
    </div>
  );
};

export default Image;