import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing archive",
  description: "The previous PAACS simulation pricing page has been archived.",
  alternates: { canonical: "/pricing/" },
  robots: { index: false, follow: true },
};

export default function PricingPage() {
  return (
    <main>
      <Breadcrumb
        pageName="Pricing archive"
        description="The previous PAACS simulation plans have been archived. PAACS Mesh is in development, and we’ll post product and release information on its page."
      />
      <div className="container pb-20 pt-4">
        <Link className="font-medium text-primary underline" href="/mesh/">
          Explore PAACS Mesh
        </Link>
      </div>
    </main>
  );
}
