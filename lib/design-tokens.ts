// Centralized design tokens derived from provided Figma export & element inspection
// Use these tokens instead of ad-hoc hex values for consistency.

export const COLORS = {
  background: '#0A0F1C',
  white: '#FFFFFF',
  primaryStart: '#00F5C6',
  primaryEnd: '#00AEEF',
  accentBlue: '#0066CC',
  purpleStart: '#9333EA',
  purpleEnd: '#6B21A8',
  emeraldStart: '#10B981',
  emeraldEnd: '#059669',
  orangeStart: '#FF8A00', // approximation; refine with exact token if provided
  orangeEnd: '#FF5F00',   // approximation
  borderTranslucent: 'rgba(255,255,255,0.10)',
  panelTranslucent: 'rgba(255,255,255,0.04)'
};

export const RADII = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.625rem', // matches --radius from design variables (~10px)
  xl: '1rem'
};

export const SPACING = {
  baseUnit: 4, // --spacing = .25rem = 4px
  multiple: (n: number) => `${n * 0.25}rem`,
};

export const TYPOGRAPHY = {
  h1: { size: '2.25rem', weight: 700 },
  h2: { size: '1.875rem', weight: 600 },
  h3: { size: '1.25rem', weight: 600 },
  body: { size: '0.875rem', weight: 400 },
};

// Gradient helper
export const gradients = {
  primary: `linear-gradient(135deg, ${COLORS.primaryStart} 0%, ${COLORS.primaryEnd} 100%)`,
};

export type DesignTokens = typeof COLORS & typeof RADII & typeof SPACING & typeof TYPOGRAPHY;
