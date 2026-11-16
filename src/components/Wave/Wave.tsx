"use client";

import { useEffect, useState } from "react";

const Wave = () => {
  const [isDark, setIsDark] = useState(false);

  const waveImage = "/images/wave/wave.png";
  const waveImageDark = "/images/wave/wave-dark.png";

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
    <div aria-hidden="true" className="wave-animation">
      {/* Wave Layer 1 */}
      <div
        className="air air1"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 2 */}
      <div
        className="air air2"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 3 */}
      <div
        className="air air3"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
      {/* Wave Layer 4 */}
      <div
        className="air air4"
        style={{
          backgroundImage: `url(${isDark ? waveImageDark : waveImage})`,
        }}
      />
    </div>
  );
};

export default Wave;
