import './gridbox.css';
import { getStil } from '@/libs/util';

const GridBox = ({
  display = '',
  children,
  gridTemplateColumns = '',
  gridTemplateRows = '',
  gridGap = 0,
}: TGridBox) => {
  const stil = getStil({
    display,
    gtc: gridTemplateColumns,
    gtr: gridTemplateRows,
    gridGap,
  }) as React.CSSProperties;
  return (
    <div
      className='gridbox'
      style={stil}
    >
      {children}
    </div>
  );
};
export default GridBox;
