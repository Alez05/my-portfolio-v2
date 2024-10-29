export type TLink = {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
  title?: string
  label?: string
  onClick?: () => void
  // costum
  color?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  gap?: number | number[]
  padding?: number | number[]
  fontSize?: number
  width?: string
  height?: string
  cursor?: string
  boxShadow?: string
}
