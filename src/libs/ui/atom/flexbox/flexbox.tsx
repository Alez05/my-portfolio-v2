import { getStil } from '@/libs/util';
import './flexbox.css';

const FlexBox = ({
  display = '',
  children,
  alignItems = '',
  justifyContent = '',
  alignContent = '',
  position = '',
  padding = 0,
  gap = 0,
  fontSize = '',
  width = '',
  height = '',
  flexDirection = '',
  flexWrap = '',
  borderRadius = 0,
  borderRadiusUnit = 'px',
  border = '',
  color = '',
  bgc = '',
  cursor = '',
  inset = '',
  float = '',
  justifyItems = '',
}: TFlexBox) => {
  const stil = getStil({
    display,
    alignItems,
    justifyContent,
    alignContent,
    position,
    padding,
    gap,
    fontSize,
    width,
    height,
    flexDirection,
    flexWrap,
    borderRadius,
    borderRadiusUnit,
    border,
    color,
    bgc,
    cursor,
    inset,
    float,
    justifyItems,
  }) as React.CSSProperties;
  return (
    <div
      style={stil}
      className='flexbox'
    >
      {children}
    </div>
  );
};

export default FlexBox;
