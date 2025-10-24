"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function Preview() {
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
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            See How It Works: Free First Module
          </h1>

          <p className="mb-12 text-xl leading-8 text-slate dark:text-manatee">
            Watch the complete first module of the Metabolic Health Transformation Program.
            No credit card required. No obligation.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-teal/10 to-sage/10 shadow-2xl ring-1 ring-slate/10">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <svg
                className="mb-4 h-20 w-20 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-medium text-slate dark:text-manatee">
                [Video: Introduction to Evidence-Based Metabolic Health]
              </p>
              <p className="mt-2 text-sm text-waterloo">
                Video will be embedded here (YouTube, Vimeo, or Thinkific)
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
            In This Free Module, You'll Learn:
          </h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <svg className="h-6 w-6 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-slate dark:text-manatee">
                Why high cortisol makes weight loss physiologically impossible
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <svg className="h-6 w-6 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-slate dark:text-manatee">
                The blood sugar rollercoaster and why you feel it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <svg className="h-6 w-6 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-slate dark:text-manatee">
                Why "diets" fail and what actually works
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <svg className="h-6 w-6 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-slate dark:text-manatee">
                How to work WITH your metabolism instead of against it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <svg className="h-6 w-6 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-lg text-slate dark:text-manatee">
                The protein algorithm used in UBC's diabetes remission research
              </span>
            </li>
          </ul>
        </div>

        {/* Email Capture Form */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-r from-teal/5 to-sage/5 p-8 dark:from-teal/10 dark:to-sage/10 lg:p-12">
          {!submitted ? (
            <>
              <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                Get Free Access + Email Support
              </h2>

              <p className="mb-6 text-center text-lg text-slate dark:text-manatee">
                Enter your email to watch the full first module and receive:
              </p>

              <ul className="mb-8 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span className="text-slate dark:text-manatee">Complete first module (30 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span className="text-slate dark:text-manatee">Weekly tips for metabolic health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span className="text-slate dark:text-manatee">Early access to new resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span className="text-slate dark:text-manatee">Exclusive community invitations</span>
                </li>
              </ul>

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
                  Watch Free Module
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-waterloo">
                We respect your privacy. Unsubscribe anytime. No spam, just valuable content.
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
                We've sent you a link to watch the first module. Check your inbox (and spam folder) for the email from Eliana.
              </p>
            </div>
          )}
        </div>

        {/* What Happens Next */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-6 text-center text-2xl font-semibold text-black dark:text-white">
            What Happens After You Watch?
          </h3>

          <p className="mb-4 text-center text-lg leading-relaxed text-slate dark:text-manatee">
            You'll receive an email with access to the complete first module. If you love it and want to continue,
            you'll have the option to enroll in the full Metabolic Health Transformation Program.
          </p>

          <p className="mb-8 text-center text-lg leading-relaxed text-slate dark:text-manatee">
            No pressure. No hard sell. Just valuable content and the option to go deeper if it resonates with you.
          </p>

          <div className="text-center">
            <Link
              href="/about"
              className="text-base font-medium text-teal transition-colors hover:text-[#0a5f68]"
            >
              Why This Approach Is Different →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
