# 🏥 Dr. Eatmad Ashraf Allam - Medical Landing Page

A production-ready, premium medical landing page for Dr. Eatmad Ashraf Allam — Lymphedema & Physiotherapy Specialist in Egypt.

## ✨ Tech Stack

- **React 18** + **Vite 5** — Lightning-fast development & build
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Smooth scroll animations
- **Swiper JS** — Before/After image slider
- **React Hook Form** — Performant booking form with validation
- **React Icons** — Premium iconography

## 🎨 Features

- ✅ Fully Responsive (Mobile / Tablet / Desktop)
- ✅ Modern 2026 Premium Medical Design
- ✅ Pink-themed Navbar & Footer · White sections with Black text
- ✅ Rounded section dividers separating each section
- ✅ Bilingual: **English (default) + Arabic** with RTL/LTR switching
- ✅ Sticky navbar with smooth scroll navigation
- ✅ Floating WhatsApp button (all screens)
- ✅ Mobile floating Call button
- ✅ Back-to-top button
- ✅ Glassmorphism & gradient effects
- ✅ Section reveal animations
- ✅ SEO meta tags + Open Graph + Twitter cards
- ✅ Schema.org structured data (MedicalBusiness + Physician)
- ✅ Auto-generated WhatsApp messages from booking form
- ✅ Embedded Facebook video reels
- ✅ Google Maps integration
- ✅ Accessibility-friendly (semantic HTML, ARIA labels)
- ✅ Optimized performance (lazy loading, code splitting)

## 📂 Project Structure

```
dr-eatmad-clinic/
├── index.html                  # SEO + Schema markup
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               # Tailwind + custom utilities
    ├── components/
    │   ├── Navbar.jsx          # Sticky pink navbar
    │   ├── Loader.jsx          # Page loading screen
    │   └── FloatingButtons.jsx # WhatsApp + Call + Back-to-top
    ├── sections/
    │   ├── Hero.jsx            # Section 2
    │   ├── About.jsx           # Section 3
    │   ├── Services.jsx        # Section 4
    │   ├── WhyUs.jsx           # Section 5
    │   ├── Results.jsx         # Section 6 (Swiper)
    │   ├── Videos.jsx          # Section 7 (Facebook embeds)
    │   ├── Clinic.jsx          # Section 8 (Branches)
    │   ├── Location.jsx        # Section 9 (Maps)
    │   ├── Booking.jsx         # Section 10 (RHF + WhatsApp)
    │   └── Footer.jsx          # Section 11
    ├── context/
    │   └── LanguageContext.jsx # AR/EN provider
    ├── locales/
    │   └── translations.js     # Full bilingual strings
    └── utils/
        └── constants.js        # Numbers, URLs, helpers
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📞 Key Information

| | |
|---|---|
| **WhatsApp** | 01145719580 |
| **Branch 1 (Nasr City)** | 01080599491 |
| **Branch 2 (Al Haram)** | 01092632010 |
| **Footer Phone** | 01016405157 |
| **Email** | eatmadashref5@yahoo.com |

## 🎯 Color Palette

- **Pink Primary** — `#e91e63` (Navbar & Footer)
- **Pink Dark** — `#ad1457` (Gradients)
- **WhatsApp Green** — `#25D366`
- **White** — Section backgrounds
- **Black** — Body content

## 🌐 Language Switching

Toggle the **EN ↔ AR** button in the navbar:
- Auto switches `dir="rtl"` for Arabic
- Auto switches `dir="ltr"` for English
- Layout mirrors automatically (About section image position)
- Stored in `localStorage` for persistence

## 📱 WhatsApp Integration

The booking form automatically composes a formatted message and opens WhatsApp chat with `01145719580`. No backend required.

---

Built with ❤️ for premium healthcare in Egypt.
