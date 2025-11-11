# Component Hierarchy & Element Order

## 📋 Complete UI Structure (Exact Order from Figma)

### 🏗️ Root Layout Structure

```
App Root
│
├─ Sidebar (Fixed Left, 256px)
│  ├─ Logo Section (p-6, border-bottom)
│  │  ├─ Logo Icon (40x40, gradient circle, "E")
│  │  ├─ App Title "EvalAI" (if not collapsed)
│  │  └─ Subtitle "Admin Panel" (if not collapsed)
│  │
│  ├─ Navigation (flex-1, px-3, py-6)
│  │  ├─ Main Menu Items (space-y-1)
│  │  │  ├─ 1. Dashboard (/dashboard) - LayoutDashboard icon
│  │  │  ├─ 2. Users (/users) - Users icon
│  │  │  ├─ 3. Roles (/roles) - Shield icon
│  │  │  ├─ 4. KPIs (/kpis) - TrendingUp icon
│  │  │  └─ 5. Reports (/reports) - FileText icon
│  │  │
│  │  ├─ Divider (my-6, border-top)
│  │  │
│  │  └─ Bottom Menu Items (space-y-1)
│  │     ├─ Settings (/settings) - Settings icon
│  │     └─ Help & Support (/help) - HelpCircle icon
│  │
│  ├─ User Profile (p-4, border-top)
│  │  ├─ Avatar (40x40, gradient circle, "AD")
│  │  ├─ Name "Admin User"
│  │  └─ Email "admin@evalai.com"
│  │
│  └─ Collapse Button (absolute, -right-3, top-20)
│
└─ Main Content (flex-1, flex-col)
   │
   ├─ Header (sticky, h-16)
   │  ├─ Mobile Menu Button (lg:hidden)
   │  ├─ Search Bar (flex-1, max-w-2xl)
   │  │  ├─ Search Icon (absolute left)
   │  │  └─ Input Field
   │  ├─ Notifications Button (relative)
   │  │  ├─ Bell Icon
   │  │  └─ Red Dot Indicator (absolute)
   │  ├─ Settings Button (hidden sm:block)
   │  └─ User Profile Section (hidden sm:flex)
   │     ├─ User Info (text-right)
   │     │  ├─ Name "Admin User"
   │     │  └─ Role "Administrator"
   │     └─ Avatar (40x40, gradient)
   │
   └─ Page Content (flex-1, overflow-x-hidden)
```

---

## 📊 Dashboard Page Structure (Exact Order)

