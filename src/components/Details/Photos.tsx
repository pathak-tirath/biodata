import PhotoFour from "../Photos/Four"
import PhotoOne from "../Photos/One"
import PhotoThree from "../Photos/Three"
import PhotoTwo from "../Photos/Two"


const Photos = () => {
  return (
    <div className=" bg-white backdrop-blur-md border border-gray-700 rounded-3xl p-8  shadow-2xl transition-all duration-300 mt-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-10 rounded-full"></div>
        <h2 className="font-extrabold text-3xl text-black tracking-wide">
          Photos
        </h2>
      </div>

      {/* Photo Gallery */}
      <div className="flex">
        <div className=" w-full justify-center flex">
          <PhotoOne />
        </div>

        {/* Image2 always remains at the bottom */}
        <div className="w-full flex justify-center">
          <PhotoTwo />
        </div>

        {/* <div className="w-full flex justify-center">
          <PhotoThree />
        </div> */}
        <div className="w-full flex justify-center">
          <PhotoFour />
        </div>
      </div>
    </div>
  )
}

export default Photos