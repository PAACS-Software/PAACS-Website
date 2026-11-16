import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounts are temporarily unavailable",
  alternates: { canonical: "/account/" },
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  return (
    <main id="account-status">
      <Breadcrumb
        pageName="Accounts are temporarily unavailable"
        description="Sign-in, registration and password resets are paused while we prepare the PAACS account portal."
      />
      <div className="container pb-20 pt-4">
        <p className="mb-5 text-body-color dark:text-body-color-dark">
          Need help with an existing account? Email{" "}
          <a className="text-primary underline" href="mailto:support@paacs.pro">
            support@paacs.pro
          </a>
          .
        </p>
        <Link className="font-medium text-primary underline" href="/mesh/">
          Explore PAACS Mesh
        </Link>
      </div>
    </main>
  );
}