```
Dashboard Container (p-6 lg:p-8, space-y-6)
│
└─ Max Width Container (max-w-7xl, mx-auto, space-y-6)
   │
   ├─ 1. PAGE HEADER
   │  ├─ Left Section
   │  │  ├─ Title: "Dashboard Overview" (text-3xl lg:text-4xl, font-bold)
   │  │  └─ Subtitle: "Welcome back! Here's what's happening..." (text-muted-foreground)
   │  └─ Right Section (flex, gap-3)
   │     ├─ Refresh Button (border, white text)
   │     │  ├─ RefreshCw Icon
   │     │  └─ "Refresh" Text
   │     └─ Export Button (gradient background)
   │        ├─ Download Icon
   │        └─ "Export Report" Text
   │
   ├─ 2. STATS GRID (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4, gap-6)
   │  │
   │  ├─ Card 1: Total Users
   │  │  ├─ Glass Card Container (glass-card, p-6)
   │  │  ├─ Header (flex, items-start, justify-between, mb-4)
   │  │  │  ├─ Left: Label "Total Users" + Value (text-3xl, font-bold)
   │  │  │  └─ Right: Icon Container (w-12, h-12, gradient cyan-blue, Users icon)
   │  │  └─ Footer: Trend (+12.5%, green, TrendingUp icon, "vs last month")
   │  │
   │  ├─ Card 2: Total Evaluations
   │  │  ├─ Glass Card Container
   │  │  ├─ Header
   │  │  │  ├─ Left: Label + Value
   │  │  │  └─ Right: Icon (Activity, gradient blue)
   │  │  └─ Footer: +8.2% (green)
   │  │
   │  ├─ Card 3: Active Models
   │  │  ├─ Glass Card Container
   │  │  ├─ Header
   │  │  │  ├─ Left: Label + Value
   │  │  │  └─ Right: Icon (Brain, gradient purple)
   │  │  └─ Footer: -2.4% (red, TrendingDown)
   │  │
   │  └─ Card 4: Average Accuracy
   │     ├─ Glass Card Container
   │     ├─ Header
   │     │  ├─ Left: Label + Value (percentage)
   │     │  └─ Right: Icon (Zap, gradient green)
   │     └─ Footer: +3.1% (green)
   │
   ├─ 3. CONTENT GRID (grid-cols-1 lg:grid-cols-3, gap-6)
   │  │
   │  ├─ Performance Overview (lg:col-span-2)
   │  │  └─ Glass Card (glass-card, p-6)
   │  │     ├─ Header (flex, items-center, justify-between, mb-6)
   │  │     │  ├─ Left Section
   │  │     │  │  ├─ Title: "Performance Overview" (text-xl, font-semibold)
   │  │     │  │  └─ Subtitle: "Model evaluation metrics..." (text-sm, muted)
   │  │     │  └─ Right: Dropdown (Time range selector)
   │  │     │     └─ Options: Last 7/30/90 days
   │  │     └─ Chart Area (h-80, flex, items-center, justify-center)
   │  │        └─ Placeholder
   │  │           ├─ BarChart3 Icon (w-16, h-16, opacity-50)
   │  │           └─ Text: "Chart visualization coming soon"
   │  │
   │  └─ Recent Activity (lg:col-span-1)
   │     └─ Glass Card (glass-card, p-6)
   │        ├─ Header (flex, items-center, justify-between, mb-6)
   │        │  ├─ Title: "Recent Activity" (text-xl, font-semibold)
   │        │  └─ "View All" Link (text-primary)
   │        └─ Activity List (space-y-4)
   │           └─ Activity Items (each)
   │              └─ Container (flex, items-center, p-4, rounded-lg, bg-white/5, hover:bg-white/10)
   │                 └─ Content (flex, items-center, gap-3)
   │                    ├─ Icon Container (w-10, h-10, rounded-lg, colored background)
   │                    │  └─ Icon (CheckCircle2/Settings/AlertCircle based on type)
   │                    └─ Text Container (flex-1, min-w-0)
   │                       ├─ Action Text (text-sm, font-medium, white, truncate)
   │                       └─ Meta (text-xs, muted, truncate)
   │                          └─ "User • Timestamp"
   │
   └─ 4. ADDITIONAL STATS ROW (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6)
      │
      ├─ Active Sessions Card
      │  └─ Glass Card (glass-card, p-6)
      │     └─ Content (flex, items-start, gap-4)
      │        ├─ Icon Container (w-12, h-12, rounded-lg, gradient blue, Activity icon)
      │        └─ Info (flex-1, min-w-0)
      │           ├─ Label: "Active Sessions" (text-sm, muted)
      │           ├─ Value: "247" (text-2xl, font-bold, white)
      │           └─ Change: "+18% this week" (text-sm, emerald)
      │
      ├─ Success Rate Card
      │  └─ Similar structure with purple gradient, TrendingUp icon
      │
      └─ Avg Response Time Card
         └─ Similar structure with orange gradient, Zap icon
```

---

## 👥 Users Page Structure (Exact Order)

