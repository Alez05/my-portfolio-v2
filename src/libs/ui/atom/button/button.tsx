import type { TButton } from './button.type';
import './button.css';
import { getStil } from '@/libs/util';

const Button = ({ disabled, padding = 10, fontSize = 16 }: TButton) => {
  const stil = getStil({ padding, fontSize }) as React.CSSProperties;

  return (
    <button
      disabled={disabled}
      className='button'
      style={stil}
    >
      Submit
    </button>
  );
};

export default Button;
