"use client";

import Hero from "@/components/workshop/Hero";
import WhyWorkshop from "@/components/workshop/WhyWorkshop";
import LearningOutcomes from "@/components/workshop/LearningOutcomes";
import WorkshopFlow from "@/components/workshop/WorkshopFlow";
import Audience from "@/components/workshop/Audience";
import Pricing from "@/components/workshop/Pricing";
import FAQ from "@/components/workshop/FAQ";
import FinalCTA from "@/components/workshop/FinalCTA";

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Hero />

      <WhyWorkshop />

      <LearningOutcomes />

      <WorkshopFlow />

      <Audience />

      <Pricing />

      <FAQ />

      <FinalCTA />

    </main>
  );
}