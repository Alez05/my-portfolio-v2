export type TButtonConfig = {
  label?: string
  variant?: string
  backgroundColor?: string
  link?: string 
  border?: string
  borderRadius?: string
  color?: string
  onClick?: () => void
}

export type TButtonGroup = {
  buttons: TButtonConfig | TButtonConfig[]
  children?: React.ReactNode
}
