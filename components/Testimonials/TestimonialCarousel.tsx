"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import testimonials from "@/data/testimonials.json";

const TestimonialCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Calculate scroll distance: card width (500px) + gap (24px) * number of testimonials
  const cardWidth = 500;
  const gap = 24;
  const scrollDistance = -(cardWidth + gap) * testimonials.length;

  return (
    <section
      className="relative overflow-hidden bg-gray-50 py-12 dark:bg-gray-900/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Patient testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Patient Success Stories
          </h2>
          <p className="text-base text-slate dark:text-manatee">
            Real results from real patients
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? 0 : scrollDistance,
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[500px] flex-shrink-0 rounded-xl bg-white p-6 shadow-md dark:bg-charcoal"
              >
                {/* Quote Icon */}
                <svg
                  className="mb-3 h-6 w-6 text-teal/30"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                {/* Quote Text */}
                <blockquote className="mb-3">
                  <p className="text-base leading-relaxed text-slate dark:text-manatee" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {testimonial.carouselQuote}
                  </p>
                </blockquote>

                {/* Results Highlight */}
                {testimonial.results.weightLoss && (
                  <div className="mb-3 inline-block rounded-full bg-teal/10 px-3 py-1">
                    <p className="text-xs font-semibold text-teal">
                      {testimonial.results.weightLoss} in {testimonial.results.timeline}
                    </p>
                  </div>
                )}

                {/* Author */}
                <p className="mb-3 text-sm font-medium text-black dark:text-white">
                  — {testimonial.author}
                </p>

                {/* CTA */}
                <Link
                  href={`/testimonials#testimonial-${testimonial.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal transition-colors hover:text-teal/80"
                >
                  Read Full Story
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal/80"
          >
            View All Success Stories
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
