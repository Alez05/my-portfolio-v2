import { TAspect } from '@/libs/type'

const loadingList = ['lazy', 'eager'] as const
type TLoading = (typeof loadingList)[number]

export type TImage = {
  srcset?: string
  sizes?: string
  loading?: TLoading
  src?: string
  alt?: string
  label?: string
  labelledBy?: string
  aspect?: TAspect
  width?: string
  height?: string
  title?: string
  testId?: string
  borderRadius?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  objectPosition?: string
  placeholder?: string  
  role?: string //not sure how to use this atm
}