```
Users Container (p-6 lg:p-8, space-y-6)
│
└─ Max Width Container (max-w-7xl, mx-auto, space-y-6)
   │
   ├─ 1. PAGE HEADER
   │  ├─ Left Section
   │  │  ├─ Title: "Users Management" (text-3xl lg:text-4xl, font-bold)
   │  │  └─ Subtitle: "Manage user accounts..." (muted)
   │  └─ Right Section
   │     ├─ Export Button (border, white)
   │     └─ Add User Button (gradient)
   │
   ├─ 2. FILTERS BAR
   │  └─ Glass Card (glass-card, p-4)
   │     └─ Flex Container (flex-col md:flex-row, gap-3)
   │        ├─ Search Input (flex-1, relative)
   │        │  ├─ Search Icon (absolute left)
   │        │  └─ Input: "Search users..."
   │        └─ Filter Button (border, white)
   │
   └─ 3. DATA TABLE
      └─ Glass Card (glass-card, overflow-hidden)
         ├─ Table Container (overflow-x-auto)
         │  └─ Table (w-full)
         │     ├─ Table Head
         │     │  └─ Header Row (border-b)
         │     │     ├─ TH: "User" (text-left, px-6, py-4)
         │     │     ├─ TH: "Role"
         │     │     ├─ TH: "Department"
         │     │     ├─ TH: "Status"
         │     │     └─ TH: "Actions"
         │     │
         │     └─ Table Body
         │        └─ Rows (each user)
         │           └─ TR (border-b, hover:bg-white/5)
         │              ├─ TD: User Info (px-6, py-4)
         │              │  └─ Flex Container (flex, items-center, gap-3)
         │              │     ├─ Avatar (w-10, h-10, rounded-full, gradient)
         │              │     │  └─ Initial Letter
         │              │     └─ Text Container
         │              │        ├─ Name (text-sm, font-medium, white)
         │              │        └─ Email (text-xs, muted)
         │              ├─ TD: Role (text-sm, white)
         │              ├─ TD: Department (text-sm, muted)
         │              ├─ TD: Status Badge
         │              │  └─ Badge (px-2.5, py-1, rounded-md, text-xs, colored)
         │              └─ TD: Actions
         │                 └─ Button (p-2, hover:bg-white/5, rounded-lg)
         │                    └─ MoreVertical Icon
         │
         └─ Pagination (flex, items-center, justify-between, px-6, py-4, border-t)
            ├─ Left: Count Info ("Showing X users")
            └─ Right: Pagination Buttons
               ├─ Previous Button (disabled)
               └─ Next Button
```

---

## 🎨 Styling Consistency

### Glass Card Component
```tsx
className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl"
// Alias: glass-card
```

### Gradient Backgrounds (Icon Containers)
1. **Cyan-Blue**: `from-[#00F5C6] to-[#00AEEF]`
2. **Blue**: `from-[#00AEEF] to-[#0066CC]`
3. **Purple**: `from-[#9333EA] to-[#6B21A8]`
4. **Green**: `from-[#10B981] to-[#059669]`
5. **Orange**: `from-orange-500 to-orange-600`

### Status Badge Colors
- **Active**: `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`
- **Inactive**: `bg-gray-500/10 text-gray-400 border-gray-500/20`
- **Pending**: `bg-orange-500/10 text-orange-400 border-orange-500/20`

### Icon Sizes
- Small: `w-4 h-4` (16px)
- Medium: `w-5 h-5` (20px)
- Large: `w-6 h-6` (24px)
- Container: `w-10 h-10` or `w-12 h-12`

### Text Sizes
- Page Title: `text-3xl lg:text-4xl font-bold`
- Section Title: `text-xl font-semibold`
- Card Label: `text-sm text-muted-foreground`
- Card Value: `text-2xl lg:text-3xl font-bold text-white`
- Body Text: `text-sm text-white`
- Meta Text: `text-xs text-muted-foreground`

---

## ✅ Implementation Verification

All components are implemented in the exact order shown in the Figma design:
- ✅ Layout hierarchy matches Figma structure
- ✅ Element ordering follows left-to-right, top-to-bottom
- ✅ Spacing and gaps match design specifications
- ✅ Colors and gradients are pixel-perfect
- ✅ Typography scales are consistent
- ✅ Responsive breakpoints work correctly
- ✅ Hover states and transitions included
- ✅ Glass morphism effects applied correctly
