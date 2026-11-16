import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS Mesh",
  description:
    "Learn about PAACS Mesh, the first product in development from PAACS Software.",
  alternates: { canonical: "/mesh/" },
};

export default function MeshPage() {
  return (
    <main>
      <Breadcrumb
        pageName="PAACS Mesh"
        description="We’re developing PAACS Mesh to help engineers prepare geometry for simulation."
      />
      <div className="container pb-20 pt-4">
        <div className="max-w-[570px] space-y-5 text-body-color dark:text-body-color-dark">
          <p>
            A mesh divides a model into smaller elements for numerical analysis.
            Preparing that mesh is the first stage of the broader multiphysics
            modelling workflow we plan to build.
          </p>
          <p>
            PAACS Mesh is in development. Downloads will be listed here when
            available.
          </p>
          <Link className="font-medium text-primary underline" href="/about/">
            About PAACS Software
          </Link>
        </div>
      </div>
    </main>
  );
}
