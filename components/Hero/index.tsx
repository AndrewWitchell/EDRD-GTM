"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);

  const withoutStatements = [
    "being afraid to hope this time",
    "conflicting advice from different doctors",
    "restrictive diets that leave you exhausted",
    "your body working against you every step",
    "expensive tests your insurance won't cover",
    "months of trial-and-error",
    "your doctor dismissing what you're going through",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatementIndex((prev) => (prev + 1) % withoutStatements.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [withoutStatements.length]);

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 dark:bg-black lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-6 lg:inline-block">
              <span className="inline-flex items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Evidence-Based Nutrition
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white lg:text-6xl">
              Finally Understand What Your Body Needs
            </h1>

            {/* Intro Text */}
            <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
              If you could learn what to eat for YOUR health condition...
            </p>

            {/* Rotating "Without" Statements */}
            <div className="relative mb-4 min-h-[60px] lg:min-h-[50px]">
              {withoutStatements.map((statement, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed text-slate transition-opacity duration-300 dark:text-manatee ${
                    index === currentStatementIndex
                      ? "relative opacity-100"
                      : "absolute inset-0 opacity-0"
                  }`}
                >
                  Without {statement}
                </p>
              ))}
            </div>

            {/* Closing Question */}
            <p className="mb-8 text-lg font-medium leading-relaxed text-black dark:text-white">
              ...would that change everything?
            </p>

            {/* Credentials Line */}
            <p className="mb-6 text-sm leading-relaxed text-waterloo">
              Eliana Witchell, MSc, RD, CDE — Published researcher in diabetes remission
              and carbohydrate restriction (European Journal of Clinical Nutrition, 2023).
              Serving 600+ patients across military and civilian populations.
            </p>

            {/* CTAs - New Hierarchy */}
            <div className="flex flex-col items-center gap-4 lg:items-start">
              {/* PRIMARY CTA */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/preview"
                  className="group inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:w-auto"
                >
                  See How It Works First
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <p className="mt-2 text-center text-sm text-waterloo sm:text-left">
                  Watch the first module free. See if this resonates before committing.
                </p>
              </div>

              {/* SECONDARY CTA */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-teal px-8 py-4 text-lg font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white sm:w-auto"
                >
                  Why This Is Different
                </Link>
                <p className="mt-2 text-center text-sm text-waterloo sm:text-left">
                  Evidence-based approach that works WITH your metabolism, not against it
                </p>
              </div>
            </div>

            {/* Condition Tags */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Type 2 Diabetes</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Prediabetes</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">PCOS</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Metabolic Health</span>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/eliana-headshot.webp"
                alt="Eliana Witchell, MSc, RD, CDE"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl ring-1 ring-slate/10"
                priority
              />
              {/* Floating Credential Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-slate/10 dark:bg-charcoal">
                <p className="text-center text-sm font-semibold text-teal">
                  MSc, RD, CDE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
