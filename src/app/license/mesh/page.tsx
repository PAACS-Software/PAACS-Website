import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS Mesh Licensing",
  description: "Licensing status for PAACS Mesh.",
  alternates: { canonical: "/license/mesh/" },
};

export default function MeshLicensePage() {
  return (
    <main>
      <Breadcrumb
        pageName="PAACS Mesh licensing"
        description="PAACS Mesh is in development. Public licence terms will be published here when release information is ready."
      />
      <div className="container flex flex-wrap gap-x-6 gap-y-3 pb-20 pt-6 font-semibold text-blue-700 dark:text-blue-300">
        <Link href="/mesh/" className="underline underline-offset-4">
          PAACS Mesh product page
        </Link>
        <Link href="/license/" className="underline underline-offset-4">
          All software licences
        </Link>
      </div>
    </main>
  );
}
