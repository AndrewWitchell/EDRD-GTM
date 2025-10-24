# Distribution Strategy - Eat Different RD

**Purpose:** Track strategies for driving and qualifying inbound traffic
**Owner:** Eliana Witchell, MSc, RD, CDE
**Last Updated:** October 24, 2025
**Status:** Active Ideation & Planning

---

## Overview

This document tracks distribution and lead qualification strategies to scale Eliana's reach without proportionally scaling her time investment. Focus is on **intelligent automation** that maintains quality while increasing accessibility.

### Core Principle

**Quality over Quantity:** We want leads who are:
- Ready to commit to evidence-based approaches
- Dealing with metabolic conditions we can actually help
- Willing to engage with course/community model
- Not expecting quick fixes or miracle cures

---

## Backlog Ideas

### 🎯 Priority 1: Voice AI Agent for Phone Inquiries

**Concept:** Replace traditional phone line with AI agent trained on Eliana's knowledge base

**The Problem:**
- Phone calls interrupt focused work time
- Many callers aren't qualified (wrong condition, wrong stage, wrong expectations)
- Same questions answered repeatedly
- Can't scale 1:1 phone time

**The Solution:**
- Voice AI agent answers calls 24/7
- Trained on Eliana's dataset (published research, patient FAQs, course content)
- Qualifies callers before taking Eliana's time
- Routes serious inquiries appropriately

**Implementation Details:**

**Technology Options:**
- **Bland AI** - Healthcare-focused voice AI
- **Vapi.ai** - Voice AI with custom knowledge bases
- **ElevenLabs + Custom LLM** - Build custom solution
- **Retell AI** - Conversational AI for phone

**Knowledge Base Training:**
- Published research papers
- Course curriculum summaries
- FAQ database from existing patients
- Eliana's published blog content
- Case study abstracts (anonymized)
- Scope of practice boundaries

**Qualification Flow:**

```
CALLER → Voice AI Agent
    ↓
1. GREETING & CONTEXT GATHERING
   "Hi, I'm Eliana's AI assistant. I can answer questions
    about our evidence-based nutrition approach for metabolic
    health. What brings you here today?"

2. CONDITION IDENTIFICATION
   "It sounds like you're dealing with [condition].
    Let me share what our approach looks like for that..."

3. EXPECTATION SETTING
   "Our approach focuses on [evidence-based methods].
    We don't promise quick fixes. Does this align with
    what you're looking for?"

4. QUALIFICATION QUESTIONS
   - Medical history relevant to services
   - Current providers (need physician relationship)
   - Timeline expectations (realistic vs. unrealistic)
   - Budget/insurance questions
   - Previous diet attempts

5. ROUTING DECISION
   ✅ QUALIFIED → Schedule callback with Eliana
   ✅ GOOD FIT FOR COURSE → Send preview link via SMS
   ✅ NEEDS MORE INFO → Send email with resources
   ❌ NOT A FIT → Polite referral elsewhere
```

**Metrics to Track:**
- Call volume by hour/day
- Qualification rate (% who are good fits)
- Most common questions
- Most common disqualifiers
- Conversion rate (AI → course signup)
- Conversion rate (AI → 1:1 booking)

**Privacy & Compliance:**
- HIPAA considerations for health information
- Recording consent upfront
- Data retention policy
- Scope of practice disclaimers
- "Not medical advice" messaging

**Benefits:**
- 24/7 availability (different time zones)
- Consistent qualification process
- Eliana only talks to qualified leads
- Patient data for improving course content
- Reduces burnout from repetitive questions

**Estimated Cost:**
- Setup: $2,000-5,000 (integration + training)
- Monthly: $200-500 (call volume dependent)
- ROI: Saves 5-10 hours/week of unqualified calls

**Next Steps:**
1. Compile knowledge base (FAQs, research, scope)
2. Test 3 AI platforms with sample calls
3. Build qualification logic tree
4. Soft launch with "AI assistant in beta" messaging
5. Monitor quality for 30 days
6. Iterate based on caller feedback

---

### 🎯 Priority 2: ChatGPT Custom GPT / OpenAI App Integration

**Concept:** Create "Ask Eliana" GPT accessible in ChatGPT mobile app

**The Problem:**
- People search Google/ChatGPT for nutrition answers
- Get generic advice not tailored to metabolic conditions
- Don't know Eliana exists
- Barrier to reaching out for help

