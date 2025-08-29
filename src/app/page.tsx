import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Wave from "@/components/Wave/Wave";
import { Metadata } from "next";
import AboutCompany from "@/components/AboutCompany";
import WhyPAACS from "@/components/WhyPAACS";

export const metadata: Metadata = {
  description:
    "Professional simulation software for structural, fluid, thermal, and electromagnetic analysis. Powerful yet intuitive tools trusted by engineers worldwide. Try free.",
  keywords: [
    "PAACS Software",
    "engineering simulation software",
    "FEA software",
    "CFD software",
    "finite element analysis",
    "computational fluid dynamics",
    "multiphysics simulation",
    "structural analysis software",
    "thermal simulation",
  ],
  alternates: {
    canonical: "https://paacs.pro",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Wave />
      <Features />
    </>
  );
}
