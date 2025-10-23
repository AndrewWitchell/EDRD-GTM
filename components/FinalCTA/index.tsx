"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-r from-primary to-[#0a5961] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-r dark:from-primary dark:to-[#0a5961] md:px-12.5 xl:px-17.5 xl:py-0">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-[70%] lg:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-white xl:text-hero">
              Ready to Take Control of Your Metabolic Health?
            </h2>
            <p className="mb-6 text-white">
              Book your free 30-minute consultation to learn how evidence-based
              nutrition can transform your health.
            </p>

            {/* Contact Methods */}
            <div className="mb-6 space-y-3">
              {hasMounted && (
                <div className="flex items-center gap-3 text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M3.125 3.125H16.875C17.5625 3.125 18.125 3.6875 18.125 4.375V15.625C18.125 16.3125 17.5625 16.875 16.875 16.875H3.125C2.4375 16.875 1.875 16.3125 1.875 15.625V4.375C1.875 3.6875 2.4375 3.125 3.125 3.125Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.125 4.375L10 10.625L1.875 4.375"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="mailto:eliana@eatdifferentrd.com"
                    className="hover:underline"
                  >
                    eliana@eatdifferentrd.com
                  </a>
                </div>
              )}

              <div className="flex items-center gap-3 text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M18.125 14.0625V16.5625C18.1257 16.7889 18.0791 17.0131 17.9882 17.2208C17.8974 17.4285 17.7643 17.6153 17.5976 17.7697C17.4309 17.9241 17.2343 18.0427 17.0204 18.1182C16.8065 18.1937 16.5799 18.2246 16.3542 18.2092C13.7626 17.9292 11.2816 17.0008 9.11667 15.5C7.08613 14.1148 5.38514 12.4138 4 10.3833C2.49916 8.20992 1.57044 5.71831 1.29167 3.11667C1.27633 2.89156 1.30704 2.66555 1.38223 2.45217C1.45743 2.2388 1.57542 2.04258 1.72932 1.87606C1.88322 1.70954 2.06937 1.57638 2.27638 1.48508C2.48339 1.39378 2.70689 1.34647 2.93333 1.34583H5.43333C5.82781 1.34214 6.21034 1.47859 6.51259 1.73195C6.81483 1.98531 7.01629 2.33933 7.08 2.72833C7.19915 3.50593 7.40469 4.26772 7.69292 5L6.82083 5.4375C6.2375 5.77917 6.01667 6.48333 6.22917 7.11667C6.99639 8.91157 8.23176 10.4636 9.79167 11.6042C10.0736 11.8148 10.4244 11.9088 10.775 11.8674C11.1256 11.826 11.4488 11.6523 11.6833 11.3792L12.5 10.3083C13.2323 10.5965 13.9941 10.802 14.7717 10.9208C15.1607 10.9846 15.5147 11.186 15.7681 11.4883C16.0214 11.7905 16.1579 12.1731 16.1542 12.5675V15.0675L18.125 14.0625Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="tel:+16474567952" className="hover:underline">
                  +1-647-456-7952
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right lg:w-[45%]"
          >
            <a
              href="https://eatdifferentrd.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-7.5 py-3.5 text-lg font-medium text-primary duration-300 ease-in-out hover:bg-opacity-90"
            >
              Book Your Free Consultation
              <svg
                className="ml-3"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.9667 9.16675L8.58001 2.78008L10.2317 1.12842L18.7483 9.64508L10.2317 18.1617L8.58001 16.5101L14.9667 10.1234H1.66669V9.16675H14.9667Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
