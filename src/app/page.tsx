import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave/Wave";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <ScrollUp />
      <Hero />
      <Wave />
      <section
        aria-labelledby="company-overview"
        className="bg-[#fcfcfc] py-14 dark:bg-[#141722] md:py-20"
      >
        <div className="container grid gap-9 md:grid-cols-2 md:gap-16">
          <div>
            <h2
              id="company-overview"
              className="mb-3 text-2xl font-bold text-black dark:text-white"
            >
              About PAACS Software
            </h2>
            <p className="max-w-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Founded in Scotland in 2024, we build tools to help engineers and
              researchers model and understand complex physical systems.
            </p>
            <Link
              href="/about/"
              className="mt-4 inline-block font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
            >
              Our company and mission
            </Link>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
              Multiphysics comes later
            </h2>
            <p className="max-w-lg leading-relaxed text-slate-700 dark:text-slate-300">
              After meshing, we plan to develop simulation workflows for
              structural, fluid, thermal, and electromagnetic analysis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
