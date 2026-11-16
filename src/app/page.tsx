import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave/Wave";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "PAACS Software is developing PAACS Mesh as the first step toward a broader multiphysics modelling workflow.",
  keywords: [
    "PAACS Software",
    "PAACS Mesh",
    "mesh generation",
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
