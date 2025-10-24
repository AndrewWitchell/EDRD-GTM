import { Metadata } from "next";
import Link from "next/link";
import testimonials from "@/data/testimonials.json";

export const metadata: Metadata = {
  title: "Patient Success Stories | Eliana Witchell RD",
  description: "Real results from real patients. See how evidence-based, food-first approaches have helped patients reverse chronic conditions, lose weight, and transform their health.",
  keywords: [
    "metabolic health success stories",
    "diabetes reversal testimonials",
    "weight loss testimonials",
    "low carb success stories",
    "ketogenic diet results",
  ].join(", "),
  openGraph: {
    title: "Patient Success Stories | Eliana Witchell RD",
    description: "Real results from real patients. Evidence-based nutrition therapy success stories.",
    type: "website",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="overflow-hidden bg-white py-24 dark:bg-black sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            Patient Success Stories
          </h1>
          <p className="text-xl leading-relaxed text-slate dark:text-manatee">
            Real results from real patients. See how evidence-based, food-first approaches have transformed lives.
          </p>
        </header>

        {/* Testimonials */}
        <div className="space-y-24">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              id={`testimonial-${testimonial.id}`}
              className="scroll-mt-24"
            >
              {/* Testimonial Header */}
              <header className="mb-8">
                <h2 className="mb-3 text-3xl font-bold text-black dark:text-white">
                  {testimonial.title}
                </h2>
                <p className="mb-4 text-lg text-slate dark:text-manatee">
                  {testimonial.subtitle}
                </p>
                <p className="text-sm font-medium text-waterloo">
                  {testimonial.author}
                </p>
              </header>

              {/* Results Callout Box */}
              <div className="mb-8 rounded-2xl border border-teal/20 bg-teal/5 p-6 dark:bg-teal/10">
                <h3 className="mb-4 text-lg font-semibold text-teal">
                  Results at a Glance
                </h3>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {testimonial.results.weightLoss && (
                    <div>
                      <dt className="text-sm font-medium text-slate dark:text-manatee">
                        Weight Loss
                      </dt>
                      <dd className="mt-1 text-2xl font-bold text-black dark:text-white">
                        {testimonial.results.weightLoss}
                      </dd>
                      {testimonial.results.weightStart && testimonial.results.weightEnd && (
                        <dd className="text-sm text-waterloo">
                          {testimonial.results.weightStart} → {testimonial.results.weightEnd}
                        </dd>
                      )}
                    </div>
                  )}

                  {testimonial.results.timeline && (
                    <div>
                      <dt className="text-sm font-medium text-slate dark:text-manatee">
                        Timeline
                      </dt>
                      <dd className="mt-1 text-2xl font-bold text-black dark:text-white">
                        {testimonial.results.timeline}
                      </dd>
                    </div>
                  )}

                  {testimonial.results.conditionsReversed && testimonial.results.conditionsReversed.length > 0 && (
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-slate dark:text-manatee">
                        Conditions Addressed
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {testimonial.results.conditionsReversed.map((condition, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-white px-3 py-1 text-sm text-teal dark:bg-charcoal"
                          >
                            {condition}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-slate dark:text-manatee">
                      Method
                    </dt>
                    <dd className="mt-1 text-base text-black dark:text-white">
                      {testimonial.results.method}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Full Story */}
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                {testimonial.fullText.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Divider between testimonials */}
              {index < testimonials.length - 1 && (
                <hr className="mt-16 border-t border-slate/10" />
              )}

              {/* Schema Markup */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Review",
                    itemReviewed: {
                      "@type": "Dietitian",
                      name: "Eliana Witchell, MSc, RD, CDE",
                    },
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    author: {
                      "@type": "Person",
                      name: testimonial.author,
                    },
                    reviewBody: testimonial.fullText,
                  }),
                }}
              />
            </article>
          ))}
        </div>

        {/* Final CTA Section */}
        <section className="mt-24 rounded-3xl bg-gradient-to-r from-teal/5 to-sage/5 p-8 text-center dark:from-teal/10 dark:to-sage/10 lg:p-12">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="mb-8 text-lg text-slate dark:text-manatee">
            Start your transformation with evidence-based nutrition therapy
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/initial-consult"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg sm:w-auto"
            >
              Start Your Free Initial Consult
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-teal px-8 py-4 text-lg font-semibold text-teal transition-all duration-200 hover:bg-teal hover:text-white sm:w-auto"
            >
              Learn About Our Approach
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
