# Satyajit Das — Personal Portfolio Website

A personal developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

Inspired by the editorial minimalism, typography, subtle borders, and smooth interactions of `d4deepak.dev`, personalized with verified profile information, academic journeys, professional work histories, and the **MediTrack** healthcare management project.

---

## 🚀 Features

- **Next.js 15 App Router**: Server & client components with optimal SEO metadata, semantic HTML5, and OpenGraph cards.
- **MediTrack Showcase**: Flagship health-tech platform featuring real-time medicine inventory analytics, dosage compliance schedules, and prescription tracking.
- **Light & Dark Mode**: Persistent theme switcher with `next-themes` and zero layout shift.
- **Curated Animations**: Infinite smooth marquee banners, sparkle text shine, skew-hover navigation links, and expandable accordions.
- **Interactive Modals & Filtering**: Deep-dive project overview dialogs with problem, solution, features, and stack breakdown.
- **Mobile-First Design**: Floating desktop navigation and dedicated bottom navigation bar for mobile devices.
- **Real Verified Data**: All academic, experience, and contact data extracted strictly from verified LinkedIn & project sources without placeholder data.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15 App Router)
- **UI & Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Project Structure

```
my_new_portfolio/
├── app/
│   ├── layout.tsx         # Root layout with ThemeProvider, Navbars, Footer, & SEO
│   ├── page.tsx           # Home landing page (Hero, Marquee, About, Projects, Specialties, FAQ, CTA)
│   ├── about/page.tsx     # Dedicated About & Academic Journey page
│   ├── projects/page.tsx  # Filterable Projects showcase with details modal
│   ├── contact/page.tsx   # Contact form, availability card, & FAQs
│   └── globals.css        # Theme design tokens, keyframes, & vignettes
├── components/
│   ├── Navbar.tsx         # Floating pill desktop navigation
│   ├── MobileNav.tsx      # Bottom mobile navigation bar
│   ├── ThemeToggle.tsx    # Sun/Moon theme switcher
│   ├── Hero.tsx           # Large headline hero with social links
│   ├── Marquee.tsx        # Keyword infinite marquee strip
│   ├── TechMarquee.tsx    # Skills pill infinite marquee strip
│   ├── AboutSection.tsx   # Large statement text reveal
│   ├── ProjectsSection.tsx# 2-column staggered project showcase
│   ├── ProjectCard.tsx    # Project card with hover zoom & tags
│   ├── ProjectModal.tsx   # Deep overview popup dialog
│   ├── ExpertiseAccordion.tsx # Specialty accordion with dynamic preview
│   ├── ExperienceSection.tsx  # Work history accordion cards
│   ├── EducationSection.tsx   # Academic journey cards
│   ├── AwardsSection.tsx  # Recognition & milestone items
│   ├── ContactSection.tsx # Contact section with info card
│   ├── ContactForm.tsx    # Validated contact form
│   ├── FAQSection.tsx     # Numbered FAQ accordions
│   ├── CTASection.tsx     # Availability badge & bottom CTA
│   └── Footer.tsx         # Minimal footer
├── data/
│   ├── profile.ts         # Verified profile information
│   ├── projects.ts        # Projects data (MediTrack, Portfolio, NeedMet, Bookmipg, YouTube)
│   ├── experience.ts      # Work history data
│   ├── education.ts       # Education data
│   ├── skills.ts          # Skills & expertise areas data
│   ├── awards.ts          # Milestones & recognition data
│   └── faq.ts             # FAQ questions & answers
├── public/
│   └── images/projects/   # Vector mockups & project banners
└── README.md
```

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 🚢 Deployment on Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. The framework preset will automatically detect Next.js.
4. Deploy!
