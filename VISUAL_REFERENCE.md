# 🎨 VISUAL DESIGN REFERENCE
## Philippine Airlines Homepage - Component Guide

This document provides visual descriptions of each component to help you understand the design.

---

## 📐 PAGE LAYOUT OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────┐
│                         NAVIGATION HEADER                           │
│  Logo    Book  Manage  Check-in  Status  Experience    EN|PH  Login│
│  [Book a Flight] [Manage Booking] [Flight Status]                  │
└─────────────────────────────────────────────────────────────────────┘
│                                                                     │
│                      HERO SECTION (800px tall)                      │
│                   Background: Airplane/Travel Image                 │
│                                                                     │
│              ┌─────────────────────────────────┐                   │
│              │   BOOKING WIDGET (centered)     │                   │
│              │  ○ Round Trip  ○ One Way        │                   │
│              │  From: [______]  To: [______]   │                   │
│              │  Depart: [___]  Return: [___]   │                   │
│              │  [   SEARCH FLIGHTS   ]         │                   │
│              └─────────────────────────────────┘                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
│                                                                     │
│                     PROMOTIONAL SECTION                             │
│   ┌─────────┐      ┌─────────┐      ┌─────────┐                  │
│   │ Image   │      │ Image   │      │ Image   │                  │
│   │ Title   │      │ Title   │      │ Title   │                  │
│   │ Desc    │      │ Desc    │      │ Desc    │                  │
│   │ [Link]  │      │ [Link]  │      │ [Link]  │                  │
│   └─────────┘      └─────────┘      └─────────┘                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
│                  FEATURED DESTINATIONS                              │
│        Explore Our Destinations                                     │
│   Discover amazing places with Philippine Airlines                  │
│                                                                     │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐                          │
│  │Img │  │Img │  │Img │  │Img │  │Img │                          │
│  │City│  │City│  │City│  │City│  │City│                          │
│  │₱XX │  │₱XX │  │₱XX │  │₱XX │  │₱XX │                          │
│  │Book│  │Book│  │Book│  │Book│  │Book│                          │
│  └────┘  └────┘  └────┘  └────┘  └────┘                          │
└─────────────────────────────────────────────────────────────────────┘
│                      SERVICES SECTION                               │
│                                                                     │
│    [Icon]      [Icon]       [Icon]       [Icon]                    │
│    Title       Title        Title        Title                     │
│    Desc        Desc         Desc         Desc                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
│                          FOOTER                                     │
│  About PAL  │ Travel Info │ Support │ Mabuhay │ Follow Us          │
│  - Link     │ - Link      │ - Link  │ - Link  │ [f][t][i][y]      │
│  - Link     │ - Link      │ - Link  │ - Link  │                   │
│                                                                     │
│  © 2024 Philippine Airlines. All rights reserved.                  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 COLOR USAGE BY SECTION

### Navigation Header
```
Background: White (#FFFFFF)
Text: Black (#1A1A1A)
Hover Text: Primary Blue (#003087)
Active Tab: Primary Blue background with White text
Border: Light Gray (#E0E0E0)
Login Button: Primary Blue background
```

### Hero Section
```
Background: Dark overlay on image
Booking Widget:
  - Background: White (#FFFFFF)
  - Primary Button: Primary Blue (#003087)
  - Hover: Secondary Blue (#0066CC)
  - Input Borders: Border Gray (#E0E0E0)
  - Icons: Gray Text (#666666)
```

### Promotional Cards
```
Card Background: White (#FFFFFF)
Text: Black (#1A1A1A)
Links: Primary Blue (#003087)
Hover: Lifts up with shadow
```

### Destinations
```
Section Background: Light Gray (#F5F5F5)
Card Background: White (#FFFFFF)
Price Text: Primary Blue (#003087)
Button: Primary Blue background
Hover: Card lifts with shadow
```

### Services
```
Background: White (#FFFFFF)
Icon Circle: Primary Blue (#003087)
Icon Color: White (#FFFFFF)
Text: Black (#1A1A1A)
Description: Gray Text (#666666)
```

### Footer
```
Background: Primary Blue (#003087)
Text: White (#FFFFFF)
Links: White with 80% opacity
Hover: Full white opacity
```

