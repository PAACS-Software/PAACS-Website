// ===================================
// components/About/AboutSectionThree.tsx - Company History & Location
// ===================================
import Image from "next/image";

const AboutSectionThree = () => {
  const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section className="bg-gray-light bg-opacity-20 py-16 dark:bg-gray-dark dark:bg-opacity-20 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">
              <div className="mb-9">
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  From Scotland to Texas—A New Chapter
                </h2>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Founded in Glasgow, Scotland in 2024, PAACS Software Ltd
                  emerged from a rich tradition of engineering excellence that
                  dates back to the Scottish Enlightenment. Scotland&apos;s
                  contributions to engineering—from James Watt&apos;s steam
                  engine to modern offshore engineering—inspire our commitment
                  to innovation and precision.
                </p>
                <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  In 2025 we began relocating our operations to Texas, USA. This
                  move centralizes product development, operations, and customer
                  support in Austin while we wind down our UK office. We remain
                  proud of our Scottish roots—and we&apos;ll keep collaborating
                  with partners and universities globally—yet our day-to-day
                  operations will now be based in Texas.
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Why Texas? Proximity to aerospace, energy, and semiconductor
                  ecosystems; access to talent; and a thriving engineering
                  community. Consolidating in Austin lets us move faster and
                  serve customers more effectively.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  The Move at a Glance
                </h3>
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3">
                    <List text="Headquarters: Austin, Texas (2025—present)" />
                    <List text="Founded in Glasgow, Scotland (2024)" />
                    <List text="Single operations hub in Texas (UK office winding down)" />
                    <List text="Support for UK/EU customers continues from Texas (extended hours)" />
                    <List text="Ongoing remote collaborations with universities and partners" />
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our engineering culture was forged in Scotland; our next phase
                  is built in Texas. This relocation lets us concentrate
                  resources, accelerate delivery, and keep shipping the tools
                  engineers need—worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-primary bg-opacity-5 p-8">
                <div className="flex h-full flex-col justify-center">
                  <div className="mb-8 text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary bg-opacity-10">
                      <svg
                        className="h-10 w-10 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                      Now Based in Texas
                    </h3>
                    <p className="text-body-color">Headquarters: Austin, USA</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Glasgow, Scotland
                      </h4>
                      <p className="text-sm text-body-color">Founded 2024</p>
                    </div>
                    <div>
                      <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Austin, Texas
                      </h4>
                      <p className="text-sm text-body-color">HQ 2025—present</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded bg-white p-4 dark:bg-gray-dark">
                    <p className="text-center text-sm italic text-body-color">
                      “Rooted in Scottish engineering. Built for the future in
                      Texas.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
