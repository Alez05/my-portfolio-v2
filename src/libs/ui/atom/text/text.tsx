import './text.css'
import { getStil } from '@/libs/util'
import { TText } from '@/libs/type'

const Text = ({
  color = '',
  fontSize = 16,
  fontWeight = '',
  lineHeight = 0,
  as = 'h1',
  children,
  textDecoration = '',
  letterSpacing = '',
  href,
  textAlign = '',
  title,
  width = '',
  height = '',
}: TText) => {
  const stil = getStil({
    color,
    fontSize,
    as,
    lineHeight,
    letterSpacing,
    textDecoration,
    textAlign,
    fontWeight,
    width,
    height,
  }) as React.CSSProperties

  const Element = as

  return (
    <Element className="text" style={stil} title={title} href={href}>
      {children}
    </Element>
  )
}

export default Text
