import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PAACS Mesh Privacy",
  description: "Privacy notice status for PAACS Mesh.",
  alternates: { canonical: "/privacy/mesh/" },
};

export default function MeshPrivacyPage() {
  return (
    <main>
      <Breadcrumb
        pageName="PAACS Mesh privacy"
        description="The product privacy notice is coming soon. For information about this website, see the company privacy policy."
      />
      <div className="container flex flex-wrap gap-x-6 gap-y-3 pb-20 pt-6 font-semibold text-blue-700 dark:text-blue-300">
        <Link href="/privacy/company/" className="underline underline-offset-4">
          Company privacy policy
        </Link>
        <Link href="/mesh/" className="underline underline-offset-4">
          PAACS Mesh product page
        </Link>
      </div>
    </main>
  );
}
