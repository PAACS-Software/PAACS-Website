import MeshHero from "@/components/MeshHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS Mesh",
  description:
    "Explore the PAACS Mesh pre-release workflows for surface and volume meshing, quality checks, and export.",
  alternates: { canonical: "/mesh/" },
  openGraph: {
    title: "PAACS Mesh | PAACS Software",
    description: "Prepare geometry for engineering simulation with PAACS Mesh.",
    images: [
      { url: "/images/mesh/surface-mesh.webp", width: 1280, height: 880 },
    ],
  },
};

export default function MeshPage() {
  return (
    <main>
      <MeshHero />

      <div className="container space-y-12 py-16 md:py-20">
        <section aria-labelledby="mesh-capabilities">
          <h2
            id="mesh-capabilities"
            className="mb-5 scroll-mt-24 text-2xl font-bold text-black dark:text-white sm:text-3xl"
          >
            From geometry to a checked mesh
          </h2>
          <dl className="max-w-4xl divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            <div className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]">
              <dt className="font-semibold text-black dark:text-white">
                Surface and volume
              </dt>
              <dd className="leading-relaxed text-slate-700 dark:text-slate-300">
                Pre-release work includes triangular surface meshes and
                boundary-conforming tetrahedral volume meshes on supported
                inputs.
              </dd>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]">
              <dt className="font-semibold text-black dark:text-white">
                Quality and export
              </dt>
              <dd className="leading-relaxed text-slate-700 dark:text-slate-300">
                Mesh checks cover topology, geometry, and element quality.
                Supported workflows can export to VTK and Gmsh.
              </dd>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]">
              <dt className="font-semibold text-black dark:text-white">
                CAD import
              </dt>
              <dd className="leading-relaxed text-slate-700 dark:text-slate-300">
                We’re testing STEP import with selected CAD models and expanding
                the range of geometry it can handle.
              </dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="mesh-release"
          className="max-w-4xl rounded-lg bg-slate-100 p-6 dark:bg-slate-900 sm:p-8"
        >
          <h2
            id="mesh-release"
            className="mb-3 text-2xl font-bold text-black dark:text-white"
          >
            Release status
          </h2>
          <p className="max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">
            PAACS Mesh is in development. We’ll publish public downloads and
            release information here when they’re ready, along with any
            product-specific licence terms and privacy notices.
          </p>
          <Link
            className="mt-5 inline-block font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
            href="/about/"
          >
            About PAACS Software
          </Link>
          <Link
            className="mt-5 block font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
            href="/license/mesh/"
          >
            PAACS Mesh licensing
          </Link>
        </section>
      </div>
    </main>
  );
}
