"use client";

import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

const metadata = {
  title: "Free Initial Consult Video | Eat Different RD Metabolic Health Program",
  description: "Watch the complete first module of our metabolic health program free. Evidence-based approach to reverse diabetes, PCOS, and metabolic syndrome. No credit card required.",
  openGraph: {
    title: "Start Your Metabolic Health Journey | Eat Different RD",
    description: "Watch a free initial consult video and explore evidence-based programs for reversing diabetes, PCOS, and metabolic syndrome.",
    type: "website",
  },
};

export default function PatientsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const conditions = [
    {
      title: "Diabetes (Type 1 & Type 2)",
      description: "Achieve stable blood glucose through therapeutic carbohydrate restriction and protein optimization. Reduce medication needs under physician supervision.",
      outcomes: [
        "HbA1c reduction: Average 2-3 percentage points",
        "Medication reduction: 60-80% of patients",
        "Blood sugar stability: 24/7 monitoring improvements",
      ],
      link: "/patients/conditions/diabetes",
    },
    {
      title: "Cholesterol & Hypertension",
      description: "Improve cardiovascular markers through metabolic optimization. Address root causes of high cholesterol and blood pressure, not just symptoms.",
      outcomes: [
        "LDL improvements without statins",
        "Triglyceride normalization",
        "Blood pressure reduction",
      ],
      link: "/patients/conditions/cholesterol-hypertension",
    },
    {
      title: "PCOS & Hormonal Imbalances",
      description: "Restore hormonal balance through insulin sensitivity improvement. Address the metabolic root of PCOS symptoms.",
      outcomes: [
        "Menstrual cycle regularity restored",
        "Testosterone normalization",
        "Fertility improvements",
      ],
      link: "/patients/conditions/pcos",
    },
    {
      title: "Insulin Resistance & Metabolic Syndrome",
      description: "Reverse insulin resistance before it progresses to diabetes. Comprehensive metabolic health restoration.",
      outcomes: [
        "Fasting insulin normalization",
        "Weight normalization (not weight loss—weight normalization)",
        "Energy and sleep improvements",
      ],
      link: "/patients/conditions/insulin-resistance",
    },
    {
      title: "Sleep Apnea & Fatigue",
      description: "Address metabolic contributors to sleep disorders and chronic exhaustion. Improve sleep quality through nutrition.",
      outcomes: [
        "AHI (Apnea-Hypopnea Index) improvements",
        "Energy restoration",
        "Daytime alertness improvements",
      ],
      link: "/patients/conditions/sleep-apnea",
    },
    {
      title: "Thyroid Disorders & Nutrient Deficiencies",
      description: "Optimize thyroid function and address nutrient deficiencies that interfere with metabolic health.",
      outcomes: [
        "TSH normalization support",
        "Nutrient repletion strategies",
        "Energy and metabolism improvements",
      ],
      link: "/patients/conditions/thyroid-nutrients",
    },
    {
      title: "Weight Management",
      description: "Sustainable weight normalization through metabolic health restoration. Not another diet—a comprehensive approach to why diets fail.",
      outcomes: [
        "Sustainable weight normalization",
        "Metabolic rate restoration",
        "No calorie counting required",
      ],
      link: "/patients/conditions/weight-management",
    },
  ];

  const faqs = [
    {
      question: "What if I've tried low-carb before and it didn't work?",
      answer: "Most people who \"tried low-carb and failed\" were actually missing critical pieces: inadequate protein, too much dietary fat, ignoring sleep and stress, or trying to do it all at once instead of in phases. This program addresses WHY previous attempts failed and gives you a structured, evidence-based framework instead of generic advice.",
    },
    {
      question: "Do I need to count calories or track macros?",
      answer: "No. Calorie counting is not required and often counterproductive. Instead, you'll learn to work WITH your body's natural satiety signals by prioritizing protein and managing carbohydrates. The only \"tracking\" involved is optional blood sugar monitoring (if you're managing diabetes) and food journaling in early weeks to identify patterns.",
    },
    {
      question: "Will my doctor approve of this approach?",
      answer: "Many of my patients are referred BY their physicians. I work collaboratively with your medical team and will communicate with your doctor about any medication adjustments needed as you progress. If your doctor is unfamiliar with therapeutic carbohydrate restriction, I can provide peer-reviewed research supporting the approach.",
    },
    {
      question: "How long does it take to see results?",
      answer: "Most people notice improvements in energy and blood sugar stability within 2-4 weeks. HbA1c improvements typically show in 3 months. Weight normalization varies widely but averages 1-2 pounds per week once metabolic health improves. Remember: This isn't a quick fix. It's a sustainable approach to metabolic health restoration that works because it addresses root causes.",
    },
    {
      question: "What if I can't cook or don't have time?",
      answer: "The program includes strategies for every skill level—from \"I've never cooked\" to \"I'm already comfortable in the kitchen.\" We also cover time-saving strategies, batch cooking, and how to make this work with a busy schedule. One module specifically addresses \"Protein is hard\"—the exact challenge you're describing. You're not alone, and it IS solvable.",
    },
    {
      question: "Is this covered by insurance?",
      answer: "The online course and community are NOT covered by insurance (they're educational programs, not medical treatment). However, if you choose 1-on-1 consultations (Tier 4), those sessions may be covered by insurance depending on your plan and Eliana's licensing in your province. Contact us to discuss your specific insurance situation.",
    },
    {
      question: "What's your refund policy?",
      answer: "The course comes with a 30-day money-back guarantee. If you complete the first 3 modules and feel this isn't right for you, just email us for a full refund—no questions asked. We only want people in the program who are getting value from it.",
    },
    {
      question: "Can I upgrade from one tier to another later?",
      answer: "Yes. You can start with the free initial consult video, upgrade to the full course anytime, add community access whenever you want more support, and apply for 1-on-1 consultations if your case requires intensive support. Many patients start with Tier 2 (course only) and add community access (Tier 3) after completing a few modules.",
    },
  ];

  return (
    <>
      {/* Hero Section - Initial Consult CTA */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 dark:bg-black lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl"
            >
              Start with a Free Initial Consult Video
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 text-lg leading-relaxed text-slate dark:text-manatee lg:text-xl"
            >
              See exactly how the program works before committing to anything. Watch the complete first module free—no credit card required.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 grid gap-8 md:grid-cols-3"
            >
              <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
                <div className="mb-4 text-4xl text-teal">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Complete First Module
                </h3>
                <p className="text-sm text-slate dark:text-manatee">
                  30-minute comprehensive overview of the metabolic health approach
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
                <div className="mb-4 text-4xl text-teal">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Evidence-Based Framework
                </h3>
                <p className="text-sm text-slate dark:text-manatee">
                  Research-backed strategies from UBC diabetes remission studies
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
                <div className="mb-4 text-4xl text-teal">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  DIY Tools Included
                </h3>
                <p className="text-sm text-slate dark:text-manatee">
                  Get immediate access to calculators, meal plans, and tracking sheets
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/initial-consult"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Watch Free Initial Consult Video
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="mt-4 text-sm text-waterloo">
                Join 1,000+ patients who started here • No credit card required
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <ScrollAnimation>
        <section id="conditions" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
                Conditions We Treat
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-slate dark:text-manatee">
                Evidence-based nutritional therapy for metabolic health conditions. Each condition page includes real patient case studies showing outcomes, treatment approaches, and what to expect.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition, index) => (
                <article
                  key={index}
                  className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-charcoal"
                >
                  <h3 className="mb-3 text-xl font-semibold text-teal">
                    {condition.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate dark:text-manatee">
                    {condition.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {condition.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start text-sm text-slate dark:text-manatee">
                        <span className="mr-2 font-bold text-teal">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={condition.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:text-teal/80"
                  >
                    View case studies
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-slate dark:text-manatee">
                Not sure which condition applies to you?
              </p>
              <Link
                href="/patients/resources/symptom-analyzer"
                className="inline-flex items-center justify-center rounded-full border-2 border-teal px-6 py-3 font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white"
              >
                Take the Symptom Analyzer Quiz →
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Approach */}
      <ScrollAnimation>
        <section id="approach" className="bg-white py-20 dark:bg-black lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
                Our Approach: Why This Is Different
              </h2>
              <div className="mx-auto max-w-3xl space-y-4">
                <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                  Every failed diet you've tried wasn't your fault. The conventional approach is missing critical pieces—and it's making your metabolism harder to fix, not easier.
                </p>
                <p className="text-base leading-relaxed text-slate dark:text-manatee">
                  This isn't another restrictive diet. It's a comprehensive, evidence-based approach to metabolic health that addresses the root causes of why previous attempts failed.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <article className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
                <h3 className="mb-3 text-2xl font-bold text-teal">
                  1. Care Coordination First
                </h3>
                <p className="mb-4 font-semibold text-black dark:text-white">
                  Your Nutritional Quarterback
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-slate dark:text-manatee">
                  <p>
                    I coordinate across your specialists—endocrinologist, primary care, OBGYN, cardiologist—so you get ONE integrated plan instead of conflicting advice from different doctors.
                  </p>
                  <p>
                    No more "your endocrinologist says this, but your GP says that." I work collaboratively with your medical team to ensure everyone is aligned on your care plan.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
                <h3 className="mb-3 text-2xl font-bold text-teal">
                  2. Stress & Anxiety BEFORE Diet
                </h3>
                <p className="mb-4 font-semibold text-black dark:text-white">
                  Anxiety-Reducing, Not Anxiety-Adding
                </p>
                <blockquote className="mb-4 border-l-4 border-teal pl-4 italic text-slate dark:text-manatee">
                  "I prioritize reducing your anxiety because I refuse to work against your metabolism—high cortisol signals your body to store fat, making weight loss physiologically impossible."
                </blockquote>
                <p className="text-sm leading-relaxed text-slate dark:text-manatee">
                  We address sleep, stress management, and anxiety FIRST—before changing a single food. If your cortisol is elevated, dietary changes won't work. Period.
                </p>
              </article>

              <article className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
                <h3 className="mb-3 text-2xl font-bold text-teal">
                  3. Evidence-Based, Not Trendy
                </h3>
                <p className="mb-4 font-semibold text-black dark:text-white">
                  Research-Backed Strategies
                </p>
                <div className="space-y-4 text-sm leading-relaxed text-slate dark:text-manatee">
                  <p>
                    This approach is built on peer-reviewed research from institutions like UBC, Stanford, and Virta Health—not social media trends or guru promises.
                  </p>
                  <p>
                    You get the same 54-page evidence-based toolkit I use in initial assessments with every patient. Everything is explained clearly, with references you can verify.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-slate dark:text-manatee">
                Want to learn more about Eliana's background and credentials?
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-teal px-6 py-3 font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white"
              >
                About Eliana Witchell, MSc, RD, CDE →
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation>
        <section id="faq" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white lg:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate dark:text-manatee">
                Questions about the program, approach, or whether this is right for you? Start here.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white dark:bg-charcoal"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                    aria-expanded={expandedFaq === index}
                  >
                    <h3 className="pr-4 text-lg font-semibold text-black dark:text-white">
                      {faq.question}
                    </h3>
                    <span className="flex-shrink-0 text-2xl font-bold text-teal">
                      {expandedFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="border-t border-gray-200 p-6 dark:border-gray-700">
                      <p className="leading-relaxed text-slate dark:text-manatee">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-slate dark:text-manatee">
              <p>
                Still have questions?{" "}
                <Link href="/contact" className="font-semibold text-teal hover:underline">
                  Get in touch
                </Link>{" "}
                or{" "}
                <Link href="/initial-consult" className="font-semibold text-teal hover:underline">
                  watch the free initial consult video
                </Link>{" "}
                to learn more.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
}
