# Eat Different RD - Migration Status Report

**Date:** October 21, 2025
**Template:** Solid NextJS (Next.js 15 + Tailwind CSS v4)
**Dev Server:** http://localhost:3001

---

## ✅ COMPLETED

### 1. Template Setup
- [x] Cloned Solid NextJS template from GitHub
- [x] Installed dependencies (Next.js 15.1.6, Tailwind v4, React 19)
- [x] Dev server running successfully on port 3001

### 2. Branding Integration
- [x] Updated color palette to Eat Different RD colors:
  - Primary: Teal (#0d7680)
  - Secondary: Sage (#6b9080)
  - Accent: Terracotta (#e07a5f)
  - Soft Accent: Coral (#f4a58a)
- [x] Added Libre Baskerville serif font alongside Inter
- [x] Updated all CSS variables for template compatibility

### 3. Content Migration

#### Hero Section
- [x] Real headline: "Evidence-Based Nutrition That Reverses Disease"
- [x] Tagline: "eat evidence-based"
- [x] Credentials: MSc, RD, CDE + Chief Dietitian at IPTN
- [x] Social proof: "Over 1,000 lbs of weight loss across 53 patients"
- [x] Condition tags: Type 2 Diabetes, Prediabetes, PCOS, Metabolic Health
- [x] Real CTAs:
  - Book Free 30-Min Consultation → https://eatdifferentrd.janeapp.com
  - Learn About Eliana → #about anchor
- [x] Contact info: +1-647-456-7952, eliana@eatdifferentrd.com

#### Partnerships Section (formerly Brands)
- [x] Replaced generic brands with real partnerships:
  - Dietitians of Canada
  - Institute for Personalized Therapeutic Nutrition (IPTN)
  - University of British Columbia (UBC)
  - BC Patient Safety & Quality Council
  - Canadian Pharmacists Association
  - Wellington Dufferin Diabetes

#### Metadata
- [x] Updated page title: "Eat Different RD - Metabolic Health & Nutrition Therapy"
- [x] Updated meta description with real service description
- [x] Updated head.tsx with brand-appropriate content

---

## 🔄 IN PROGRESS

### Navigation Header
- [ ] Update menu items to match existing site structure:
  - Home
  - About Me
  - Services/Courses
  - Literature Review/Resources
  - Blog
  - Podcast
  - Contact

### Footer
- [ ] Update with real contact information
- [ ] Add real social media links:
  - LinkedIn: Eliana Witchell, MSc, RD
  - Instagram: @eatdifferentrd
  - Twitter: @eatdifferentrd
  - Facebook: eliana.witchell
- [ ] Add location: Toronto, Ontario, Canada

---

## 📋 TODO - Content Sections

### About Section
**Content Available:**
- Credentials: MSc, RD, CDE
- Role: Chief Dietitian at IPTN, Founder of Eat ;Different RD
- Expertise: Evidence-based carbohydrate restriction for diabetes
- Partnerships with major organizations
- Research collaboration with UBC
- Professional education webinars

**Needs:**
- Full biography text
- Professional photo
- Personal story/philosophy
- Educational background details

### Services/Features Section
**Content Available:**
- One-on-one coaching packages
- Online courses (High Protein, Carbohydrate-Reduced Diet Handbook)
- Personalized assessment approach
- Resources: blogs, podcasts, videos, meal plans

**Needs:**
- Detailed service descriptions
- Pricing information
- What's included in each package
- Process/how it works

### Testimonials Section
**Content Available:**
- Aggregate stat: "Over 1,000 lbs weight loss across 53 patients"

**Needs:**
- Individual testimonial quotes
- Client names (first name + initial)
- Specific conditions treated
- Before/after data (with consent)
- Video testimonials (if available)

### FAQ Section
**Needs:**
- Common questions about services
- Insurance/payment questions
- What to expect questions
- Credentials/qualifications questions

### Blog Section
**Available:**
- Blog exists on current site
- Topics include pasta/weight loss, orange juice, nutrition studies

**Needs:**
- Recent blog posts to feature
- Categories/topics
- Featured articles

### Podcast Section
**Available:**
- Podcast exists (Eliana Witchell RD on RadioPublic, SoundCloud)

**Needs:**
- Latest episodes
- Subscription links
- Episode descriptions

### Literature Review/Resources Section
**Available:**
- Focus on evidence-based practice
- How to assess study biases

**Needs:**
- Specific resources/articles
- Research citations
- Educational materials

---

## 🎨 DESIGN ELEMENTS NEEDED

### Images
- [ ] Professional headshot of Eliana Witchell
- [ ] Office/consultation space photos (if applicable)
- [ ] Course/handbook cover images
- [ ] Blog post featured images
- [ ] Testimonial photos (with consent)

### Brand Assets
- [ ] Logo files (if different from text logo)
- [ ] Favicon (currently using placeholder)
- [ ] Social media preview images (Open Graph)

---

## 📄 PAGES TO CREATE/UPDATE

### Existing Pages from Current Site
1. **Homepage** - ✅ In progress
2. **About Me** - 📝 Needs content
3. **Services/Courses** - 📝 Needs content
4. **High Protein Handbook** - 📝 Needs content
5. **Literature Review** - 📝 Needs content
6. **Blog** - 📝 Needs migration
7. **Podcast** - 📝 Needs content
8. **Disclaimer** - 📝 Can copy from existing site
9. **Contact** - 📝 Needs content (already has booking link)

### New Pages Recommended
1. **FAQ** - Based on common questions
2. **Success Stories** - Expanded testimonials page
3. **Resources** - Combined literature review + free resources

---

## 🔧 TECHNICAL TASKS

### Remaining Setup
- [ ] Fix next.config.js warning (remove deprecated 'swcMinify')
- [ ] Update image configuration (use remotePatterns instead of domains)
- [ ] Add proper favicon
- [ ] Set up Schema.org structured data (Organization, Person, MedicalBusiness)
- [ ] Add Google Analytics (if needed)
- [ ] Configure email contact form

### SEO & Compliance
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Add medical disclaimer to all pages
- [ ] HIPAA compliance notices (if applicable)
- [ ] Cookie consent banner (if tracking)

### Performance
- [ ] Optimize images with Next.js Image component
- [ ] Lazy load below-fold content
- [ ] Test Lighthouse scores (target >90)
- [ ] Mobile responsiveness testing

---

## 📞 CONTACT INFORMATION VERIFIED

- **Phone:** +1-647-456-7952
- **Email:** eliana@eatdifferentrd.com
- **Booking:** https://eatdifferentrd.janeapp.com
- **Location:** Toronto, Ontario, Canada

---

## 🎯 NEXT IMMEDIATE STEPS

1. **Update Navigation** - Add real menu items from existing site
2. **Update Footer** - Add contact info and social links
3. **Create About Page** - Use extracted content + request full bio
4. **Simplify Homepage** - Remove unnecessary sections, keep relevant ones
5. **Test Deployment** - Local build → test → push to GitHub

---

## 📝 NOTES

- Existing site is on Squarespace (dynamic content made extraction challenging)
- Content focus: Evidence-based practice, disease reversal, personalized approach
- Target audience: Type 2 Diabetes, Prediabetes, PCOS patients
- Professional positioning: Thought leader in evidence-based carb restriction
- Unique selling point: Partnerships with major healthcare organizations + research collaboration

---

## 🚀 DEPLOYMENT CHECKLIST (When Ready)

- [ ] All content migrated and reviewed
- [ ] Images optimized and uploaded
- [ ] All links tested
- [ ] Contact forms functional
- [ ] Mobile responsive verified
- [ ] Lighthouse audit passed
- [ ] Legal pages reviewed (disclaimer, privacy, terms)
- [ ] Analytics configured
- [ ] Domain configured
- [ ] SSL certificate verified
- [ ] Backup of old site created
- [ ] DNS cutover planned
