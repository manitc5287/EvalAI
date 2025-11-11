# Module-Based Structure Guide

## Overview
This document defines the standard structure for creating new modules in this Next.js project. The current project uses a simplified structure where components are organized in the `components/` directory and routes are in the `app/` directory.

## Current Project Structure

```
project-root/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── (app)/                   # Route group for authenticated app
│   │   ├── layout.tsx           # App layout (with sidebar/header)
│   │   ├── dashboard/           # Dashboard module
│   │   │   └── page.tsx
│   │   ├── kpis/                # KPIs module
│   │   │   └── page.tsx
│   │   ├── reports/             # Reports module
│   │   │   └── page.tsx
│   │   ├── roles/               # Roles module
│   │   │   └── page.tsx
│   │   └── users/               # Users module
│   │       ├── _data.ts
│   │       └── page.tsx
│   └── (auth)/                  # Route group for authentication
│       ├── layout.tsx           # Auth layout
│       ├── login/               # Login route (redirects to auth module)
│       │   └── page.tsx
│       ├── register/            # Register route
│       │   └── page.tsx
│       └── forgot-password/     # Forgot password route
│           └── page.tsx
│
├── src/
│   └── modules/                 # Feature modules
│       └── auth/                # Auth module (complete implementation)
│           ├── api/             # Auth API functions
│           │   └── auth-api.ts
│           ├── components/      # Auth-specific components
│           │   ├── auth-layout.tsx
│           │   ├── login-form.tsx
│           │   ├── register-form.tsx
│           │   ├── login-form.tsx
│           │   ├── register-form.tsx
│           │   └── forgot-password-form.tsx
│           ├── constants/       # Auth constants
│           │   └── index.ts
│           ├── hooks/           # Auth custom hooks
│           │   ├── use-auth.ts
│           │   └── use-login.ts
│           ├── lib/             # Auth utilities
│           │   └── auth-helpers.ts
│           ├── providers/       # Auth providers
│           │   └── auth-provider.tsx
│           ├── schemas/         # Zod validation schemas
│           │   └── auth.schema.ts
│           ├── pages/           # Auth page components
│           │   ├── login-page.tsx
│           │   ├── register-page.tsx
│           │   └── forgot-password-page.tsx
│           ├── types/           # Auth TypeScript types
│           │   └── index.ts
│           └── README.md        # Auth module documentation
│
├── components/
│   ├── core/                    # Reusable core components
│   │   ├── data-table-responsive.tsx
│   │   ├── kpi-card.tsx
│   │   └── row-card.tsx
│   └── layout/                  # Layout components
│       ├── header.tsx
│       └── sidebar.tsx
│
└── lib/
    └── utils.ts                 # Utility functions
```

## Creating a New Module

### Step-by-Step Guide

1. **Create Module Directory** in `src/modules/module-name/`
2. **Create Route** in `app/(app)/module-name/page.tsx`
3. **Create Page Component** in `src/modules/module-name/pages/`
4. **Add Supporting Components, Hooks, Types** as needed
5. **Export from route page** using thin wrapper pattern

### Module Structure Pattern

Each module should follow this structure:

```
src/modules/module-name/
├── api/                         # API integration layer
│   └── module-api.ts
├── components/                  # Module-specific UI components
│   └── component-name.tsx
├── pages/                       # Page components (exported to app/)
│   └── page-name.tsx
├── hooks/                       # React hooks for module logic
│   └── use-hook-name.ts
├── schemas/                     # Zod validation schemas
│   └── module.schema.ts
├── types/                       # TypeScript type definitions
│   └── index.ts
├── constants/                   # Module constants
│   └── index.ts
├── lib/                         # Utility functions
│   └── module-helpers.ts
└── README.md                    # Module documentation
```

### Path Aliases (tsconfig.json)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/modules/*": ["./src/modules/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

### Example: Creating a New Module

For authenticated modules (e.g., dashboard, users):
- Place route in `app/(app)/module-name/page.tsx`
- Place module code in `src/modules/module-name/`
- Will use the app layout with sidebar and header

For public/auth modules (e.g., login, register):
- Place route in `app/(auth)/module-name/page.tsx`
- Place module code in `src/modules/module-name/`
- Will have a separate layout without sidebar

---

## File Templates

### 1. Route Page (`app/(app)/module-name/page.tsx`)

```tsx
export { default } from '@/modules/module-name/pages/module-page';
export { metadata } from '@/modules/module-name/pages/module-page';
```

### 2. Page Component (`src/modules/module-name/pages/module-page.tsx`)

```tsx
import { Metadata } from 'next';
import { ModuleComponent } from '@/modules/module-name/components/module-component';

export const metadata: Metadata = {
  title: 'Module Name',
  description: 'Module Name description',
};

export default function ModulePage() {
  return <ModuleComponent />;
}
```

