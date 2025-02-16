import Image from "@/components/Header/Image";
import Details from "./Details";
import Image2 from "./Image2";

const Header = () => {
  return (
    <div id="pdf-header" className="header-container flex flex-col sm:flex-row sm:items-center  bg-white  rounded-3xl shadow-xl pt-4">
      {/* Mobile: Details at the top | Larger screens: Details in the middle */}
      <div className="order-1 sm:order-2 w-full justify-center flex text-center">
        <Details />
      </div>

      {/* Mobile: Image appears below Details | Larger screens: Image on the left */}
      <div className="order-2 sm:order-1 w-full justify-center flex">
        <Image />
      </div>

      {/* Image2 always remains at the bottom */}
      <div className="order-3 w-full flex justify-center">
        <Image2 />
      </div>
    </div>
  );
};

export default Header;
