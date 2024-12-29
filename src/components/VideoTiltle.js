

const VideoTiltle = ({ title, overview }) => {
// Extract data from MainContainer.js using props
//i> absolute property used to make video on top.ii> bg-gradient-to-r from-black gives bg shade black color from right. 
// w-screen aspect-video to title make overlapping exact to video 

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black" >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-4 px-16 text-black text-xl hover:bg-opacity-70 rounded-lg mx-4 ">▶ Play</button>
        <button className="bg-gray-500 p-4 px-16 text-white text-xl hover:bg-opacity-70 rounded-lg mx-4">More Info</button>
      </div>
    </div>
  );
};

export default VideoTiltle;
