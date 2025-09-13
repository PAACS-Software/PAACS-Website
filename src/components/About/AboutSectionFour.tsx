// ===================================
// components/About/AboutSectionFour.tsx - Technology Stack & Partners
// ===================================
const AboutSectionFour = () => {
  const technologyIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  );

  const TechCard = ({
    title,
    description,
    version = null,
  }: {
    title: string;
    description: string;
    version?: string | null;
  }) => (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-one dark:bg-gray-dark">
      <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
        {technologyIcon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
        {title}
        {version && (
          <span className="ml-2 text-sm font-normal text-primary">
            {version}
          </span>
        )}
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color">
        {description}
      </p>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Built on Giants: Our Technology Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-base text-body-color">
            PAACS leverages world-class open-source technologies and a network
            of academic research to deliver professional-grade simulation
            capabilities.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Core Technologies
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TechCard
              title="Open CASCADE Technology"
              version="v8.0.0 (upcoming)"
              description="We use OCCT as our geometry kernel for robust CAD operations and advanced
              geometric modeling. Its evolving feature set and performance improvements help us
              deliver dependable geometry handling and high-quality mesh preparation."
            />

            <TechCard
              title="Kratos Multiphysics"
              description="Our solver layer builds on Kratos Multiphysics (developed at CIMNE/UPC), a
              modular finite-element framework widely used in research and industry. Its
              architecture allows us to compose workflows for FEA, CFD, and coupled multiphysics."
            />

            <TechCard
              title="MMG Remeshing Library"
              description="For adaptive mesh refinement and optimization, we link the MMG library to
              achieve reliable remeshing and quality control—helping capture gradients and
              geometric features that matter for accurate simulation."
            />

            <TechCard
              title="Slint UI Toolkit"
              description="For a modern, responsive desktop UI with a native feel, we use Slint’s declarative
              approach and lightweight runtime to build clear, performant interfaces across platforms."
            />
          </div>
        </div>

        {/*

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Academic Ecosystem
          </h3>
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-center text-base leading-relaxed text-body-color">
              Kratos Multiphysics is developed by CIMNE/UPC and used by many
              universities and research groups worldwide. Institutions active in
              the Kratos ecosystem include:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gray-light bg-opacity-30 p-6 dark:bg-gray-dark dark:bg-opacity-30">
                <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                  European Institutions
                </h4>
                <ul className="space-y-2 text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Technical University of Catalonia (UPC) / CIMNE
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Technical University of Munich (TUM)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    University of Edinburgh
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-gray-light bg-opacity-30 p-6 dark:bg-gray-dark dark:bg-opacity-30">
                <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                  Global Community
                </h4>
                <ul className="space-y-2 text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>A broad network
                    of labs and practitioners using Kratos
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Active maintainers and contributors across disciplines
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Ongoing validation through academic and industrial studies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* Acknowledgements without claiming contributions */}
        <div className="rounded-lg bg-primary bg-opacity-5 p-8">
          <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
            Open-Source Acknowledgements
          </h3>
          <p className="mx-auto mb-4 max-w-3xl text-center text-base leading-relaxed text-body-color">
            PAACS is made possible by outstanding open-source projects,
            including
            <span className="whitespace"> Open CASCADE Technology</span>,
            <span className="whitespace"> Kratos Multiphysics</span>,
            <span className="whitespace"> MMG</span>, and
            <span className="whitespace"> Slint</span>. We are grateful to the
            maintainers, researchers, and contributors behind these tools.
          </p>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-body-color">
            While PAACS is a proprietary product, we carefully observe upstream
            licenses and provide clear attribution. Our thanks go to the
            communities whose work we build upon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
