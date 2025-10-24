"use client";

import { motion } from "framer-motion";

const SocialProofBanner = () => {
  const proofItems = [
    {
      type: "testimonial",
      text: "My A1c dropped from 8.2 to 5.6 in just 3 months.",
      attribution: "Sarah M., Type 2 Diabetes",
    },
    {
      type: "publication",
      text: "Published research on carbohydrate restriction outcomes",
      attribution: "Canadian Journal of Diabetes",
    },
    {
      type: "speaking",
      text: "Keynote speaker on therapeutic nutrition",
      attribution: "Dietitians of Canada Conference",
    },
    {
      type: "testimonial",
      text: "Lost 45 lbs and finally got my PCOS symptoms under control.",
      attribution: "Jennifer L., PCOS",
    },
    {
      type: "publication",
      text: "Contributing author to UBC research on dietitian perspectives",
      attribution: "University of British Columbia",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proofItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate/10 bg-white p-8 text-center transition-all duration-200 hover:border-teal/20 hover:shadow-lg dark:border-slate/10 dark:bg-charcoal dark:hover:border-teal/20"
              >
                {item.type === "testimonial" && (
                  <svg className="mx-auto mb-4 h-8 w-8 text-teal/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                )}
                <p className="mb-4 text-base leading-relaxed text-slate dark:text-manatee">
                  {item.type === "testimonial" ? `"${item.text}"` : item.text}
                </p>
                <p className="text-sm font-medium text-waterloo">
                  {item.type === "testimonial" && "— "}
                  {item.attribution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
