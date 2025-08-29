import Pricing from "@/components/Pricing";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Free Academic & Commercial Plans",
  description:
    "Flexible pricing for every need. Free perpetual license for students and researchers. Affordable commercial plans starting at $99/month.",
  alternates: {
    canonical: "https://paacs.pro/pricing",
  },
};

const PricingPage = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default PricingPage;
