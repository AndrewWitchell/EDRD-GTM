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
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div
          className={`flex items-center gap-8 lg:gap-32.5 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: reverse ? 20 : -20,
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
            className="md:w-1/2"
          >
            {badge && (
              <span className="mb-4 inline-flex rounded-full bg-primary px-4.5 py-1 text-metatitle uppercase text-white">
                {badge}
              </span>
            )}
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {title}{" "}
              {highlightedText && (
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#d4eaec] dark:before:bg-titlebgdark">
                  {highlightedText}
                </span>
              )}
            </h2>

            {typeof description === "string" ? (
              <p className="mb-6">{description}</p>
            ) : (
              <div className="mb-6">{description}</div>
            )}

            {list && (
              <ul className="mb-6 space-y-3">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-black dark:text-white"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-primary"
                      >
                        <path
                          d="M6.66667 10.1147L12.7947 3.98599L13.7381 4.92866L6.66667 12L2.42267 7.75599L3.36534 6.81333L6.66667 10.1147Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7.5 py-3 text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              {ctaText}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </Link>
          </motion.div>

          {/* Image (if provided) */}
          {imageSrc && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: reverse ? -20 : 20,
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
              className="relative mx-auto hidden md:block md:w-1/2"
            >
              <Image
                src={imageSrc}
                alt={imageAlt || "Section illustration"}
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavSection;
