# Wedding Template - Copilot Instructions

## Project Overview
- **Project Type**: Next.js 15 + TypeScript + Tailwind CSS
- **Purpose**: Build a modern, elegant wedding website template
- **Status**: Phase 2 complete - Core sections with animations and Embla carousel

---

## Libraries Installed

### Production Dependencies
1. **embla-carousel-react** (^8.6.0) - Image carousel for gallery/slider sections ✅ Used
2. **embla-carousel-autoplay** (^8.6.0) - Auto-play functionality for carousels ✅ Used
3. **framer-motion** (^12.23.24) - Smooth animations and transitions ✅ Used
4. **react-hook-form** (^7.65.0) - Form state management for RSVP & contact forms
5. **zod** (^4.1.12) - Schema validation for form data ✅ Schemas created

### Dev Dependencies
- TypeScript, ESLint, Tailwind CSS v4, Next.js 15.5.6

---

## Component File Structure (Updated)

```
src/
├── app/
│   ├── layout.tsx ✅ (main layout wrapper with Header & Footer)
│   ├── page.tsx ✅ (homepage - imports all section components)
│   ├── globals.css (global styles with Tailwind)
│   └── favicon.ico
│
├── components/
│   ├── Header.tsx ✅ (sticky navigation with mobile menu)
│   ├── Hero.tsx ✅ (hero section with Framer Motion animations)
│   ├── OurStory.tsx ✅ (timeline with 4 milestone events)
│   ├── Gallery.tsx ✅ (Embla carousel + album filters + grid)
│   ├── Events.tsx ✅ (timeline of 4 wedding events with icons)
│   ├── Footer.tsx ✅ (footer with links and social)
│   └── common/
│       ├── Button.tsx ✅ (3 variants: primary, secondary, outline)
│       ├── Card.tsx ✅ (reusable card with hover effect)
│       └── Container.tsx ✅ (max-width wrapper)
│
├── types/
│   └── index.ts ✅ (7 TypeScript interfaces)
│
├── lib/
│   ├── formSchema.ts ✅ (2 Zod schemas: RSVP, Contact)
│   └── utils.ts ✅ (4 utility functions)
│
└── styles/ (optional)
```

---

## Implementation Plan

### Phase 1: Foundation (Components & Layout) ✅ COMPLETE
- [x] Create component files structure
- [x] Build Header/Navigation component with responsive menu
- [x] Build Footer component
- [x] Create common reusable components (Button, Card, Container)
- [x] Define TypeScript types and interfaces
- [x] Create Zod validation schemas
- [x] Create utility functions
- [x] Build page layout with all sections
- [x] Integration test (build successful)

### Phase 2: Core Sections ✅ COMPLETE
- [x] Build Hero section with Framer Motion animations
- [x] Build OurStory component with 4-event timeline
- [x] Build Events component with 4 wedding events + venue cards
- [x] Build Gallery component with:
  - [x] Embla carousel with autoplay
  - [x] Album filter buttons (all, engagement, pre-wedding, couple)
  - [x] Navigation dots for carousel
  - [x] Responsive image grid
  - [x] Hover animations on gallery items
- [x] Implement scroll animations across all sections
- [x] Production build successful (0 errors)

### Phase 3: Forms & Interactivity (Next)
- [ ] Create dedicated RSVPForm component with React Hook Form
- [ ] Integrate form validation with Zod schemas
- [ ] Build Contact form component
- [ ] Add form submission handling (API route or email service)
- [ ] Add success/error messages with animations

### Phase 4: Polish & Optimization
- [ ] Responsive design testing (mobile, tablet, desktop)
- [ ] Performance optimization & image lazy loading
- [ ] SEO optimization (meta tags, structured data)
- [ ] Cross-browser testing
- [ ] Accessibility audit

### Phase 5: Deployment
- [ ] Build and test production build
- [ ] Deploy to Vercel

---

## Phase 2 Completion Summary

**New Components Created:**

1. **Hero.tsx** - Full-screen hero section with:
   - Animated gradient background blobs
   - Staggered text animations (names, date, description)
   - Smooth scroll indicator at bottom
   - Call-to-action buttons

2. **OurStory.tsx** - Relationship timeline with:
   - 4 milestone events (2018 to 2024)
   - Numbered timeline dots with gradient
   - Connected timeline lines (desktop)
   - Additional love story section with image

3. **Gallery.tsx** - Complete gallery section with:
   - Embla carousel with autoplay functionality
   - Album filtering (all/engagement/pre-wedding/couple)
   - Carousel navigation dots
   - Responsive image grid (1/2/3 columns)
   - Hover scale animations on images

4. **Events.tsx** - Wedding events timeline with:
   - 4 events: Ceremony, Cocktail, Dinner, Brunch
   - Timeline layout with numbered dots
   - Icons for each event
   - Date, time, location with SVG icons
   - Venue information cards section

**Key Features Implemented:**

✅ **Framer Motion Animations:**
- Container variants with staggered children
- whileInView animations (trigger on scroll)
- whileHover and whileTap interactions
- Smooth transitions throughout

✅ **Embla Carousel:**
- Auto-play with infinite loop
- Responsive slides
- Manual dot navigation
- Album filtering updates carousel content

✅ **Responsive Design:**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Flexible grid layouts
- Touch-friendly interactive elements

✅ **Dark Mode Support:**
- All components use dark: prefix for dark mode
- Tested and working throughout

✅ **Build Status:**
- Production build: ✅ Successful
- File size: 49 kB (route) + 164 kB (First Load JS)
- No TypeScript errors
- No ESLint errors
- All components compile correctly

---

## What's Working Now

### Animated Sections (all with scroll-triggered animations):
1. **Hero** - Fade in + float animations + scroll indicator
2. **Our Story** - Timeline with numbered dots and connecting lines
3. **Gallery** - Carousel with album filtering + image grid
4. **Events** - Event timeline with venue information
5. **RSVP** - Placeholder section ready for form
6. **Contact** - 3 info cards with hover effects

### Navigation Features:
- Sticky header with smooth scroll to sections
- Responsive mobile hamburger menu
- All nav links functional

### Visual Polish:
- Gradient backgrounds (amber to rose theme)
- Card shadows and hover effects
- Emoji icons for visual interest
- Consistent spacing and typography

---

## Notes for Phase 3 (Forms)

To implement Phase 3, you'll need to:

1. **Create RSVPForm.tsx component:**
   - Use React Hook Form with useForm hook
   - Integrate RSVPFormSchema validation from `lib/formSchema.ts`
   - Form fields: name, email, phone, numberOfGuests, attendance, dietaryPreferences, comments
   - Add error message display
   - Loading state during submission

2. **Create Contact form (or inline in page):**
   - Use React Hook Form
   - Integrate ContactFormSchema validation
   - Form fields: name, email, subject, message
   - Success/error toast notifications

3. **API Routes:**
   - Create `src/app/api/rsvp/route.ts` - Handle RSVP submissions
   - Create `src/app/api/contact/route.ts` - Handle contact submissions
   - Optional: Email integration with service like SendGrid, Resend, or Nodemailer

---

## Commands to Remember

```bash
# Development (with Turbopack for fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting check
npm run lint
```

---

## Status
- [x] Project initialized with Next.js 15
- [x] Libraries installed (Embla, Framer Motion, React Hook Form, Zod)
- [x] Project structure documented
- [x] Phase 1: Foundation components created
- [x] Phase 2: Core sections with animations complete
- [ ] Phase 3: Forms & interactivity (next step)
- [ ] Phase 4: Polish & optimization
- [ ] Phase 5: Deployment
