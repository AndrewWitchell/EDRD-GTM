"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    };

    if (openDropdown !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-6 transition-all duration-200 ${
        stickyMenu
          ? "bg-white/95 py-4 shadow-sm backdrop-blur-sm dark:bg-black/95"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto max-w-7xl items-center justify-between px-6 lg:px-8 xl:flex">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/eliana-logo.png"
              alt="Eliana Witchell RD - Evidence-Based Nutrition"
              width={150}
              height={150}
              className="h-20 w-auto"
              priority
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 w-full!" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "w-full! delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-0" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "h-0! delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-3/4 ${
            navigationOpen &&
            "navbar visible! mt-4 h-auto max-h-[500px] overflow-y-auto rounded-2xl border border-slate/10 bg-white p-8 shadow-lg dark:border-slate/10 dark:bg-charcoal xl:h-auto xl:max-h-none xl:overflow-visible xl:border-0 xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem) => (
                <li key={menuItem.id} className="group relative">
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(
                            openDropdown === menuItem.id ? null : menuItem.id
                          );
                          setOpenSubDropdown(null);
                        }}
                        className="flex w-full cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-slate transition-colors hover:text-teal dark:text-manatee dark:hover:text-teal xl:w-auto"
                      >
                        {menuItem.title}
                        <svg
                          className={`h-3 w-3 fill-slate transition-all duration-200 group-hover:fill-teal dark:fill-manatee dark:group-hover:fill-teal ${
                            openDropdown === menuItem.id ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <ul
                        className={`${
                          openDropdown === menuItem.id
                            ? "block mt-4 opacity-100 xl:visible xl:mt-0 xl:opacity-100"
                            : "hidden xl:block xl:invisible xl:opacity-0"
                        } transition-all duration-200 xl:absolute xl:left-0 xl:top-full xl:z-99999 xl:mt-2 xl:min-w-[240px] xl:rounded-xl xl:border xl:border-slate/10 xl:bg-white xl:p-2 xl:shadow-lg xl:dark:border-slate/10 xl:dark:bg-charcoal`}
                      >
                        {menuItem.submenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className="group/sub relative"
                          >
                            {subItem.submenu ? (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenSubDropdown(
                                      openSubDropdown === subItem.id
                                        ? null
                                        : subItem.id
                                    );
                                  }}
                                  className="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-sm text-slate transition-colors hover:bg-teal/5 hover:text-teal dark:text-manatee dark:hover:bg-teal/10 dark:hover:text-teal"
                                >
                                  {subItem.title}
                                  <svg
                                    className={`h-3 w-3 fill-slate transition-all duration-200 group-hover/sub:fill-teal dark:fill-manatee dark:group-hover/sub:fill-teal ${
                                      openSubDropdown === subItem.id
                                        ? "rotate-180 xl:rotate-[-90deg]"
                                        : "xl:rotate-[-90deg]"
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                  </svg>
                                </button>

                                {/* Sub-Dropdown Menu */}
                                <ul
                                  className={`${
                                    openSubDropdown === subItem.id
                                      ? "block ml-4 mt-2 opacity-100 xl:visible xl:ml-0 xl:mt-0 xl:opacity-100"
                                      : "hidden xl:block xl:invisible xl:opacity-0"
                                  } transition-all duration-200 xl:absolute xl:left-full xl:top-0 xl:z-99999 xl:ml-2 xl:min-w-[220px] xl:rounded-xl xl:border xl:border-slate/10 xl:bg-white xl:p-2 xl:shadow-lg xl:dark:border-slate/10 xl:dark:bg-charcoal`}
                                >
                                  {subItem.submenu.map((deepItem) => (
                                    <li key={deepItem.id}>
                                      <Link
                                        href={deepItem.path || "#"}
                                        className="block rounded-lg px-4 py-2.5 text-sm text-slate transition-colors hover:bg-teal/5 hover:text-teal dark:text-manatee dark:hover:bg-teal/10 dark:hover:text-teal"
                                      >
                                        {deepItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link
                                href={subItem.path || "#"}
                                className="block rounded-lg px-4 py-2.5 text-sm text-slate transition-colors hover:bg-teal/5 hover:text-teal dark:text-manatee dark:hover:bg-teal/10 dark:hover:text-teal"
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      className={`text-base font-medium transition-colors ${
                        pathUrl === menuItem.path
                          ? "text-teal"
                          : "text-slate hover:text-teal dark:text-manatee dark:hover:text-teal"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-4 xl:ml-8 xl:mt-0">
            <ThemeToggler />

            <Link
              href="/initial-consult"
              className="flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-6 py-2.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Start Your Free Initial Consult
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
