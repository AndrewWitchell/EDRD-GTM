"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NavSectionProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description: string | React.ReactNode;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  list?: string[];
}

const NavSection = ({
  badge,
  title,
  highlightedText,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  reverse = false,
  list,
}: NavSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-black lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          {badge && (
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            {title}{" "}
            {highlightedText && (
              <span className="bg-gradient-to-r from-teal to-sage bg-clip-text text-transparent">
                {highlightedText}
              </span>
            )}
          </h2>
        </div>

        {/* Content Grid */}
        <div className={`mx-auto max-w-5xl ${imageSrc ? 'grid gap-12 lg:grid-cols-2 lg:gap-16' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${imageSrc && reverse ? 'lg:order-2' : ''}`}
          >
            {typeof description === "string" ? (
              <p className="mb-8 text-lg leading-8 text-slate dark:text-manatee">
                {description}
              </p>
            ) : (
              <div className="mb-8 text-lg leading-8 text-slate dark:text-manatee">
                {description}
              </div>
            )}

            {list && (
              <ul className="mb-8 space-y-4">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                      <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base text-slate dark:text-manatee">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-2 rounded-full border border-teal px-6 py-3 text-base font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white"
            >
              {ctaText}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Image (if provided) */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`flex items-center justify-center ${reverse ? 'lg:order-1' : ''}`}
            >
              <div className="relative">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Section illustration"}
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl ring-1 ring-slate/10"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavSection;
