const Personal = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6  shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 w-1.5 h-8 rounded-full animate-pulse"></div>
        <h2 className="font-bold text-2xl text-white">Personal Details</h2>
      </div>

      {/* Details Container */}
      <div className="space-y-4">
        <DetailRow label="Date Of Birth" value="June 12th, 2000" />
        <DetailRow label="Place Of Birth" value="Rajkot" />
        <DetailRow label="Time Of Birth" value="1:48 PM" />
        <DetailRow label="Height" value="5'6&quot;" />
        <DetailRow label="Native Place" value="Kotda Pitha" />
        <DetailRow label="Rashi" value="Tula" />
        <DetailRow
          label="Caste"
          value="Saurashtra BajKhedavad Brahmin (PATHAK)"
        />
        <DetailRow label="Gotra" value="Laukanashya" />
        <DetailRow label="Kuldevi" value="Tuljabhavani, Khirasara (Jetpur)" />
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center group hover:bg-gray-800/30 p-2 rounded-lg">
    <div className="w-1/3">
      <span className="font-medium text-gray-400  group-hover:text-gray-300 transition-colors duration-200">
        {label}
      </span>
    </div>
    <div className="w-2/3 pl-4 break-words">
      <span className="text-white group-hover:text-blue-400 transition-colors duration-200">
        : {value}
      </span>
    </div>
  </div>
);

export default Personal;