**The Solution:**
- Custom GPT trained on Eliana's knowledge base
- Accessible directly in ChatGPT app
- Appears in GPT Store for discovery
- Natural entry point to learning about her practice

**Implementation Details:**

**Technology:**
- **Custom GPTs** (ChatGPT Plus required)
- **OpenAI Actions** - Connect to Eliana's website/booking
- **Knowledge Base Upload** - PDFs, research papers, course abstracts

**Knowledge Base:**
- Published research (European Journal of Clinical Nutrition, 2023)
- High-protein diet handouts (Aug 2025)
- Course module summaries (gated content redacted)
- Blog posts on metabolic health
- GLP-1 medication support content
- Three Critical Elements framework
- Scope of practice documentation

**GPT Instructions:**

```markdown
You are Eliana Witchell's AI assistant, helping people understand
evidence-based nutrition for Type 2 Diabetes, Prediabetes, PCOS,
and metabolic health conditions.

Your knowledge comes from:
- Eliana's published research in peer-reviewed journals
- Her clinical experience with 600+ patients
- Evidence-based protocols for carbohydrate restriction
- GLP-1 medication nutrition support

ALWAYS:
- Emphasize this is educational, not medical advice
- Recommend consulting their physician before changes
- Mention Eliana is an RD, CDE (scope of practice)
- Share that she offers a course for deeper learning
- Be empathetic about the complexity they're facing

NEVER:
- Diagnose conditions
- Prescribe medication changes
- Promise cures or quick fixes
- Contradict their doctor's advice
- Treat eating disorders (outside scope)

When relevant, offer:
"If you'd like to learn more about Eliana's evidence-based approach,
she offers a free preview module at [link]. You can see if her
framework resonates before committing."
```

**Discovery Strategy:**

**GPT Store Optimization:**
- **Name:** "Ask Eliana - Metabolic Health RD"
- **Description:** "Evidence-based nutrition guidance for Type 2 Diabetes, PCOS, and metabolic health from published researcher & RD Eliana Witchell"
- **Categories:** Health & Fitness, Education
- **Keywords:** diabetes nutrition, PCOS diet, metabolic health, low carb, GLP-1 support, registered dietitian

**Conversation Starters:**
1. "I was just diagnosed with Type 2 Diabetes. Where do I start?"
2. "How can I support my body while on GLP-1 medication?"
3. "What does evidence-based carb restriction actually mean?"
4. "I have PCOS and conflicting advice from doctors. Help?"

**OpenAI Actions Integration:**
- **Action 1:** Check course availability
- **Action 2:** Send preview link via email
- **Action 3:** Check Eliana's 1:1 availability (if qualified)

**Use Cases:**

1. **Late-Night Research**
   - User googles "what to eat with diabetes"
   - Finds ChatGPT has health GPTs
   - Discovers "Ask Eliana"
   - Gets evidence-based guidance
   - Receives course preview link

2. **GLP-1 Support**
   - User on Ozempic, losing weight but feels weak
   - Searches ChatGPT for protein guidance
   - "Ask Eliana" provides evidence-based protein targets
   - Mentions high-protein handout in course
   - User signs up for preview

3. **PCOS Confusion**
   - User frustrated with conflicting advice
   - Talks to "Ask Eliana" about insulin resistance
   - Gets empathetic, evidence-based response
   - Learns about carb restriction research
   - Books free 1:1 consult or tries course

**Metrics to Track:**
- GPT Store views
- Conversation starts
- Avg conversation length
- Course preview link clicks
- Booking link clicks
- User ratings/feedback
- Most common questions

**Privacy & Compliance:**
- No PHI collected in conversations
- OpenAI's data handling policies
- Clear "educational only" disclaimers
- Link to privacy policy

**Benefits:**
- Meets people where they're searching (ChatGPT)
- 24/7 availability globally
- Scales to infinite conversations simultaneously
- Brand awareness in AI-native channel
- Qualifies leads before they reach out
- Low cost (mostly time to build)

**Estimated Cost:**
- Setup: $500-1,000 (knowledge base prep, testing)
- Monthly: $0-50 (OpenAI API costs if using Actions)
- ROI: New discovery channel, hard to quantify initially

