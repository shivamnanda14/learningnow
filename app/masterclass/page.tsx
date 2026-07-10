"use client";

import Hero from "@/components/masterclass/Hero";
import WhatYouGet from "@/components/masterclass/WhatYouGet";
import Curriculum from "@/components/masterclass/Curriculum";
import Audience from "@/components/masterclass/Audience";
import Pricing from "@/components/masterclass/Pricing";
import FAQ from "@/components/masterclass/FAQ";
import FinalCTA from "@/components/masterclass/FinalCTA";

export default function MasterclassPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      <Hero />

      <WhatYouGet />

      <Curriculum />

      <Audience />

      <Pricing />

      <FAQ />

      <FinalCTA />

    </main>
  );
}