const Details = () => {
  return (
    <div className="flex flex-col">
      {/* Name with refined typography */}
      <div className="text-5xl font-extrabold tracking-wide text-white">
        TIRATH PATHAK
      </div>

      {/* Creative approach: Thin gradient line instead of dots */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 mt-2 rounded-full"></div>

      {/* Job Title & Company */}
      <div className="text-xl text-gray-300 mt-3">
        Software Engineer -{" "}
        <span className="text-blue-400 hover:underline cursor-pointer">
          ManekTech
        </span>
      </div>
    </div>
  );
};

export default Details;
