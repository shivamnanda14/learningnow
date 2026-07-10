"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long is the masterclass?",
    answer:
      "The masterclass is approximately 3 hours long and is divided into multiple practical modules that you can complete at your own pace.",
  },
  {
    question: "Will I get lifetime access?",
    answer:
      "Yes. Once enrolled, you'll receive lifetime access to the course along with all future updates at no additional cost.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. After completing the masterclass, you'll receive a digital certificate of completion.",
  },
  {
    question: "Can I watch it on my phone?",
    answer:
      "Absolutely. The course works seamlessly on mobile, tablet, laptop and desktop devices.",
  },
  {
    question: "How do I access the course after purchasing?",
    answer:
      "After successful payment, the course will automatically appear inside your dashboard under 'My Courses'.",
  },
  {
    question: "Will AI features be included?",
    answer:
      "Yes. Your purchase includes future AI-powered learning features as they are released on LearningNow.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Frequently Asked Questions
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Got Questions?
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          Everything you need to know before joining the
          LearningNow Communication Masterclass.
        </p>

      </motion.div>

      <div className="mt-14 space-y-5">

        {faqs.map((faq, index) => (

          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-zinc-800/40"
            >

              <span className="pr-6 text-lg font-semibold">

                {faq.question}

              </span>

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180"
                    : ""
                }`}
              />

            </button>

            <div
              className={`grid transition-all duration-300 ${
                openIndex === index
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >

              <div className="overflow-hidden">

                <p className="px-6 pb-6 leading-8 text-zinc-400">

                  {faq.answer}

                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}