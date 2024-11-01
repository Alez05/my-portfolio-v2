import { TImage } from '@/libs/type'
import { TLinkConfig } from '@/libs/ui/molecule/linkgroup/linkgroup.type'

export type TIntroBannerConfig = {
  styleConfig?: {
    color?: string
    width?: string
    height?: string
    padding?: number | number[]
    fontSize?: number
    lineHeight?: string
    fontWeight?: string
    gap?: number | number[]
    cursor?: string
  }
}

export type TIntroBanner = {
  title?: string
  subtitle?: string
  description?: string
  imageUrl?: string
  imageAlt?: string
  imageStyles?: TImage
  links?: TLinkConfig[]
}
