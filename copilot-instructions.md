# Wedding Template - Copilot Instructions

## Project Overview
- **Project Type**: Next.js 15 + TypeScript + Tailwind CSS
- **Purpose**: Build a modern, elegant wedding website template
- **Status**: Phase 1 complete - Foundation and layout components created

---

## Libraries Installed

### Production Dependencies
1. **embla-carousel-react** (^8.6.0) - Image carousel for gallery/slider sections
2. **embla-carousel-autoplay** (^8.6.0) - Auto-play functionality for carousels
3. **framer-motion** (^12.23.24) - Smooth animations and transitions
4. **react-hook-form** (^7.65.0) - Form state management for RSVP & contact forms
5. **zod** (^4.1.12) - Schema validation for form data

### Dev Dependencies
- TypeScript, ESLint, Tailwind CSS v4, Next.js 15.5.6

---

## Component Analysis & Structure

### Page Layout Structure
The wedding template will consist of the following main sections:

#### 1. **Navigation/Header Component** ✅
   - Sticky navigation bar
   - Logo/brand name
   - Navigation links (Home, Our Story, Gallery, Events, RSVP, Contact)
   - Mobile hamburger menu (responsive)

#### 2. **Hero Section** ✅
   - Full-screen background image or video
   - Couple's names in elegant typography
   - Wedding date/location
   - Call-to-action buttons (RSVP, Scroll to explore)

#### 3. **About/Our Story Section** ✅
   - Text content about the couple
   - Timeline of relationship milestones
   - Profile images of couple

#### 4. **Gallery/Photo Section** ✅ (placeholder)
   - Image grid layout
   - Embla carousel for image galleries
   - Lightbox functionality (optional)
   - Multiple albums (pre-wedding, engagement, etc.)

#### 5. **Wedding Events Section** ✅
   - Event cards (Ceremony, Reception, etc.)
   - Date, time, location for each event
   - Map integration (optional)
   - Event details modal

#### 6. **RSVP Form Section** ✅ (placeholder)
   - Input fields: Name, Email, Phone, Number of guests
   - Dropdown: Attendance confirmation (Yes/No/Maybe)
   - Dietary preferences
   - Comments/Special requests
   - Form validation with Zod + React Hook Form
   - Success/error messages

#### 7. **Contact Section** ✅
   - Contact information
   - Contact form
   - Social media links
   - Location/venue details

#### 8. **Footer** ✅
   - Copyright information
   - Quick links
   - Social media icons

---

## Component File Structure

```
src/
├── app/
│   ├── layout.tsx ✅ (main layout wrapper with Header & Footer)
│   ├── page.tsx ✅ (homepage - main entry with all sections)
│   ├── globals.css (global styles with Tailwind)
│   └── favicon.ico
│
├── components/
│   ├── Header.tsx ✅ (navigation)
│   ├── Hero.tsx (hero section - integrated in page.tsx)
│   ├── OurStory.tsx (about section - integrated in page.tsx)
│   ├── Gallery.tsx (photo gallery with Embla carousel)
│   ├── Events.tsx (wedding events - integrated in page.tsx)
│   ├── RSVPForm.tsx (RSVP form with validation)
│   ├── Contact.tsx (contact section - integrated in page.tsx)
│   ├── Footer.tsx ✅ (footer)
│   └── common/
│       ├── Button.tsx ✅
│       ├── Card.tsx ✅
│       └── Container.tsx ✅
│
├── types/
│   └── index.ts ✅ (TypeScript interfaces/types)
│
├── lib/
│   ├── formSchema.ts ✅ (Zod validation schemas)
│   └── utils.ts ✅ (utility functions)
│
└── styles/ (optional, if needed beyond Tailwind)
    └── theme.css (custom CSS variables for colors)
```

---

## Design & Animation Considerations

### Framer Motion Usage
- Fade-in animations on scroll for sections
- Smooth transitions between pages
- Image reveal animations in gallery
- Button hover effects
- Form validation animations

### Tailwind CSS Styling
- Elegant, modern color scheme (whites, golds, soft pastels)
- Responsive design (mobile-first approach)
- Custom fonts (Geist + elegant serif for headings)
- Spacing and typography consistency

### Embla Carousel Features
- Auto-play gallery carousels
- Touch/swipe navigation
- Responsive slide sizing
- Dot indicators for navigation

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

### Phase 2: Core Sections (Next)
- [ ] Enhance Hero section with animations
- [ ] Build dedicated OurStory component with timeline
- [ ] Build dedicated Events component with detailed cards
- [ ] Build Gallery component with Embla carousel

### Phase 3: Forms & Interactivity
- [ ] Create dedicated RSVPForm component with React Hook Form
- [ ] Build Contact form component
- [ ] Add form submission handling (API route or email service)

### Phase 4: Polish & Optimization
- [ ] Add Framer Motion animations throughout
- [ ] Responsive design testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Cross-browser testing

### Phase 5: Deployment
- [ ] Build and test production build
- [ ] Deploy to Vercel

---

## Key Features to Implement

✓ **Responsive Design** - Mobile, tablet, desktop
✓ **Image Carousels** - Embla carousel for galleries
✓ **Form Validation** - Zod + React Hook Form
✓ **Smooth Animations** - Framer Motion transitions
✓ **Dark Mode Support** - Tailwind dark mode
✓ **Accessibility** - Semantic HTML, ARIA labels
✓ **SEO Friendly** - Meta tags, structured data
✓ **Performance** - Next.js optimization, image lazy loading

---

## Notes for Development

1. **Image Handling**: Use Next.js Image component for optimization
2. **Color Theme**: Define custom colors in Tailwind config for consistency
3. **Fonts**: Consider adding elegant serif fonts via `next/font`
4. **API Routes**: Create `/api/contact` and `/api/rsvp` for form submissions
5. **Environment Variables**: Setup `.env.local` for API endpoints if needed
6. **Testing**: Consider adding unit tests for form validation

---

## Commands to Remember

```bash
# Development
npm run dev

# Build
npm run build

# Linting
npm run lint

# Production
npm run start
```

---

## Phase 1 Completion Summary

**Completed Tasks:**
- ✅ TypeScript types and interfaces defined (`src/types/index.ts`)
- ✅ Zod validation schemas created for RSVP and Contact forms
- ✅ Utility functions implemented (classNames, scrollToSection, formatDate, formatPhoneNumber)
- ✅ Reusable Button component with variants (primary, secondary, outline)
- ✅ Reusable Card component with hover effect option
- ✅ Reusable Container component for consistent layout
- ✅ Header component with sticky positioning and responsive mobile menu
- ✅ Footer component with quick links and social media
- ✅ Main page structure with all 6 sections (Hero, Story, Gallery, Events, RSVP, Contact)
- ✅ Root layout updated with Header/Footer integration
- ✅ Production build successful (0 errors)

**Next Steps:**
- Proceed to Phase 2: Create dedicated section components (OurStory, Gallery, Events)
- Add Embla carousel to Gallery section
- Implement Framer Motion animations

---

## Status
- [x] Project initialized with Next.js 15
- [x] Libraries installed (Embla, Framer Motion, React Hook Form, Zod)
- [x] Project structure documented
- [x] Phase 1: Foundation components created
- [ ] Phase 2: Core sections development
