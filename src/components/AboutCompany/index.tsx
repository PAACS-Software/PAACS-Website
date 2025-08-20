const AboutCompany = () => {
  return (
    <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Professional Simulation Software for Modern Engineering and
              Research
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Transforming how engineers approach complex computational
              challenges
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              PAACS Software revolutionizes engineering analysis by combining
              finite element analysis (FEA), computational fluid dynamics (CFD),
              and multiphysics capabilities in one integrated platform. Whether
              you&apos;re designing aerospace components, optimizing thermal
              systems, or analyzing fluid dynamics, PAACS provides the
              computational power and accuracy you need to make informed
              decisions.
            </p>

            <div className="my-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Why Engineers Choose PAACS
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  With active users around the world, PAACS is becoming the
                  go-to solution for engineers who need reliable, fast, and
                  accurate simulation results. Our software handles complex
                  geometries, non-linear materials, and multi-domain physics
                  with unprecedented ease. The intuitive node-based interface
                  makes it accessible to beginners while providing the depth and
                  control that experts demand.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Built for Performance
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our proprietary solvers leverage modern GPU acceleration to
                  deliver results up to 10x faster than traditional solutions.
                  The adaptive mesh refinement algorithms automatically optimize
                  computational resources, ensuring accurate results without
                  manual intervention. This means you spend less time waiting
                  and more time innovating.
                </p>
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              From academic researchers pushing the boundaries of science to
              industrial engineers optimizing real-world products, PAACS
              delivers professional-grade simulation capabilities at an
              affordable price point. Our commitment to democratizing
              engineering simulation means that powerful tools are no longer
              limited to those with enterprise budgets.
            </p>

            <div className="my-8 rounded-lg bg-white p-6 dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Comprehensive Simulation Capabilities
              </h3>
              <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                PAACS supports a wide range of physics and engineering
                disciplines, making it the only simulation software you need for
                your entire workflow. Our integrated approach means seamless
                data transfer between different analysis types, eliminating the
                need for multiple software packages and reducing potential
                errors from data translation.
              </p>
              <ul className="list-inside list-disc space-y-2 text-body-color dark:text-body-color-dark">
                <li>
                  Structural mechanics with non-linear material models and
                  contact analysis
                </li>
                <li>
                  Fluid dynamics including turbulence modeling and multiphase
                  flows
                </li>
                <li>
                  Thermal analysis with conjugate heat transfer and radiation
                </li>
                <li>
                  Electromagnetic simulations for antenna design and EMC/EMI
                  analysis
                </li>
                <li>
                  Coupled multiphysics for real-world engineering problems
                </li>
                <li>
                  Optimization and parametric studies for design exploration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
