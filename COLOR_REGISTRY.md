# EvalAI Admin Dashboard - Complete Color Registry

## Overview

This document provides a comprehensive registry of all colors used throughout the EvalAI Admin Dashboard website. All colors are organized by category and include usage patterns, hex values, and implementation examples.

---

## Primary Branding Colors

### Cyan (Primary Accent)
- **Hex**: `#00F5C6`
- **HSL**: `174° 100% 48%`
- **Usage**: Primary accent, icons, active states, hover effects
- **Common Uses**:
  - Icon backgrounds (`bg-gradient-to-br from-[#00F5C6]`)
  - Active tab indicators
  - Primary gradient start point
  - Text highlights

### Blue (Primary Secondary)
- **Hex**: `#00AEEF`
- **HSL**: `217.2° 91.2% 59.8%`
- **Usage**: Secondary accent, dark gradient end, alternative highlights
- **Common Uses**:
  - Gradient end color (`to-[#00AEEF]`)
  - Secondary icon backgrounds
  - Info status color
  - Secondary accent color

### Dark Blue (Secondary)
- **Hex**: `#0066CC`
- **HSL**: (Darker blue shade)
- **Usage**: Deep gradient shadows, alternative color palette
- **Common Uses**:
  - Dark gradient backgrounds
  - Alternative security/compliance indicators

---

## Background Colors

### Primary Dark Background
- **Hex**: `#0A0F1C`
- **HSL**: `222° 47% 11%`
- **Usage**: Main page background, modal backgrounds, dark theme base
- **Properties**:
  - Very dark blue-gray
  - Provides high contrast with text
  - Used in all dark-themed components

### Glass Morphism Backgrounds

| Variant | Value | Usage | Opacity |
|---------|-------|-------|---------|
| Base | `rgba(255, 255, 255, 0.04)` | Card backgrounds | 4% |
| Hover | `rgba(255, 255, 255, 0.05)` | Hover state cards | 5% |
| Light | `rgba(255, 255, 255, 0.20)` | Highlighted backgrounds | 20% |

---

## Text & Foreground Colors

### Primary Text (White)
- **Hex**: `#FFFFFF`
- **HSL**: `210° 40% 98%`
- **Usage**: Main text content, headings, active text
- **Contrast Ratio**: AAA compliant on dark backgrounds

### Secondary Text (Muted Gray)
- **Hex**: `#B0B6C1`
- **HSL**: `217° 10% 60%`
- **Usage**: Descriptions, placeholder text, disabled text
- **Common Uses**:
  - Subtitle text
  - Placeholder in input fields (`placeholder:text-[#B0B6C1]`)
  - Secondary labels
  - Disabled state text

### Additional Muted Text
- **HSL**: `215° 20.2% 65.1%`
- **Usage**: Even more muted content
- **Use Case**: Tertiary information, helper text

---

## Border & Stroke Colors

### Standard Borders

| Variant | Class | Value | Usage |
|---------|-------|-------|-------|
| Default | `border-white/10` | 10% white opacity | Standard dividers, card borders |
| Light | `border-white/5` | 5% white opacity | Subtle dividers |
| Hover | `border-white/15` | 15% white opacity | Hover state borders |
| Focus | `border-white/20` | 20% white opacity | Focus state borders |

### Accent Borders

| Accent | Class | Usage |
|--------|-------|-------|
| Cyan (50%) | `border-[#00F5C6]/50` | Highlighted focus borders |
| Cyan (30%) | `border-[#00F5C6]/30` | Hover state accents |
| Cyan (20%) | `border-[#00F5C6]/20` | Subtle accent borders |
| Blue (50%) | `border-[#00AEEF]/50` | Alternative accent |
| Blue (30%) | `border-[#00AEEF]/30` | Alternative hover |

### Border HTML Values
```css
rgba(255, 255, 255, 0.10)  /* border-white/10 */
rgba(255, 255, 255, 0.05)  /* border-white/5 */
```

---

## Button Colors

### Primary Button
**Style**: White border on dark background

```tsx
className="border border-white/10 text-white hover:bg-white/5"
```

**Properties**:
- Border: `white/10`
- Text: `white`
- Hover: `bg-white/5`
- No gradient, minimal design

**Usage**: Secondary actions, neutral buttons

### Secondary Button (CTA)
**Style**: Cyan-to-Blue gradient background

```tsx
className="bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
```

