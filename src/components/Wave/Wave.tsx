"use client";

const Wave = () => {
  // Use relative paths for GitHub Pages compatibility
  const waveImage = "./images/wave/wave.png";
  const waveImageDark = "./images/wave/wave-dark.png";

  return (
    <div className="wave-animation relative -mt-[12vh] h-[15vh] w-full overflow-hidden">
      {/* Wave Layer 1 */}
      <div
        className="air air1 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${waveImage})`,
        }}
      />
      {/* Wave Layer 2 */}
      <div
        className="air air2 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${waveImage})`,
        }}
      />
      {/* Wave Layer 3 */}
      <div
        className="air air3 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${waveImage})`,
        }}
      />
      {/* Wave Layer 4 */}
      <div
        className="air air4 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${waveImage})`,
        }}
      />
    </div>
  );
};

export default Wave;
