#!/usr/bin/env node

/**
 * Color Constants Quick Reference
 * 
 * Copy & paste this file for quick color lookups
 * This shows all available color constants and their values
 */

// ============================================================================
// IMPORT STATEMENT
// ============================================================================

// In your component, import:
// import { PRIMARY, BACKGROUND, TEXT, BORDER, STATUS, TAILWIND_CLASSES, getButtonClass } from '@/src/lib/colors';

// ============================================================================
// PRIMARY COLORS
// ============================================================================

// PRIMARY.cyan      → #00F5C6  (Vibrant cyan accent)
// PRIMARY.blue      → #00AEEF  (Bright blue)
// PRIMARY.darkBlue  → #0066CC  (Dark blue for depth)

// ============================================================================
// BACKGROUND COLORS
// ============================================================================

// BACKGROUND.dark       → #0A0F1C     (Main page background)
// BACKGROUND.glass      → rgba(255, 255, 255, 0.04)  (Glass card effect)
// BACKGROUND.glassHover → rgba(255, 255, 255, 0.05)
// BACKGROUND.overlay5   → rgba(255, 255, 255, 0.05)  (Subtle overlay)
// BACKGROUND.overlay20  → rgba(255, 255, 255, 0.20)  (Strong overlay)

// ============================================================================
// TEXT COLORS
// ============================================================================

// TEXT.primary      → #FFFFFF    (Main text - white)
// TEXT.secondary    → #B0B6C1    (Muted gray text)
// TEXT.muted        → #999999    (Very muted text)

// ============================================================================
// BORDER COLORS
// ============================================================================

// BORDER.light      → rgba(255, 255, 255, 0.05)   (white/5)
// BORDER.default    → rgba(255, 255, 255, 0.10)   (white/10)
// BORDER.hover      → rgba(255, 255, 255, 0.15)   (white/15)
// BORDER.focus      → rgba(255, 255, 255, 0.20)   (white/20)

// ============================================================================
// STATUS COLORS
// ============================================================================

// STATUS.success    → #10B981   (Green - success)
// STATUS.error      → #EF4444   (Red - errors)
// STATUS.warning    → #F59E0B   (Amber - warnings)
// STATUS.info       → #00AEEF   (Blue - info)
// STATUS.pending    → #F59E0B   (Amber - pending)
// STATUS.active     → #00F5C6   (Cyan - active states)
// STATUS.inactive   → #B0B6C1   (Gray - inactive)

// ============================================================================
// TAILWIND CLASS STRINGS - BUTTONS
// ============================================================================

// TAILWIND_CLASSES.buttons.primary
//   → 'border border-white/10 text-white hover:bg-white/5'

// TAILWIND_CLASSES.buttons.secondary
//   → 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90'

// TAILWIND_CLASSES.buttons.ghost
//   → 'text-[#B0B6C1] hover:text-white hover:bg-white/5'

// TAILWIND_CLASSES.buttons.outline
//   → 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90'

// ============================================================================
// TAILWIND CLASS STRINGS - CARDS
// ============================================================================

// TAILWIND_CLASSES.card.base
//   → 'bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10'

// TAILWIND_CLASSES.card.hover
//   → 'hover:border-[#00F5C6]/30 transition-all'

// ============================================================================
// TAILWIND CLASS STRINGS - INPUT
// ============================================================================

// TAILWIND_CLASSES.input.base
//   → 'bg-white/5 border border-white/10 rounded-md text-white'

// TAILWIND_CLASSES.input.focus
//   → 'focus:border-[#00F5C6] focus:ring-[#00F5C6]/20 focus:ring-[3px]'

// TAILWIND_CLASSES.input.placeholder
//   → 'placeholder:text-[#B0B6C1]'

// ============================================================================
// TAILWIND CLASS STRINGS - TEXT
// ============================================================================

// TAILWIND_CLASSES.text.primary
//   → 'text-white'

// TAILWIND_CLASSES.text.secondary
//   → 'text-[#B0B6C1]'

// TAILWIND_CLASSES.text.muted
//   → 'text-[#999999]'

// ============================================================================
// TAILWIND CLASS STRINGS - STATUS
// ============================================================================

// TAILWIND_CLASSES.status.success
//   → 'text-[#10B981]'

// TAILWIND_CLASSES.status.error
//   → 'text-[#EF4444]'

// TAILWIND_CLASSES.status.warning
//   → 'text-[#F59E0B]'

// TAILWIND_CLASSES.status.info
//   → 'text-[#00AEEF]'

// ============================================================================
// TAILWIND CLASS STRINGS - PROGRESS
// ============================================================================

// TAILWIND_CLASSES.progress.bar
//   → 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]'

// TAILWIND_CLASSES.progress.bg
//   → 'bg-[#00F5C6]/20'

// ============================================================================
// TAILWIND CLASS STRINGS - ICON BACKGROUNDS
// ============================================================================

// TAILWIND_CLASSES.iconBg.primary
//   → 'bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]'

// TAILWIND_CLASSES.iconBg.alternative
//   → 'bg-gradient-to-br from-[#00AEEF] to-[#0066CC]'

