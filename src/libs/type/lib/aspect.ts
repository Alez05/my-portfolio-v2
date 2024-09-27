export const aspectList = [
  'auto', // Auto-adjust based on content
  '1 / 1', // Square,
  '1 / 0.5', // Very tall (portrait style)
  '2 / 1', // Wide banner (landscape)
  '2 / 3', // Tall (portrait)
  '3 / 2', // Standard photo (landscape)
  '4 / 3', // Classic video/TV ratio
  '4 / 5', // Near-square, often in prints
  '9 / 16', // Social media stories (portrait)
  '16 / 9', // Standard widescreen video
  '21 / 9', // Ultra-wide, cinematic
  '29 / 9', // Extra-wide, panoramic
] as const

export type TAspect = (typeof aspectList)[number]