---

## 📏 SPACING & DIMENSIONS

### Navigation
```
Height: 80px (desktop), 60px (mobile)
Padding: 16px 24px
Logo Height: 40px
Nav Link Gap: 32px
```

### Hero Section
```
Min Height: 600px
Booking Widget:
  - Max Width: 900px
  - Padding: 32px
  - Border Radius: 16px
  - Shadow: 0 8px 24px rgba(0,0,0,0.2)
```

### Form Inputs
```
Height: 48px
Padding: 16px 16px 16px 48px (with icon)
Border Radius: 8px
Icon Size: 20x20px
```

### Cards
```
Promo Cards:
  - Image Height: 250px
  - Content Padding: 24px
  - Border Radius: 12px
  
Destination Cards:
  - Image Height: 220px
  - Content Padding: 24px
  - Border Radius: 12px
  
Service Cards:
  - Icon Circle: 64x64px
  - Icon Size: 32x32px
  - Padding: 32px
```

### Buttons
```
Primary Button:
  - Height: 48px
  - Padding: 16px 32px
  - Border Radius: 8px
  - Font Size: 16px
  - Font Weight: 600

Secondary Button:
  - Same dimensions
  - Border: 2px solid Primary Blue
```

---

## 🎭 ANIMATION DETAILS

### Hover Effects

**Navigation Links:**
```
Effect: Underline slides in from left
Duration: 0.3s
Color: Primary Blue
```

**Cards (All Types):**
```
Transform: translateY(-8px)
Shadow: Increases from sm to md
Duration: 0.3s ease
```

**Buttons:**
```
Primary: Slight lift (translateY(-2px))
Shadow: Increases
Background: Darkens to Secondary Blue
Duration: 0.3s
```

**Images:**
```
Scale: Slight zoom (1.05) on parent hover
Duration: 0.4s ease
Overflow: Hidden on parent
```

### Scroll Animations

**Sticky Header:**
```
Triggers at: 100px scroll
Effect: Adds shadow
Transition: 0.3s ease
```

**Section Fade-in:**
```
Initial: opacity: 0, translateY(20px)
Final: opacity: 1, translateY(0)
Duration: 0.6s ease
Trigger: IntersectionObserver at 10% visibility
```

### Form Interactions

**Input Focus:**
```
Border: Changes to Primary Blue
Shadow: 0 0 0 3px rgba(0, 48, 135, 0.1)
Transition: 0.3s ease
```

**Swap Button:**
```
Rotation: 180deg on click
Duration: 0.3s
Easing: ease-in-out
```

---

## 📱 RESPONSIVE BEHAVIOR

### Desktop (> 1024px)
```
Container: Max-width 1280px, centered
Navigation: Full horizontal menu
Booking Form: 2-column grid
Promo Cards: 3 columns
Destinations: 5 columns (auto-fit)
Services: 4 columns
Footer: 5 columns
```

### Tablet (768px - 1024px)
```
Container: Full width with padding
Navigation: Hamburger menu appears
Booking Form: 2 columns
Promo Cards: 2 columns
Destinations: 2-3 columns
Services: 2 columns
Footer: 3 columns
```

### Mobile (< 768px)
```
Container: Full width, reduced padding
Navigation: Hamburger menu
Booking Form: 1 column, stacked
Swap Button: Hidden
Promo Cards: 1 column
Destinations: 1 column
Services: 1 column
Footer: 1 column
All text sizes: Slightly reduced
Touch targets: Minimum 44x44px
```

---

## 🎯 KEY VISUAL ELEMENTS

### Typography Hierarchy

```
H1 (Hero Title):
  Size: 32px (mobile) / 36px (desktop)
  Weight: 700
  Color: Primary Blue
  Line Height: 1.2

H2 (Section Headers):
  Size: 28px (mobile) / 36px (desktop)
  Weight: 700
  Color: Black
  Line Height: 1.2

H3 (Card Titles):
  Size: 18px-22px
  Weight: 700
  Color: Black
  Line Height: 1.3

Body Text:
  Size: 14px-16px
  Weight: 400
  Color: Black / Gray Text
  Line Height: 1.6

Links:
  Size: 14px
  Weight: 600
  Color: Primary Blue
  Hover: Secondary Blue
```

