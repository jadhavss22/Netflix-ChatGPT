

const VideoTiltle = ({ title, overview }) => {
// Extract data from MainContainer.js using props
//i> absolute property used to make video on top. ii> bg-gradient-to-r from-black gives bg shade black color from right. 
// w-screen aspect-video to title make overlapping exact to video 

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black" >
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white py-2 md:py-4 px-3 md:px-14 text-black text-xl hover:bg-opacity-70 rounded-lg mx-4 ">▶ Play</button>
        <button className="hidden md:inline-block bg-gray-500 p-4 px-16 text-white text-xl hover:bg-opacity-70 rounded-lg mx-4">More Info</button>
      </div>
    </div>
  );
};

export default VideoTiltle;
