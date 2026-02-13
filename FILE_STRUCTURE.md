# Project File Structure
## Nike-Inspired Frontend Website

```
nike-frontend/
│
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       │   ├── logos/
│       │   │   ├── nike-logo.svg
│       │   │   └── jordan-logo.svg
│       │   ├── hero/
│       │   │   └── hero-video.mp4
│       │   ├── shoes/
│       │   ├── athletes/
│       │   └── categories/
│       └── icons/
│           ├── search.svg
│           ├── cart.svg
│           ├── wishlist.svg
│           └── user.svg
│
├── src/
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.js
│   ├── index.css
│   │
│   ├── components/
│   │   │
│   │   ├── TopHeader/
│   │   │   ├── TopHeader.jsx
│   │   │   └── TopHeader.module.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.module.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   │
│   │   ├── ShoeCarousel/
│   │   │   ├── ShoeCarousel.jsx
│   │   │   ├── ShoeCarousel.module.css
│   │   │   ├── ShoeCard.jsx
│   │   │   └── ShoeCard.module.css
│   │   │
│   │   ├── ShopByAthlete/
│   │   │   ├── ShopByAthlete.jsx
│   │   │   ├── ShopByAthlete.module.css
│   │   │   ├── AthleteCard.jsx
│   │   │   └── AthleteCard.module.css
│   │   │
│   │   ├── Basketball/
│   │   │   ├── Basketball.jsx
│   │   │   └── Basketball.module.css
│   │   │
│   │   ├── FeaturedSection/
│   │   │   ├── FeaturedSection.jsx
│   │   │   ├── FeaturedSection.module.css
│   │   │   ├── CategoryCard.jsx
│   │   │   └── CategoryCard.module.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── Footer.module.css
│   │       ├── FooterColumn.jsx
│   │       └── FooterColumn.module.css
│   │
│   ├── data/
│   │   ├── shoes.js
│   │   ├── athletes.js
│   │   ├── categories.js
│   │   └── footerLinks.js
│   │
│   ├── hooks/
│   │   └── useScrollPosition.js
│   │
│   └── utils/
│       └── constants.js
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js (or craco.config.js for CRA)
├── README.md
├── PHASE_GUIDE.md
├── SRS.md
└── FILE_STRUCTURE.md
```

## File Descriptions

### Root Configuration Files
- **package.json**: Project dependencies and scripts
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration for Tailwind
- **vite.config.js**: Vite build configuration
- **.gitignore**: Git ignore rules

### Source Files
- **src/index.js**: Application entry point
- **src/index.css**: Global styles and Tailwind directives
- **src/App.jsx**: Main application component
- **src/App.module.css**: App-level CSS Module styles

### Components (Phase-wise)
Each component folder contains:
- `.jsx` file: React component logic
- `.module.css` file: Component-specific styles

### Data Files
Mock data for development:
- **shoes.js**: Shoe product data
- **athletes.js**: Athlete information
- **categories.js**: Category data
- **footerLinks.js**: Footer navigation links

### Hooks
Custom React hooks:
- **useScrollPosition.js**: Track scroll position for navbar

### Utils
Utility functions and constants:
- **constants.js**: App-wide constants (colors, breakpoints, etc.)

## Notes
- All component folders follow the same pattern
- CSS Modules use `.module.css` extension
- Data files export mock data arrays
- Public assets organized by type
