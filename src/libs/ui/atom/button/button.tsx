import type { TButton } from './button.type';
import './button.css';
import { getStil } from '@/libs/util';

const Button = ({
  disabled,
  padding = 10,
  fontSize = 16,
  children,
  type = 'button',
  
}: TButton) => {
  const stil = getStil({ padding, fontSize, type }) as React.CSSProperties;

  return (
    <button
      disabled={disabled}
      className='button'
      style={stil}
    >
      {children}
    </button>
  );
};

export default Button;
