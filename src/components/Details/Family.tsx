const Family = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6  shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pt-6 pb-1">
        <div className="bg-blue-500 w-1.5 h-8 rounded-full animate-pulse"></div>
        <h2 className="font-bold text-2xl text-white">Family Details</h2>
      </div>

      {/* Details Container */}
      <div className="space-y-4">
        <DetailRow label="Father's Name" value="Bharatbhai Nikulkumar Pathak" />
        <DetailRow
          label="Father's Occupation"
          value="Account Assistant in W.Rly Bhavnagar"
        />
        <DetailRow label="Mother's Name" value="Harshidaben B. Pathak" />
        <DetailRow label="Mother's Occupation" value="Home-Maker" />
        <DetailRow
          label="GrandFather's Name"
          value="Late Nikulkumar D. Pathak"
        />
        <DetailRow
          label="GrandFather's Occupation"
          value="Retired State Govt. Employee"
        />
        <DetailRow label="GrandMother's Name" value="Indumati N. Pathak" />
        <DetailRow
          label="Maternal Grandfather's Name"
          value="Late.Pranbhai G. Dave"
        />
        <DetailRow
          label="Maternal Uncle's Name"
          value="1).Rajendra P.Dave 2). Mukundbhai P. Dave"
        />
        <DetailRow label="Maternal Details" value="Rakoliya Dave" />
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start group hover:bg-gray-800/30 px-2 pb-[30px]  rounded-lg transition-all duration-200">
    <div className="w-1/3">
      <span className="font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
        {label}
      </span>
    </div>
    <div className="w-2/3 pl-8 sm:pl-4 break-words text-white group-hover:text-blue-400 transition-colors duration-200">
      : {value}
    </div>
  </div>
);

export default Family;
