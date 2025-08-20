// ===================================
// components/About/AboutHero.tsx - New Hero Section for About Page
// ===================================
const AboutHero = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary bg-opacity-5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            About PAACS Software
          </h1>
          <p className="mb-8 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
            From Scottish Innovation to Global Engineering Solutions
          </p>
          <p className="mx-auto max-w-[700px] text-base leading-relaxed text-body-color dark:text-body-color-dark">
            Founded in 2024 in Scotland, PAACS Software Ltd represents the
            convergence of traditional engineering excellence and cutting-edge
            computational technology. Our journey from the industrial hub of
            Glasgow - Scotland, to our new presence in Texas reflects our
            commitment to serving the global engineering community with
            world-class simulation tools.
          </p>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="370"
          height="596"
          viewBox="0 0 370 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_88:141"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="370"
            height="596"
          >
            <rect width="370" height="596" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0_88:141)">
            <path
              opacity="0.15"
              d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
              fill="url(#paint0_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
              fill="url(#paint1_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 166.71C318.077 174.841 318.317 191.664 331.676 198.309Z"
              fill="url(#paint2_radial_88:141)"
            />
            <path
              opacity="0.1"
              d="M281.076 546.309C293.798 552.636 308.568 542.704 307.507 528.536C306.52 515.363 292.341 507.531 280.665 514.71C267.477 522.841 267.717 539.664 281.076 546.309Z"
              fill="url(#paint3_radial_88:141)"
            />
            <path
              opacity="0.1"
              d="M212.076 99.3095C224.798 105.637 239.568 95.7043 238.507 81.5361C237.52 68.3632 223.341 60.531 211.665 67.7103C198.477 75.8411 198.717 92.6642 212.076 99.3095Z"
              fill="url(#paint4_radial_88:141)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88:141"
              x1="36.4284"
              y1="29.2937"
              x2="54.1482"
              y2="84.1294"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88:141"
              x1="18.178"
              y1="469.316"
              x2="34.9336"
              y2="500.508"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint2_radial_88:141"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(344.663 180.07) rotate(90) scale(18.5288)"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.48" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_88:141"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(294.063 528.07) rotate(90) scale(18.5288)"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.48" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_88:141"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(225.063 81.0695) rotate(90) scale(18.5288)"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.48" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
