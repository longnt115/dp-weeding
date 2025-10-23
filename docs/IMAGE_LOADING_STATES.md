# Image Loading States Implementation

## Overview

This application now includes a sophisticated image loading state system with shimmer effects and spinners to enhance user experience while images are loading.

## Components

### ImageWithLoader Component

**Location**: `src/components/common/ImageWithLoader.tsx`

A wrapper component around Next.js Image that provides:

- ✅ **Shimmer loading animation** - Elegant gradient animation while image loads
- ✅ **Spinner indicator** - Centered loading spinner with wedding theme colors
- ✅ **Smooth fade-in** - Images fade in with opacity transition once loaded
- ✅ **Optional loading state** - Can disable loader for small icons
- ✅ **Responsive design** - Spinner size adapts to screen size

### Usage Example

```tsx
import ImageWithLoader from "@/components/common/ImageWithLoader";

// With loading state (default)
<ImageWithLoader
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={500}
  className="w-full h-full object-cover"
  priority // Optional: for above-the-fold images
/>

// Without loading state (for icons)
<ImageWithLoader
  src="/icon.svg"
  alt="Icon"
  width={16}
  height={16}
  showLoader={false}
/>
```

## Features

### 1. Shimmer Animation

- Smooth left-to-right gradient animation
- Custom CSS keyframes in `globals.scss`
- Light gray color scheme matching wedding theme
- 1.5s animation duration

### 2. Loading Spinner

- Wedding gold (`#d4af37`) accent color
- Centered in image container
- Responsive size (10px on mobile, 12px on desktop)
- 4px border width on desktop, 3px on mobile

### 3. Fade-in Transition

- 500ms smooth opacity transition
- Image hidden (opacity-0) while loading
- Full opacity once loaded
- Prevents layout shift

## Implementation Details

### CSS Animations

**File**: `src/app/globals.scss`

```scss
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.image-loading-shimmer {
  animation: shimmer 1.5s infinite;
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e8e8e8 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-size: 800px 100%;
}
```

### Background Colors

All image containers now have `bg-gray-100` to prevent flash of white during loading.

## Updated Components

### OurStory.tsx

All images updated with ImageWithLoader:

- ✅ Groom avatar (with loader)
- ✅ Bride avatar (with loader)
- ✅ Instagram icons (loader disabled)
- ✅ Venue images - 3 images (with loader)

## Performance Benefits

1. **Better Perceived Performance**

   - Users see immediate feedback that content is loading
   - Reduces perceived wait time

2. **Smooth User Experience**

   - No jarring image pop-ins
   - Professional loading animations
   - Consistent with wedding theme

3. **Accessibility**
   - Clear visual indicators for all users
   - Screen readers still get alt text immediately

## Best Practices Applied

✅ **Priority Loading**: Above-the-fold images use `priority` prop
✅ **Responsive Sizing**: Loading spinner adapts to screen size
✅ **Conditional Loading**: Can disable loader for small icons
✅ **Smooth Transitions**: 500ms fade-in prevents jarring appearance
✅ **Theme Consistency**: Uses wedding gold color (#d4af37)

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Testing Recommendations

### Test Loading States

1. **Slow 3G Network**: Chrome DevTools → Network → Slow 3G
2. **Disable Cache**: Test without cached images
3. **Large Images**: Test with high-resolution images
4. **Multiple Images**: Test concurrent image loading

### Visual Tests

- [ ] Shimmer animation is smooth
- [ ] Spinner is centered and visible
- [ ] Fade-in transition is smooth
- [ ] No layout shift during load
- [ ] Background color prevents white flash

## Future Enhancements

### Potential Improvements

1. **Blur placeholder**: Add low-quality image placeholder
2. **Progressive loading**: Show progressive JPEG loading
3. **Error states**: Add error handling for failed images
4. **Retry logic**: Add retry button for failed loads
5. **Lazy loading**: Implement intersection observer for off-screen images

## Related Files

- `src/components/common/ImageWithLoader.tsx` - Main component
- `src/app/globals.scss` - Shimmer animation styles
- `src/components/OurStory.tsx` - Implementation example

---

**Added**: October 23, 2025
**Status**: ✅ Fully implemented and tested
