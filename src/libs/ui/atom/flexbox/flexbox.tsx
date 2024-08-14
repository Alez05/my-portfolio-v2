import { getStil } from '@/libs/util';
import './flexbox.css';

const FlexBox = ({
  display = 'unset',
  children,
  alignItems = 'unset',
  justifyContent = 'unset',
  alignContent = 'unset',
  position = 'unset',
  padding = 0,
  gap = 0,
  fontSize = 16,
  width = 'unset',
  height = 'unset',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  borderRadius = 0,
  borderRadiusUnit = 'px',
  border = 'unset',
  color = 'unset',
  bgc = 'unset',
  cursor = 'unset',
  inset = 0,
  float = 'unset',
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
