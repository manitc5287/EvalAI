# Component Color Migration Checklist

**Goal**: Migrate all components from hardcoded colors to CSS variables + color constants

## Status: IN PROGRESS
- ✅ CSS variables system created (app/colors.css)
- ✅ Color constants enhanced with getCSSVariable() helper
- ✅ Dashboard insights component migrated (1/11)
- ⏳ Remaining components: 10

---

## Priority 1: High-Impact Components

### [ ] 1. User Table Component
- **File**: `src/modules/users/components/user-table.tsx`
- **Hardcoded colors found**:
  - Avatar gradient: `from-[#00F5C6] to-[#00AEEF]`
  - Text: `#B0B6C1`
  - Border hover: `#00F5C6]/30`
  - Progress bar gradient
- **Steps**:
  1. Add import: `import { getCSSVariable, PRIMARY, TEXT, GRADIENT, BORDER } from '@/src/lib/colors';`
  2. Replace className gradients with inline styles
  3. Update text colors to use TEXT constants
  4. Test table rendering
- **Estimated time**: 15 minutes

### [ ] 2. Organization Setup Page
- **File**: `src/modules/organization-setup/pages/organization-setup-page.tsx`
- **Hardcoded colors found**: 40+ instances
  - Gradients: `from-[#00F5C6] to-[#00AEEF]`
  - Text: `#B0B6C1`, `#00F5C6`
  - Step progress bar
  - Color input fields with default hex values
- **Steps**:
  1. Add import: `import { getCSSVariable, PRIMARY, TEXT, BACKGROUND, BORDER } from '@/src/lib/colors';`
  2. Create color variable: `const chartCyan = getCSSVariable('--primary-cyan');`
  3. Replace all gradient className with inline styles
  4. Update step progress colors
  5. Update form labels and placeholders
- **Estimated time**: 30 minutes

### [ ] 3. Reports Page
- **File**: `src/modules/reports/pages/reports-page.tsx`
- **Hardcoded colors found**: 30+ instances
  - Chart colors: `#00F5C6`, `#00AEEF`, `#A855F7`, `#F59E0B`
  - Text colors: `#B0B6C1`
  - Gradient backgrounds
  - Card borders and hovers
- **Steps**:
  1. Add import: `import { getCSSVariable, PRIMARY, TEXT, STATUS, BORDER } from '@/src/lib/colors';`
  2. Create color variables for all chart colors
  3. Update Recharts props with getCSSVariable() values
  4. Replace className gradients with inline styles
  5. Update card backgrounds and borders
- **Estimated time**: 35 minutes

---

## Priority 2: Medium-Impact Components

### [ ] 4. Security Compliance Page
- **File**: `src/modules/security-compliance/pages/security-compliance-page.tsx`
- **Hardcoded colors found**: 15+ instances
  - Icon backgrounds: `from-[#00F5C6] to-[#00AEEF]`
  - Text: `#B0B6C1`
  - Toggle switches, badges
- **Steps**:
  1. Add import
  2. Replace gradients with inline styles
  3. Update text colors
- **Estimated time**: 15 minutes

### [ ] 5. Dashboard Page
- **File**: `src/modules/dashboard/pages/dashboard-page.tsx`
- **Hardcoded colors found**: 15+ instances
  - Icon colors in stat cards
  - Gradient backgrounds
- **Steps**: Similar to dashboard-insights (already done)
- **Estimated time**: 20 minutes

### [ ] 6. KPIs Module Components
- **Files**:
  - `src/modules/kpis/components/*.tsx` (multiple files)
  - Card backgrounds, badges, status colors
- **Estimated time**: 25 minutes total

---

## Priority 3: Lower-Impact Components

### [ ] 7. Departments Module
- **File**: `src/modules/departments/components/*.tsx`
- **Estimated time**: 15 minutes

### [ ] 8. Roles Module
- **File**: `src/modules/roles/components/*.tsx`
- **Estimated time**: 15 minutes

### [ ] 9. Assessments Module
- **File**: `src/modules/assessments/components/*.tsx`
- **Estimated time**: 15 minutes

### [ ] 10. Billing Tokens Module
- **File**: `src/modules/billing-tokens/components/*.tsx`
- **Estimated time**: 15 minutes

