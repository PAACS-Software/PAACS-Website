import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS downloads",
  description: "PAACS Mesh downloads will be listed when available.",
  alternates: { canonical: "/download/" },
  robots: { index: false, follow: true },
};

export default function DownloadPage() {
  return (
    <main>
      <Breadcrumb
        pageName="Downloads are currently unavailable"
        description="PAACS Mesh is in development. Visit the product page for release information."
      />
      <div className="container pb-20 pt-4">
        <Link className="font-medium text-primary underline" href="/mesh/">
          Find out more about PAACS Mesh
        </Link>
      </div>
    </main>
  );
}
