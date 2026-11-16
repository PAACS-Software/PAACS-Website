import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#eef4ff] to-[#f8faff] pb-16 pt-32 dark:from-[#0d1728] dark:to-[#121d2e] md:pb-24 md:pt-40">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold text-blue-700 dark:text-blue-300">
            In development
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-black dark:text-white sm:text-6xl xl:text-7xl">
            PAACS Mesh
          </h1>
          <p className="mt-6 text-xl font-medium leading-snug text-black dark:text-white sm:text-2xl">
            Prepare geometry for engineering simulation.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-700 dark:text-slate-300">
            We’re building a meshing tool with surface and volume workflows,
            built-in mesh checks, and export for use in other tools.
          </p>
          <Link
            className="mt-8 inline-flex rounded-md bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:bg-blue-300 dark:text-slate-950 dark:hover:bg-blue-200"
            href="/mesh/"
          >
            Explore PAACS Mesh
          </Link>
        </div>

        <figure className="overflow-hidden rounded-xl border border-slate-300 bg-[#101a2b] shadow-xl dark:border-slate-700">
          <Image
            src="/images/mesh/surface-mesh.webp"
            alt="Triangular surface mesh on a three-lobed flange with a central bore"
            width={1280}
            height={880}
            priority
            className="h-auto w-full"
          />
          <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-slate-300">
            Illustrative surface mesh
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
