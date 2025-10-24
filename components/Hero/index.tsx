"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const withoutStatements = [
    "being afraid to hope this time",
    "conflicting advice from different doctors",
    "restrictive diets that leave you exhausted",
    "your body working against you every step",
    "expensive tests your insurance won't cover",
    "months of trial-and-error",
    "your doctor dismissing what you're going through",
  ];

  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentStatement = withoutStatements[currentStatementIndex];

    // Paused state - wait before deleting
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds when fully typed
      return () => clearTimeout(pauseTimeout);
    }

    // Typing or deleting
    const typingSpeed = isDeleting ? 30 : 60; // Faster delete, slower type

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentStatement.length) {
          setDisplayedText(currentStatement.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentStatement.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next statement
          setIsDeleting(false);
          setCurrentStatementIndex((prev) => (prev + 1) % withoutStatements.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentStatementIndex, withoutStatements]);

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 dark:bg-black lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-6 lg:inline-block"
            >
              <span className="inline-flex items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                Evidence-Based Nutrition
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white lg:text-6xl"
            >
              Finally Understand What Your Body Needs
            </motion.h1>

            {/* Intro Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee"
            >
              If you could learn what to eat for YOUR health condition...
            </motion.p>

            {/* Typing "Without" Statements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mb-4 min-h-[60px] lg:min-h-[50px]"
            >
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                Without{" "}
                <span className="inline-block min-w-[20px]">
                  {displayedText}
                  <span className="ml-0.5 inline-block w-0.5 h-5 bg-teal animate-pulse"></span>
                </span>
              </p>
            </motion.div>

            {/* Closing Question */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-lg font-medium leading-relaxed text-black dark:text-white"
            >
              ...would that change everything?
            </motion.p>

            {/* Bridge Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 text-center text-base leading-relaxed text-slate dark:text-manatee lg:text-left"
            >
              Start with understanding what makes this different, then experience it yourself—free.
            </motion.p>

            {/* CTAs - New Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-4 lg:items-start"
            >
              {/* PRIMARY CTA - Why This Is Different */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/about"
                  className="group inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:w-auto"
                >
                  Why This Is Different
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <p className="mt-2 text-center text-sm text-waterloo sm:text-left">
                  Evidence-based approach that works WITH your metabolism, not against it
                </p>
              </div>

              {/* SECONDARY CTA - Start Your Free Initial Consult */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/initial-consult"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-teal px-8 py-4 text-lg font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white sm:w-auto"
                >
                  Start Your Free Initial Consult
                </Link>
                <p className="mt-2 text-center text-sm text-waterloo sm:text-left">
                  Experience Eliana's $300 initial consultation in self-serve format—completely free
                </p>
              </div>
            </motion.div>

            {/* Condition Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Type 2 Diabetes</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Prediabetes</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">PCOS</span>
              <span className="text-xs text-waterloo">✓</span>
              <span className="text-sm text-slate dark:text-manatee">Metabolic Health</span>
            </motion.div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="flex flex-col items-center gap-8 lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/eliana-headshot.webp"
                alt="Eliana Witchell, MSc, RD, CDE"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl ring-1 ring-slate/10"
                priority
              />
              {/* Floating Credential Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 shadow-lg ring-1 ring-slate/10 dark:bg-charcoal"
              >
                <p className="text-center text-sm font-semibold text-teal">
                  MSc, RD, CDE
                </p>
              </motion.div>
            </motion.div>

            {/* Credentials Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 max-w-md text-center text-sm leading-relaxed text-waterloo lg:text-right"
            >
              Eliana Witchell, MSc, RD, CDE — Published researcher in diabetes remission
              and carbohydrate restriction (European Journal of Clinical Nutrition, 2023).
              Serving 600+ patients across military and civilian populations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
