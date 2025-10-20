# Wedding Template - Copilot Instructions

## Project Overview
- **Project Type**: Next.js 15 + TypeScript + Tailwind CSS
- **Purpose**: Build a modern, elegant wedding website template
- **Status**: Initial setup complete with libraries installed

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

#### 1. **Navigation/Header Component**
   - Sticky navigation bar
   - Logo/brand name
   - Navigation links (Home, Our Story, Gallery, Events, RSVP, Contact)
   - Mobile hamburger menu (responsive)

#### 2. **Hero Section**
   - Full-screen background image or video
   - Couple's names in elegant typography
   - Wedding date/location
   - Call-to-action buttons (RSVP, Scroll to explore)

#### 3. **About/Our Story Section**
   - Text content about the couple
   - Timeline of relationship milestones
   - Profile images of couple

#### 4. **Gallery/Photo Section**
   - Image grid layout
   - Embla carousel for image galleries
   - Lightbox functionality (optional)
   - Multiple albums (pre-wedding, engagement, etc.)

#### 5. **Wedding Events Section**
   - Event cards (Ceremony, Reception, etc.)
   - Date, time, location for each event
   - Map integration (optional)
   - Event details modal

#### 6. **RSVP Form Section**
   - Input fields: Name, Email, Phone, Number of guests
   - Dropdown: Attendance confirmation (Yes/No/Maybe)
   - Dietary preferences
   - Comments/Special requests
   - Form validation with Zod + React Hook Form
   - Success/error messages

#### 7. **Contact Section**
   - Contact information
   - Contact form
   - Social media links
   - Location/venue details

#### 8. **Footer**
   - Copyright information
   - Quick links
   - Social media icons

---

## Component File Structure

```
src/
├── app/
│   ├── layout.tsx (main layout wrapper)
│   ├── page.tsx (homepage - main entry)
│   ├── globals.css (global styles with Tailwind)
│   └── favicon.ico
│
├── components/
│   ├── Header.tsx (navigation)
│   ├── Hero.tsx (hero section)
│   ├── OurStory.tsx (about section)
│   ├── Gallery.tsx (photo gallery with Embla carousel)
│   ├── Events.tsx (wedding events)
│   ├── RSVPForm.tsx (RSVP form with validation)
│   ├── Contact.tsx (contact section)
│   ├── Footer.tsx (footer)
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
│
├── types/
│   └── index.ts (TypeScript interfaces/types)
│
├── lib/
│   ├── formSchema.ts (Zod validation schemas)
│   └── utils.ts (utility functions)
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

### Phase 1: Foundation (Components & Layout)
- [ ] Create component files structure
- [ ] Build Header/Navigation component with responsive menu
- [ ] Build Footer component
- [ ] Create common reusable components (Button, Card, Container)
- [ ] Define TypeScript types and interfaces

### Phase 2: Core Sections
- [ ] Build Hero section with animations
- [ ] Build OurStory section with timeline
- [ ] Build Events section with event cards
- [ ] Build Gallery section with Embla carousel

### Phase 3: Forms & Interactivity
- [ ] Create Zod validation schemas for RSVP and Contact forms
- [ ] Build RSVPForm component with React Hook Form
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

## Status
- [x] Project initialized with Next.js 15
- [x] Libraries installed (Embla, Framer Motion, React Hook Form, Zod)
- [x] Project structure documented
- [ ] Component development in progress
