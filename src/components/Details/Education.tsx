const Education = () => {
    return (
      <div className="bg-white border border-gray-800 rounded-2xl p-6  shadow-xl hover:shadow-2xl transition-all duration-300 mt-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-500 w-1.5 h-8 rounded-full animate-pulse"></div>
          <h2 className="font-bold text-2xl text-black">
            Education & Job Details
          </h2>
        </div>
  
        {/* Details Container */}
        <div className="space-y-6">
          <DetailRow
            label="Education"
            value="Bachelors of Technology (I.T) from Birla Vishwakarma Mahavidhyalaya-Anand-V.V.Nagar-Gujarat"
          />
          <DetailRow label="Year of Graduation" value="June, 2021" />
          <DetailRow label="Occupation" value="Software Engineer - Manektech (10 LPA)" />
        </div>
      </div>
    );
  };
  
  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-start group hover:bg-gray-200/30 px-2 rounded-lg">
      <div className="w-1/3 pt-1">
        <span className="font-medium text-gray-800 group-hover:text-gray-700 transition-colors duration-200">
          {label}
        </span>
      </div>
      <div className="w-2/3 pl-4 break-words">
        <span className="text-black group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
          : {value}
        </span>
      </div>
    </div>
  );
  
  export default Education;
  