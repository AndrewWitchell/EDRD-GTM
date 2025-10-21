"use client";
import React from "react";

const Brands = () => {
  const partnerships = [
    "Dietitians of Canada",
    "Institute for Personalized Therapeutic Nutrition (IPTN)",
    "University of British Columbia (UBC)",
    "BC Patient Safety & Quality Council",
    "Canadian Pharmacists Association",
    "Wellington Dufferin Diabetes"
  ];

  return (
    <>
      {/* Partnerships Section */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <p className="mb-8 text-center text-sm font-medium text-waterloo">
            Trusted partnerships with leading healthcare organizations
          </p>
          <div className="grid grid-cols-2 items-center justify-center gap-7.5 md:grid-cols-3 lg:grid-cols-6 lg:gap-12.5">
            {partnerships.map((partner, key) => (
              <div
                key={key}
                className="flex h-20 items-center justify-center rounded-lg bg-white p-4 text-center transition-all hover:shadow-md dark:bg-blacksection"
              >
                <p className="text-xs font-medium text-black dark:text-white">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
