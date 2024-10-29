import type { TButton } from '@/libs/type'
import './button.css'
import { getStil } from '@/libs/util'

const Button = ({
  children,
  disabled,
  padding = 10,
  fontSize = 16,
  type = 'button',
  color = '',
  backgroundColor = '',
  width = '',
  height = '',
  cursor = '',
  border = '',
  borderRadius = '',
  gap = 0,
  boxShadow = '',
  variant = '',
  onClick,
}: TButton) => {
  const stil = getStil({
    padding,
    fontSize,
    color,
    backgroundColor,
    width,
    height,
    cursor,
    border,
    borderRadius,
    gap,
    boxShadow,
  }) as React.CSSProperties
  return (
    <button
      type={type}
      disabled={disabled}
      className="button"
      style={stil}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
