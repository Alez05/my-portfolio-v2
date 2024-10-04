import { getStil } from '@/libs/util'
import { iconList } from '@/libs/type'
import { TIcon } from './icon.type'
import './icon.css'

const Icon = ({
  width = '',
  height = '',
  backgroundColor = '',
  fontSize = 16,
  borderRadius = '',
  icon,
  color = '',
  boxShadow = '',
}: TIcon) => {
  const stil = getStil({
    width,
    height,
    backgroundColor,
    fontSize,
    borderRadius,
    color,
    boxShadow,
  }) as React.CSSProperties

  const iconChart = icon
    ? String.fromCharCode(parseInt(iconList[icon].replace('\\', ''), 16))
    : null

  return (
    <span className="icon" style={stil}>
      {iconChart}
    </span>
  )
}

export default Icon