### 3. Component File (`src/modules/module-name/components/module-component.tsx`)

```tsx
'use client';

import { FC } from 'react';

interface ModuleNameComponentProps {
  // Add props here
}

export const ModuleNameComponent: FC<ModuleNameComponentProps> = (props) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Module Name</h1>
      {/* Add your component logic here */}
    </div>
  );
};
```

### 4. Data File (Optional: `src/modules/module-name/types/index.ts`)

```ts
export interface ModuleNameData {
  id: string;
  // Add data structure here
}

export const mockModuleNameData: ModuleNameData[] = [
  // Add mock data here
];
```

---

## Current Modules

### Dashboard Module
- **Location**: `app/(app)/dashboard/page.tsx`
- **Purpose**: Main dashboard with overview and analytics
- **Components**: KPI cards, charts, recent activity

### Users Module
- **Location**: `app/(app)/users/page.tsx`
- **Data**: `app/(app)/users/_data.ts`
- **Purpose**: User management and listing
- **Components**: Data table, row cards (responsive)

### KPIs Module
- **Location**: `app/(app)/kpis/page.tsx`
- **Purpose**: Key Performance Indicators tracking
- **Components**: KPI cards

### Reports Module
- **Location**: `app/(app)/reports/page.tsx`
- **Purpose**: Reports and analytics

### Roles Module
- **Location**: `app/(app)/roles/page.tsx`
- **Purpose**: Role and permission management

### Auth Module ⭐
- **Location**: `src/modules/auth/`
- **Routes**: `app/(auth)/login/`, `app/(auth)/register/`, `app/(auth)/forgot-password/`
- **Implementation**: Complete modular structure
- **Structure**:
  - `api/` - Authentication API calls
  - `components/` - Auth-specific UI components (auth-layout, login-form, register-form, forgot-password-form)
  - `constants/` - Auth-related constants
  - `hooks/` - Custom hooks for authentication (use-auth, use-login)
  - `lib/` - Helper functions
  - `providers/` - Auth context providers
  - `schemas/` - Zod validation schemas
  - `pages/` - Main page components (login, register, forgot-password)
  - `types/` - TypeScript type definitions
