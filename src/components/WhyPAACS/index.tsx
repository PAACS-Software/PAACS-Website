const WhyPAACS = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Why PAACS is Different
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Innovation meets accessibility in engineering simulation
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Free for Academia
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Students and researchers get full access to all features at no
                  cost. We believe in supporting the next generation of
                  engineers with professional tools that don&apos;t compromise
                  on capabilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Node-Based Workflow
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Our intuitive visual programming interface makes complex
                  simulations accessible. Connect nodes to build sophisticated
                  analysis workflows without writing code, while maintaining
                  full control over every parameter.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path d="M7 2a1 1 0 000 2h6a1 1 0 100-2H7zM7 16a1 1 0 100 2h6a1 1 0 100-2H7zM2 7a1 1 0 012 0v6a1 1 0 11-2 0V7zM16 7a1 1 0 012 0v6a1 1 0 11-2 0V7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  GPU Accelerated
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Harness the power of modern graphics cards for blazing-fast
                  simulations. Our GPU-optimized solvers deliver results in
                  minutes, not hours, even for models with millions of elements.
                </p>
              </div>
            </div>

            <div className="mb-12 rounded-lg bg-primary bg-opacity-5 p-8">
              <h3 className="mb-4 text-center text-2xl font-bold text-black dark:text-white">
                Trusted by Industry Leaders
              </h3>
              <p className="mb-6 text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
                From startups to Fortune 500 companies, organizations worldwide
                can utilise PAACS for mission-critical simulations. Our software
                is capable of designing everything from medical devices to
                spacecraft components, wind turbines to automotive safety
                systems.
              </p>
              <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Join the growing community of engineers who have discovered that
                professional-grade simulation doesn&apos;t have to come with an
                enterprise price tag. Experience the difference that modern
                software architecture and user-centered design can make in your
                workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPAACS;