**Properties**:
- Background: Gradient from cyan to blue
- Text: Dark background color (#0A0F1C)
- Hover: 90% opacity (subtle fade)

**Usage**: Primary actions, calls-to-action, important buttons

### Ghost Button
**Style**: Light text with subtle hover

```tsx
className="text-[#B0B6C1] hover:text-white hover:bg-white/5"
```

**Properties**:
- Text: Muted gray (#B0B6C1)
- Hover text: White
- Hover background: white/5
- Minimal visual weight

**Usage**: Tertiary actions, less important buttons

### Outline Button
**Style**: Gradient border (variant of secondary)

```tsx
className="bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90"
```

---

## Gradient & Effect Colors

### Primary Gradient (Most Common)
```
from-[#00F5C6] to-[#00AEEF]  /* Cyan → Blue */
```

**Usage**:
- Button backgrounds (secondary)
- Icon backgrounds
- Progress bars
- Highlight overlays

**Direction**: `bg-gradient-to-r` (left to right)

### Secondary Gradient (Alternative)
```
from-[#00AEEF] to-[#0066CC]  /* Blue → Dark Blue */
```

**Usage**:
- Alternative icon backgrounds
- Darker visual hierarchy
- Compliance/security indicators

### Hover Overlay Gradients
```
from-[#00F5C6]/20 to-[#00AEEF]/20  /* Semi-transparent gradient */
```

**Usage**:
- Card hover effects
- Interactive element backgrounds
- Blur effect backgrounds

### Directional Variations

| Direction | Class | Usage |
|-----------|-------|-------|
| Left to Right | `bg-gradient-to-r` | Buttons, progress bars |
| Top-Left to Bottom-Right | `bg-gradient-to-br` | Icon backgrounds, cards |
| Radial | CSS custom | Special effects |

---

## Status & Semantic Colors

### Success (Green)
- **Primary**: `#10B981`
- **Dark**: `#059669`
- **Light/Transparent**: `#10B981/20`
- **Usage**: Positive confirmations, checkmarks, active states
- **Gradient**: `from-[#10B981] to-[#059669]`

### Warning (Amber)
- **Primary**: `#F59E0B`
- **Light/Transparent**: `#F59E0B/20`
- **Usage**: Alerts, pending states, cautions
- **Contrast**: Good on dark backgrounds

### Error (Red)
- **Primary**: `#EF4444`
- **Light/Transparent**: `#EF4444/20`
- **Usage**: Errors, deletions, critical alerts
- **Accessibility**: AAA compliant

### Info (Blue)
- **Primary**: `#00AEEF`
- **Light/Transparent**: `#00AEEF/20`
- **Border**: `border-[#00AEEF]/50`
- **Usage**: Information, tooltips, helpful hints

### Active/Pending (Cyan/Amber)
- **Active Cyan**: `#00F5C6`
- **Pending Amber**: `#F59E0B`
- **Usage**: Current state indicators, in-progress items

---

## Badge & Label Colors

### Cyan Badge
```tsx
className="border-[#00F5C6]/50 text-[#00F5C6] bg-[#00F5C6]/10"
```

### Blue Badge
```tsx
className="bg-[#00AEEF]/20 text-[#00AEEF] border-[#00AEEF]/30"
```

### Gradient Badge
```tsx
className="bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]"
```

### Muted Badge
```tsx
className="bg-white/10 text-[#B0B6C1] border-white/10"
```

---

## Interactive Element Colors

### Tab States

| State | Color | Class |
|-------|-------|-------|
| Active | Cyan (#00F5C6) | `border-[#00F5C6] text-[#00F5C6]` |
| Inactive | Muted Gray (#B0B6C1) | `text-[#B0B6C1]` |

### Toggle Switch States

| State | Color | Class |
|-------|-------|-------|
| ON | Gradient | `bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]` |
| OFF | White/Gray | `bg-white/20` |

### Input Fields

| Part | Color | Class |
|------|-------|-------|
| Background | White/5 | `bg-white/5` |
| Border | White/10 | `border-white/10` |
| Focus Border | Cyan | `focus:border-[#00F5C6]` |
| Focus Ring | Cyan/20 | `focus:ring-[#00F5C6]/20 focus:ring-[3px]` |
| Placeholder | Muted Gray | `placeholder:text-[#B0B6C1]` |
| Placeholder Hover | Muted Gray/50 | `placeholder:text-[#B0B6C1]/50` |

---

## Special & Utility Colors

### Floating & Ghost Effects
- **Ghost Overlay**: `rgba(255, 255, 255, 0.02)` (2% opacity)
- **Shadow Subtle**: `rgba(0, 0, 0, 0.3)` (Dark shadow)

### Link Colors
- **Default**: `#00F5C6` (Cyan)
- **Hover**: `#00F5C6/80` (Cyan 80% opacity)

### Disabled State
- **Text**: `text-[#B0B6C1]/50` (Muted gray at 50%)
- **Background**: `bg-white/5` (Minimal)

---

## Opacity Scale Reference

| Opacity | Tailwind Class | Value | Usage |
|---------|---|-------|-------|
| 5% | `white/5` | `rgba(255, 255, 255, 0.05)` | Minimal borders |
| 10% | `white/10` | `rgba(255, 255, 255, 0.10)` | Default borders |
| 15% | `white/15` | `rgba(255, 255, 255, 0.15)` | Hover borders |
| 20% | `white/20` | `rgba(255, 255, 255, 0.20)` | Focus states |
| 50% | `/50` | 50% opacity | Badge/border accents |
| 80% | `opacity-80` | 80% opacity | Hover text links |
| 90% | `opacity-90` | 90% opacity | Button hover |

---

## Implementation Examples

### Card Component
```tsx
<div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#00F5C6]/30 transition-all">
  {/* content */}
</div>
```

**Colors Used**:
- Background: `rgba(255,255,255,0.04)` (glass effect)
- Border: `white/10` (subtle divider)
- Hover Border: `#00F5C6/30` (accent highlight)

### Button with Icon
```tsx
<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90">
  {icon}
  {text}
</button>
```

**Colors Used**:
- Background Gradient: `from-[#00F5C6] to-[#00AEEF]`
- Text: `text-[#0A0F1C]` (dark)
- Hover: `opacity-90`

### Icon with Gradient Background
```tsx
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F5C6] to-[#00AEEF] flex items-center justify-center">
  <Icon className="w-5 h-5 text-white" />
</div>
```

**Colors Used**:
- Background: Radial gradient (cyan to blue)
- Icon: White (text-white)

### Status Badge
```tsx
<span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-[#00F5C6]/50 text-[#00F5C6]">
  Active
</span>
```

**Colors Used**:
- Border: `#00F5C6/50` (50% opacity cyan)
- Text: `#00F5C6` (full cyan)

### Input Field
```tsx
<input
  className="w-full h-9 px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-[#B0B6C1]/50 focus:outline-none focus:border-[#00F5C6] transition-all"
/>
```

**Colors Used**:
- Background: `white/5`
- Border: `white/10`
- Placeholder: `#B0B6C1/50`
- Focus Border: `#00F5C6`

---

## Color Accessibility

### Contrast Ratios
- **White on Dark Background**: ✓ AAA compliant (7.5+ ratio)
- **Cyan (#00F5C6) on White**: ✓ AAA compliant
- **Muted Gray (#B0B6C1) on Dark**: ✓ AA compliant
- **All semantic colors**: ✓ WCAG AA minimum

### Color Blindness Considerations
- ✓ Not relying solely on color to convey information
- ✓ Using symbols, borders, and text labels
- ✓ High contrast between interactive states

---

## Design Tokens (HSL)

```css
:root {
  /* Background */
  --background: 222 47% 11%;      /* #0A0F1C */
  --foreground: 210 40% 98%;      /* #FFFFFF */
  
  /* Primary Colors */
  --primary: 174 100% 48%;        /* #00F5C6 */
  --primary-foreground: 222 47% 11%;
  
  /* Secondary Colors */
  --secondary: 217.2 91.2% 59.8%;  /* #00AEEF */
  --secondary-foreground: 222 47% 11%;
  
  /* Muted */
  --muted: 217 10% 60%;
  --muted-foreground: 215 20.2% 65.1%; /* #B0B6C1 */
  
  /* Destructive (Error) */
  --destructive: 0 84.2% 60.2%;   /* Red */
  --destructive-foreground: 210 40% 98%;
  
  /* Borders */
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  
  /* Accent */
  --accent: 174 100% 48%;         /* #00F5C6 */
  --accent-foreground: 222 47% 11%;
}
```

---

## Color Usage Summary Table

| Component | Primary | Secondary | Text | Background | Border |
|-----------|---------|-----------|------|------------|--------|
| **Buttons** | `#00F5C6→#00AEEF` | `white/10` | `white`/`#0A0F1C` | `transparent`/gradient | - |
| **Cards** | - | - | `white` | `rgba(255,255,255,0.04)` | `white/10` |
| **Text** | - | - | `white` | - | - |
| **Secondary Text** | - | - | `#B0B6C1` | - | - |
| **Icons** | `#00F5C6→#00AEEF` | - | `white` | gradient | - |
| **Badges** | `#00F5C6` | - | `#00F5C6` | `#00F5C6/10` | `#00F5C6/50` |
| **Input Fields** | - | - | `white` | `white/5` | `white/10` |
| **Toggle ON** | `#00F5C6→#00AEEF` | - | - | gradient | - |
| **Toggle OFF** | - | - | - | `white/20` | - |
| **Status OK** | `#10B981` | - | - | - | - |
| **Status Error** | `#EF4444` | - | - | - | - |

---

## Notes for Developers

1. **Always use Tailwind classes** when available instead of hardcoding hex values
2. **Maintain consistency** with existing button variants (primary/secondary)
3. **Use glass-morphism** pattern for card backgrounds: `bg-white/5 backdrop-blur-xl border border-white/10`
4. **Gradient direction** is typically left-to-right (`to-r`) for linear, top-left-to-bottom-right (`to-br`) for icon backgrounds
5. **Opacity layers** build hierarchy: 5% < 10% < 20% < 50% opacity
6. **Color transitions** use `transition-all` for smooth state changes
7. **Focus states** should always include visual feedback (border color, ring, background)
8. **Hover states** vary by component (opacity, background, border color)

---

## Last Updated
- **Date**: November 17, 2025
- **Version**: 1.0
- **Scope**: Complete color registry for EvalAI Admin Dashboard
