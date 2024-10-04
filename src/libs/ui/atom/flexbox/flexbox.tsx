import { getStil } from '@/libs/util'
import './flexbox.css'
import { TFlexBox } from './flexbox.type'

const FlexBox = ({
  as: Element = 'div',
  display = '',
  children,
  alignItems = '',
  justifyContent = '',
  alignContent = '',
  position = '',
  padding = 0,
  gap = 0,
  fontSize = '',
  width = '',
  height = '',
  flexDirection = '',
  flexWrap = '',
  borderRadius = 0,
  borderRadiusUnit = 'px',
  border = '',
  color = '',
  backgroundColor = '',
  cursor = '',
  inset = '',
  float = '',
  justifyItems = '',
  zIndex = 0,
  boxShadow = '',
  margin = 0,
  bottom = '',
  top = '',
}: TFlexBox) => {
  const stil = getStil({
    display,
    alignItems,
    justifyContent,
    alignContent,
    position,
    padding,
    gap,
    fontSize,
    width,
    height,
    flexDirection,
    flexWrap,
    borderRadius,
    borderRadiusUnit,
    border,
    color,
    backgroundColor,
    cursor,
    inset,
    float,
    justifyItems,
    zIndex,
    boxShadow,
    margin,
    bottom,
    top,
  }) as React.CSSProperties
  return (
    <Element style={stil} className="flexbox">
      {children}
    </Element>
  )
}

export default FlexBox