### Icon Style
```
Type: Outline/Stroke style
Stroke Width: 2px
Size: 20px (small), 32px (large)
Color: Matches context (blue, white, gray)
```

### Shadows
```
Small (cards): 0 2px 4px rgba(0,0,0,0.1)
Medium (hover): 0 4px 12px rgba(0,0,0,0.15)
Large (modal): 0 8px 24px rgba(0,0,0,0.2)
```

### Border Radius
```
Small: 4px (inputs)
Medium: 8px (buttons)
Large: 12px (cards)
Extra Large: 16px (booking widget)
Circle: 50% (icons, social)
```

---

## 🖼️ IMAGE GUIDELINES

### Hero Background
```
Aspect Ratio: 21:9 or 16:9
Focal Point: Center
Overlay: Linear gradient (rgba(0,48,135,0.4) to rgba(0,0,0,0.6))
Position: Center center
Size: Cover
```

### Promotional Images
```
Aspect Ratio: 8:5 (800x500)
Treatment: Slight overlay on hover
Object Fit: Cover
```

### Destination Images
```
Aspect Ratio: 3:2 (600x400)
Treatment: Slight zoom on hover
Object Fit: Cover
```

### Logo
```
Format: SVG (preferred) or PNG
Background: Transparent
Max Height: 40px
Width: Auto
```

---

## ✨ SPECIAL EFFECTS

### Glass Morphism (Booking Widget)
```
Background: White with slight transparency
Backdrop Filter: Blur (if supported)
Shadow: Strong shadow for depth
Border: Subtle border
```

### Gradient Overlays
```
Hero: Linear gradient top to bottom
Direction: 180deg (top to bottom)
Colors: Primary blue (transparent) to black (60%)
```

### Smooth Transitions
```
Default: all 0.3s ease
Hover States: 0.3s ease
Scroll: 0.6s ease-out
Page Load: 0.6s ease
```

---

## 🎨 DESIGN TOKENS

```css
/* These are already in your styles.css as CSS variables */

:root {
  /* Colors */
  --primary-blue: #003087;
  --secondary-blue: #0066CC;
  --accent-gold: #FFB81C;
  --white: #FFFFFF;
  --black: #1A1A1A;
  --gray-text: #666666;
  --light-gray: #F5F5F5;
  --border-gray: #E0E0E0;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  
  /* Typography */
  --font-family: 'Inter', sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

---

## 📊 COMPONENT CHECKLIST

Use this to verify your implementation:

### Header ✅
- [ ] Logo on left, clickable
- [ ] Navigation links centered/right
- [ ] Language selector visible
- [ ] Login button styled
- [ ] Mobile hamburger menu
- [ ] Sticky on scroll
- [ ] Tab navigation below header

### Hero ✅
- [ ] Full-width background image
- [ ] Dark overlay
- [ ] Centered booking widget
- [ ] White card with shadow
- [ ] Trip type radio buttons
- [ ] From/To inputs with icons
- [ ] Date pickers
- [ ] Passenger dropdown
- [ ] Cabin class dropdown
- [ ] Swap button (desktop only)
- [ ] Search button (prominent)

### Promos ✅
- [ ] 3 cards in row (desktop)
- [ ] Images at top
- [ ] Title, description, link
- [ ] Hover lift effect
- [ ] Responsive to 1 column (mobile)

### Destinations ✅
- [ ] Section header with title
- [ ] 5 cards (auto-fit grid)
- [ ] City images
- [ ] City names
- [ ] Prices in blue
- [ ] Book buttons
- [ ] Hover effects

### Services ✅
- [ ] 4 cards in row
- [ ] Circular icon backgrounds
- [ ] Service titles
- [ ] Descriptions
- [ ] Hover background change

### Footer ✅
- [ ] Blue background
- [ ] 5 columns of links
- [ ] Social media icons
- [ ] Copyright text
- [ ] Legal links
- [ ] Responsive columns

---

This visual reference should help you understand exactly how each component should look and behave!
