import { JSX } from "react";
import {  Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className=" bg-gray-900 bg-opacity-80 backdrop-blur-md border border-gray-700 rounded-3xl p-8  shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-10 rounded-full"></div>
        <h2 className="font-extrabold text-3xl text-white tracking-wide">
          Contact Details
        </h2>
      </div>

      {/* Contact Grid - Full Width */}
      <div className="w-full gap-6 md:flex">
        <DetailRow
          icon={<Phone size={22} />}
          label="Father's Number"
          value="9428202376"
        />
        <DetailRow
          icon={<Phone size={22} />}
          label="Mother's Number"
          value="9427511304"
        />
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
const DetailRow = ({
  icon,
  label,
  value,
  isLong = false,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  isLong?: boolean;
}) => {


  return (
    <div
      className={`flex  items-center mb-6 flex-wrap group bg-gray-800/50 p-5 gap-2 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 ${
        isLong ? "w-full col-span-2" : "w-full"
      }`}
    >
      {/* Left Side - Icon & Label */}
      <div className="flex items-center justify-start gap-3 text-blue-400 text-lg font-semibold">
        {icon}
        <div className="font-medium text-gray-400">{label}</div>
      </div>

      {/* Right Side - Value & Copy Button */}

      <div>: {value}</div>
    </div>
  );
};

export default Contact;
