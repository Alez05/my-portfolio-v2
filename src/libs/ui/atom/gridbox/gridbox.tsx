import './gridbox.css';
import { getStil } from '@/libs/util';

const GridBox = ({
  children,
  gridTemplateColumns = '',
  gridTemplateRows = '',
  gap = 0,
  justifyItems = '',
  alignContent = '',
  alignItems = '',
  justifyContent = '',
  gridAutoFlow = '',
  gridAutoColumns = '',
  gridAutoRows = '',
  placeContent = '',
  placeItems = '',
}: TGridBox) => {
  const stil = getStil({
    gridTemplateColumns,
    gridTemplateRows,
    gap,
    justifyItems,
    alignContent,
    alignItems,
    justifyContent,
    gridAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    placeContent,
    placeItems,
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
