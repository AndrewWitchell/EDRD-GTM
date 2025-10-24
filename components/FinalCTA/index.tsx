"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-16 shadow-2xl lg:px-16 lg:py-20"
        >
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Ready to Take Control of Your Metabolic Health?
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-white/90">
                Book your free 30-minute consultation to learn how evidence-based
                nutrition can transform your health.
              </p>

              {/* CTA Button */}
              <div className="mb-10">
                <a
                  href="https://eatdifferentrd.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-teal shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  Book Your Free Consultation
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Contact Methods */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                {hasMounted && (
                  <a
                    href="mailto:eliana@eatdifferentrd.com"
                    className="group flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">eliana@eatdifferentrd.com</span>
                  </a>
                )}

                <a
                  href="tel:+16474567952"
                  className="group flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">+1-647-456-7952</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
