import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Licensing",
  description:
    "Find the licensing information for each PAACS software product.",
  alternates: { canonical: "/license/" },
};

const documents = [
  {
    name: "PAACS Mesh",
    href: "/license/mesh/",
    description:
      "Product licence status and where release terms will be published.",
  },
  {
    name: "PAACS Simulation Software",
    href: "/eula/",
    description:
      "End User License Agreement for the original simulation software.",
  },
];

export default function Licenses() {
  return (
    <main>
      <Breadcrumb
        pageName="Software licensing"
        description="Choose your product to find its licensing information. For an installed copy, see the terms supplied with that release."
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
          For licensing questions, email{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:licensing@paacs.pro"
          >
            licensing@paacs.pro
          </a>
          .
        </p>
      </div>
    </main>
  );
}
