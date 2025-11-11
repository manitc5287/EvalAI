# Module-Based Structure Guide

## Overview
This document defines the standard structure for creating new modules in this Next.js project. Modules are organized in `src/modules/` and routes are in the `app/` directory.

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
│       ├── login/               # Login route
│       │   └── page.tsx
│       ├── register/            # Register route
│       │   └── page.tsx
│       └── forgot-password/     # Forgot password route
│           └── page.tsx
│
├── src/                          # Source code
│   ├── modules/                 # Feature modules
│   │   └── auth/                # Auth module (complete implementation)
│   │       ├── api/             # Auth API functions
│   │       │   └── auth-api.ts
│   │       ├── components/      # Auth-specific components
│   │       │   ├── auth-layout.tsx
│   │       │   ├── login-form.tsx
│   │       │   ├── register-form.tsx
│   │       │   └── forgot-password-form.tsx
│   │       ├── constants/       # Auth constants
│   │       │   └── index.ts
│   │       ├── hooks/           # Auth custom hooks
│   │       │   ├── use-auth.ts
│   │       │   └── use-login.ts
│   │       ├── lib/             # Auth utilities
│   │       │   └── auth-helpers.ts
│   │       ├── providers/       # Auth providers
│   │       │   └── auth-provider.tsx
│   │       ├── schemas/         # Zod validation schemas
│   │       │   └── auth.schema.ts
│   │       ├── pages/           # Auth page components
│   │       │   ├── login-page.tsx
│   │       │   ├── register-page.tsx
│   │       │   └── forgot-password-page.tsx
│   │       ├── types/           # Auth TypeScript types
│   │       │   └── index.ts
│   │       └── README.md        # Auth module documentation
│   └── shared/                  # Shared utilities (future)
│
├── components/                   # Shared/core components
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

### Module Structure Pattern

Each module should follow this structure in `src/modules/{module-name}/`:

```
src/modules/{module-name}/
├── api/                         # API integration layer
│   └── {module}-api.ts         # API calls
├── components/                  # Module-specific UI components
│   └── {component}.tsx
├── pages/                       # Page components (exported to app/)
│   └── {page}.tsx
├── hooks/                       # React hooks for module logic
│   └── use-{hook}.ts
├── schemas/                     # Zod validation schemas
│   └── {module}.schema.ts
├── types/                       # TypeScript type definitions
│   └── index.ts
├── constants/                   # Module constants
│   └── index.ts
├── lib/                         # Utility functions
│   └── {module}-helpers.ts
└── README.md                    # Module documentation
```

### Step-by-Step Guide

1. **Create Module Directory** in `src/modules/{module-name}/`
2. **Create Route** in `app/(app)/{module-name}/page.tsx`
3. **Create Page Component** in `src/modules/{module-name}/pages/`
4. **Add Supporting Components, Hooks, Types** as needed
5. **Export from page.tsx** in app directory

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

export const metadata = {
  title: 'Module Name',
  description: 'Module Name description',
};

export default function ModuleNamePage() {
  return <ModuleNameComponent />;
}
```

### 2. Component File (`components/module-name/module-name-component.tsx`)

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

### 3. Data File (Optional: `app/(app)/module-name/_data.ts`)

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

### Login Module ⭐ NEW
- **Location**: `app/(auth)/login/page.tsx` (redirect only)
- **Implementation**: `components/auth/` (complete auth module)
- **Structure**:
  - `api/` - Authentication API calls
  - `components/` - Auth-specific UI components
  - `constants/` - Auth-related constants
  - `hooks/` - Custom hooks for authentication
  - `lib/` - Helper functions
  - `providers/` - Auth context providers
  - `schemas/` - Zod validation schemas
  - `pages/` - Main page components (login, register, forgot-password)
  - `types/` - TypeScript type definitions
- **Purpose**: Complete authentication module with login, register, and password recovery

---

## Auth Module Structure (Detailed)

The auth module follows a complete modular pattern with all functionality centralized:

```
components/auth/
├── api/
│   └── auth-api.ts              # API calls (login, register, logout, etc.)
├── components/
│   ├── auth-layout.tsx          # Shared layout for auth pages
│   ├── login-form.tsx           # Login form component
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
│   └── auth.schema.ts           # Zod validation schemas
├── pages/
│   ├── login-page.tsx           # Login page component
│   ├── register-page.tsx        # Register page component
│   └── forgot-password-page.tsx # Forgot password page
└── types/
    └── index.ts                 # TypeScript interfaces and types
```

### Route Files (Thin Wrappers)

Route files in `app/(auth)/` only handle redirects to the auth module pages:

**`app/(auth)/login/page.tsx`**
```tsx
export { default } from '@/components/auth/pages/login-page';
export { metadata } from '@/components/auth/pages/login-page';
```

**`app/(auth)/register/page.tsx`**
```tsx
export { default } from '@/components/auth/pages/register-page';
export { metadata } from '@/components/auth/pages/register-page';
```

**`app/(auth)/forgot-password/page.tsx`**
```tsx
export { default } from '@/components/auth/pages/forgot-password-page';
export { metadata } from '@/components/auth/pages/forgot-password-page';
```

### Auth Module File Templates

#### 1. Types (`components/auth/types/index.ts`)

```ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
```

#### 2. Constants (`components/auth/constants/index.ts`)

```ts
export const AUTH_ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
} as const;

