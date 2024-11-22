export type TFlexBox = {
  // Costum properites
  children?: React.ReactNode
  display?: string
  alignItems?: string
  alignContent?: string
  justifyContent?: string
  justifyItems?: string
  position?: string
  padding?: string | number | number[]
  gap?: number | number[]
  fontSize?: number | string
  width?: string
  height?: string
  flexDirection?: string
  flexWrap?: string
  borderRadius?: number | number[] | string
  borderRadiusUnit?: 'px' | '%'
  border?: string
  color?: string
  backgroundColor?: string
  cursor?: string
  inset?: number | number[] | string
  float?: string
  zIndex?: number
  boxShadow?: string
  as?: keyof JSX.IntrinsicElements
  margin?: number | string
  top?: number | string
  bottom?: number | string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}
