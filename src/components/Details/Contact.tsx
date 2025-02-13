
import { JSX, useState } from "react";
import { Clipboard, ClipboardCheck, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-md border border-gray-700 rounded-3xl p-8 w-11/12 shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-10 rounded-full"></div>
        <h2 className="font-extrabold text-3xl text-white tracking-wide">Contact Details</h2>
      </div>

      {/* Contact Grid - Full Width */}
      <div className="grid grid-cols-2 gap-6">
        <DetailRow icon={<Phone size={22} />} label="Father's Number" value="9428202376" />
        <DetailRow icon={<Phone size={22} />} label="Mother's Number" value="9427511304" />
      </div>

      {/* Full-width Address */}
      <div className="mt-6">
        <DetailRow
          icon={<MapPin size={22} />}
          label="Residential Address"
          value="Block NO. 04 'Nandanvan Bunglows', Rama Bag, Anantwadi, Bhavnagar."
          isLong
        />
      </div>
    </div>
  );
};

// Contact Row with Copy Feature
const DetailRow = ({ icon, label, value, isLong = false }: { 
  icon: JSX.Element; 
  label: string; 
  value: string; 
  isLong?: boolean; 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`flex items-center justify-between group bg-gray-800/50 p-5 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 ${isLong ? "w-full col-span-2" : "w-full"}`}>
      {/* Left Side - Icon & Label */}
      <div className="flex items-center gap-3 text-blue-400 text-lg font-semibold w-1/3">
        {icon}
        <span className="text-gray-300">{label}:</span>
      </div>

      {/* Right Side - Value & Copy Button */}
      <div className="flex justify-between items-center text-white text-lg font-medium tracking-wide w-2/3">
        <span>{value}</span>
        {!isLong && (
          <button onClick={handleCopy} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            {copied ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Contact;
