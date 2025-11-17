# Color Constants Usage Guide

## Overview

All colors used in the EvalAI Admin Dashboard are now centralized in `src/lib/colors.ts`. This eliminates hardcoded color values and provides a single source of truth for the entire color system.

## Quick Start

### Import the Color Constants

```typescript
import { 
  PRIMARY, 
  BACKGROUND, 
  TEXT, 
  STATUS,
  TAILWIND_CLASSES,
  getButtonClass,
  getCardClass,
  getStatusColor 
} from '@/src/lib/colors';
```

## Color Categories

### 1. Primary Colors

```typescript
import { PRIMARY } from '@/src/lib/colors';

PRIMARY.cyan      // '#00F5C6'
PRIMARY.blue      // '#00AEEF'
PRIMARY.darkBlue  // '#0066CC'
```

**Usage in Tailwind:**
```tsx
className="bg-[#00F5C6]"  // Use the hex value directly
```

**Usage in inline styles:**
```tsx
<div style={{ backgroundColor: PRIMARY.cyan }}>Content</div>
```

### 2. Background Colors

```typescript
import { BACKGROUND } from '@/src/lib/colors';

BACKGROUND.dark       // '#0A0F1C' - Main page background
BACKGROUND.glass      // 'rgba(255, 255, 255, 0.04)' - Glass card effect
BACKGROUND.overlay5   // 'rgba(255, 255, 255, 0.05)' - Subtle overlay
BACKGROUND.overlay20  // 'rgba(255, 255, 255, 0.20)' - Strong overlay
```

### 3. Text Colors

```typescript
import { TEXT } from '@/src/lib/colors';

TEXT.primary    // '#FFFFFF' - Main text
TEXT.secondary  // '#B0B6C1' - Muted gray text
TEXT.muted      // '#999999' - Very muted text
```

### 4. Border Colors

```typescript
import { BORDER } from '@/src/lib/colors';

BORDER.light    // 'rgba(255, 255, 255, 0.05)'  - Very subtle
BORDER.default  // 'rgba(255, 255, 255, 0.10)'  - Standard border
BORDER.hover    // 'rgba(255, 255, 255, 0.15)'  - Hover state
BORDER.focus    // 'rgba(255, 255, 255, 0.20)'  - Focus state
```

### 5. Status Colors

```typescript
import { STATUS } from '@/src/lib/colors';

STATUS.success    // '#10B981' - Green
STATUS.error      // '#EF4444' - Red
STATUS.warning    // '#F59E0B' - Amber
STATUS.info       // '#00AEEF' - Blue
STATUS.active     // '#00F5C6' - Cyan
STATUS.inactive   // '#B0B6C1' - Gray
```

## Pre-built Tailwind Classes

The `TAILWIND_CLASSES` object contains pre-built Tailwind class strings that work perfectly with the arbitrary value syntax.

### Button Classes

```typescript
import { TAILWIND_CLASSES } from '@/src/lib/colors';

TAILWIND_CLASSES.buttons.primary
// 'border border-white/10 text-white hover:bg-white/5'

TAILWIND_CLASSES.buttons.secondary
// 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90'

TAILWIND_CLASSES.buttons.ghost
// 'text-[#B0B6C1] hover:text-white hover:bg-white/5'
```

**Usage:**
```tsx
<button className={TAILWIND_CLASSES.buttons.secondary}>
  Click me
</button>
```

### Card Classes

```typescript
TAILWIND_CLASSES.card.base
// 'bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10'

TAILWIND_CLASSES.card.hover
// 'hover:border-[#00F5C6]/30 transition-all'
```

**Usage:**
```tsx
<div className={`${TAILWIND_CLASSES.card.base} ${TAILWIND_CLASSES.card.hover}`}>
  Content
</div>
```

### Input Classes

```typescript
TAILWIND_CLASSES.input.base
// 'bg-white/5 border border-white/10 rounded-md text-white'

TAILWIND_CLASSES.input.focus
// 'focus:border-[#00F5C6] focus:ring-[#00F5C6]/20 focus:ring-[3px]'

TAILWIND_CLASSES.input.placeholder
// 'placeholder:text-[#B0B6C1]'
```

**Usage:**
```tsx
<input 
  className={`${TAILWIND_CLASSES.input.base} ${TAILWIND_CLASSES.input.focus} ${TAILWIND_CLASSES.input.placeholder}`}
  placeholder="Search..."
/>
```

### Status Classes

```typescript
TAILWIND_CLASSES.status.success  // 'text-[#10B981]'
TAILWIND_CLASSES.status.error    // 'text-[#EF4444]'
TAILWIND_CLASSES.status.warning  // 'text-[#F59E0B]'
TAILWIND_CLASSES.status.info     // 'text-[#00AEEF]'
```

### Progress Bar Classes

```typescript
TAILWIND_CLASSES.progress.bar  // 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]'
TAILWIND_CLASSES.progress.bg   // 'bg-[#00F5C6]/20'
```

### Icon Background Classes

```typescript
TAILWIND_CLASSES.iconBg.primary
// 'bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]'

TAILWIND_CLASSES.iconBg.alternative
// 'bg-gradient-to-br from-[#00AEEF] to-[#0066CC]'
```

### Badge Classes

```typescript
TAILWIND_CLASSES.badge.cyan      // Cyan accent badge
TAILWIND_CLASSES.badge.blue      // Blue badge
TAILWIND_CLASSES.badge.gradient  // Gradient badge
TAILWIND_CLASSES.badge.muted     // Muted badge
```

## Helper Functions

### getButtonClass()

Get button Tailwind classes by variant.

```typescript
import { getButtonClass } from '@/src/lib/colors';

className={getButtonClass('primary')}
className={getButtonClass('secondary')}
className={getButtonClass('ghost')}
```

