# Images Needed for Eat Different RD Website

**Last Updated:** October 21, 2025

---

## ✅ DOWNLOADED

### Logos
- [x] **Logo with text** - `/public/images/logo-with-text.png` (2.0MB)
  - Source: eatdifferentrd.com Squarespace CDN
  - Currently used in: Header component
  - Dimensions: ~250x63px (as displayed)

- [x] **Logo without text** - `/public/images/logo-no-text.png` (213KB)
  - Source: eatdifferentrd.com Squarespace CDN
  - Available for: Social media icons, favicons
  - Smaller version for compact displays

---

## ❌ STILL NEEDED

### Professional Headshot
- [ ] **Eliana Witchell Professional Headshot**
  - **Location needed:** `/public/images/eliana-headshot.jpg` (or .png)
  - **Current status:** Placeholder emoji 👩‍⚕️ in Hero component
  - **Recommended specs:**
    - Dimensions: 500x500px minimum (square aspect ratio preferred)
    - Format: JPG or PNG
    - File size: <500KB (optimized for web)
    - Style: Professional, approachable, medical/healthcare appropriate
    - Background: Neutral or blurred background preferred

  **Where it's needed:**
  - Hero section (main homepage - currently line 62-84 in `components/Hero/index.tsx`)
  - About page (when created)
  - Potentially footer or team section

### Blog/Content Images (Optional)
- [ ] **Featured blog post images**
  - For blog section on homepage
  - For individual blog post headers
  - Recommended: 1200x630px for social sharing

- [ ] **Course/Product Images**
  - High Protein, Carbohydrate-Reduced Diet Handbook cover
  - Any other digital products

### Testimonial Images (Optional but Recommended)
- [ ] **Client photos** (if available with consent)
  - For testimonial section
  - Headshots: 100x100px circular format
  - Require signed photo release forms

### Additional Brand Assets
- [ ] **Favicon** (if different from logo-no-text)
  - 32x32px, 16x16px, .ico format
  - Currently using template default

- [ ] **Open Graph Image**
  - 1200x630px for social media sharing
  - Shows when website is shared on Facebook, LinkedIn, Twitter
  - Should include branding + tagline

---

## 📋 NOTES

### Why Headshot Wasn't Found
The existing eatdifferentrd.com website (on Squarespace) doesn't have an easily accessible headshot in the page source. Possible reasons:
1. Image is dynamically loaded by Squarespace's CMS
2. Image is in a gallery or password-protected section
3. Image hasn't been added to the public website
4. Image is embedded in a way that web scraping tools can't access

### Next Steps
1. **Request from Eliana:**
   - Professional headshot (preferred method)
   - High-res version for best quality

2. **Alternative Sources:**
   - LinkedIn profile photo
   - Professional photography session (if needed)
   - Existing marketing materials

3. **Temporary Solution:**
   - Current placeholder with "Professional Photo (Placeholder)" label
   - Website is fully functional without it
   - Can be swapped in easily when available

---

## 🔧 HOW TO ADD IMAGES WHEN AVAILABLE

### Adding Eliana's Headshot:
1. Place image file in: `/public/images/eliana-headshot.jpg`
2. Update `components/Hero/index.tsx` line 62-84:
   ```tsx
   <Image
     src="/images/eliana-headshot.jpg"
     alt="Eliana Witchell, MSc, RD, CDE - Registered Dietitian"
     width={500}
     height={500}
     className="rounded-2xl shadow-lg"
     priority
   />
   ```

### Adding Favicon:
1. Place files in: `/public/`
   - favicon.ico
   - favicon-32x32.png
   - favicon-16x16.png
2. Update `app/(site)/head.tsx` to reference new favicons

### Adding Open Graph Image:
1. Place in: `/public/images/og-image.jpg`
2. Add to `app/(site)/page.tsx` metadata:
   ```tsx
   openGraph: {
     images: ['/images/og-image.jpg'],
   }
   ```

---

## 📸 IMAGE OPTIMIZATION TIPS

All images should be:
- **Compressed** using tools like TinyPNG, ImageOptim, or Squoosh
- **Properly sized** (don't use 4000px images when 500px will do)
- **Next.js Image optimized** (we're using `next/image` component automatically)
- **Alt text included** for accessibility and SEO
- **WebP format** considered for better compression (Next.js handles this automatically)

---

**Priority:** High (Headshot), Medium (Course images, Blog images), Low (Testimonial photos)
