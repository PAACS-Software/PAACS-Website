"use client";

const Wave = () => {
  return (
    <div className="wave-animation relative -mt-[12vh] h-[15vh] w-full overflow-hidden">
      {/* Wave Layer 1 */}
      <div className="air air1 absolute bottom-0 left-0 h-[12vh] w-full bg-[url('/images/wave/wave.png')] bg-no-repeat dark:bg-[url('/images/wave/wave-dark.png')]" />
      {/* Wave Layer 2 */}
      <div className="air air2 absolute bottom-0 left-0 h-[12vh] w-full bg-[url('/images/wave/wave.png')] bg-no-repeat dark:bg-[url('/images/wave/wave-dark.png')]" />
      {/* Wave Layer 3 */}
      <div className="air air3 absolute bottom-0 left-0 h-[12vh] w-full bg-[url('/images/wave/wave.png')] bg-no-repeat dark:bg-[url('/images/wave/wave-dark.png')]" />
      {/* Wave Layer 4 */}
      <div className="air air4 absolute bottom-0 left-0 h-[12vh] w-full bg-[url('/images/wave/wave.png')] bg-no-repeat dark:bg-[url('/images/wave/wave-dark.png')]" />
    </div>
  );
};

export default Wave;