- **Purpose**: Complete authentication module with login, register, and password recovery
- **Design**: Dark theme (#0A0F1C background) with glassmorphic effects, gradient accents (#00F5C6 to #00AEEF), two-column split layout
- **Validation**: Uses Zod + react-hook-form with @hookform/resolvers

---

## Auth Module Structure (Detailed)

The auth module follows a complete modular pattern with all functionality centralized in `src/modules/auth/`:

```
src/modules/auth/
├── api/
│   └── auth-api.ts              # API calls (login, register, logout, etc.)
├── components/
│   ├── auth-layout.tsx          # Shared layout for auth pages (two-column split)
│   ├── login-form.tsx           # Login form component with Zod validation
│   ├── register-form.tsx        # Registration form component
│   └── forgot-password-form.tsx # Password recovery form
├── constants/
│   └── index.ts                 # Auth constants (routes, messages, etc.)
├── hooks/
│   ├── use-auth.ts              # Main auth hook
│   └── use-login.ts             # Login-specific hook
├── lib/
│   └── auth-helpers.ts          # Helper functions (token storage, etc.)
├── providers/
│   └── auth-provider.tsx        # Auth context provider
├── schemas/
│   └── auth.schema.ts           # Zod validation schemas (login, register, forgot-password)
├── pages/
│   ├── login-page.tsx           # Login page component
│   ├── register-page.tsx        # Register page component
│   └── forgot-password-page.tsx # Forgot password page
├── types/
│   └── index.ts                 # TypeScript interfaces and types
└── README.md                    # Auth module documentation
```

### Route Files (Thin Wrappers)

Route files in `app/(auth)/` only handle redirects to the auth module pages:

```tsx
```tsx
// app/(auth)/login/page.tsx
export { default } from '@/modules/auth/pages/login-page';
export { metadata } from '@/modules/auth/pages/login-page';
```

### 2. Page Component

```tsx
// src/modules/auth/pages/login-page.tsx
import { Metadata } from 'next';
import { AuthLayout } from '../components/auth-layout';
import { LoginForm } from '@/modules/auth/components/login-form';
```

---

## Common Route Patterns

### Authenticated Module (with sidebar/header)
```
app/(app)/module-name/
└── page.tsx
```

### Auth Module (login, register, etc.)
```
app/(auth)/module-name/
└── page.tsx
```

### Module with Detail Pages
```
app/(app)/module-name/
├── page.tsx              # List view
└── [id]/
    └── page.tsx          # Detail view
```

### Module with CRUD Operations
```
app/(app)/module-name/
├── page.tsx              # List view
├── create/
│   └── page.tsx          # Create new
└── [id]/
    ├── page.tsx          # View details
    └── edit/
        └── page.tsx      # Edit form
```

---

## Best Practices

### 1. Naming Conventions
- **Module names**: kebab-case (e.g., `user-profile`, `payment-gateway`)
- **Component files**: kebab-case (e.g., `login-form.tsx`, `user-table.tsx`)
- **Component exports**: PascalCase (e.g., `LoginForm`, `UserTable`)
- **Data files**: `_data.ts` prefix with underscore

### 2. File Organization
- **Routes**: Place in appropriate route group (`(app)` for authenticated, `(auth)` for public)
- **Components**: Organize by feature in `components/` directory with modular structure (api, components, constants, hooks, lib, providers, schemas, pages, types)
- **Core components**: Reusable components go in `components/core/`
- **Layout components**: Header, sidebar, etc. go in `components/layout/`

### 3. Import Paths
```tsx
// ✅ Good - Use path aliases
import { LoginForm } from '@/modules/auth/components/login-form';
import { DataTable } from '@/components/core/data-table-responsive';
import { useLogin } from '@/modules/auth/hooks/use-login';

// ❌ Bad - Relative imports across directories
import { LoginForm } from '../../../modules/auth/components/login-form';
```

### 4. Component Structure
- Use `'use client'` directive for client-side interactivity
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Use TypeScript for type safety

### 5. Styling
- Use Tailwind CSS utility classes
- Follow responsive design patterns (mobile-first)
- Use existing core components when possible
- Dark theme: #0A0F1C background, #00F5C6 to #00AEEF gradients, #B0B6C1 for text
- Glassmorphic effects: backdrop-blur-xl, rgba(255,255,255,0.04) backgrounds

---

## Core Components

### DataTableResponsive
- **Location**: `components/core/data-table-responsive.tsx`
- **Purpose**: Responsive data table component
- **Usage**: Display tabular data with mobile-friendly card layout

### KpiCard
- **Location**: `components/core/kpi-card.tsx`
- **Purpose**: Display key performance indicators
- **Usage**: Dashboard metrics and statistics

### RowCard
- **Location**: `components/core/row-card.tsx`
- **Purpose**: Mobile-friendly row display
- **Usage**: Alternative to table rows on small screens

---

## Layout Components

### Header
- **Location**: `components/layout/header.tsx`
- **Purpose**: Top navigation bar
- **Used in**: `app/(app)/layout.tsx`

### Sidebar
- **Location**: `components/layout/sidebar.tsx`
- **Purpose**: Side navigation menu
- **Used in**: `app/(app)/layout.tsx`

---

## Quick Start Guide

### Adding a New Authenticated Module

1. Create module directory structure:
   ```bash
   mkdir -p src/modules/module-name/{api,components,pages,hooks,schemas,types,constants,lib}
   ```

2. Create route wrapper: `app/(app)/module-name/page.tsx`
   ```tsx
   export { default } from '@/modules/module-name/pages/module-page';
   export { metadata } from '@/modules/module-name/pages/module-page';
   ```

3. Create page component: `src/modules/module-name/pages/module-page.tsx`
   ```tsx
   import { Metadata } from 'next';
   import { ModuleComponent } from '../components/module-component';
   
   export const metadata: Metadata = {
     title: 'Module Name',
   };
   
   export default function ModulePage() {
     return <ModuleComponent />;
   }
   ```

4. Create component: `src/modules/module-name/components/module-component.tsx`
   ```tsx
   'use client';
   
   export const ModuleComponent = () => {
     return <div>Your module content</div>;
   };
   ```

### Adding a New Module with Complete Structure (Like Auth)

1. Create complete module directory structure:
   ```bash
   mkdir -p src/modules/module-name/{api,components,constants,hooks,lib,providers,schemas,pages,types}
   ```

2. Create route wrappers in `app/(app)/` or `app/(auth)/`
   ```tsx
   // app/(app)/module-name/page.tsx
   export { default } from '@/modules/module-name/pages/module-page';
   export { metadata } from '@/modules/module-name/pages/module-page';
   ```

3. Follow the auth module pattern:
   - `api/` - API integration
   - `components/` - UI components
   - `hooks/` - Custom hooks
   - `schemas/` - Zod validation
   - `pages/` - Page components
   - `types/` - TypeScript types
   - `constants/` - Constants
   - `lib/` - Utilities

---

## Version History

- v3.0 - Migrated to src/modules structure with path aliases
- v2.1 - Moved to .copilot folder for automatic reference
- v2.0 - Updated to match current project structure with auth module
- v1.0 - Initial structure definition
- Compatible with Next.js 14+ (App Router)
