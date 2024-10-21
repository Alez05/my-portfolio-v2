import { TImage } from '@/libs/type'
import { TButtonConfig } from '@/libs/ui/molecule/buttongroup/buttongroup.type'

export type THeroSection = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  imageStyles?: TImage
  buttons: TButtonConfig[]
  buttonAction?: () => void
}
