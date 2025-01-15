export type TLink = {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
  title?: string
  label?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  // costum
  color?: string
  border?: string
  borderRadius?: string
  gap?: number | number[]
  padding?: number | number[]
  fontSize?: number
  width?: string
  height?: string
  cursor?: string
  boxShadow?: string
  className?: string
  backgroundColor?: string
  fontWeight?: number | string
}
