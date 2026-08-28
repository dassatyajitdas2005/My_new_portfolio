# Satyajit Das — Personal Portfolio

A modern, high-performance developer portfolio and project showcase platform designed with editorial minimalism, refined typography, subtle micro-borders, and fluid interactions.

---
<img width="1919" height="926" alt="Screenshot 2026-08-28 210331" src="https://github.com/user-attachments/assets/4dac7f1d-d5f8-454e-b008-2a24c6a16cb2" />
---

## 🌐 Live Portfolio

**Experience the live website:**  
👉 **[https://s4satyajit.vercel.app](https://s4satyajit.vercel.app)**

**GitHub Repository:**  
📁 **[https://github.com/dassatyajitdas2005/My_new_portfolio](https://github.com/dassatyajitdas2005/My_new_portfolio)**

---

## ✨ Overview

This personal developer portfolio presents verified professional background information, academic journeys, core technical competencies, and architectural software projects. 

Built as a single-page application with dedicated routes, the platform allows recruiters, developers, and collaborators to explore real-world software engineering work—featuring a dedicated showcase for **MediTrack**, an interactive project directory with category filtering, detailed popover project modals, and career history accordions.

---

## 🎨 Design & Experience

The visual direction combines an editorial-inspired layout with clean digital aesthetics:

- **Minimal Editorial Layout**: Focused content structure that highlights typography and project details without visual noise.
- **Typography Hierarchy**: Distinct font pairings using clean sans-serif typography for maximum legibility.
- **Generous Whitespace**: Spacing system designed for comfortable scanning across dense technical information.
- **Subtle Micro-Borders**: Crisp, low-contrast border lines (`border-zinc-200` / `border-zinc-800`) framing card containers and layout sections.
- **Modern Surface Cards**: Interactive card components with hover lift and technology badge overlays.
- **Seamless Light & Dark Themes**: High-contrast theme modes powered by `next-themes` with zero hydration flash.
- **Fluid Motion**: Hardware-accelerated transitions, infinite marquees, and spring physics popups.
- **Responsive Layout**: Tailored layouts engineered for mobile, tablet, and desktop viewports.
- **Design Inspiration**: Visual aesthetics inspired by `d4deepak.dev`, personalized with original data and components.

---

## 🚀 Key Features

| Category | Feature | Description |
|---|---|---|
| **Theme System** | Light & Dark Mode | Persistent theme toggle with `next-themes` and zero layout shift. |
| **Hero Section** | Interactive Headline | Large bio headline with live availability status indicator and quick link triggers. |
| **Showcase Engine** | MediTrack Spotlight | Deep-dive feature breakdown for the MediTrack healthcare management project. |
| **Project Directory** | Category Filtering | Real-time client-side filter engine to browse projects by category tags. |
| **Detail Dialogs** | Project Modals | Interactive popups providing problem statements, solutions, metrics, and stack tags. |
| **Visual Strips** | Dual Marquees | Infinite sliding marquees displaying technology tags and domain focus keywords. |
| **Interactive Lists** | Accordions | Expandable UI sections detailing specialty domains, work history, and FAQs. |
| **Navigation** | Dual Nav Architecture | Floating glassmorphic desktop pill bar paired with a mobile bottom dock navigation bar. |
| **Metadata** | SEO & OpenGraph | Dynamic metadata tags and structured JSON-LD schemas for social sharing and search indexing. |
| **Communication** | Contact Section | Validated contact form with timezone availability indicators and quick email copy. |

---

### 💼 Personal Portfolio Website

- **Description**: Modern developer portfolio built with Next.js 15 App Router, React 19, and Framer Motion.
- **Purpose**: Serves as a single, verified platform to showcase software projects, career history, and technical competencies.
- **Key Highlights**:
  - Interactive project filtering and deep-dive modal dialogs.
  - Persistent light and dark theme switcher.
  - Floating desktop navigation pill and mobile bottom navigation dock.
- **Technology Stack**: Next.js 15.5.24, React 19, TypeScript, Tailwind CSS, Framer Motion, next-themes.
- **Live Demo**: [https://s4satyajit.vercel.app](https://s4satyajit.vercel.app)
- **GitHub Repository**: [https://github.com/dassatyajitdas2005/My_new_portfolio](https://github.com/dassatyajitdas2005/My_new_portfolio)

---


## 🛠️ Technology Stack

| Technology | Role |
|---|---|
| **Next.js 15.5.24** | Portfolio framework |
| **React 19** | UI components |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling |
| **Framer Motion** | UI animations |
| **Lucide React** | Interface icons |
| **next-themes** | Theme management |
| **Git** | Version control |
| **GitHub** | Code repository hosting |
| **Vercel** | Production hosting |

---

## 📱 Responsive Experience

- **Mobile Viewports**: Pinned bottom navigation dock (`MobileNav.tsx`) optimized for one-thumb touch access; single-column card grids.
- **Tablet Viewports**: Adapted grid layouts with scaled padding and responsive typography clamps.
- **Desktop Viewports**: Floating glassmorphic navigation pill (`Navbar.tsx`) centered at the top; full multi-column grid view.

---

## 🌓 Theme Experience

- **Light Mode**: Clean white background (`#FFFFFF`) with high-contrast dark typography and crisp zinc borders (`#E4E4E7`).
- **Dark Mode**: Deep dark background (`#09090B`) with light gray text and dark zinc borders (`#27272A`).
- **Zero FOUC**: Implemented via inline script initialization ensuring zero visual flicker during theme loading.

---

## 🎬 Interactions & Motion

- **Infinite Marquee**: Continuous dual-lane marquee loops showcasing skill tags and technical keywords.
- **Accordion Physics**: Smooth height animations for expanding specialty focus areas and work experience cards.
- **Modal Popover**: Accessible dialog popups with backdrop blur and spring-driven zoom entrances.
- **Skew Hovers**: Custom hover physics on interactive links and call-to-action buttons.

---

## 📂 Portfolio Sections

- **Home**: Main landing hero, live availability indicator, marquee strips, specialty accordions, and featured project previews.
- **About**: Bio statement detailing technical ethos and coding background.
- **Experience**: Chronological timeline cards of professional roles and key accomplishments.
- **Education**: Academic records detailing university degrees, major coursework, and highlights.
- **Skills**: Technical skills overview categorized by domain competencies.
- **Expertise**: Specialty focus areas including frontend, backend, and platform engineering.
- **Projects**: Filterable directory grid showcasing MediTrack and other projects with modal popups.
- **Achievements**: Recognition cards highlighting hackathons, certifications, and milestones.
- **Contact**: Validated inquiry form, current IST timezone clock, and direct email copy trigger.
- **FAQ**: Numbered expandable accordions answering common collaboration and recruitment questions.

---

## 🏗️ Project Structure

```
my_new_portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx         # Bio, Experience, & Education page
│   ├── contact/
│   │   └── page.tsx         # Contact form & availability info
│   ├── projects/
│   │   └── page.tsx         # Filterable Projects directory & modal manager
│   ├── globals.css          # Theme tokens, CSS variables, & keyframes
│   ├── layout.tsx           # Root shell, Providers, Navigation, & SEO
│   └── page.tsx             # Landing Hub (Hero, Marquees, Showcase)
├── components/
│   ├── AboutSection.tsx     # Typography bio statement reveal
│   ├── AwardsSection.tsx    # Certifications & milestones grid
│   ├── ContactForm.tsx      # Validated user contact form
│   ├── ExperienceSection.tsx# Career timeline accordions
│   ├── Hero.tsx             # Main visual hero section
│   ├── Marquee.tsx          # Dual continuous text marquees
│   ├── MobileNav.tsx        # Mobile bottom dock navigation bar
│   ├── Navbar.tsx           # Floating desktop navigation pill
│   ├── ProjectCard.tsx      # Interactive project item card
│   ├── ProjectModal.tsx     # Deep-dive detail popup dialog
│   └── ThemeToggle.tsx      # Animated Sun/Moon theme switcher
├── data/
│   ├── profile.ts           # Core metadata & social links
│   ├── projects.ts          # Project manifest dataset (MediTrack, etc.)
│   ├── experience.ts        # Work history dataset
│   ├── education.ts         # Academic dataset
│   └── skills.ts            # Skills & domain expertise dataset
├── public/
│   └── images/projects/     # Mockups & visual project previews
└── README.md
```

---

## 🔎 SEO & Accessibility

- **Semantic HTML5**: Native landmark elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`).
- **Structured Data (JSON-LD)**: Injected `Person` and `WebSite` schemas for enhanced search indexing.
- **OpenGraph Metadata**: Pre-configured dynamic meta tags for social media link previews on X/Twitter and LinkedIn.
- **Accessibility (ARIA)**: Keyboard navigable dialogs, explicit ARIA expanded attributes on accordions, and contrast-compliant colors.

---

## 👨‍💻 About the Developer

**Satyajit Das** is a software developer specializing in building modern web applications, full-stack systems, and domain-specific platforms such as **MediTrack**.

---

## 🌐 Connect

- **Live Portfolio**: [https://s4satyajit.vercel.app](https://s4satyajit.vercel.app)
- **GitHub**: [https://github.com/dassatyajitdas2005](https://github.com/dassatyajitdas2005)
- **Repository**: [https://github.com/dassatyajitdas2005/My_new_portfolio](https://github.com/dassatyajitdas2005/My_new_portfolio)

---

## 🗺️ Future Improvements

- [ ] Add interactive live embeds for selected web applications inside project modals.
- [ ] Expand project screenshot galleries with high-resolution walkthrough previews.
- [ ] Implement dynamic blog/writing route for technical articles.

---

## 📄 License

No explicit open-source license has currently been specified for this repository.

---

<p align="center">
  Designed & Developed by <strong>Satyajit Das</strong> • Hosted on <strong>Vercel</strong>
</p>
