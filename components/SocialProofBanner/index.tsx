"use client";

import { motion } from "framer-motion";

const SocialProofBanner = () => {
  const proofItems = [
    {
      type: "testimonial",
      text: "\"My A1c dropped from 8.2 to 5.6 in just 3 months.\"",
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
      text: "\"Lost 45 lbs and finally got my PCOS symptoms under control.\"",
      attribution: "Jennifer L., PCOS",
    },
    {
      type: "publication",
      text: "Contributing author to UBC research on dietitian perspectives",
      attribution: "University of British Columbia",
    },
  ];

  return (
    <section className="border-y border-stroke bg-alabaster py-11 dark:border-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
          {proofItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="mb-2 text-sm font-medium italic text-black dark:text-white">
                {item.text}
              </p>
              <p className="text-xs text-waterloo">
                {item.type === "testimonial" && "— "}
                {item.attribution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;
