const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl lg:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm xl:text-lg w-2/4">
        {overview}
      </p>
      <div className="my-4 md:m-0 flex">
        <button className=" bg-white text-black p-4 lg:px-8  text-xl  rounded-lg hover:bg-opacity-80 flex justify-between items-center">
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/glyph-neue/64/play.png"
            alt="play"
            className="mx-3"
          />{" "}
          Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 lg:px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
