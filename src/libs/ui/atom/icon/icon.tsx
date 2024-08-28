import { getStil } from '@/libs/util';
import { TIcon } from './icon.type';
import './icon.css';

const Icon = ({
  width = '',
  height = '',
  backgroundColor = '',
  fontSize = 16,
  borderRadius = '',
  round = false,
  icon,
}: TIcon) => {
  const stil = getStil({
    width,
    height,
    backgroundColor,
    fontSize,
    borderRadius,
  }) as React.CSSProperties;

  return (
    <span
      className='icon'
      style={stil}
    ></span>
  );
};

export default Icon;
