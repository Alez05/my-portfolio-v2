import { getStil } from '@/libs/util';
import './flexbox.css';

const FlexBox = ({
  display = 'unset',
  children,
  alignItems = 'unset',
  justifyContent = 'unset',
  alignContent = 'unset',
  position = 'unset',
}: TFlexBox) => {
  const stil = getStil({
    display,
    alignItems,
    justifyContent,
    alignContent,
    position,
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
