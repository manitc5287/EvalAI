# Naming Conventions - Shared Components

## Update Summary (November 17, 2025)

### Component Files - Now Following PascalCase ✅

All component files in `/src/shared/components/` have been renamed from kebab-case to PascalCase to follow React/TypeScript naming conventions.

**File Renames:**
- `form-modal.tsx` → `FormModal.tsx`
- `status-badge.tsx` → `StatusBadge.tsx`
- `actions-dropdown.tsx` → `ActionsDropdown.tsx`
- `search-bar.tsx` → `SearchBar.tsx`
- `button.tsx` → `Button.tsx`

### Import Updates

All imports have been updated in:
1. **Index Exports** (`src/shared/components/index.ts`)
   - Updated all relative imports to use PascalCase paths

2. **Direct Imports** (4 files with direct imports)
   - `src/modules/developers-api/components/create-api-key-modal.tsx`
   - `src/modules/billing-tokens/components/purchase-tokens-modal.tsx`
   - `src/modules/roles/components/role-modal.tsx`
   - `src/modules/departments/components/department-modal.tsx`

3. **Barrel Imports** (Using index.ts - 19 files)
   - All other modules use the barrel export pattern
   - No changes needed in those files

### Naming Convention Standards

#### Component Files (✅ PascalCase)
```
✅ Button.tsx          (Component file)
✅ FormModal.tsx       (Component file)
✅ StatusBadge.tsx     (Component file)
✅ ActionsDropdown.tsx (Component file)
✅ SearchBar.tsx       (Component file)
```

#### Exports (✅ PascalCase)
```
export { FormModal } from './FormModal';
export { Button, buttonVariants } from './Button';
export { StatusBadge } from './StatusBadge';
export { ActionsDropdown, createActions } from './ActionsDropdown';
export { SearchBar } from './SearchBar';
```

#### Other Conventions
- **Utility functions** (camelCase): `buttonVariants`, `createActions`
- **Type exports** (PascalCase): `ButtonProps`, `StatusType`, `ActionItem`
- **Folder names** (lowercase): `components`, `lib`, `modules`, `shared`
- **Page/module files** (camelCase): `users-page.tsx`, `dashboard-page.tsx`

### Why PascalCase for Components?

React and TypeScript best practices:
1. **Visual distinction** - Immediately identifies files as React components
2. **ES6 standard** - Aligns with class naming conventions
3. **Import clarity** - `import { Button }` mirrors the component name `Button.tsx`
4. **IDE support** - Better autocomplete and refactoring tools
5. **Industry standard** - Followed by Next.js, Create React App, and most React projects

### Files Affected
- **Total components renamed**: 5
- **Import statements updated**: 4 (direct imports)
- **Index exports updated**: 1
- **Total modules touched**: 4

### Backward Compatibility
✅ All imports work correctly through the barrel export pattern (`index.ts`)
✅ No breaking changes - all functionality preserved
✅ Ready for production

---
**Last Updated**: November 17, 2025
**Status**: Complete ✅