### [ ] 11. Integrations Module
- **File**: `src/modules/integrations/components/*.tsx`
- **Estimated time**: 15 minutes

---

## Template for Component Migration

Use this template when migrating a component:

```tsx
'use client';

import { getCSSVariable, PRIMARY, TEXT, BACKGROUND, BORDER, STATUS } from '@/src/lib/colors';

export function YourComponent() {
  // Get CSS variables for dynamic colors (charts, etc.)
  const chartTextColor = getCSSVariable('--text-secondary');
  const chartPrimaryColor = getCSSVariable('--primary-cyan');
  
  return (
    <div 
      style={{ 
        backgroundColor: BACKGROUND.glass,
        color: TEXT.primary 
      }}
    >
      {/* Use inline styles for colors */}
      <h1 style={{ color: TEXT.primary }}>Title</h1>
      
      {/* Use color constants for props */}
      <Chart stroke={chartPrimaryColor} />
      
      {/* Use CSS variables in className */}
      <div className="border" style={{ borderColor: BORDER.default }}>
        Content
      </div>
    </div>
  );
}
```

---

## Git Workflow

For each component migration:

```bash
# 1. Start working on component
git checkout -b migrate/[module-name]-colors

# 2. Update component file
# 3. Test locally
npm run dev

# 4. Build and verify
npm run build

# 5. Commit changes
git add src/modules/[module-name]/
git commit -m "chore: migrate [module-name] to CSS variables

- Removed hardcoded hex color values
- Added imports from src/lib/colors
- Use getCSSVariable() for chart colors
- Use color constants for inline styles
- All colors now centralized in app/colors.css"

# 6. Push and create PR
git push origin migrate/[module-name]-colors
```

---

## Verification Checklist

After migrating each component:

- [ ] No hardcoded hex values in component code
- [ ] All colors imported from src/lib/colors
- [ ] Build passes: `npm run build`
- [ ] TypeScript errors: 0
- [ ] Component renders correctly
- [ ] Colors match design system
- [ ] Responsive design maintained
- [ ] Charts display with correct colors
- [ ] Git commit created

---

## Color Reference Quick Lookup

**Primary Colors**:
- Cyan: `PRIMARY.cyan` or `getCSSVariable('--primary-cyan')` → `#00F5C6`
- Blue: `PRIMARY.blue` or `getCSSVariable('--primary-blue')` → `#00AEEF`

**Text Colors**:
- Primary: `TEXT.primary` → `#FFFFFF`
- Secondary: `TEXT.secondary` → `#B0B6C1`

**Status Colors**:
- Success: `STATUS.success` → `#10B981`
- Error: `STATUS.error` → `#EF4444`
- Warning: `STATUS.warning` → `#F59E0B`
- Info: `STATUS.info` → `#00AEEF`

**Backgrounds**:
- Dark: `BACKGROUND.dark` → `#0A0F1C`
- Glass: `BACKGROUND.glass` → `rgba(255, 255, 255, 0.04)`

**Borders**:
- Default: `BORDER.default` → `rgba(255, 255, 255, 0.1)`
- Hover: `BORDER.hover` → `rgba(0, 245, 198, 0.3)`

---

## Progress Summary

| Component | Status | Notes |
|-----------|--------|-------|
| dashboard-insights | ✅ Done | Fully migrated, all colors use constants |
| user-table | ⏳ Not Started | 40+ hardcoded colors |
| organization-setup | ⏳ Not Started | 40+ hardcoded colors |
| reports | ⏳ Not Started | 30+ hardcoded colors |
| security-compliance | ⏳ Not Started | 15+ hardcoded colors |
| dashboard (page) | ⏳ Not Started | 15+ hardcoded colors |
| kpis (components) | ⏳ Not Started | Multiple files |
| departments | ⏳ Not Started | Multiple files |
| roles | ⏳ Not Started | Multiple files |
| assessments | ⏳ Not Started | Multiple files |
| billing-tokens | ⏳ Not Started | Multiple files |

**Total Components**: 11
**Completed**: 1 (9%)
**In Progress**: 0
**Not Started**: 10 (91%)

**Estimated Total Time**: 3-4 hours

---

**Last Updated**: November 17, 2025
**System**: CSS Variables + TypeScript Constants
**Build Status**: ✅ Passing
