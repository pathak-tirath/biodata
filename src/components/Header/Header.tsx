import Image from "@/components/Header/Image";
import Details from "./Details";
import Image2 from "./Image2";

const Header = () => {
  return (
    <div className="flex-column gap-1 sm:flex items-center bg-gray-900 bg-opacity-90 p-6 rounded-3xl shadow-xl">
      <Image />
      <Details />
      <Image2 />
    </div>
  );
};

export default Header;
