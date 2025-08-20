"use client";

import { useEffect, useState } from "react";

const Wave = () => {
  const [isDark, setIsDark] = useState(false);

  // Use relative paths for GitHub Pages compatibility
  const waveImage = "./images/wave/wave.png";
  const waveImageDark = "./images/wave/wave-dark.png";

  // Check if dark mode is enabled
  useEffect(() => {
    const checkDarkMode = () => {
      // Check if dark class is applied to html element
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    // Initial check
    checkDarkMode();

    // Observe DOM changes for theme toggling
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wave-animation relative -mt-[12vh] h-[15vh] w-full overflow-hidden">
      {/* Wave Layer 1 */}
      <div
        className="air air1 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 2 */}
      <div
        className="air air2 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 3 */}
      <div
        className="air air3 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 4 */}
      <div
        className="air air4 absolute bottom-0 left-0 h-[12vh] w-full bg-no-repeat"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
    </div>
  );
};

export default Wave;
