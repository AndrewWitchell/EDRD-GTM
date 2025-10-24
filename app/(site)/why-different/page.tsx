import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why This Approach Works When Others Don't | Eat Different RD",
  description: "Evidence-based nutrition that works WITH your metabolism. Learn why this approach is different from the diets you've tried before - and why it actually works.",
};

export default function WhyDifferentPage() {
  return (
    <div className="pb-20 pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-5xl">
            You've Tried Everything. I Know.
          </h1>
          <p className="mb-4 text-xl leading-relaxed text-slate dark:text-manatee">
            <strong>And you're wondering:</strong> "What if this doesn't work either?"
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            That's not just understandable—it's smart. You've earned that skepticism.
          </p>
          <p className="text-lg leading-relaxed text-slate dark:text-manatee">
            So let me tell you exactly why this approach is different, and why it works when others don't.
          </p>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Section 1: I Refuse to Work Against Your Metabolism */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-teal">
            I Refuse to Work Against Your Metabolism
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            Most approaches ADD stress to your life:
          </p>
          <ul className="mb-6 space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li>- Strict rules you must follow perfectly</li>
            <li>- Shame when you "mess up"</li>
            <li>- Complexity that overwhelms</li>
            <li>- Conflicting advice that paralyzes</li>
            <li>- Judgment that makes you feel like a failure</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            <strong>Here's the problem:</strong> High cortisol (your stress hormone) signals your body to STORE fat, not burn it.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            So if I add stress to your life while trying to help you lose weight, I'm literally working against your metabolism.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate dark:text-manatee">
            That's why I prioritize reducing your anxiety FIRST—before we change a single thing about your diet.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-black dark:text-white">
            This isn't about willpower. This is physiology.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            What This Means in Practice
          </h3>
          <ul className="space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>No shame, no judgment—ever</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Breaking down complexity into manageable steps</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Validating your experience (yes, this IS hard)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Coordinating with your medical team (you're not alone)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Teaching you the 'why' so you feel confident, not confused</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Building on what's already working in your life</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span>Addressing stress, sleep, and anxiety FIRST—before dietary changes</span>
            </li>
          </ul>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Section 2: Evidence-Based, Not Trend-Based */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-teal">
            Evidence-Based, Not Trend-Based
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            Everything I teach comes from:
          </p>
          <ul className="mb-6 space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Published research</strong> - Including UBC's diabetes remission study</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>600+ patient outcomes</strong> - Across military and civilian populations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Physician partnerships</strong> - Medical oversight and collaboration</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Clinical practice</strong> - The 54-page toolkit used in every initial assessment</span>
            </li>
          </ul>
          <p className="mb-8 text-lg leading-relaxed text-slate dark:text-manatee">
            Not Instagram trends. Not guru theories. Evidence.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            The Results
          </h3>
          <ul className="space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li>- <strong>Average weight loss:</strong> 17 lbs (range: 5-40 lbs)</li>
            <li>- <strong>Average A1C reduction:</strong> 1 mmol/L</li>
            <li>- <strong>Medication reductions:</strong> Common across patients</li>
            <li>- <strong>Over 1,000 lbs total weight loss</strong> across 53 patients in recent cohort</li>
          </ul>
          <p className="mt-4 text-lg font-medium leading-relaxed text-black dark:text-white">
            These aren't promises. They're documented outcomes.
          </p>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Section 3: I Understand Medical Complexity */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-teal">
            I Understand Medical Complexity
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            You're not managing "just diabetes" or "just PCOS."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            You're managing:
          </p>
          <ul className="mb-6 space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li>- 3-5 different specialists who don't talk to each other</li>
            <li>- 6-9 medications and supplements</li>
            <li>- Contradictory advice from each provider</li>
            <li>- A body that doesn't respond like the textbooks say it should</li>
          </ul>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-black dark:text-white">
            I become your nutritional quarterback—coordinating everything so you get one integrated plan, not conflicting advice.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            What This Looks Like
          </h3>
          <ul className="space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li>- Communicating with your endocrinologist about medication adjustments</li>
            <li>- Coordinating with your cardiologist on dietary restrictions</li>
            <li>- Working with your psychiatrist on medications that affect appetite</li>
            <li>- Translating between specialties so YOU don't have to be the middleman</li>
            <li>- One coherent plan that addresses all your conditions simultaneously</li>
          </ul>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Section 4: Designed for Real Life */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-teal">
            Designed for Real Life, Not Perfect Life
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            I don't need you to:
          </p>
          <ul className="mb-6 space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li>- Have infinite time</li>
            <li>- Cook like a chef</li>
            <li>- Afford specialty foods</li>
            <li>- Give up your social life</li>
            <li>- Make your family eat differently</li>
          </ul>
          <p className="mb-8 text-lg leading-relaxed text-slate dark:text-manatee">
            I work with your ACTUAL life—the one with time constraints, budget limitations, family preferences, and social obligations.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Real Constraints I Work With
          </h3>
          <div className="space-y-4 text-lg leading-relaxed text-slate dark:text-manatee">
            <p>
              <strong>Time poverty:</strong> New mothers, military members, working professionals with no spare capacity
            </p>
            <p>
              <strong>Budget limitations:</strong> Cost-per-serving calculations, Costco recommendations, no expensive specialty foods required
            </p>
            <p>
              <strong>Family preferences:</strong> Strategies that don't force change on your whole household
            </p>
            <p>
              <strong>Social situations:</strong> Restaurant guides, handling food pushers, navigating holidays
            </p>
            <p>
              <strong>Technology barriers:</strong> Mobile-first, simple platforms, no complex tech required
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate dark:text-manatee">
            Because sustainable change happens in the real world, not in ideal conditions that don't exist.
          </p>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Section 5: You're Not Alone */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-teal">
            You're Not Alone in This
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            The course + community model means:
          </p>
          <ul className="mb-8 space-y-2 text-lg leading-relaxed text-slate dark:text-manatee">
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Expert guidance</strong> when you need it</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Peer support</strong> from people who actually understand</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>70-80% of questions answered</strong> without waiting for 1:1 appointment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Feeling understood</strong>, not dismissed</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-teal">✓</span>
              <span><strong>Safe space</strong> where complexity is acknowledged, not minimized</span>
            </li>
          </ul>

          <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
            Why Community Matters
          </h3>
          <blockquote className="mb-6 border-l-4 border-teal pl-6 italic text-lg leading-relaxed text-slate dark:text-manatee">
            "I can solve at least 50% of everybody's questions through a community. And probably more like 70 or 80%. And that way we can focus on the real challenging stuff one on one." — Eliana
          </blockquote>
          <p className="text-lg leading-relaxed text-slate dark:text-manatee">
            You're not paying for access to a course. You're joining a community of people who understand what you're going through, with expert guidance when you need it.
          </p>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* CTA Section 1 */}
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
            See For Yourself
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate dark:text-manatee">
            I'm not asking you to trust me blindly.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate dark:text-manatee">
            <strong>Watch the first module free.</strong> See if this approach resonates. See if you feel understood instead of blamed.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate dark:text-manatee">
            If it clicks—great. You've found your path.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-slate dark:text-manatee">
            If it doesn't—also fine. At least you'll know, and you haven't risked anything.
          </p>

          <div className="flex flex-col items-center">
            <Link
              href="/preview"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              See How It Works First
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-3 text-center text-sm text-waterloo">
              Watch the first module free. No credit card required.
            </p>
          </div>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "How is this different from other online courses?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                Most online courses give you information and leave you alone with it. This is expert-facilitated community with ongoing support. Plus, I coordinate with your medical team—something no course can do.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "Will this work for my specific condition?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                I work with Type 1 and Type 2 diabetes, prediabetes, PCOS, metabolic syndrome, fatty liver, and multiple co-occurring conditions. If you're managing medical complexity, this approach is designed for you.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "What if I can't afford specialty foods or supplements?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                You don't need them. Everything I teach works with real food from regular grocery stores. I include cost-per-serving breakdowns and budget strategies throughout.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "Do I need to be tech-savvy?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                No. The platform is mobile-first and simple. If you can watch a YouTube video and send a text message, you can do this.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "What if my doctor doesn't approve?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                I work collaboratively with your medical team. In fact, many of my patients are referred by their physicians. I'll communicate with your doctor about any medication adjustments needed as you progress.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-teal">
                "How much time does this take?"
              </h3>
              <p className="text-lg leading-relaxed text-slate dark:text-manatee">
                The course is self-paced. Most people complete it in 4-6 weeks, spending 1-2 hours per week. The community is there when you need it—no required participation schedule.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-12 border-slate/10 dark:border-slate/20" />

        {/* Final CTA */}
        <section className="text-center">
          <p className="mb-10 text-xl font-semibold text-black dark:text-white">
            Ready to see if this is the approach you've been looking for?
          </p>
          <div className="flex flex-col items-center">
            <Link
              href="/preview"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal to-[#0a5f68] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Start Your Free Preview
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
