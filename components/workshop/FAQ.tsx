"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can book this workshop?",
    answer:
      "Schools, colleges, coaching institutes, universities and educational organizations can request this workshop.",
  },
  {
    question: "How long is the workshop?",
    answer:
      "The workshop is approximately 3 hours long and includes interactive activities, practical exercises and a Q&A session.",
  },
  {
    question: "Can the workshop be customized?",
    answer:
      "Yes. The content can be tailored according to the audience, class level and institution's objectives.",
  },
  {
    question: "How many students can attend?",
    answer:
      "The workshop is flexible and can be conducted for small batches as well as large auditoriums.",
  },
  {
    question: "How do we book a workshop?",
    answer:
      "Simply submit a workshop request. We'll contact you to discuss requirements, confirm the schedule and finalize the booking.",
  },
  {
    question: "Do you travel outside your city?",
    answer:
      "Yes. Workshops can be conducted across India. Travel and accommodation (if applicable) are discussed during booking.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          FAQ
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Frequently Asked Questions
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          Everything you need to know before requesting a workshop.
        </p>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="font-semibold text-lg">

                  {faq.question}

                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-zinc-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}