export const AUTH_STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'auth_user',
} as const;

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGIN_ERROR: 'Invalid email or password',
  REGISTER_SUCCESS: 'Account created successfully',
  LOGOUT_SUCCESS: 'Successfully logged out',
} as const;
```

#### 3. Schemas (`components/auth/schemas/auth.schema.ts`)

```ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
```

#### 4. API (`components/auth/api/auth-api.ts`)

```ts
import type { LoginCredentials, RegisterData, AuthResponse, User } from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export const authApi = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  },

  async logout(): Promise<void> {
    await fetch(`${API_BASE}/auth/logout`, { method: 'POST' });
  },

  async getCurrentUser(): Promise<User> {
    const response = await fetch(`${API_BASE}/auth/me`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  async forgotPassword(email: string): Promise<void> {
    const response = await fetch(`${API_BASE}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!response.ok) throw new Error('Failed to send reset email');
  },
};
```

#### 5. Helpers (`components/auth/lib/auth-helpers.ts`)

```ts
import { AUTH_STORAGE_KEYS } from '../constants';
import type { User } from '../types';

export const authHelpers = {
  setToken(token: string): void {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, token);
  },

  getToken(): string | null {
    return localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
  },

  removeToken(): void {
    localStorage.removeItem(AUTH_STORAGE_KEYS.TOKEN);
  },

  setUser(user: User): void {
    localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getUser(): User | null {
    const user = localStorage.getItem(AUTH_STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  },

  removeUser(): void {
    localStorage.removeItem(AUTH_STORAGE_KEYS.USER);
  },

  clearAuth(): void {
    this.removeToken();
    this.removeUser();
  },
};
```

#### 6. Hooks (`components/auth/hooks/use-auth.ts`)

```ts
'use client';

import { create } from 'zustand';
import { authApi } from '../api/auth-api';
import { authHelpers } from '../lib/auth-helpers';
import type { User, LoginCredentials, RegisterData } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const { user, token } = await authApi.login(credentials);
      authHelpers.setToken(token);
      authHelpers.setUser(user);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (data) => {
    set({ isLoading: true });
    try {
      const { user, token } = await authApi.register(data);
      authHelpers.setToken(token);
      authHelpers.setUser(user);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await authApi.logout();
    } finally {
      authHelpers.clearAuth();
      set({ user: null, isAuthenticated: false });
    }
  },

  checkAuth: () => {
    const user = authHelpers.getUser();
    const token = authHelpers.getToken();
    if (user && token) {
      set({ user, isAuthenticated: true });
    }
  },
}));
```

#### 7. Auth Layout (`components/auth/components/auth-layout.tsx`)

```tsx
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, title, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">EvalAI Admin</h1>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">{title}</h2>
            {description && <p className="mt-1 text-gray-600">{description}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
```

#### 8. Login Page (`components/auth/pages/login-page.tsx`)

```tsx
'use client';

import { LoginForm } from '../components/login-form';
import { AuthLayout } from '../components/auth-layout';

export const metadata = {
  title: 'Login - EvalAI Admin',
  description: 'Sign in to your account',
};

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome Back" description="Sign in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
```

#### 9. Login Form (`components/auth/components/login-form.tsx`)

```tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/use-auth';
import { AUTH_ROUTES } from '../constants';
import type { LoginCredentials } from '../types';

export const LoginForm = () => {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData);
      router.push(AUTH_ROUTES.DASHBOARD);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="admin@example.com"
          disabled={isLoading}
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          placeholder="Enter your password"
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <a href={AUTH_ROUTES.FORGOT_PASSWORD} className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href={AUTH_ROUTES.REGISTER} className="font-medium text-blue-600 hover:text-blue-500">
          Sign up
        </a>
      </div>
    </form>
  );
};
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
- **Components**: Organize by feature in `components/` directory
- **Core components**: Reusable components go in `components/core/`
- **Layout components**: Header, sidebar, etc. go in `components/layout/`

### 3. Import Paths
```tsx
// ✅ Good - Use path aliases
import { LoginForm } from '@/components/auth/login-form';
import { DataTable } from '@/components/core/data-table-responsive';

// ❌ Bad - Relative imports across directories
import { LoginForm } from '../../../components/auth/login-form';
```

### 4. Component Structure
- Use `'use client'` directive for client-side interactivity
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Use TypeScript for type safety

### 5. Styling
- Use Tailwind CSS utility classes
- Follow responsive design patterns
- Use existing core components when possible

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

1. Create route directory:
   ```bash
   mkdir -p app/\(app\)/module-name
   ```

2. Create page file: `app/(app)/module-name/page.tsx`
   ```tsx
   ```tsx
// src/modules/module-name/components/module-component.tsx
import { ModuleComponent } from '@/modules/module-name/components/module-component';
   
   export default function ModulePage() {
     return <ModuleComponent />;
   }
   ```

3. Create component: `components/module-name/module-component.tsx`
   ```tsx
   'use client';
   
   export const ModuleComponent = () => {
     return <div>Your module content</div>;
   };
   ```

### Adding a New Auth Module (like Login)

1. Create route directory:
   ```bash
   mkdir -p app/\(auth\)/module-name
   ```

2. Create page and components following the Login module pattern

---

## Version History

- v2.0 - Updated to match current project structure
- v1.0 - Initial structure definition
- Compatible with Next.js 14+ (App Router)

