import { TAspect } from '@/libs/type'

const loadingList = ['lazy', 'eager'] as const
type TLoading = (typeof loadingList)[number]

export type TImage = {
  srcset?: string
  aspect?: TAspect
  width?: string
  height?: string
  alt?: string
  label?: string
  labelledBy?: string
  title?: string
  src?: string
  loading?: TLoading
  testId?: string
}
