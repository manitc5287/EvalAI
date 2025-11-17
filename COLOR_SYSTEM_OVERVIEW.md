# Project File Structure - Color Management

## Color Files Overview

This project has two color-related files with different purposes:

### 1. `src/lib/colors.ts` - **ACTIVE COLOR CONSTANTS** ✅
**Purpose**: Contains all actual color values and helper functions used throughout the application.

**What to use**:
- Import color constants in your components
- Use pre-built Tailwind class strings
- Use helper functions for dynamic colors
- Single source of truth for all colors

**Key Exports**:
```typescript
export { 
  PRIMARY, 
  BACKGROUND, 
  TEXT, 
  BORDER, 
  STATUS,
  TAILWIND_CLASSES,
  getButtonClass,
  getCardClass,
  getStatusColor,
  withOpacity,
  cssVariables
}
```

**Example Usage**:
```tsx
import { PRIMARY, TAILWIND_CLASSES } from '@/src/lib/colors';

<button className={TAILWIND_CLASSES.buttons.secondary}>
  Click me
</button>
```

---

### 2. `COLOR_REGISTRY.md` - **REFERENCE DOCUMENTATION** 📖
**Purpose**: Comprehensive documentation of all colors used in the design system.

**What it contains**:
- Visual explanations of each color
- Usage patterns and best practices
- Design tokens (HSL values)
- Accessibility compliance notes
- Implementation examples
- Designer reference

**When to use**:
- Design system documentation
- Brand color reference
- Understanding color hierarchy
- Designer handoff documents

---

### 3. `COLOR_CONSTANTS_GUIDE.md` - **DEVELOPER GUIDE** 🛠️
**Purpose**: Practical guide for developers on how to use color constants in code.

**What it contains**:
- How to import color constants
- All available constants explained
- Pre-built Tailwind classes
- Helper function documentation
- Practical code examples
- Migration guide from hardcoded colors

**When to use**:
- Learn how to use color constants
- Find the right color for a component
- Understand helper functions
- Migrate existing hardcoded colors

---

## File Purposes Summary

| File | Purpose | Audience | Usage |
|------|---------|----------|-------|
| `src/lib/colors.ts` | Active color constants and logic | Developers | Import and use in code |
| `COLOR_REGISTRY.md` | Design system documentation | Designers, Developers | Reference for color meanings |
| `COLOR_CONSTANTS_GUIDE.md` | Developer implementation guide | Developers | Learn how to use constants |

---

## How to Use Each File

### When Developing a Component

1. **Open** `src/lib/colors.ts`
2. **Import** the colors/classes you need
3. **Use** the constants in your component
4. **Reference** `COLOR_CONSTANTS_GUIDE.md` for examples

### When Understanding the Design System

1. **Read** `COLOR_REGISTRY.md` for comprehensive color meanings
2. **View** hex values and usage patterns
3. **Check** accessibility compliance
4. **Review** design tokens

### When Migrating Old Code

1. **Find** hardcoded color values in your file
2. **Look up** the equivalent in `src/lib/colors.ts`
3. **Import** the color constant or pre-built class
4. **Replace** hardcoded values with constants

### When Changing a Color Site-Wide

1. **Open** `src/lib/colors.ts`
2. **Update** the constant value
3. **All components** using that constant automatically update
4. **No need** to search and replace across files

---

## Quick Reference

### Locations
```
src/lib/colors.ts                    # ← Use this in code
COLOR_REGISTRY.md                    # ← Reference for meanings
COLOR_CONSTANTS_GUIDE.md             # ← Learn how to use
```

### Most Used Color Constants

```typescript
// Primary colors
PRIMARY.cyan      // #00F5C6
PRIMARY.blue      // #00AEEF

// Text
TEXT.primary      // #FFFFFF (white)
TEXT.secondary    // #B0B6C1 (muted gray)

// Pre-built classes
TAILWIND_CLASSES.buttons.secondary
TAILWIND_CLASSES.card.base
TAILWIND_CLASSES.input.base

// Helpers
getButtonClass(variant)
getCardClass(includeHover)
getStatusColor(status)
```

---

## File Maintenance

### When to Update `src/lib/colors.ts`
- Adding a new color to the system
- Changing an existing color value
- Adding new pre-built Tailwind classes
- Creating new helper functions

### When to Update `COLOR_REGISTRY.md`
- Documenting new colors
- Updating usage patterns
- Improving design system explanation
- Adding new examples

### When to Update `COLOR_CONSTANTS_GUIDE.md`
- Adding new helper functions
- Showing new usage patterns
- Clarifying existing concepts
- Adding code examples

---

## Version Control

Both `colors.ts` and documentation files should be committed to git:

```bash
git add src/lib/colors.ts
git add COLOR_REGISTRY.md
git add COLOR_CONSTANTS_GUIDE.md
git commit -m "chore: update color constants and documentation"
```

---

**Last Updated**: November 17, 2025
**Status**: Active and Maintained