// ============================================================================
// TAILWIND CLASS STRINGS - BADGES
// ============================================================================

// TAILWIND_CLASSES.badge.cyan
//   → 'border-[#00F5C6]/50 text-[#00F5C6] bg-[#00F5C6]/10'

// TAILWIND_CLASSES.badge.blue
//   → 'bg-[#00AEEF]/20 text-[#00AEEF] border-[#00AEEF]/30'

// TAILWIND_CLASSES.badge.gradient
//   → 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]'

// TAILWIND_CLASSES.badge.muted
//   → 'bg-white/10 text-[#B0B6C1] border-white/10'

// ============================================================================
// GRADIENTS (For style prop or CSS)
// ============================================================================

// GRADIENTS.primary
//   → 'linear-gradient(to right, #00F5C6, #00AEEF)'

// GRADIENTS.primaryDark
//   → 'linear-gradient(to right, #00AEEF, #0066CC)'

// GRADIENTS.primaryBR
//   → 'linear-gradient(to bottom right, #00F5C6, #00AEEF)'

// ============================================================================
// OPACITY VALUES
// ============================================================================

// OPACITY['5']   → 0.05
// OPACITY['10']  → 0.1
// OPACITY['15']  → 0.15
// OPACITY['20']  → 0.2
// OPACITY['50']  → 0.5
// OPACITY['80']  → 0.8
// OPACITY['90']  → 0.9

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// getButtonClass(variant)
//   variant: 'primary' | 'secondary' | 'ghost' | 'outline'
//   Returns: Tailwind class string
//   Example: getButtonClass('secondary')

// getCardClass(includeHover?)
//   includeHover: boolean (default: true)
//   Returns: Tailwind class string with optional hover state
//   Example: getCardClass(true)

// getTextClass(variant?)
//   variant: 'primary' | 'secondary' | 'muted' (default: 'primary')
//   Returns: Tailwind text color class
//   Example: getTextClass('secondary')

// getStatusClass(status)
//   status: 'success' | 'error' | 'warning' | 'info'
//   Returns: Tailwind text color class
//   Example: getStatusClass('error')

// getStatusColor(status)
//   status: 'success' | 'warning' | 'error' | 'info' | 'active' | 'inactive'
//   Returns: Hex color value
//   Example: getStatusColor('success')  →  '#10B981'

// withOpacity(color, opacity)
//   color: hex color (e.g., '#00F5C6')
//   opacity: number 0-1 (e.g., 0.5)
//   Returns: RGBA color string
//   Example: withOpacity(PRIMARY.cyan, 0.5)  →  'rgba(0, 245, 198, 0.5)'

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

// Button with constant:
// <button className={TAILWIND_CLASSES.buttons.secondary}>Click</button>

// Button with helper function:
// <button className={getButtonClass('secondary')}>Click</button>

// Card with constants:
// <div className={`${TAILWIND_CLASSES.card.base} ${TAILWIND_CLASSES.card.hover}`}>
//   Content
// </div>

// Card with helper function:
// <div className={getCardClass(true)}>Content</div>

// Input with multiple classes:
// <input className={`${TAILWIND_CLASSES.input.base} ${TAILWIND_CLASSES.input.focus} ${TAILWIND_CLASSES.input.placeholder}`} />

// Inline style with color constant:
// <div style={{ backgroundColor: PRIMARY.cyan }}>Content</div>

// Dynamic opacity:
// <div style={{ backgroundColor: withOpacity(PRIMARY.cyan, 0.5) }}>Content</div>

// Status color:
// <span className={getStatusClass(status)}>{label}</span>

// ============================================================================
// MIGRATION CHECKLIST
// ============================================================================

// When migrating hardcoded colors to constants:
// 
// 1. Find hardcoded color:     className="bg-[#00F5C6]"
// 2. Import constant:           import { PRIMARY } from '@/src/lib/colors'
// 3. Replace with constant:     className="bg-[#00F5C6]"  (use directly)
// 4. Or use pre-built class:    className={TAILWIND_CLASSES.buttons.secondary}
// 5. Test component:            npm run dev
//
// Pro tip: Use pre-built classes when available!

// ============================================================================
// FILE LOCATIONS
// ============================================================================

// Active constants:     src/lib/colors.ts
// Full documentation:   COLOR_REGISTRY.md
// Developer guide:      COLOR_CONSTANTS_GUIDE.md
// File overview:        COLOR_SYSTEM_OVERVIEW.md
// This file:            COLOR_CONSTANTS_QUICK_REF.js (this file!)

// ============================================================================
// NEED HELP?
// ============================================================================

// 1. Can't find a color?
//    → Check COLOR_CONSTANTS_GUIDE.md for examples
//
// 2. Want to change colors site-wide?
//    → Update src/lib/colors.ts, all components auto-update
//
// 3. Need design system info?
//    → Read COLOR_REGISTRY.md
//
// 4. Not sure which file to edit?
//    → Read COLOR_SYSTEM_OVERVIEW.md

// ============================================================================
// END OF QUICK REFERENCE
// ============================================================================
