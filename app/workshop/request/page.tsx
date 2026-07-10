"use client";

import RequestHero from "@/components/workshop/request/RequestHero";
import RequestBenefits from "@/components/workshop/request/RequestBenefits";
import WorkshopRequestForm from "@/components/workshop/request/WorkshopRequestForm";

export default function WorkshopRequestPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <RequestHero />

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left Side */}

          <div className="lg:col-span-2">

            <RequestBenefits />

          </div>

          {/* Right Side */}

          <div className="lg:col-span-3">

            <WorkshopRequestForm />

          </div>

        </div>

      </section>

    </main>
  );
}