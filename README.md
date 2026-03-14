# 👟 Nike Shoes Website Clone — Front End

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS_Modules-✓-blue?style=for-the-badge" alt="CSS Modules" />
</p>

<p align="center">
  A modern, fully responsive Nike-inspired e-commerce front-end built with <strong>React 18</strong>, powered by a hybrid styling approach of <strong>Tailwind CSS</strong> + <strong>CSS Modules</strong>, and bundled with <strong>Vite</strong>.
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Sections / Components](#-sections--components)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Styling Architecture](#-styling-architecture)
- [Browser Support](#-browser-support)
- [Documentation](#-documentation)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🌟 Overview

This project is a pixel-perfect, front-end clone of the Nike e-commerce website. It is built entirely with React functional components and hooks, demonstrating best practices in component architecture, responsive design, and hybrid CSS styling. The project follows a phased implementation approach — each section of the page is built as a self-contained, reusable React component.

---

## 🚀 Live Demo

> Run locally with `npm run dev` and open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18+** | UI framework (functional components + hooks) |
| **Tailwind CSS 3.x** | Layout, spacing, responsiveness, typography |
| **CSS Modules** | Component-scoped brand colors, animations, hover effects |
| **Vite 5.x** | Lightning-fast dev server and production build |
| **PostCSS + Autoprefixer** | CSS post-processing and cross-browser support |

---

## ✨ Features

- ✅ **Fully Responsive** — Mobile-first design with breakpoints for mobile, tablet, and desktop
- ✅ **Video Hero Section** — Autoplaying, looping background video with overlay text and CTA
- ✅ **Sticky Navbar** — Stays at the top while scrolling, with smooth hover effects
- ✅ **Account Dropdown** — Animated dropdown menu in the utility bar
- ✅ **Shoe Carousel** — Horizontally scrollable product showcase with arrow navigation
- ✅ **Athlete Shop Grid** — Responsive grid layout for browsing by athlete
- ✅ **Multiple Content Sections** — Basketball, Featured, Customize, Greatness, and more
- ✅ **Multi-column Footer** — With navigation links, country selector, and copyright bar
- ✅ **Smooth Animations** — Fade-in-up on load, hover scale effects, underline transitions
- ✅ **Semantic HTML & Accessibility** — ARIA labels and alt text throughout
- ✅ **Performance Optimized** — Lazy-loadable images and efficient bundle via Vite

---

## 📁 Project Structure

```
nike-frontend/
│
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/          # Logos, shoes, athletes, category images
│       ├── videos/          # Hero background video
│       └── icons/           # SVG icons (search, cart, wishlist, user)
│
├── src/
│   ├── App.jsx              # Root component — assembles all sections
│   ├── App.module.css
│   ├── index.jsx            # React entry point
│   ├── index.css            # Global styles + Tailwind directives
│   │
│   ├── components/          # One folder per section/component
│   │   ├── TopHeader/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── CallToAction/
│   │   ├── ShoeCarousel/
│   │   ├── CourtSection/
│   │   ├── ShopByAthlete/
│   │   ├── Basketball/
│   │   ├── FeaturedSection/
│   │   ├── CategoryCards/
│   │   ├── CustomizeSection/
│   │   ├── GreatnessSection/
│   │   ├── RedGirlsSection/
│   │   ├── BrickCourtSection/
│   │   ├── ShopKids/
│   │   ├── NikeSymbolSection/
│   │   ├── FooterBar/
│   │   ├── FooterNav/
│   │   └── MainFooter/
│   │
│   ├── data/                # Mock data (shoes, athletes, categories, footer links)
│   ├── hooks/               # Custom hooks (e.g. useScrollPosition)
│   └── utils/               # App-wide constants
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── .gitignore
├── README.md
├── SRS.md                   # Software Requirements Specification
├── PHASE_GUIDE.md           # Phase-wise implementation guide
└── FILE_STRUCTURE.md        # Detailed file structure documentation
```

---

## 🧩 Sections / Components

| # | Component | Description |
|---|---|---|
| 1 | **TopHeader** | Utility bar with Jordan logo, SNKRS link, store finder, help, and account dropdown |
| 2 | **Navbar** | Sticky primary nav — Nike logo, Men/Women/Kids/Jordan/Sport/Sale links, search bar, wishlist & cart icons |
| 3 | **Hero** | Full-screen video background with dark overlay, headline, and "Explore" CTA button |
| 4 | **CallToAction** | Secondary CTA banner section |
| 5 | **ShoeCarousel** | Horizontally scrollable product carousel with arrow navigation and hover effects |
| 6 | **CourtSection** | Court-themed visual content section |
| 7 | **ShopByAthlete** | Responsive grid of athlete cards, each with a "Shop" CTA |
| 8 | **Basketball** | Nike Basketball branding section with image grid |
| 9 | **FeaturedSection** | Featured product categories displayed in a responsive grid |
| 10 | **CategoryCards** | Quick-shop category cards (Shoes, Clothing, Kids, Accessories) |
| 11 | **CustomizeSection** | Nike By You / customization promo section |
| 12 | **GreatnessSection** | Inspirational brand messaging section |
| 13 | **RedGirlsSection** | Women's collection highlight section |
| 14 | **BrickCourtSection** | Urban/street basketball themed visual section |
| 15 | **ShopKids** | Kids' collection promotional section |
| 16 | **NikeSymbolSection** | Iconic Nike Swoosh brand moment section |
| 17 | **FooterBar** | Top part of the footer with country/region selector |
| 18 | **FooterNav** | Multi-column footer navigation — Featured, Shoes, Clothing, Kids, and more |
| 19 | **MainFooter** | Bottom bar with copyright, social media links, and legal info |

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ahitshamkhan/Nike-Shoes-Website-Clone-Front-End-.git

# 2. Navigate to the project directory
cd Nike-Shoes-Website-Clone-Front-End-

# 3. Install dependencies
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page auto-reloads on any file save.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **dev** | `npm run dev` | Start Vite dev server with HMR |
| **build** | `npm run build` | Build optimized production bundle to `/dist` |
| **preview** | `npm run preview` | Serve the production build locally |

---

## 🎨 Styling Architecture

This project uses a **hybrid styling approach**:

### Tailwind CSS — Structure & Layout
Used for utility-first layout work that doesn't carry brand-specific identity:
```jsx
<nav className={`sticky top-0 z-50 flex justify-between items-center px-8 py-4 ${styles.navbar}`}>
```
- Flex/Grid layout
- Padding and margin spacing
- Responsive breakpoints (`hidden md:flex`, `grid-cols-1 lg:grid-cols-4`)
- Typography sizing
- Z-index and positioning

### CSS Modules — Brand & Animation
Used for Nike-specific colours, hover states, and custom animations:
```css
/* Navbar.module.css */
.navLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #111;
  transition: width 0.3s ease;
}
.navLink:hover::after {
  width: 100%;
}
```
- Nike brand colours (`#111111`, `#FA5400`, `#F5F5F5`)
- Hover transitions and underline animations
- Fade-in-up entry animations
- Dropdown menu styling
- Video/image background handling

---

## 🌐 Browser Support

| Browser | Supported |
|---|---|
| Chrome | Latest 2 versions ✅ |
| Firefox | Latest 2 versions ✅ |
| Safari | Latest 2 versions ✅ |
| Edge | Latest 2 versions ✅ |

---

## 📚 Documentation

| File | Description |
|---|---|
| [`SRS.md`](./SRS.md) | Full Software Requirements Specification |
| [`PHASE_GUIDE.md`](./PHASE_GUIDE.md) | Phase-by-phase implementation guide for all 8 phases |
| [`FILE_STRUCTURE.md`](./FILE_STRUCTURE.md) | Detailed project file and folder structure |

---

## 🔮 Future Enhancements

- 🔐 User authentication (real backend integration)
- 🛒 Functional shopping cart and checkout flow
- 🔍 Product filtering, sorting, and search
- ❤️ Wishlist persistence (local storage / database)
- 📦 Product detail pages with routing (React Router)
- 🌍 Multi-region / multi-currency support
- 🧪 Unit and integration tests (Jest + React Testing Library)
- 🖼️ Image optimization with lazy loading
- ♿ Enhanced accessibility (WCAG 2.1 AA)

---

## 📄 License

This project is intended for **educational and portfolio purposes only**.  
Nike®, the Nike Swoosh, Jordan Brand, and all related marks are trademarks of **Nike, Inc.** and are used here solely to demonstrate front-end development skills. No commercial use is intended or implied.

---

<p align="center">Made with ❤️ by <a href="https://github.com/ahitshamkhan">ahitshamkhan</a></p>
