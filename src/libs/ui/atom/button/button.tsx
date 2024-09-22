import type { TButton } from './button.type';
import './button.css';
import { getStil } from '@/libs/util';

const Button = ({
  disabled,
  padding = 10,
  fontSize = 16,
  children,
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
  }) as React.CSSProperties;
  return (
    <button
      type={type}
      disabled={disabled}
      className='button'
      style={stil}
    >
      {children}
    </button>
  );
};

export default Button;
