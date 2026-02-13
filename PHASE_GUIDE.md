# Phase-Wise Implementation Guide
## Nike-Inspired Frontend Website

---

## PHASE 1: TOP HEADER (UTILITY BAR)

### Overview
The utility bar is a thin horizontal strip at the very top of the page containing brand logos and utility links.

### Component Structure
```
TopHeader/
├── TopHeader.jsx
└── TopHeader.module.css
```

### Tailwind Usage
- `flex` for horizontal layout
- `justify-between` for left/right alignment
- `items-center` for vertical centering
- `px-*` for horizontal padding
- `py-*` for vertical padding
- `text-xs` for small text size

### CSS Module Usage
- Background color (brand-specific gray)
- Link hover effects
- Account dropdown styling
- Brand logo sizing
- Transition effects

### Key Features
- Left: Jordan logo + secondary brand icon
- Right: Store finder, Help, Username, Account dropdown
- Dropdown appears on account icon click
- Clean, minimal design

---

## PHASE 2: MAIN NAVBAR

### Overview
The primary navigation bar with Nike logo, main navigation links, and action icons.

### Component Structure
```
Navbar/
├── Navbar.jsx
├── Navbar.module.css
├── SearchBar.jsx
└── SearchBar.module.css
```

### Tailwind Usage
- `sticky top-0` for sticky positioning
- `z-50` for layering
- `flex` and `justify-between` for layout
- `gap-*` for spacing between nav items
- `hidden md:flex` for responsive visibility

### CSS Module Usage
- Nike brand colors
- Active link indicators
- Hover effects on navigation
- Search bar styling
- Icon badge styling (cart/wishlist counters)
- Smooth transitions

### Key Features
- Sticky on scroll
- Responsive (hamburger menu on mobile)
- Search functionality UI
- Icon badges for cart/wishlist
- Smooth hover effects

---

## PHASE 3: HERO SECTION

### Overview
Full-width hero section with video/image background and overlay text with CTA.

### Component Structure
```
Hero/
├── Hero.jsx
└── Hero.module.css
```

### Tailwind Usage
- `relative` for positioning context
- `w-full` and `h-screen` for full dimensions
- `flex flex-col items-center justify-center` for centering
- `text-center` for text alignment
- Responsive text sizes (`text-4xl md:text-6xl`)

### CSS Module Usage
- Dark overlay effect
- Video/image background
- Text shadow for readability
- Button styling (primary CTA)
- Gradient overlays
- Animation effects

### Key Features
- Full viewport height
- Video or animated background
- Centered content with overlay
- Prominent CTA button
- Responsive typography

---

## PHASE 4: SHOE DISPLAY SECTION

### Overview
Horizontal scrollable carousel showcasing featured shoes with navigation arrows.

### Component Structure
```
ShoeCarousel/
├── ShoeCarousel.jsx
├── ShoeCarousel.module.css
├── ShoeCard.jsx
└── ShoeCard.module.css
```

### Tailwind Usage
- `flex overflow-x-auto` for horizontal scroll
- `snap-x snap-mandatory` for snap scrolling
- `gap-*` for spacing between cards
- `relative` for arrow positioning
- `hidden md:block` for responsive arrows

### CSS Module Usage
- Smooth scroll behavior
- Arrow button styling
- Card hover effects
- Image zoom on hover
- Custom scrollbar styling
- Shadow effects

### Key Features
- Horizontal scroll with arrows
- Smooth scrolling behavior
- Touch/swipe support
- Hover effects on cards
- Navigation arrows (hidden on mobile)

---

## PHASE 5: SHOP BY ATHLETE

### Overview
Grid layout showcasing different athletes with shop buttons.

### Component Structure
```
ShopByAthlete/
├── ShopByAthlete.jsx
├── ShopByAthlete.module.css
├── AthleteCard.jsx
└── AthleteCard.module.css
```

### Tailwind Usage
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for responsive grid
- `gap-*` for spacing
- `p-*` for padding
- `container mx-auto` for centering

### CSS Module Usage
- Card hover effects (lift/scale)
- Image overlay effects
- Button styling
- Transition animations
- Border and shadow effects

### Key Features
- Responsive grid (1-4 columns)
- Athlete images with overlay
- Shop CTA buttons
- Smooth hover animations

---

## PHASE 6: BASKETBALL SECTION

### Overview
Dedicated basketball section with Nike Basketball branding and image grid.

### Component Structure
```
Basketball/
├── Basketball.jsx
└── Basketball.module.css
```

### Tailwind Usage
- `grid` for image layout
- `text-center` for heading alignment
- `py-*` for vertical spacing
- Responsive grid columns

### CSS Module Usage
- Nike Basketball brand colors
- Heading typography
- Image grid styling
- Hover effects on images
- Section background

### Key Features
- Nike Basketball branding
- Descriptive heading and text
- Image grid showcase
- Responsive layout

---

## PHASE 7: KIDS / FEATURED SECTION

### Overview
Featured categories section with 4 main product categories.

### Component Structure
```
FeaturedSection/
├── FeaturedSection.jsx
├── FeaturedSection.module.css
├── CategoryCard.jsx
└── CategoryCard.module.css
```

### Tailwind Usage
- `grid grid-cols-2 lg:grid-cols-4` for responsive grid
- `gap-*` for spacing
- `relative` for text overlay positioning
- `p-*` for padding

### CSS Module Usage
- Card styling with image backgrounds
- Text overlay effects
- Hover animations
- Category-specific colors
- Border and shadow effects

### Key Features
- 4 featured categories
- Image backgrounds with text overlay
- Responsive grid (2-4 columns)
- Hover effects

---

## PHASE 8: FOOTER

### Overview
Comprehensive footer with multiple columns, links, and bottom bar.

### Component Structure
```
Footer/
├── Footer.jsx
├── Footer.module.css
├── FooterColumn.jsx
└── FooterColumn.module.css
```

### Tailwind Usage
- `grid grid-cols-1 md:grid-cols-4` for column layout
- `gap-*` for spacing
- `flex justify-between` for bottom bar
- `py-*` and `px-*` for padding

### CSS Module Usage
- Footer background color
- Link hover effects
- Column heading styling
- Bottom bar styling
- Social media icon styling
- Divider lines

### Key Features
- Multi-column layout
- Resources, Help, Company, Promotions columns
- Country selector
- Copyright bar
- Social media links
- Responsive (stacks on mobile)

---

## Development Workflow

### For Each Phase:
1. **Read the phase documentation**
2. **Create component files**
3. **Implement with Tailwind + CSS Modules**
4. **Test responsiveness**
5. **Review with developer**
6. **Move to next phase**

### Best Practices:
- Keep JSX clean and readable
- Use Tailwind for structure, CSS Modules for branding
- Comment complex logic
- Test on multiple screen sizes
- Ensure accessibility
- Optimize images
- Use semantic HTML

---

## Ready to Start?
Begin with **PHASE 1: TOP HEADER** and proceed sequentially through each phase.
