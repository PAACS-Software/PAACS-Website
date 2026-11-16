import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "PAACS Mesh | Geometry-to-mesh tools" },
  alternates: { canonical: "/" },
};

const workflow = [
  {
    title: "Generate a mesh",
    description:
      "Build triangular surface meshes and tetrahedral volume meshes from supported geometry.",
  },
  {
    title: "Check the result",
    description:
      "Review connectivity, element quality, and boundary conformity before using the mesh.",
  },
  {
    title: "Export for analysis",
    description:
      "Use VTK and Gmsh export to inspect results or continue in other tools.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />

      <section
        className="container py-16 md:py-24"
        aria-labelledby="mesh-workflow"
      >
        <h2
          id="mesh-workflow"
          className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl"
        >
          From geometry to a checked mesh
        </h2>
        <p className="max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">
          PAACS Mesh is designed around three steps so engineers can see what
          was generated and what passed its checks.
        </p>
        <ul className="mt-9 grid gap-6 md:grid-cols-3">
          {workflow.map(({ title, description }) => (
            <li
              key={title}
              className="border-t border-slate-300 pt-5 dark:border-slate-700"
            >
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                {title}
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 dark:border-slate-800 dark:bg-[#101a2b] md:py-20">
        <div className="container grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
              About PAACS Software
            </h2>
            <p className="mb-5 max-w-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Founded in Scotland in 2024, PAACS Software Ltd builds
              computational engineering tools. Our goal is to make complex
              physical systems easier to model and understand.
            </p>
            <Link
              href="/about/"
              className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
            >
              Our company and mission
            </Link>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white">
              Multiphysics comes later
            </h2>
            <p className="max-w-lg leading-relaxed text-slate-700 dark:text-slate-300">
              After meshing, we plan to develop simulation workflows for
              structural, fluid, thermal, and electromagnetic analysis. Coupled
              multiphysics is part of that longer-term roadmap.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
