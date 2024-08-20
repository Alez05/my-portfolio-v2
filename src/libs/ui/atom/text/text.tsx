import './text.css';
import { getStil } from '@/libs/util';
import { TText } from './text.type';

const Text = ({
  color = '',
  fontSize = 16,
  fontWeight = 400,
  lineHeight = 0,
  as = 'h1',
  children,
  textDecoration = false,
  elipsis = false,
  href = '',
  letterSpacing = 0,
  textAlign = '',
  title = '',
  underline = false,
}: TText) => {
  const stil = getStil({
    color,
    fontSize,
    as,
    lineHeight,
    textDecoration,
    href,
    letterSpacing,
    textAlign,
    elipsis,
    title,
    underline,
    fontWeight,
  }) as React.CSSProperties;
  return (
    <h1
      className='text'
      style={stil}
    >
      {children}
    </h1>
  );
};

export default Text;
