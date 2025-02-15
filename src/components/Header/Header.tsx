import Image from "@/components/Header/Image";
import Details from "./Details";

const Header = () => {
  return (
    <div className="flex-column sm:flex items-center bg-gray-900 bg-opacity-90 p-6 rounded-3xl shadow-xl">
      <Image />
      <Details />
    </div>
  );
};

export default Header;