### getCardClass()

Get card Tailwind classes with optional hover state.

```typescript
import { getCardClass } from '@/src/lib/colors';

className={getCardClass()}          // With hover
className={getCardClass(false)}     // Without hover
```

### getTextClass()

Get text color classes.

```typescript
import { getTextClass } from '@/src/lib/colors';

className={getTextClass('primary')}    // White text
className={getTextClass('secondary')}  // Muted gray
className={getTextClass('muted')}      // Very muted
```

### getStatusClass()

Get status color classes.

```typescript
import { getStatusClass } from '@/src/lib/colors';

className={getStatusClass('success')}
className={getStatusClass('error')}
className={getStatusClass('warning')}
className={getStatusClass('info')}
```

### getStatusColor()

Get status color hex value.

```typescript
import { getStatusColor } from '@/src/lib/colors';

const color = getStatusColor('success');  // '#10B981'
```

### withOpacity()

Apply opacity to any hex color.

```typescript
import { withOpacity, PRIMARY } from '@/src/lib/colors';

const cyanWithOpacity = withOpacity(PRIMARY.cyan, 0.5);
// Returns: 'rgba(0, 245, 198, 0.5)'
```

## Practical Examples

### Example 1: Card Component

```tsx
import { TAILWIND_CLASSES } from '@/src/lib/colors';

export function Card({ children }) {
  return (
    <div className={`${TAILWIND_CLASSES.card.base} ${TAILWIND_CLASSES.card.hover}`}>
      {children}
    </div>
  );
}
```

### Example 2: Button Component

```tsx
import { TAILWIND_CLASSES } from '@/src/lib/colors';

export function CustomButton({ variant, children }) {
  const buttonClass = TAILWIND_CLASSES.buttons[variant] || TAILWIND_CLASSES.buttons.primary;
  
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}
```

### Example 3: Input with Focus State

```tsx
import { TAILWIND_CLASSES } from '@/src/lib/colors';

export function CustomInput() {
  return (
    <input
      className={`
        ${TAILWIND_CLASSES.input.base}
        ${TAILWIND_CLASSES.input.focus}
        ${TAILWIND_CLASSES.input.placeholder}
      `}
      placeholder="Enter text..."
    />
  );
}
```

### Example 4: Status Badge

```tsx
import { STATUS, TAILWIND_CLASSES, getStatusClass } from '@/src/lib/colors';

export function StatusBadge({ status, label }) {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded ${getStatusClass(status)}`}>
      {label}
    </span>
  );
}
```

### Example 5: Icon with Gradient

```tsx
import { TAILWIND_CLASSES } from '@/src/lib/colors';
import { CheckCircle } from 'lucide-react';

export function SuccessIcon() {
  return (
    <div className={`w-10 h-10 rounded-lg ${TAILWIND_CLASSES.iconBg.primary} flex items-center justify-center`}>
      <CheckCircle className="w-5 h-5 text-white" />
    </div>
  );
}
```

## CSS Variables

For use in CSS files or global styles:

```typescript
import { cssVariables } from '@/src/lib/colors';

// Add to globals.css
// :root {
//   --color-primary-cyan: #00F5C6;
//   --color-primary-blue: #00AEEF;
//   --color-bg-dark: #0A0F1C;
//   ...
// }
```

Usage in CSS:
```css
.myClass {
  background-color: var(--color-primary-cyan);
  color: var(--color-text-primary);
}
```

## Migration Guide

### Before (Hardcoded)
```tsx
className="bg-[#00F5C6] text-white border border-[#00F5C6]/50"
```

### After (Using Constants)
```tsx
import { PRIMARY, TEXT, TAILWIND_CLASSES } from '@/src/lib/colors';

className={`bg-[${PRIMARY.cyan}] ${TEXT.primary} border border-[${PRIMARY.cyan}]/50`}

// Or better:
// Use pre-built classes from TAILWIND_CLASSES
```

## Best Practices

1. **Always use constants** - Never hardcode color values
2. **Use pre-built classes** - The `TAILWIND_CLASSES` object has common patterns
3. **Import at top** - Import color constants at the beginning of your file
4. **Use helpers** - Functions like `getButtonClass()` reduce duplication
5. **For inline styles** - Use the direct hex/color values
6. **For Tailwind** - Use pre-built class strings or direct hex in arbitrary values

## File Structure

```
src/lib/colors.ts
├── PRIMARY (Branding colors)
├── BACKGROUND (Background colors)
├── TEXT (Text colors)
├── BORDER (Border colors)
├── STATUS (Status colors)
├── GRADIENTS (Gradient values)
├── OPACITY (Opacity values)
├── TAILWIND_CLASSES (Pre-built Tailwind strings)
├── Helper Functions
└── CSS Variables
```

## Color Reference Table

| Category | Key | Value | Use Case |
|----------|-----|-------|----------|
| Primary | cyan | #00F5C6 | Primary accent, icons, active states |
| Primary | blue | #00AEEF | Secondary accent, gradients |
| Background | dark | #0A0F1C | Page background |
| Text | primary | #FFFFFF | Main text content |
| Text | secondary | #B0B6C1 | Muted descriptions |
| Status | success | #10B981 | Success messages |
| Status | error | #EF4444 | Error messages |
| Status | warning | #F59E0B | Warning messages |
| Status | info | #00AEEF | Info messages |

## When to Update Colors

If you need to change a color across the entire application:

1. Update the value in `src/lib/colors.ts`
2. All components using the constant will automatically update
3. No need to search and replace across files
4. Single source of truth for all colors

---

**Last Updated**: November 17, 2025
**Version**: 1.0
**Status**: Active
