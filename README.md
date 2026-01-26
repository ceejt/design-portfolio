# design-portfolio

Subset of portfolio website---design portfolio

## Overview

A clean, animated portfolio page with frosted glass flip card effects built with React and Tailwind CSS.

## Design Features

- **Frosted Glass Effect**: Cards start with a blurred, frosted glass appearance
- **Flip Animation**: On hover, cards flip 180° to reveal clear design images
- **Smooth Transitions**: 0.7s custom animation for professional feel
- **Staggered Entry**: Cards fade in with sequential delays
- **Responsive Grid**: Tailwind's responsive grid system
- **Tailwind CSS**: Utility-first styling with custom animations

## File Structure

```
portfolio-project/
├── public/
│   └── designs/              # Place your design images here
│       ├── design1.jpg
│       ├── design2.jpg
│       └── ...
├── src/
│   ├── App.jsx              # Main app component
│   ├── portfolio.jsx        # Portfolio component (provided)
│   ├── index.css            # Tailwind directives + custom animations
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── README.md
```

### Colors

- Background: `bg-[#28272A]`
- Card Background: `bg-[#1f1e21]`
- Card Back: `bg-[rgba(60,60,65,0.4)]`

### Animation Timing

- Flip duration: `duration-700` (0.7s)
- Card stagger delay: `${index * 0.1}s` in style prop
- Fade animations: Defined in `index.css`

### Grid Layout

Uses Tailwind responsive grid:

```jsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
```

Adjust breakpoints and columns as needed.

## Tailwind Utilities Used

- Responsive grid system
- Backdrop blur effects
- Custom 3D transforms
- Gradient utilities
- Spacing and sizing
- Custom animations in `@layer utilities`

## Browser Support

- Modern browsers with CSS Grid support
- Transform 3D and backdrop-filter support required
- Tailwind CSS v3+ compatible

## Performance Notes

- Uses CSS transforms for smooth 60fps animations
- Tailwind's JIT compiler for optimal CSS bundle
- Minimal re-renders with useState for flip state
- Efficient utility classes (~150 lines of JSX)
