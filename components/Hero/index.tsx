"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left Column - Content */}
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-primary dark:text-white">
                eat evidence-based
              </h4>
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Evidence-Based Nutrition That{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#d4eaec] dark:before:bg-titlebgdark">
                  Reverses Disease
                </span>
              </h1>
              <p className="mb-4 text-lg">
                Personalized nutrition therapy from Eliana Witchell, MSc, RD, CDE — Chief Dietitian at the Institute for Personalized Therapeutic Nutrition.
              </p>

              {/* Social Proof */}
              <div className="mb-6 rounded-lg bg-alabaster p-4 dark:bg-blacksection">
                <p className="text-sm font-semibold text-primary">
                  Over 1,000 lbs of weight loss across 53 patients
                </p>
                <p className="text-xs text-waterloo">Evidence-based results, not promises</p>
              </div>

              {/* Condition Tags */}
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                  ✓ Type 2 Diabetes
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                  ✓ Prediabetes
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                  ✓ PCOS
                </span>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20">
                  ✓ Metabolic Health
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-5">
                <a
                  href="https://eatdifferentrd.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex rounded-full bg-primary px-7.5 py-3 text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Book Free 30-Min Consultation
                </a>
                <Link
                  href="#about"
                  className="flex rounded-full border-2 border-primary px-7.5 py-3 text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
                >
                  Learn About Eliana
                </Link>
              </div>

              <p className="mt-5 text-sm text-waterloo">
                📞 +1-647-456-7952 | 📧 eliana@eatdifferentrd.com
              </p>
            </div>

            {/* Right Column - Image + Credentials */}
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* Eliana's Professional Photo */}
                <div className="mb-6 flex w-full max-w-[500px] items-center justify-center">
                  <Image
                    src="/images/eliana-headshot.webp"
                    alt="Eliana Witchell, MSc, RD, CDE - Registered Dietitian and Certified Diabetes Educator"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                </div>

                {/* Credential Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="rounded-lg border-2 border-meta bg-white px-4 py-2 dark:bg-black">
                    <p className="text-xs font-semibold text-waterloo">REGISTERED</p>
                    <p className="text-sm font-bold text-primary">DIETITIAN</p>
                  </div>
                  <div className="rounded-lg border-2 border-meta bg-white px-4 py-2 dark:bg-black">
                    <p className="text-xs font-semibold text-waterloo">CERTIFIED</p>
                    <p className="text-sm font-bold text-primary">DIABETES EDUCATOR</p>
                  </div>
                  <div className="rounded-lg border-2 border-meta bg-white px-4 py-2 dark:bg-black">
                    <p className="text-xs font-semibold text-waterloo">MASTER OF</p>
                    <p className="text-sm font-bold text-primary">SCIENCE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
