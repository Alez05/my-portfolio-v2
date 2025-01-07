import { getStil } from '@/libs/util'
import { TLink } from './link.type'
import './link.css'

const Link = ({
  children,
  href,
  label,
  onClick,
  rel,
  target,
  title,
  color = '',
  backgroundColor = '',
  border = '',
  borderRadius = '',
  gap = 0,
  padding = 0,
  fontSize = 0,
  width = '',
  height = '',
  cursor = 'pointer',
  boxShadow = '',
  fontWeight = '',
  className,
}: TLink) => {
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
    fontWeight,
  }) as React.CSSProperties

  const isExternalLink = /^https?:\/\//.test(href)
  const adjustedRel =
    target === '_blank' && isExternalLink ? 'noopener noreferrer' : rel

  return (
    <a
      href={href}
      className={`link ${className || ''}`}
      style={stil}
      aria-label={label}
      rel={adjustedRel}
      target={target}
      title={title}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Link
