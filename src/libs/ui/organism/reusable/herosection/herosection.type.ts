import { TImage } from '@/libs/type'
import { TLinkConfig } from '@/libs/ui/molecule/linkgroup/linkgroup.type'

export type THeroSection = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  imageStyles?: TImage
  links?: TLinkConfig[]
}
