/**
 * Color Constants - EvalAI Admin Dashboard
 * 
 * These constants define all colors used in the application.
 * Use these values directly in styles, Tailwind classes, and inline styles.
 * 
 * NOTE: Tailwind arbitrary values (e.g., bg-[#00F5C6]) cannot use template literals.
 * Use the hex values directly in className strings.
 */

// ============================================================================
// PRIMARY BRANDING COLORS
// ============================================================================

export const PRIMARY = {
  cyan: '#00F5C6',      // Primary accent color
  blue: '#00AEEF',      // Secondary primary color
  darkBlue: '#0066CC',  // Dark blue for depth
} as const;

// ============================================================================
// BACKGROUND COLORS
// ============================================================================

export const BACKGROUND = {
  dark: '#0A0F1C',      // Main dark background
  glass: 'rgba(255, 255, 255, 0.04)',  // Glass effect background
  glassHover: 'rgba(255, 255, 255, 0.05)',
  overlay5: 'rgba(255, 255, 255, 0.05)',
  overlay20: 'rgba(255, 255, 255, 0.20)',
} as const;

// ============================================================================
// TEXT COLORS
// ============================================================================

export const TEXT = {
  primary: '#FFFFFF',       // Main text (white)
  secondary: '#B0B6C1',     // Muted gray text
  muted: '#999999',         // Even more muted
} as const;

// ============================================================================
// BORDER COLORS
// ============================================================================

export const BORDER = {
  light: 'rgba(255, 255, 255, 0.05)',    // white/5
  default: 'rgba(255, 255, 255, 0.10)',  // white/10
  hover: 'rgba(255, 255, 255, 0.15)',    // white/15
  focus: 'rgba(255, 255, 255, 0.20)',    // white/20
} as const;

// ============================================================================
// STATUS & SEMANTIC COLORS
// ============================================================================

export const STATUS = {
  success: '#10B981',
  successDark: '#059669',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#00AEEF',
  pending: '#F59E0B',
  active: '#00F5C6',
  inactive: '#B0B6C1',
} as const;

// ============================================================================
// GRADIENT VALUES (For style props, not Tailwind classes)
// ============================================================================

export const GRADIENTS = {
  primary: `linear-gradient(to right, ${PRIMARY.cyan}, ${PRIMARY.blue})`,
  primaryDark: `linear-gradient(to right, ${PRIMARY.blue}, ${PRIMARY.darkBlue})`,
  primaryBR: `linear-gradient(to bottom right, ${PRIMARY.cyan}, ${PRIMARY.blue})`,
} as const;

// ============================================================================
// OPACITY VALUES
// ============================================================================

export const OPACITY = {
  5: 0.05,
  10: 0.1,
  15: 0.15,
  20: 0.2,
  50: 0.5,
  80: 0.8,
  90: 0.9,
} as const;

// ============================================================================
// TAILWIND CLASS STRINGS (Pre-built for components)
// ============================================================================

export const TAILWIND_CLASSES = {
  // Button styles
  buttons: {
    primary: 'border border-white/10 text-white hover:bg-white/5',
    secondary: 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90',
    ghost: 'text-[#B0B6C1] hover:text-white hover:bg-white/5',
    outline: 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C] hover:opacity-90',
  },
  
  // Card styles
  card: {
    base: 'bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-white/10',
    hover: 'hover:border-[#00F5C6]/30 transition-all',
  },
  
  // Text styles
  text: {
    primary: 'text-white',
    secondary: 'text-[#B0B6C1]',
    muted: 'text-[#999999]',
  },
  
  // Status styles
  status: {
    success: 'text-[#10B981]',
    error: 'text-[#EF4444]',
    warning: 'text-[#F59E0B]',
    info: 'text-[#00AEEF]',
  },
  
  // Background styles
  background: {
    dark: 'bg-[#0A0F1C]',
    glass: 'bg-[rgba(255,255,255,0.04)]',
  },
  
  // Input styles
  input: {
    base: 'bg-white/5 border border-white/10 rounded-md text-white',
    focus: 'focus:border-[#00F5C6] focus:ring-[#00F5C6]/20 focus:ring-[3px]',
    placeholder: 'placeholder:text-[#B0B6C1]',
  },
  
  // Progress bar styles
  progress: {
    bar: 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF]',
    bg: 'bg-[#00F5C6]/20',
  },
  
  // Icon background styles
  iconBg: {
    primary: 'bg-gradient-to-br from-[#00F5C6] to-[#00AEEF]',
    alternative: 'bg-gradient-to-br from-[#00AEEF] to-[#0066CC]',
  },
  
  // Badge styles
  badge: {
    cyan: 'border-[#00F5C6]/50 text-[#00F5C6] bg-[#00F5C6]/10',
    blue: 'bg-[#00AEEF]/20 text-[#00AEEF] border-[#00AEEF]/30',
    gradient: 'bg-gradient-to-r from-[#00F5C6] to-[#00AEEF] text-[#0A0F1C]',
    muted: 'bg-white/10 text-[#B0B6C1] border-white/10',
  },
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Apply opacity to a hex color
 * @param color - Hex color code (e.g., '#00F5C6')
 * @param opacity - Opacity value 0-1 (e.g., 0.5)
 * @returns RGBA color string
 */
export function withOpacity(color: string, opacity: number): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get status color by type
 * @param status - Status type
 * @returns Color hex value
 */
export function getStatusColor(
  status: 'success' | 'warning' | 'error' | 'info' | 'active' | 'inactive'
): string {
  return STATUS[status];
}

/**
 * Get Tailwind button classes
 * @param variant - Button variant type
 * @returns Tailwind class string
 */
export function getButtonClass(
  variant: 'primary' | 'secondary' | 'ghost' | 'outline' = 'primary'
): string {
  return TAILWIND_CLASSES.buttons[variant];
}

/**
 * Get Tailwind card classes
 * @param includeHover - Include hover state classes
 * @returns Tailwind class string
 */
export function getCardClass(includeHover = true): string {
  const base = TAILWIND_CLASSES.card.base;
  return includeHover ? `${base} ${TAILWIND_CLASSES.card.hover}` : base;
}

/**
 * Get Tailwind text classes
 * @param variant - Text variant type
 * @returns Tailwind class string
 */
export function getTextClass(
  variant: 'primary' | 'secondary' | 'muted' = 'primary'
): string {
  return TAILWIND_CLASSES.text[variant];
}

/**
 * Get Tailwind status classes
 * @param status - Status type
 * @returns Tailwind class string
 */
export function getStatusClass(
  status: 'success' | 'error' | 'warning' | 'info'
): string {
  return TAILWIND_CLASSES.status[status];
}

// ============================================================================
// CSS VARIABLE EXPORT
// ============================================================================

/**
 * CSS variables string for use in global styles
 * Add to globals.css or use in style tags
 */
export const cssVariables = `
:root {
  /* Primary Colors */
  --color-primary-cyan: ${PRIMARY.cyan};
  --color-primary-blue: ${PRIMARY.blue};
  --color-primary-dark-blue: ${PRIMARY.darkBlue};
  
  /* Background */
  --color-bg-dark: ${BACKGROUND.dark};
  --color-text-primary: ${TEXT.primary};
  --color-text-secondary: ${TEXT.secondary};
  
  /* Status */
  --color-success: ${STATUS.success};
  --color-warning: ${STATUS.warning};
  --color-error: ${STATUS.error};
  --color-info: ${STATUS.info};
}
`;

