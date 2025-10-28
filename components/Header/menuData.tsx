import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Patients",
    newTab: false,
    path: "/patients",
    submenu: [
      {
        id: 21,
        title: "Overview",
        newTab: false,
        path: "/patients",
      },
      {
        id: 22,
        title: "Conditions We Treat",
        newTab: false,
        path: "/patients#conditions",
      },
      {
        id: 23,
        title: "Our Approach",
        newTab: false,
        path: "/patients#approach",
      },
      {
        id: 24,
        title: "FAQ",
        newTab: false,
        path: "/patients#faq",
      },
    ],
  },
  {
    id: 3,
    title: "Case Studies",
    newTab: false,
    path: "/case-studies",
  },
  {
    id: 4,
    title: "For Healthcare Professionals",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Referral Program",
        newTab: false,
        path: "/healthcare-professionals/referral-program",
      },
      {
        id: 42,
        title: "Clinical Evidence Library",
        newTab: false,
        path: "/healthcare-professionals/clinical-evidence",
      },
      {
        id: 43,
        title: "Professional Education",
        newTab: false,
        path: "/healthcare-professionals/education",
      },
      {
        id: 44,
        title: "Practice Resources",
        newTab: false,
        path: "/healthcare-professionals/resources",
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "By Condition",
        newTab: false,
        path: "/blog/conditions",
      },
      {
        id: 52,
        title: "By Topic",
        newTab: false,
        path: "/blog/topics",
      },
      {
        id: 53,
        title: "Latest Posts",
        newTab: false,
        path: "/blog",
      },
    ],
  },
  {
    id: 6,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Eliana",
        newTab: false,
        path: "/about/eliana",
      },
      {
        id: 62,
        title: "Our Philosophy",
        newTab: false,
        path: "/about/philosophy",
      },
      {
        id: 63,
        title: "Credentials",
        newTab: false,
        path: "/about/credentials",
      },
      {
        id: 64,
        title: "Contact",
        newTab: false,
        path: "/about/contact",
      },
    ],
  },
];

export default menuData;
