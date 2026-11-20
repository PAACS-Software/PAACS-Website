import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS Mesh in action",
  description:
    "Watch PAACS Mesh build cube and curved-cylinder meshes, from edge and surface construction to tetrahedral volume meshing.",
  alternates: { canonical: "/mesh/examples/" },
  openGraph: {
    title: "PAACS Mesh in action | PAACS Software",
    description:
      "Two animations built from recorded PAACS C++ mesher output.",
    url: "/mesh/examples/",
    images: [
      {
        url: "/images/mesh/examples/social-preview.jpg",
        width: 1200,
        height: 675,
        alt: "A completed cube mesh produced by PAACS Mesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAACS Mesh in action",
    description: "Watch surface and volume meshes take shape in PAACS Mesh.",
    images: ["/images/mesh/examples/social-preview.jpg"],
  },
};

const examples = [
  {
    id: "cube",
    title: "Cube",
    description:
      "Follow edge and surface construction, live tetrahedral insertion, and the final audited volume on a cube.",
    caption:
      "The cutaway retains complete tetrahedra and shows exposed element faces. The clip ends with a three-second view of the complete mesh.",
  },
  {
    id: "cylinder",
    title: "Curved cylinder",
    description:
      "See the same construction stages on a curved cylinder, from the surface mesh to the tetrahedral volume.",
    caption:
      "The cutaway reveals the volume elements while preserving complete tetrahedra. The final three seconds show the complete mesh.",
  },
];

export default function MeshExamplesPage() {
  return (
    <main>
      <Breadcrumb
        pageName="PAACS Mesh in action"
        description="Two animations built from recorded PAACS C++ mesher output. Playback is slowed so you can inspect how each mesh takes shape."
      />

      <div className="container pb-20 pt-8 md:pb-28">
        <div className="max-w-5xl">
          <Link
            className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
            href="/mesh/"
          >
            Back to PAACS Mesh
          </Link>
          <p className="mt-5 max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
            Each recording is 27 seconds long. Press play to watch, or use the
            video controls to pause, seek, and view full screen. These examples
            show software in development; public downloads are coming later.
          </p>

          <div className="mt-12 space-y-16">
            {examples.map((example) => (
              <section key={example.id} aria-labelledby={`${example.id}-title`}>
                <h2
                  id={`${example.id}-title`}
                  className="text-2xl font-bold text-black dark:text-white sm:text-3xl"
                >
                  {example.title}
                </h2>
                <p className="mb-6 mt-3 max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
                  {example.description}
                </p>
                <figure>
                  <video
                    controls
                    playsInline
                    preload="none"
                    width={1920}
                    height={1080}
                    poster={`/images/mesh/examples/${example.id}.webp`}
                    aria-label={`${example.title} meshing animation`}
                    aria-describedby={`${example.id}-caption`}
                    className="aspect-video w-full rounded-lg bg-black"
                  >
                    <source
                      src={`/videos/mesh/${example.id}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support embedded video. You can use
                    the download link below to watch this example.
                  </video>
                  <figcaption
                    id={`${example.id}-caption`}
                    className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                  >
                    {example.caption}
                  </figcaption>
                </figure>
                <a
                  className="mt-4 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
                  href={`/videos/mesh/${example.id}.mp4`}
                  download={`paacs-mesh-${example.id}.mp4`}
                >
                  Download {example.title.toLowerCase()} video (MP4)
                </a>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
