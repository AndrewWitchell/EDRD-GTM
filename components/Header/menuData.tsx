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
    submenu: [
      {
        id: 21,
        title: "Conditions We Treat",
        newTab: false,
        path: "/patients/conditions",
        submenu: [
          {
            id: 211,
            title: "Type 2 Diabetes",
            newTab: false,
            path: "/patients/conditions/type-2-diabetes",
          },
          {
            id: 212,
            title: "Pre-Diabetes",
            newTab: false,
            path: "/patients/conditions/pre-diabetes",
          },
          {
            id: 213,
            title: "Type 1 Diabetes",
            newTab: false,
            path: "/patients/conditions/type-1-diabetes",
          },
          {
            id: 214,
            title: "PCOS",
            newTab: false,
            path: "/patients/conditions/pcos",
          },
          {
            id: 215,
            title: "Metabolic Syndrome",
            newTab: false,
            path: "/patients/conditions/metabolic-syndrome",
          },
        ],
      },
      {
        id: 22,
        title: "Our Approach",
        newTab: false,
        path: "/patients/approach",
        submenu: [
          {
            id: 221,
            title: "Therapeutic Carbohydrate Restriction",
            newTab: false,
            path: "/patients/approach/carbohydrate-restriction",
          },
          {
            id: 222,
            title: "Protein Optimization",
            newTab: false,
            path: "/patients/approach/protein-optimization",
          },
          {
            id: 223,
            title: "Medical Nutrition Therapy",
            newTab: false,
            path: "/patients/approach/medical-nutrition-therapy",
          },
          {
            id: 224,
            title: "Evidence-Based Philosophy",
            newTab: false,
            path: "/patients/approach/evidence-based",
          },
        ],
      },
      {
        id: 23,
        title: "The Program",
        newTab: false,
        path: "/patients/program",
        submenu: [
          {
            id: 231,
            title: "How It Works",
            newTab: false,
            path: "/patients/program/how-it-works",
          },
          {
            id: 232,
            title: "Who It's For",
            newTab: false,
            path: "/patients/program/who-its-for",
          },
          {
            id: 233,
            title: "What's Included",
            newTab: false,
            path: "/patients/program/whats-included",
          },
          {
            id: 234,
            title: "Enroll Now",
            newTab: false,
            path: "/patients/program/enroll",
          },
        ],
      },
      {
        id: 24,
        title: "Resources & Tools",
        newTab: false,
        path: "/patients/resources",
        submenu: [
          {
            id: 241,
            title: "Symptom Analyzer",
            newTab: false,
            path: "/patients/resources/symptom-analyzer",
          },
          {
            id: 242,
            title: "Protein Calculator",
            newTab: false,
            path: "/patients/resources/protein-calculator",
          },
          {
            id: 243,
            title: "Protein Powder Guide",
            newTab: false,
            path: "/patients/resources/protein-powder-guide",
          },
        ],
      },
      {
        id: 25,
        title: "FAQ",
        newTab: false,
        path: "/patients/faq",
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