**Next Steps:**
1. Compile knowledge base documents
2. Create Custom GPT in ChatGPT
3. Test with 20 sample questions
4. Refine instructions based on responses
5. Publish to GPT Store
6. Promote on social media
7. Monitor usage for 60 days
8. Iterate based on user feedback

---

## Additional Distribution Ideas (Backlog)

### 🎯 Priority 3: LLM Citation Optimization (SEO for AI)

**Concept:** Optimize website content to be cited by ChatGPT, Perplexity, Claude

**Strategy:**
- Implement comprehensive schema.org markup
- Add citation metadata to all clinical content
- Create llms.txt file for AI crawlers
- Include DOI links and PubMed citations
- Structured Q&A format for common queries

**Why This Matters:**
- 40% of searches now happen in AI chat interfaces
- Being cited = authority + traffic
- Early mover advantage (most RDs not optimized)

**Next Steps:**
- Audit current schema.org implementation
- Add MedicalWebPage schema to all pages
- Create llms.txt with content abstracts
- Test citation rate via Perplexity search

---

### 🎯 Priority 4: Healthcare Provider Referral Network (B2B2C)

**Concept:** Train GPs, endocrinologists, gynecologists to refer patients

**Strategy:**
- Create provider-focused landing page
- One-page handout: "When to refer to Eliana"
- CME webinar on carb restriction evidence
- Direct outreach to local practices
- Affiliate program (ethical, not kickbacks)

**Target Providers:**
- Endocrinologists (diabetes, PCOS)
- Primary care physicians
- OB-GYNs (PCOS, gestational diabetes)
- Military base clinics (existing relationship)

**Referral Criteria:**
- Patient frustrated with medication-only approach
- Wants lifestyle intervention support
- Has metabolic condition (T2D, prediabetes, PCOS)
- Physician remains primary prescriber

**Next Steps:**
- Build /for-providers landing page
- Create 1-page provider referral guide
- Identify 10 target practices
- Reach out with value proposition

---

### 🎯 Priority 5: GLP-1 Facebook/Reddit Communities

**Concept:** Provide value in communities where target audience congregates

**Strategy:**
- Join Ozempic, Wegovy, Mounjaro Facebook groups
- Answer questions with evidence-based guidance
- Link to blog posts (not direct sales)
- Build reputation as helpful expert
- Subtle CTA to free preview module

**Content Types:**
- "Here's what research says about protein on GLP-1s"
- "Common nutrient deficiencies to watch for"
- "How to maintain muscle while losing weight"

**Platforms:**
- Facebook groups (5-10 large ones)
- Reddit r/Ozempic, r/Semaglutide, r/diabetes
- TikTok (short educational videos)

**Next Steps:**
- Audit top 10 communities for rules
- Create content calendar (3x/week)
- Test engagement for 30 days
- Track referral traffic via UTM codes

---

### 🎯 Priority 6: Podcast Guest Appearances

**Concept:** Share research + story on health/nutrition podcasts

**Strategy:**
- Target podcasts with metabolic health audience
- Pitch unique angle: published researcher + military experience
- Share patient success stories (anonymized)
- CTA to free preview module

**Podcast Targets:**
- The Obesity Code Podcast
- The Doctor's Farmacy
- The Model Health Show
- Ben Greenfield Fitness
- Found My Fitness

**Pitch Angle:**
- "Reversing diabetes in military populations"
- "Why most diabetes advice fails (and what works)"
- "GLP-1s + nutrition: the evidence"

**Next Steps:**
- Create media kit (bio, headshot, talking points)
- Identify 20 target podcasts
- Craft personalized pitches
- Book first 3 appearances
- Repurpose audio as blog content

---

### 🎯 Priority 7: YouTube Educational Series

**Concept:** Short educational videos on metabolic health topics

**Strategy:**
- 5-10 minute videos answering common questions
- SEO-optimized titles
- Pinned comment with course link
- Evergreen content that compounds

**Video Topics:**
- "What to eat in the first 30 days of diabetes diagnosis"
- "How much protein do you actually need?"
- "Reading your blood sugar: what the numbers mean"
- "GLP-1 side effects: nutrition strategies that help"

**Next Steps:**
- Script first 10 videos
- Film batch of 5
- Upload with optimized titles/descriptions
- Promote on other channels
- Track CTR to preview page

---

## Success Metrics

