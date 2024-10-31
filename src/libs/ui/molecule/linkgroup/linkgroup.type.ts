export type TLinkConfig = {
  href: string
  target?: string
  rel?: string
  title?: string
  text?: string
  color?: string
  variant?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  width?: string
  height?: string
  boxShadow?: string
  id?: string
  fontSize?: number
}

export type TLinkGroup = {
  links: TLinkConfig | TLinkConfig[]
}
