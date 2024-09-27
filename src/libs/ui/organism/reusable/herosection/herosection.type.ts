import { TButtonConfig } from '@/libs/ui/molecule/buttongroup/buttongroup.type'

export type THeroSection = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  buttons: TButtonConfig[]
  buttonAction?: () => void
}
