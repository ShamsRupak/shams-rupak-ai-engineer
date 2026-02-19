

# Shams Rupak — Personal Portfolio Website

A premium, dark-themed portfolio for a Software Engineer / AI-ML Engineer. Minimal, technical, and polished.

---

## Design System
- **Background**: Deep dark (#0a0a0b) with subtle noise texture and gradient mesh overlays for depth
- **Accents**: Purple/violet palette (#A78BFA, #C084FC, #7C3AED) used for highlights, links, and gradient text
- **Typography**: Clean, distinctive sans-serif font (Space Grotesk or JetBrains Mono for code elements)
- **Animations**: Scroll-triggered fade-in/slide-up for each section, smooth transitions throughout

---

## Navigation
- Fixed top navbar with section links: About, Experience, Projects, Skills, Education, Contact
- Active section highlighting on scroll
- Semi-transparent glassmorphism background that becomes more opaque on scroll
- Mobile hamburger menu

---

## 1. Hero Section
- Large "Shams Rupak" with purple-to-violet gradient text
- Subtitle and one-liner description
- Location badge (New York, NY)
- Two CTA buttons: "View Resume" and "Get in Touch"
- Animated terminal/typewriter cycling through engineering tasks
- Headshot placeholder on the right (circular with purple glow border)

## 2. About Me
- Professional summary paragraph with clean layout
- Metrics row: 4 stat cards showing key achievements (60% time reduced, 95%+ accuracy, 1,000+ docs, 30M+ views) with animated count-up effect

## 3. Experience
- Interactive vertical timeline with purple accent line
- Each role as a card with company, title, dates, and bullet points
- Cards fade in as user scrolls to them
- Three positions: Teaching Assistant, AI Engineering Extern, Web3 Security Extern

## 4. Projects
- 2×2 card grid with hover lift/glow effects
- Each card: title, description, tech stack badges (purple-tinted), and GitHub link button
- Cards for: AI Document Processing Suite, Student Buddy Extension, NYC Weather Prediction, Voice Bot QA System (marked as private repo)

## 5. Skills / Tech Stack
- Categorized into 4 groups: Languages, ML & AI, Systems & Data, Web
- Each skill as a styled badge/chip with subtle purple accent
- Clean grid layout

## 6. Education
- Two cards: M.S. and B.S. from Stony Brook University
- Each showing degree, dates, and relevant coursework

## 7. Contact Section
- Contact form (name, email, message) or direct mailto link
- Social icon links: LinkedIn, GitHub, Email
- Phone number displayed
- Purple gradient CTA styling

---

## Technical Approach
- Single-page React app with smooth scrolling between sections
- Fully responsive design (mobile-first)
- Scroll-triggered animations using Intersection Observer
- No backend needed — purely static frontend

