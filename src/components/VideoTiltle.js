


const VideoTiltle = ({ title, overview }) => {
  // Extract data from MainContainer.js using props
  return (
    <div className="pt-32 px-12" >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 p-4 px-16 text-white text-xl bg-opacity-50 rounded-lg mx-4 ">▶ Play</button>
        <button className="bg-gray-500 p-4 px-16 text-white text-xl bg-opacity-50 rounded-lg mx-4">More Info</button>
      </div>
    </div>
  );
};

export default VideoTiltle;
