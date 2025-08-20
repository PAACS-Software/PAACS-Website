import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutHero from "@/components/About/AboutHero";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Computational Engineering",
  description:
    "Learn about PAACS Software Ltd, our mission to democratize engineering simulation, and our team of computational physics experts.",
  alternates: {
    canonical: "https://paacs.pro/about",
  },
  openGraph: {
    url: "https://paacs.pro/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
