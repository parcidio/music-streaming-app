/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */

// import { scaler } from "#utils/helpers"

// export const spacing = {
//   micro: scaler(2),
//   tiny: scaler(4),
//   extraSmall: scaler(8),
//   small: scaler(12),
//   medium: scaler(16),
//   large: scaler(24),
//   extraLarge: scaler(32),
//   huge: scaler(48),
//   massive: scaler(64),
// } as const

export const spacing = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
} as const

export type Spacing = keyof typeof spacing
