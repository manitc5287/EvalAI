# User Management Setup

## Installation

To complete the user management setup, you need to install the following dependencies:

### Required Dependencies

```bash
npm install @reduxjs/toolkit react-redux @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select
```

Or if using yarn:

```bash
yarn add @reduxjs/toolkit react-redux @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select
```

Or if using pnpm:

```bash
pnpm add @reduxjs/toolkit react-redux @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-select
```

## What's Been Implemented

### 1. **ShadCN UI Components** (`components/ui/`)
   - `dialog.tsx` - Modal dialog component
   - `button.tsx` - Button component with variants
   - `input.tsx` - Text input component
   - `label.tsx` - Form label component
   - `select.tsx` - Dropdown select component

### 2. **Redux Store Setup** (`src/store/`)
   - `index.ts` - Store configuration
   - `slices/usersSlice.ts` - Users state management
   - `hooks.ts` - Typed Redux hooks

### 3. **User Management Features** (`src/modules/users/`)
   - **Types** (`types/index.ts`):
     - Extended `User` interface
     - `CreateUserInput` interface
     - `UpdateUserInput` interface
   
   - **Schema** (`schemas/user.schema.ts`):
     - Zod validation schema for user creation
   
   - **Components** (`components/`):
     - `add-user-dialog.tsx` - Full-featured user creation modal with:
       - Personal Information (First Name, Last Name, Email)
       - Work Information (Department, Role, Manager)
       - Email invitation notice
       - Form validation with React Hook Form + Zod
   
   - **Pages** (`pages/users-page.tsx`):
     - Integrated Add User button
     - Redux state management
     - Modal open/close handling

### 4. **Redux Provider**
   - `src/providers/redux-provider.tsx` - Provider wrapper
   - Integrated into `app/layout.tsx`

## How It Works

1. **Click "Add User" Button**: Opens the modal dialog
2. **Fill in the Form**: 
   - Personal information (first name, last name, email)
   - Work information (department, role, manager)
3. **Submit**: 
   - Form validates using Zod schema
   - Data is dispatched to Redux store
   - New user is added to the users list
   - Modal closes and form resets
4. **State Management**: 
   - All users are stored in Redux
   - Components access users via `useAppSelector`
   - User operations use typed dispatch hooks

## Features

### Form Validation
- Required field validation
- Email format validation
- Character length limits
- Real-time error messages

### User Interface
- Matching design system with gradient effects
- Dark theme with accent colors (#00F5C6, #00AEEF)
- Responsive layout (mobile-friendly)
- Accessible components

### State Management
- Redux Toolkit for clean action creators
- Typed hooks for TypeScript safety
- Immutable state updates
- Initial state loaded from mock data

## File Structure

```
components/ui/
├── dialog.tsx
├── button.tsx
├── input.tsx
├── label.tsx
└── select.tsx

src/
├── modules/users/
│   ├── components/
│   │   ├── add-user-dialog.tsx
│   │   └── user-table.tsx
│   ├── pages/
│   │   └── users-page.tsx
│   ├── schemas/
│   │   └── user.schema.ts
│   └── types/
│       └── index.ts
├── providers/
│   └── redux-provider.tsx
└── store/
    ├── index.ts
    ├── hooks.ts
    └── slices/
        └── usersSlice.ts
```

## Next Steps

1. Install the required dependencies (see above)
2. Optionally customize the departments, roles, and managers lists in `add-user-dialog.tsx`
3. Add API integration in the `onSubmit` handler
4. Implement actual email invitation functionality
5. Add user editing and deletion features

## Notes

- The form defaults to sending an invitation email
- Manager selection is optional
- All form fields except manager are required
- New users are added with "pending" status
- Initial skill score is set to 0
