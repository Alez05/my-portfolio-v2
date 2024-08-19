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
  backgroundColor = 'red',
}: TButton) => {
  const stil = getStil({
    padding,
    fontSize,
    color,
    backgroundColor,
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
