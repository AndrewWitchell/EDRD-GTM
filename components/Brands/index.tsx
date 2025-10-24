"use client";
import React from "react";

const Brands = () => {
  const partnerships = [
    "Dietitians of Canada",
    "Institute for Personalized Therapeutic Nutrition",
    "University of British Columbia",
    "BC Patient Safety & Quality Council",
    "Canadian Pharmacists Association",
    "Wellington Dufferin Diabetes"
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-sm font-medium text-waterloo">
            Trusted partnerships with leading healthcare organizations
          </p>
          <div className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerships.map((partner, key) => (
              <div
                key={key}
                className="flex items-center justify-center text-center transition-colors duration-200"
              >
                <p className="text-sm font-medium text-slate/60 hover:text-teal dark:text-manatee/60 dark:hover:text-teal">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
