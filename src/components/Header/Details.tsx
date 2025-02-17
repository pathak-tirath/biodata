const Details = () => {
  return (
    <div className="flex flex-col">
      {/* Name with refined typography */}
      <div className="text-3xl sm:text-4xl  font-extrabold tracking-wide text-black mb-2">
        TIRATH PATHAK
      </div>

      {/* Creative approach: Thin gradient line instead of dots */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 mt-2 rounded-full animate-pulse"></div>

      {/* Job Title & Company */}
      <div className="text-xl text-gray-800 mt-2">
        Software Engineer
        
      </div>
    </div>
  );
};

export default Details;
