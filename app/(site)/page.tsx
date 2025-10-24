import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import SocialProofBanner from "@/components/SocialProofBanner";
import NavSection from "@/components/NavSection";
import FinalCTA from "@/components/FinalCTA";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Eliana Witchell RD - Evidence-Based Metabolic Health & Nutrition Therapy",
  description: "Evidence-based metabolic health support from Registered Dietitian Eliana Witchell, MSc, RD, CDE. Specialized nutrition therapy for Type 2 Diabetes, Prediabetes, PCOS, and GLP-1 medication support.",
  openGraph: {
    title: "Eliana Witchell RD - Evidence-Based Metabolic Health",
    description: "Published researcher specializing in diabetes remission and carbohydrate restriction. Serving 600+ patients across military and civilian populations.",
    type: "website",
    locale: "en_US",
    siteName: "Eliana Witchell RD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliana Witchell RD - Evidence-Based Metabolic Health",
    description: "Published researcher specializing in diabetes remission and carbohydrate restriction. Serving 600+ patients.",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section - Primary value proposition */}
      <Hero />

      {/* Partnership Organizations */}
      <ScrollAnimation>
        <Brands />
      </ScrollAnimation>

      {/* Social Proof Banner - Testimonials, Publications, Speaking */}
      <ScrollAnimation delay={0.1}>
        <SocialProofBanner />
      </ScrollAnimation>

      {/* PATIENTS - D2C Hub: Complete Patient Journey */}
      <ScrollAnimation delay={0.2}>
        <NavSection
          badge="For Patients"
          title="Start Your"
          highlightedText="Transformation"
          description={
            <>
              <p className="mb-4">
                Your nutritional quarterback coordinating care across specialists. No more conflicting advice—one integrated plan for all your conditions.
              </p>
              <p className="font-medium">Discover your path to metabolic health:</p>
            </>
          }
          list={[
            "Conditions We Treat - Type 2 Diabetes, PCOS, Pre-Diabetes & More",
            "Our Approach - Evidence-Based Therapeutic Nutrition",
            "The Program - How It Works & What's Included",
            "Resources & Tools - Free Calculators & Guides",
          ]}
          ctaText="Explore Patient Resources"
          ctaLink="/patients"
          imageSrc="/images/eliana-headshot.webp"
          imageAlt="Evidence-based metabolic health nutrition"
        />
      </ScrollAnimation>

      {/* CASE STUDIES - Social Proof for All Audiences */}
      <ScrollAnimation>
        <NavSection
          badge="Case Studies"
          title="Real Results from"
          highlightedText="Real People"
          description="See how evidence-based nutrition therapy transformed the lives of patients with Type 2 Diabetes, PCOS, and metabolic conditions. Each case study includes detailed clinical data, treatment protocols, and long-term outcomes—valuable for both patients and healthcare professionals."
          list={[
            "Type 2 Diabetes Reversal - Medication reduction & A1c normalization",
            "PCOS & Fertility - Hormone balance restoration",
            "GLP-1 Optimization - Maximizing medication outcomes",
            "Complex Cases - Multiple comorbidities",
          ]}
          ctaText="Read Case Studies"
          ctaLink="/case-studies"
          reverse={true}
        />
      </ScrollAnimation>

      {/* FOR HEALTHCARE PROFESSIONALS - B2B2C Hub */}
      <ScrollAnimation>
        <NavSection
          badge="For Healthcare Professionals"
          title="Partner"
          highlightedText="With Us"
          description="Join our network of physicians, nurse practitioners, and allied health professionals who trust Eat Different RD for evidence-based metabolic health support. Access our referral program, clinical evidence library, and professional education resources."
          list={[
            "Referral Program - Seamless patient care coordination",
            "Clinical Evidence Library - Research-backed protocols",
            "Professional Education - Webinars & training",
            "Practice Resources - Tools for your patients",
          ]}
          ctaText="Learn About Referral Program"
          ctaLink="/healthcare-professionals"
        />
      </ScrollAnimation>

      {/* BLOG - Content Marketing & Education */}
      <ScrollAnimation>
        <NavSection
          badge="Blog"
          title="Evidence-Based"
          highlightedText="Nutrition Education"
          description="Stay informed about the latest research in therapeutic nutrition, metabolic health, and evidence-based dietary interventions. Our blog covers practical strategies, scientific insights, and real-world applications of nutritional therapy."
          ctaText="Read Latest Articles"
          ctaLink="/blog"
          reverse={true}
        />
      </ScrollAnimation>

      {/* ABOUT - Trust & Credibility */}
      <ScrollAnimation>
        <NavSection
          badge="About"
          title="Meet"
          highlightedText="Eliana Witchell"
          description="Registered Dietitian (RD), Certified Diabetes Educator (CDE), and Master of Science (MSc) graduate. As Chief Dietitian at the Institute for Personalized Therapeutic Nutrition, Eliana specializes in evidence-based carbohydrate restriction to reverse metabolic disease."
          list={[
            "MSc, RD, CDE Credentials",
            "Chief Dietitian at IPTN",
            "UBC Research Collaborator",
            "Evidence-Based Philosophy",
          ]}
          ctaText="Learn About Eliana"
          ctaLink="/about"
          imageSrc="/images/eliana-headshot.webp"
          imageAlt="Eliana Witchell, MSc, RD, CDE"
        />
      </ScrollAnimation>

      {/* Final CTA - Contact/Enrollment */}
      <ScrollAnimation>
        <FinalCTA />
      </ScrollAnimation>
    </main>
  );
}
