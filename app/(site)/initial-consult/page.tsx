"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function InitialConsult() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service provider (Mailchimp, ConvertKit, etc.)
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            $300 Value • Completely Free
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            Your Free Initial Consultation
          </h1>

          <p className="mb-12 text-xl leading-8 text-slate dark:text-manatee">
            Experience the same assessment framework Eliana uses in her $300 initial consultations—adapted into a self-serve format you can complete right now, completely free.
          </p>
        </div>

        {/* What's Included */}
        <div className="mx-auto mb-16 max-w-3xl rounded-3xl bg-gradient-to-r from-teal/5 to-sage/5 p-8 dark:from-teal/10 dark:to-sage/10 lg:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
            What's Included in Your Free Initial Consult
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Comprehensive Health Assessment
                </h3>
                <p className="text-lg text-slate dark:text-manatee">
                  The same 54-page assessment toolkit used in every initial consultation—covering metabolic health markers, medication history, eating patterns, and lifestyle factors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Personalized Action Plan
                </h3>
                <p className="text-lg text-slate dark:text-manatee">
                  Get your customized next steps based on YOUR specific health condition, current medications, and metabolic markers—not generic advice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Evidence-Based Education
                </h3>
                <p className="text-lg text-slate dark:text-manatee">
                  Learn the "why" behind the recommendations—the same physiology, research findings, and metabolic principles Eliana explains in 1:1 consultations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Community Access (Optional)
                </h3>
                <p className="text-lg text-slate dark:text-manatee">
                  After completing your self-serve consult, you'll have the option to join the community where Eliana answers questions and provides ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Complete Your Health Assessment
                </h3>
                <p className="text-base text-slate dark:text-manatee">
                  Take 15-20 minutes to fill out the comprehensive health questionnaire. Be honest—this is for YOUR benefit, and everything is confidential.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Receive Your Personalized Action Plan
                </h3>
                <p className="text-base text-slate dark:text-manatee">
                  Based on your responses, you'll immediately receive customized guidance tailored to your specific health condition and goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Watch Educational Videos
                </h3>
                <p className="text-base text-slate dark:text-manatee">
                  Get instant access to the educational content Eliana shares in consultations—the "why" behind the recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Decide Your Next Step
                </h3>
                <p className="text-base text-slate dark:text-manatee">
                  Many people get everything they need from the self-serve consult. If you want deeper support, you'll have options to join the course, community, or book 1:1 time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Capture Form */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-r from-teal/5 to-sage/5 p-8 dark:from-teal/10 dark:to-sage/10 lg:p-12">
          {!submitted ? (
            <>
              <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                Start Your Free Initial Consultation
              </h2>

              <p className="mb-8 text-center text-lg text-slate dark:text-manatee">
                Enter your email to begin. You'll get immediate access to the health assessment and personalized action plan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-full border border-slate/20 px-6 py-4 text-lg focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 dark:bg-charcoal dark:text-white"
                />

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Begin Your Free Consultation
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-waterloo">
                No credit card required. We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg className="h-16 w-16 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Check Your Email!
              </h2>
              <p className="text-lg text-slate dark:text-manatee">
                We've sent you a link to begin your free initial consultation. Check your inbox (and spam folder) for the email from Eliana.
              </p>
            </div>
          )}
        </div>

        {/* Why Free Section */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white">
            Why Offer This for Free?
          </h3>

          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            Because some people only need that initial clarity—and offering it free builds enormous trust. You'll know if this approach resonates with you before spending a dollar.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-slate dark:text-manatee">
            If you love it, you can go deeper with the course or community. If you don't, you still got valuable information for free. Win-win.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/about"
              className="text-base font-medium text-teal transition-colors hover:text-[#0a5f68]"
            >
              Why This Approach Is Different →
            </Link>
            <span className="hidden text-slate sm:inline">•</span>
            <Link
              href="/preview"
              className="text-base font-medium text-teal transition-colors hover:text-[#0a5f68]"
            >
              Watch a Free Course Module →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
