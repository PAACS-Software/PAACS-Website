// ===================================
// components/About/AboutSectionThree.tsx - Company History & Location
// ===================================

import * as React from "react";

const CheckIcon = () => (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-base text-body-color">
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
      <CheckIcon />
    </span>
    <span>{children}</span>
  </li>
);

export default function AboutSectionThree() {
  return (
    <section
      aria-labelledby="about-where-we-are"
      className="py-16 md:py-20 lg:py-24"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          {/* Copy */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="max-w-[720px]">
              <h2
                id="about-where-we-are"
                className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl"
              >
                Where we are
              </h2>
              <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg">
                Founded in 2024 in Scotland. Now headquartered in Austin, Texas.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                What we do
              </h3>
              <p className="mb-8 text-base leading-relaxed text-body-color sm:text-lg">
                We build practical simulation tools that fit real engineering
                workflows—from CAD import to meshing, solving, and results. A
                node-based workflow speeds iteration; scripting enables
                automation when you need it.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Near-term goals
              </h3>
              <ul className="mb-10 space-y-3">
                <Bullet>
                  Ship reliable structural FEA first; expand to thermal and EM.
                </Bullet>
                <Bullet>
                  Harden the CAD → mesh → solve pipeline; improve robust STEP
                  import.
                </Bullet>
                <Bullet>
                  Strengthen interoperability with common open-source and
                  industry tools.
                </Bullet>
                <Bullet>
                  Publish clear docs, examples, and academic access.
                </Bullet>
              </ul>
            </div>
          </div>

          {/* Side facts (kept minimal to sit mid-page without noise) */}
          <div className="mt-10 w-full px-4 lg:mt-0 lg:w-5/12">
            <div className="rounded-lg border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-dark">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                At a glance
              </h3>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-primary/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-primary">
                    HQ
                  </dt>
                  <dd className="text-base font-medium text-black dark:text-white">
                    Austin, Texas
                  </dd>
                </div>
                <div className="rounded-md bg-primary/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-primary">
                    Founded
                  </dt>
                  <dd className="text-base font-medium text-black dark:text-white">
                    2024 (Scotland)
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-body-color">
                We ship focused, stable releases and are building academic and
                industry ties to advance research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
