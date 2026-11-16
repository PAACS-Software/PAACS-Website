import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Find the PAACS Software company privacy policy and product privacy notices.",
  alternates: { canonical: "/privacy/" },
};

const documents = [
  {
    name: "Company privacy policy",
    href: "/privacy/company/",
    description:
      "How PAACS Software Ltd handles personal data and how to exercise your rights.",
  },
  {
    name: "PAACS Mesh privacy",
    href: "/privacy/mesh/",
    description: "Product privacy notice coming soon.",
  },
];

export default function PrivacyDirectory() {
  return (
    <main>
      <Breadcrumb
        pageName="Privacy"
        description="Find the company policy and privacy information for PAACS products."
      />
      <div className="container pb-20 pt-6">
        <ul className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {documents.map(({ name, href, description }) => (
            <li key={href} className="py-5">
              <Link
                href={href}
                className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
              >
                {name}
              </Link>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-slate-700 dark:text-slate-300">
          For privacy questions, email{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:privacy@paacs.pro"
          >
            privacy@paacs.pro
          </a>
          .
        </p>
      </div>
    </main>
  );
}