### Leading Indicators (Activity)
- Voice AI calls per week
- ChatGPT GPT conversation starts
- Healthcare provider inquiries
- Podcast listens/downloads
- YouTube views
- Community engagement (comments, shares)

### Lagging Indicators (Results)
- Preview page signups (email capture)
- Course enrollments
- 1:1 consultation bookings
- Cost per acquisition (CPA)
- Lifetime value (LTV)
- LTV:CPA ratio

### Qualitative Metrics
- "How did you hear about us?" responses
- Quality of leads (right condition, realistic expectations)
- Provider feedback
- Patient testimonials mentioning discovery channel

---

## Budget Considerations

### High ROI, Low Cost (Start Here)
- **ChatGPT Custom GPT:** $500 setup, $0 monthly
- **Community engagement:** $0 (time investment)
- **LLM optimization:** $0-500 (DIY implementation)

### Medium ROI, Medium Cost
- **Voice AI agent:** $5k setup, $300/mo
- **Provider outreach:** $2k (materials + time)
- **YouTube series:** $3k (equipment + editing)

### High ROI, High Cost (Scale Later)
- **Podcast production:** $10k+ (equipment, editor, promotion)
- **Paid ads:** $5-10k/mo (Facebook, Google)
- **PR agency:** $5k+/mo (media placements)

---

## Distribution Philosophy

### Core Beliefs

1. **Meet People Where They Are**
   - Search engines (Google, Perplexity)
   - AI chat (ChatGPT, Claude)
   - Social communities (Facebook, Reddit)
   - Trusted referrers (doctors, friends)

2. **Provide Value First**
   - Answer questions without asking for anything
   - Build trust through expertise
   - Let them discover Eliana naturally
   - No aggressive sales tactics

3. **Qualify, Don't Convince**
   - We want people who already believe in evidence-based approaches
   - Not trying to convert skeptics
   - Right fit > volume

4. **Leverage Technology for Scale**
   - AI agents handle repetitive work
   - Content compounds over time
   - Systems scale while quality remains high

5. **Authority Through Evidence**
   - Published research = credibility
   - Citations > claims
   - Let the science speak

---

## Next Steps

### This Month (November 2025)
- [ ] Set up ChatGPT Custom GPT (Priority 2)
- [ ] Research voice AI platforms (Priority 1)
- [ ] Optimize website schema.org (Priority 3)
- [ ] Join 5 GLP-1 Facebook groups (Priority 5)

### Next Quarter (Dec 2025 - Feb 2026)
- [ ] Launch voice AI agent beta
- [ ] Create provider referral materials
- [ ] Record first 5 YouTube videos
- [ ] Pitch 10 podcasts

### Long Term (2026+)
- [ ] Scale voice AI to handle 100+ calls/week
- [ ] Build B2B2C referral network (50+ providers)
- [ ] Launch podcast advertising campaign
- [ ] Explore corporate wellness partnerships

---

## Questions to Answer

### Technical
- [ ] Which voice AI platform best handles healthcare context?
- [ ] How to handle PHI in voice calls (HIPAA compliance)?
- [ ] What's the optimal knowledge base size for Custom GPT?
- [ ] How to track conversions from AI interactions?

### Strategic
- [ ] What's acceptable cost per acquisition?
- [ ] Which channel has best lead quality (not just volume)?
- [ ] How to prioritize across 7+ channels?
- [ ] When to invest in paid vs. organic?

### Legal/Compliance
- [ ] Scope of practice for AI agents giving nutrition advice?
- [ ] Informed consent for AI interactions?
- [ ] Recording and data retention policies?
- [ ] Professional liability insurance implications?

---

## References

### AI Voice Platforms
- [Bland AI](https://www.bland.ai) - Healthcare voice AI
- [Vapi.ai](https://vapi.ai) - Custom voice agents
- [Retell AI](https://www.retellai.com) - Conversational phone AI

### Custom GPT Resources
- [OpenAI Custom GPTs](https://platform.openai.com/docs/guides/gpts)
- [GPT Store Guidelines](https://openai.com/blog/introducing-gpt-store)

### LLM Optimization
- [llms.txt spec](https://llmstxt.org)
- [Schema.org Medical Types](https://schema.org/MedicalWebPage)

---

**Last Updated:** October 24, 2025
**Version:** 1.0
**Status:** Active ideation - voice AI + ChatGPT GPT prioritized for Q4 2025
